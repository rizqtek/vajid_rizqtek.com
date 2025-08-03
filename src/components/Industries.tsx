import React from 'react';
import { Banknote, BookOpen, Heart, Users, Leaf, ShoppingBag } from 'lucide-react';

const Industries = () => {
  const industries = [
    {
      icon: Banknote,
      title: 'Islamic Fintech',
      description: 'Sharia-compliant financial technology solutions and educational platforms.'
    },
    {
      icon: BookOpen,
      title: 'Education Startups',
      description: 'Islamic learning platforms and modern educational technology tools.'
    },
    {
      icon: ShoppingBag,
      title: 'Ethical Ecommerce',
      description: 'Halal marketplace solutions and sustainable dropshipping platforms.'
    },
    {
      icon: Heart,
      title: 'NGO & Social Impact',
      description: 'Technology solutions for non-profits and community development projects.'
    },
    {
      icon: Users,
      title: 'Career Development',
      description: 'Platforms for coaches, mentors, and professional development trainers.'
    },
    {
      icon: Leaf,
      title: 'Sustainable Living',
      description: 'Halal food tech, health solutions, and environmental sustainability apps.'
    }
  ];

  return (
    <section id="industries" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Industries We Serve</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We specialize in serving businesses and organizations that align with Islamic values 
            and contribute positively to society.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <div 
              key={index}
              className="group p-8 rounded-2xl border-2 border-gray-100 hover:border-green-200 transition-all duration-300 hover:shadow-lg"
            >
              <div className="bg-gradient-to-br from-green-100 to-blue-100 p-4 rounded-full w-fit mb-6 group-hover:from-green-600 group-hover:to-blue-600 transition-all duration-300">
                <industry.icon className="h-8 w-8 text-green-600 group-hover:text-white transition-colors duration-300" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-green-700 transition-colors">
                {industry.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{industry.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-green-600 to-blue-600 p-8 rounded-3xl text-white">
            <h3 className="text-2xl font-bold mb-4">Don't See Your Industry?</h3>
            <p className="text-lg mb-6 opacity-90">
              We're always excited to work with new sectors that align with our values. 
              Let's discuss how we can help transform your industry with ethical technology.
            </p>
            <button 
              onClick={() => {
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="bg-white text-green-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
            >
              Start a Conversation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Industries;