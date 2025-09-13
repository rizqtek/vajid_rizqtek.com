import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FloatingChat from '../components/FloatingChat';
import Contact from '../components/Contact';

const ContactPage = () => (
  <>
    <Header />
    <main className="pt-10 bg-gradient-to-b from-white to-emerald-50">
      <div className="max-w-7xl mx-auto px-4">
        <Contact />
      </div>
    </main>
    <Footer />
    <FloatingChat />
  </>
);

export default ContactPage;
