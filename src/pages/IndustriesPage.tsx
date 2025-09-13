import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FloatingChat from '../components/FloatingChat';
import Industries from '../components/Industries';

const IndustriesPage = () => (
  <>
    <Header />
    <main className="py-10 bg-gradient-to-b from-white to-emerald-50">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-slate-900 mb-6">Industries</h1>
        <Industries />
      </div>
    </main>
    <Footer />
    <FloatingChat />
  </>
);

export default IndustriesPage;
