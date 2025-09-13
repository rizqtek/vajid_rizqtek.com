import Header from '../../components/Header';
import Footer from '../../components/Footer';
import FloatingChat from '../../components/FloatingChat';

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <section className="mb-12">
    <h2 className="text-2xl font-bold text-slate-900 mb-4">{title}</h2>
    <div className="text-slate-700 leading-relaxed">{children}</div>
  </section>
);

const Card = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="bg-white rounded-2xl border p-6 shadow-sm">
    <h3 className="text-xl font-semibold text-slate-900 mb-2">{title}</h3>
    <div className="text-slate-700">{children}</div>
  </div>
);

const WebDevelopmentPage = () => (
  <>
    <Header />
    <main className="py-16 bg-gradient-to-b from-white to-emerald-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-3">Web Development</h1>
          <p className="text-slate-600 text-lg">Modern, mobile-ready sites and apps built for performance, SEO, and accessibility.</p>
        </div>

        <Section title="Overview">
          We build fast, secure, and accessible websites and web apps tailored to your goals. From landing pages to full dashboards, we deliver clean code and maintainable systems with best practices (TypeScript, React, Vite, Tailwind, CI/CD).
        </Section>

        <Section title="Core Features">
          <div className="grid md:grid-cols-2 gap-4">
            <Card title="Performance First">Core Web Vitals optimized, image optimization, caching, and code-splitting for speed.</Card>
            <Card title="SEO & Accessibility">Semantic HTML, metadata, structured data (schema), and WCAG-friendly UI.</Card>
            <Card title="Responsive & Mobile">Pixel-perfect across breakpoints with robust layout testing.</Card>
            <Card title="Secure & Maintainable">Security headers, env segregation, API hardening, and clear documentation.</Card>
          </div>
        </Section>

        <Section title="Deliverables">
          <ul className="list-disc ml-6 space-y-2">
            <li>Design system + component library</li>
            <li>Fully responsive pages and routes</li>
            <li>Contact/lead forms with validation and spam protection</li>
            <li>Basic analytics + event tracking</li>
            <li>Deployment pipeline + handover docs</li>
          </ul>
        </Section>

        <Section title="Packages & Pricing">
          <div className="grid md:grid-cols-2 gap-6">
            <Card title="$499 — Launch Landing Page">
              1–3 sections, contact form, on-page SEO, 5-day delivery, 1 revision round.
            </Card>
            <Card title="$2,000 — Dashboard/CRM MVP">
              Auth, CRUD, dashboards, responsive UI, API integration, 2-week delivery, 2 revision rounds.
            </Card>
          </div>
        </Section>

        <Section title="FAQs">
          <div className="space-y-4">
            <Card title="How long will it take?">Most landing pages ship in 5–7 days, larger apps in 2–4 weeks depending on scope.</Card>
            <Card title="Do you handle hosting?">Yes. We can deploy to Vercel/Netlify/Render and hand over credentials or manage for you.</Card>
          </div>
        </Section>

        <div className="mt-12 p-8 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl text-white text-center">
          <h3 className="text-2xl font-bold mb-2">Ready to build?</h3>
          <p className="mb-4 opacity-90">Message us now — we’ll propose the fastest path to launch.</p>
          <a href="/contact" className="inline-block bg-white text-emerald-700 px-6 py-3 rounded-lg font-semibold">Start a Project</a>
        </div>
      </div>
    </main>
    <Footer />
    <FloatingChat />
  </>
);

export default WebDevelopmentPage;
