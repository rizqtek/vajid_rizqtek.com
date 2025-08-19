import React, { useState } from 'react';
import { Mail, CheckCircle, AlertCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { newsletterService } from '../services/newsletterService';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await newsletterService.subscribe(email);
      setStatus('success');
      setMessage(response.message);
      setEmail('');
    } catch (error: any) {
      setStatus('error');
      setMessage(error.message || 'Failed to subscribe. Please try again.');
    }

    setTimeout(() => {
      setStatus('idle');
      setMessage('');
    }, 5000);
  };

  return (
    <section className="py-20 bg-gradient-to-r from-emerald-600 via-teal-600 to-blue-600 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent"></div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative z-10"
        >
          <div className="bg-white/90 backdrop-blur-sm p-3 rounded-full w-fit mx-auto mb-6 shadow-xl">
            <Mail className="h-8 w-8 text-emerald-600" />
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Stay Updated with RizqTek
          </h2>
          
          <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto font-light">
            Get the latest insights on ethical tech, Islamic business practices, and exclusive 
            resources delivered to your inbox with barakah.
          </p>

          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                disabled={status === 'loading'}
                className="flex-1 px-6 py-4 rounded-full text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-4 focus:ring-white focus:ring-opacity-30 disabled:opacity-50 backdrop-blur-sm bg-white/90 shadow-lg"
              />
              
              <button
                type="submit"
                disabled={status === 'loading' || !email}
                className="bg-gradient-to-r from-amber-500 to-orange-500 text-slate-900 px-8 py-4 rounded-full font-semibold hover:from-amber-400 hover:to-orange-400 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl"
              >
                {status === 'loading' ? (
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-slate-900"></div>
                ) : (
                  <span>Subscribe</span>
                )}
              </button>
            </div>

            {/* Status Messages */}
            {message && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`mt-4 p-4 rounded-lg flex items-center space-x-2 ${
                  status === 'success' 
                    ? 'bg-emerald-100 text-emerald-800' 
                    : 'bg-red-100 text-red-800'
                }`}
              >
                {status === 'success' ? (
                  <CheckCircle className="h-5 w-5" />
                ) : (
                  <AlertCircle className="h-5 w-5" />
                )}
                <span>{message}</span>
              </motion.div>
            )}
          </form>

          <p className="text-emerald-100 text-sm mt-6 font-light">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Newsletter;
