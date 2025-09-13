import React, { useEffect, useMemo, useRef, useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { io, Socket } from 'socket.io-client';

const FloatingChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState('Guest');
  const [message, setMessage] = useState('');
  const listRef = useRef<HTMLDivElement | null>(null);
  const [messages, setMessages] = useState<Array<{ id: string; name: string; text: string; timestamp: string }>>([]);
  const [typingUsers, setTypingUsers] = useState<Record<string, number>>({});
  useEffect(() => {
    const t = setInterval(() => {
      const now = Date.now();
      setTypingUsers((prev) => Object.fromEntries(Object.entries(prev).filter(([, until]) => until > now)));
    }, 1000);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior: 'smooth' });
  }, [messages, isOpen]);
  const socket: Socket | null = useMemo(() => {
    try {
      const base = window.location.origin;
      const serverUrl = import.meta.env.VITE_SERVER_URL || (base.includes('localhost') ? 'http://localhost:5000' : base);
      return io(serverUrl, { transports: ['websocket'] });
    } catch {
      return null;
    }
  }, []);

  useEffect(() => {
    if (!socket) return;
    socket.on('connect', () => {
      // connected
    });
    socket.on('chat:history', (history) => {
      setMessages(history);
    });
    socket.on('chat:message', (message) => {
      setMessages((prev) => [...prev, message]);
    });
    return () => {
      socket.disconnect();
    };
  }, [socket]);

  const send = () => {
    if (!socket) return;
    const text = message.trim();
    if (!text) return;
    socket.emit('chat:message', { name: name || 'Guest', text });
    setMessage('');
  };

  const emitTyping = () => {
    if (!socket) return;
    socket.emit('chat:typing', { name: name || 'Guest', until: Date.now() + 3000 });
  };

  return (
    <>
      {/* Floating Button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 bg-green-600 text-white p-4 rounded-full shadow-lg hover:bg-green-700 transition-colors"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1 }}
      >
        <MessageCircle className="h-6 w-6" />
      </motion.button>

      {/* Chat Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-2xl p-6 w-full max-w-md shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-gray-900">Live Chat</h3>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
              <div className="space-y-3">
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name (optional)"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
                <div ref={listRef} className="max-h-48 overflow-y-auto bg-gray-50 rounded-lg p-3 border">
                  {messages.length === 0 ? (
                    <div className="text-sm text-gray-500">Say salam 👋 — we usually reply quickly.</div>
                  ) : (
                    messages.map((m) => (
                      <div key={m.id} className="mb-2">
                        <div className="text-xs text-gray-500">{new Date(m.timestamp).toLocaleTimeString()}</div>
                        <div className="text-sm"><span className="font-semibold">{m.name}:</span> {m.text}</div>
                      </div>
                    ))
                  )}
                </div>
                <div className="text-xs text-gray-500 min-h-[1rem]">
                  {Object.keys(typingUsers).length > 0 && 'Someone is typing…'}
                </div>
                <div className="flex items-center space-x-2">
                  <input
                    type="text"
                    value={message}
                    onChange={(e) => { setMessage(e.target.value); emitTyping(); }}
                    onKeyDown={(e) => { if (e.key === 'Enter') send(); }}
                    placeholder="Type your message"
                    className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                  <button
                    onClick={send}
                    className="bg-green-600 text-white px-4 py-3 rounded-lg hover:bg-green-700 transition-colors"
                  >
                    <Send className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default FloatingChat;