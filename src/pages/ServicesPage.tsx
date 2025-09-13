import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FloatingChat from '../components/FloatingChat';
import { Link } from 'react-router-dom';

const ServicesPage = () => {
  const services = [
    { name: 'Data Analytics', path: '/services/data-analytics' },
    { name: 'Automation Tools', path: '/services/automation-tools' },
    { name: 'Web Development', path: '/services/web-development' },
    { name: 'Website SEO', path: '/services/website-seo' },
    { name: 'AI Career Tools', path: '/services/ai-career-tools' },
    { name: 'SaaS Solutions', path: '/services/saas-solutions' },
  ];

  return (
    <>
      <Header />
      <main className="py-20 bg-gradient-to-b from-white to-emerald-50">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-slate-900 mb-8">Our Services</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((s) => (
              <Link key={s.path} to={s.path} className="p-6 bg-white rounded-2xl shadow border hover:shadow-lg transition">
                <h2 className="text-2xl font-semibold text-slate-900">{s.name}</h2>
                <p className="text-slate-600 mt-2">Learn more about our {s.name} offering.</p>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
      <FloatingChat />
    </>
  );
};

export default ServicesPage;
