// import React from 'react';
// import { BarChart3, Zap, Code, Brain, GraduationCap, Building2 } from 'lucide-react';

// const Services = () => {
//   const services = [
//     {
//       icon: BarChart3,
//       title: 'Data Analytics & BI',
//       description: 'Transform your data into actionable insights with Power BI dashboards, SQL modeling, and AI-driven forecasting.',
//       features: ['Power BI Dashboards', 'Excel Automation', 'Real-time KPI Monitoring', 'Data Cleaning & Transformation']
//     },
//     {
//       icon: Zap,
//       title: 'Automation & Efficiency',
//       description: 'Streamline your workflows with custom Python bots, email automation, and Islamic productivity tools.',
//       features: ['Custom Python/AI Bots', 'Workflow Automation', 'Web Scraping', 'Prayer-time Reminders']
//     },
//     {
//       icon: Code,
//       title: 'App & Web Development',
//       description: 'Full-stack development with modern technologies, creating scalable and secure digital solutions.',
//       features: ['MERN Stack Development', 'Mobile-Friendly Apps', 'Islamic Tech Tools', 'SEO-Optimized Sites']
//     },
//     {
//       icon: Brain,
//       title: 'Career-Boosting AI Tools',
//       description: 'Accelerate your career with our AI-powered CV builder, interview prep, and professional tools.',
//       features: ['ATS-Optimized Resume Generator', 'Interview Q&A Master', 'Invoice Generator', 'Career Timeline']
//     },
//     {
//       icon: GraduationCap,
//       title: 'Skill Building & Learning',
//       description: 'Master in-demand skills with our curated courses and practical bootcamps for data careers.',
//       features: ['SQL & Power BI Courses', 'AI for Data Careers', 'Interview Preparation', 'Job Hunt Strategies']
//     },
//     {
//       icon: Building2,
//       title: 'SaaS Solutions & B2B',
//       description: 'Enterprise-grade solutions including CRM tools, admin dashboards, and secure authentication systems.',
//       features: ['Admin Dashboards', 'CRM Tools', 'Quiz Systems', 'Multi-user Authentication']
//     }
//   ];

//   return (
//     <section id="services" className="py-20 bg-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl font-bold text-gray-900 mb-4">Core Services</h2>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//             Comprehensive tech solutions designed to empower your business while maintaining Islamic values and ethics.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {services.map((service, index) => (
//             <div 
//               key={index}
//               className="bg-white p-8 rounded-2xl border border-gray-100 hover:border-green-200 transition-all duration-300 hover:shadow-xl group"
//             >
//               <div className="bg-green-100 p-3 rounded-full w-fit mb-6 group-hover:bg-green-600 transition-colors duration-300">
//                 <service.icon className="h-8 w-8 text-green-600 group-hover:text-white transition-colors duration-300" />
//               </div>
              
//               <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
//               <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
              
//               <ul className="space-y-2">
//                 {service.features.map((feature, featureIndex) => (
//                   <li key={featureIndex} className="flex items-center text-sm text-gray-700">
//                     <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
//                     {feature}
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Services;


import React from 'react';
import { BarChart3, Zap, Code, Brain, GraduationCap, Building2 } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: BarChart3,
      title: 'Data Analytics & BI',
      description: 'Transform your data into actionable insights with Power BI dashboards, SQL modeling, and AI-driven forecasting.',
      features: ['Power BI Dashboards', 'Excel Automation', 'Real-time KPI Monitoring', 'Data Cleaning & Transformation']
    },
    {
      icon: Zap,
      title: 'Automation & Efficiency',
      description: 'Streamline your workflows with custom Python bots, email automation, and Islamic productivity tools.',
      features: ['Custom Python/AI Bots', 'Workflow Automation', 'Web Scraping', 'Prayer-time Reminders']
    },
    {
      icon: Code,
      title: 'App & Web Development',
      description: 'Full-stack development with modern technologies, creating scalable and secure digital solutions.',
      features: ['MERN Stack Development', 'Mobile-Friendly Apps', 'Islamic Tech Tools', 'SEO-Optimized Sites']
    },
    {
      icon: Brain,
      title: 'Career-Boosting AI Tools',
      description: 'Accelerate your career with our AI-powered CV builder, interview prep, and professional tools.',
      features: ['ATS-Optimized Resume Generator', 'Interview Q&A Master', 'Invoice Generator', 'Career Timeline']
    },
    {
      icon: GraduationCap,
      title: 'Skill Building & Learning',
      description: 'Master in-demand skills with our curated courses and practical bootcamps for data careers.',
      features: ['SQL & Power BI Courses', 'AI for Data Careers', 'Interview Preparation', 'Job Hunt Strategies']
    },
    {
      icon: Building2,
      title: 'SaaS Solutions & B2B',
      description: 'Enterprise-grade solutions including CRM tools, admin dashboards, and secure authentication systems.',
      features: ['Admin Dashboards', 'CRM Tools', 'Quiz Systems', 'Multi-user Authentication']
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4 tracking-tight">Core Services</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto font-light">
            Comprehensive tech solutions designed to empower your business while maintaining Islamic values and ethics.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-2xl border border-slate-100 hover:border-emerald-200 transition-all duration-300 hover:shadow-2xl group backdrop-blur-sm hover:-translate-y-1"
            >
              <div className="bg-gradient-to-br from-emerald-100 to-teal-100 p-3 rounded-full w-fit mb-6 group-hover:from-emerald-600 group-hover:to-teal-600 transition-all duration-300 shadow-lg">
                <service.icon className="h-8 w-8 text-emerald-600 group-hover:text-white transition-colors duration-300" />
              </div>
              
              <h3 className="text-xl font-bold text-slate-900 mb-4 tracking-tight">{service.title}</h3>
              <p className="text-slate-600 mb-6 leading-relaxed font-light">{service.description}</p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-slate-700">
                    <div className="w-2 h-2 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;