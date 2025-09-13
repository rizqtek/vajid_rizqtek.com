import Header from '../../components/Header';
import Footer from '../../components/Footer';
import FloatingChat from '../../components/FloatingChat';

const SaaSSolutionsPage = () => (
  <>
    <Header />
    <main className="py-16 bg-gradient-to-b from-white to-emerald-50">
      <div className="max-w-5xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">SaaS Solutions</h1>
        <p className="text-slate-600 text-lg">Custom SaaS tools and end-to-end platforms tailored to your business.</p>
      </div>
    </main>
    <Footer />
    <FloatingChat />
  </>
);

export default SaaSSolutionsPage;
