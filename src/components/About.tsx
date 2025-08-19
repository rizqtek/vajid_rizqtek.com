import React from 'react';
import { Heart, Shield, Sparkles, Users } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Heart,
      title: 'Built on Islamic Values',
      description: 'Every project is grounded in trust, rizq, and barakah, ensuring ethical solutions.'
    },
    {
      icon: Shield,
      title: 'Expert-Backed Solutions',
      description: 'Real-world analytics, automation, and coding expertise you can rely on.'
    },
    {
      icon: Sparkles,
      title: 'Spiritual + Technical Balance',
      description: 'Designed for the modern ummah seeking harmony between faith and technology.'
    },
    {
      icon: Users,
      title: 'Affordable & Accessible',
      description: 'Special packages for students, freelancers, and MSMEs to democratize quality tech.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-slate-50 via-white to-emerald-50 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-emerald-100/20 via-transparent to-transparent"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4 tracking-tight">Why Choose RizqTek?</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto font-light">
            We're committed to ethical tech that doesn't compromise faith, delivering solutions 
            that honor both spiritual values and technical excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {values.map((value, index) => (
            <div 
              key={index}
              className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-white/20 hover:-translate-y-1"
            >
              <div className="flex items-start space-x-4">
                <div className="bg-gradient-to-br from-emerald-100 to-teal-100 p-3 rounded-full flex-shrink-0 shadow-lg">
                  <value.icon className="h-6 w-6 text-emerald-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3 tracking-tight">{value.title}</h3>
                  <p className="text-slate-600 leading-relaxed font-light">{value.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-white to-slate-50 rounded-3xl p-8 md:p-12 shadow-2xl border border-white/20 backdrop-blur-sm">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-slate-900 mb-6 tracking-tight">Our Mission</h3>
            <p className="text-lg text-slate-600 max-w-4xl mx-auto leading-relaxed font-light">
              At RizqTek, we believe technology should serve humanity while honoring divine guidance. 
              Our mission is to bridge the gap between cutting-edge technology and Islamic principles, 
              creating solutions that bring <strong>barakah</strong> to your business and 
              <strong>rizq</strong> to your endeavors. We're not just building software – we're 
              building a future where technology and faith work in perfect harmony.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
