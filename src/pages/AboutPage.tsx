import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FloatingChat from '../components/FloatingChat';

const AboutPage = () => {
  return (
    <>
      <Header />
      <main className="py-20 bg-gradient-to-b from-white to-emerald-50">
        <div className="max-w-5xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">About Us</h1>
          <p className="text-slate-600 text-lg leading-relaxed">
            RizqTek builds ethical, high-impact technology solutions across data analytics, automation, and modern web.
            Our mission is to deliver practical results with barakah and 24/7 support.
          </p>
        </div>
      </main>
      <Footer />
      <FloatingChat />
    </>
  );
};

export default AboutPage;
