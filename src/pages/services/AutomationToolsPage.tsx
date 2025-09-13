import Header from '../../components/Header';
import Footer from '../../components/Footer';
import FloatingChat from '../../components/FloatingChat';

const AutomationToolsPage = () => (
  <>
    <Header />
    <main className="py-16 bg-gradient-to-b from-white to-emerald-50">
      <div className="max-w-5xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">Automation Tools</h1>
        <p className="text-slate-600 text-lg">Automate repetitive workflows and integrations to save time and reduce errors.</p>
      </div>
    </main>
    <Footer />
    <FloatingChat />
  </>
);

export default AutomationToolsPage;
