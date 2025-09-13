import React from 'react';
import { BarChart3, Zap, Code, Brain, HeadphonesIcon, CheckCircle, Clock, DollarSign } from 'lucide-react';

const Services = () => {
  const pricingCategories = [
    {
      title: 'Data Analytics & Reporting',
      description: 'Transform your data into actionable insights',
      services: [
        {
          name: 'Basic Data Cleaning & Report',
          subtitle: 'up to 10,000 records',
          price: '$199 USD',
          description: 'Get expert data cleaning and actionable summary.',
          highlight: 'First 1,000 records audit free—see results before you pay!',
          icon: BarChart3
        },
        {
          name: 'Interactive Power BI Dashboard',
          subtitle: 'your data, live KPIs',
          price: '$499 USD',
          description: '7-day delivery for startups, e-commerce, or NGOs.',
          icon: BarChart3
        }
      ]
    },
    {
      title: 'Web & App Development',
      description: 'Modern, mobile-ready solutions',
      services: [
        {
          name: 'Business Landing Page or Mini-Tool',
          subtitle: 'mobile-ready, SEO, contact form',
          price: '$499 USD',
          description: 'Go live in just 5 days, 3 design rounds included.',
          icon: Code
        },
        {
          name: 'Full Admin Dashboard or CRM MVP',
          subtitle: 'end-to-end development',
          price: '$2,000 USD',
          description: 'End-to-end development with all integrations for your business.',
          icon: Code
        },
        {
          name: 'Website SEO Setup & Optimization',
          subtitle: 'technical SEO, on-page, analytics',
          price: '$399 USD',
          description: 'Technical SEO fixes, sitemap/robots, meta tags, performance tweaks, schema basics, and Google Analytics/Search Console setup.',
          icon: Code
        }
      ]
    },
    {
      title: 'AI Automation & Workflow Bots',
      description: 'Automate your workflows with AI',
      services: [
        {
          name: 'Email Validation / Workflow Automation Bot',
          subtitle: 'automate manual workflows',
          price: '$199 USD',
          description: 'Automate manual workflows, email processing, or data sync—for less than you\'d pay a VA in a month!',
          icon: Zap
        },
        {
          name: 'Custom Automation Suite or API Integrations',
          subtitle: 'scalable, end-to-end solutions',
          price: '$1,499 USD',
          description: 'Scalable, end-to-end AI-driven solutions built for growth.',
          icon: Zap
        }
      ]
    },
    {
      title: 'Career Tools & AI Utilities',
      description: 'AI-powered career acceleration',
      services: [
        {
          name: 'ATS-Friendly Resume or LinkedIn Optimization Bot',
          subtitle: 'complete, AI-powered and recruiter-checked',
          price: '$39 USD',
          description: 'Complete, AI-powered and recruiter-checked.',
          icon: Brain
        }
      ]
    },
    {
      title: 'Ongoing Support Packages',
      description: 'Continuous support and maintenance',
      services: [
        {
          name: 'Monthly Tech Support and Maintenance',
          subtitle: 'priority support, reports, new features',
          price: '$299 USD / month',
          description: 'Priority issue resolution, monthly reports, and new feature rollouts.',
          icon: HeadphonesIcon
        }
      ]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-white to-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <DollarSign className="h-6 w-6 text-emerald-600" />
            <span className="text-emerald-700 font-semibold tracking-wide text-sm uppercase">For Our First 10 Clients</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">
            🚀 <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">Special Launch Pricing</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto font-light">
            Exclusive, limited-time offers combining ethical tech expertise with unbeatable value.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="space-y-12">
          {pricingCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden">
              {/* Category Header */}
              <div className="bg-gradient-to-r from-emerald-600 to-teal-600 p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">{category.title}</h3>
                <p className="text-emerald-100 font-light">{category.description}</p>
              </div>
              
              {/* Services Grid */}
              <div className="p-6">
                <div className={`grid gap-6 ${category.services.length === 1 ? 'grid-cols-1 max-w-2xl mx-auto' : 'grid-cols-1 md:grid-cols-2'}`}>
                  {category.services.map((service, serviceIndex) => (
                    <div 
                      key={serviceIndex}
                      className="bg-gradient-to-br from-slate-50 to-white p-6 rounded-2xl border border-slate-100 hover:border-emerald-200 hover:shadow-lg transition-all duration-300 group"
                    >
                      {/* Service Header */}
                      <div className="flex items-start justify-between mb-4">
                        <div className="bg-gradient-to-br from-emerald-100 to-teal-100 p-3 rounded-full group-hover:from-emerald-600 group-hover:to-teal-600 transition-all duration-300">
                          <service.icon className="h-6 w-6 text-emerald-600 group-hover:text-white transition-colors duration-300" />
                        </div>
                        <div className="text-right">
                          <div className="text-3xl font-bold text-emerald-600">{service.price}</div>
                        </div>
                      </div>
                      
                      {/* Service Details */}
                      <h4 className="text-xl font-bold text-slate-900 mb-2">{service.name}</h4>
                      <p className="text-sm text-emerald-600 font-medium mb-3">({service.subtitle})</p>
                      <p className="text-slate-600 mb-4 leading-relaxed">{service.description}</p>
                      
                      {/* Special Highlight */}
                      {service.highlight && (
                        <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 mb-4">
                          <div className="flex items-center space-x-2">
                            <CheckCircle className="h-4 w-4 text-amber-600 flex-shrink-0" />
                            <p className="text-sm text-amber-800 font-medium">{service.highlight}</p>
                          </div>
                        </div>
                      )}
                      
                      {/* Quick Features */}
                      <div className="flex flex-wrap gap-2 mt-4">
                        <div className="flex items-center space-x-1 bg-emerald-50 px-3 py-1 rounded-full">
                          <Clock className="h-3 w-3 text-emerald-600" />
                          <span className="text-xs text-emerald-700 font-medium">Fast Delivery</span>
                        </div>
                        <div className="flex items-center space-x-1 bg-blue-50 px-3 py-1 rounded-full">
                          <CheckCircle className="h-3 w-3 text-blue-600" />
                          <span className="text-xs text-blue-700 font-medium">Halal & Ethical</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Why RizqTek Section */}
        <div className="mt-20 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-3xl p-8 md:p-12">
          <div className="text-center mb-10">
            <h3 className="text-3xl font-bold text-slate-900 mb-4">Why RizqTek?</h3>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Ethical tech, blazing fast delivery, and practical results—delivered with <strong>barakah</strong> (blessing) and 24/7 support.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <div className="text-4xl mb-4">⚡</div>
              <h4 className="text-lg font-bold text-slate-900 mb-2">Blazing Fast Delivery</h4>
              <p className="text-slate-600">5-7 day turnaround on most projects</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <div className="text-4xl mb-4">🤲</div>
              <h4 className="text-lg font-bold text-slate-900 mb-2">Built with Barakah</h4>
              <p className="text-slate-600">Every solution grounded in Islamic values</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <div className="text-4xl mb-4">🎯</div>
              <h4 className="text-lg font-bold text-slate-900 mb-2">Practical Results</h4>
              <p className="text-slate-600">Real-world solutions that drive growth</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center bg-gradient-to-r from-emerald-600 to-teal-600 rounded-3xl p-8 md:p-12 text-white">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">🏆 Ready to Start?</h3>
          <p className="text-xl mb-6 text-emerald-100">
            Message us directly, get a free mini-consultation, or use our starter audit—for new clients only.
          </p>
          <p className="text-lg mb-8 text-emerald-100 font-semibold">
            📧 hello@rizqtek.com | 🌐 www.rizqtek.com
          </p>
          <button 
            onClick={() => {
              const contactSection = document.getElementById('contact');
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="bg-white text-emerald-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-emerald-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Book Your Slot Before They Fill! 🚀
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
