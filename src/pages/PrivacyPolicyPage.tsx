import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FloatingChat from '../components/FloatingChat';

const PrivacyPolicyPage = () => (
  <>
    <Header />
    <main className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-slate-900 mb-6">Privacy Policy</h1>
        <p className="text-slate-600 leading-relaxed">
          We respect your privacy. We only use your information to respond to your inquiries and improve our services.
          We do not sell your data. Contact us at hello@rizqtek.com for any privacy-related questions.
        </p>
      </div>
    </main>
    <Footer />
    <FloatingChat />
  </>
);

export default PrivacyPolicyPage;
