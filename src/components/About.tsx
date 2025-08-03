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
    <section id="about" className="py-20 bg-gradient-to-br from-blue-50 via-white to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose RizqTek?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're committed to ethical tech that doesn't compromise faith, delivering solutions 
            that honor both spiritual values and technical excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {values.map((value, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-start space-x-4">
                <div className="bg-green-100 p-3 rounded-full flex-shrink-0">
                  <value.icon className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h3>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
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