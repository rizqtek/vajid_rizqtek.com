// import React, { useState } from 'react';
// import { Menu, X, Sun } from 'lucide-react';

// const Header = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const scrollToContact = () => {
//     const contactSection = document.getElementById('contact');
//     if (contactSection) {
//       contactSection.scrollIntoView({ behavior: 'smooth' });
//     }
//   };

//   const scrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   };

//   return (
//     <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-16">
//           <button 
//             onClick={scrollToTop}
//             className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
//           >
//             <div className="bg-green-600 p-2 rounded-full">
//               <Sun className="h-6 w-6 text-white" />
//             </div>
//             <span className="text-2xl font-bold text-gray-900">RizqTek</span>
//             <span className="text-sm text-green-600 hidden sm:block">Sustaining Futures</span>
//           </button>

//           <nav className="hidden md:flex space-x-8">
//             <a href="#services" className="text-gray-700 hover:text-green-600 transition-colors">Services</a>
//             <a href="#about" className="text-gray-700 hover:text-green-600 transition-colors">About</a>
//             <a href="#industries" className="text-gray-700 hover:text-green-600 transition-colors">Industries</a>
//             <a href="#contact" className="text-gray-700 hover:text-green-600 transition-colors">Contact</a>
//           </nav>

//           <div className="hidden md:block">
//             <button 
//               onClick={scrollToContact}
//               className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition-colors"
//             >
//               Get Started
//             </button>
//           </div>

//           <button
//             className="md:hidden"
//             onClick={() => setIsMenuOpen(!isMenuOpen)}
//           >
//             {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//           </button>
//         </div>

//         {isMenuOpen && (
//           <div className="md:hidden absolute top-16 left-0 right-0 bg-white border-b border-gray-200 shadow-lg">
//             <nav className="flex flex-col space-y-4 p-4">
//               <a href="#services" className="text-gray-700 hover:text-green-600 transition-colors">Services</a>
//               <a href="#about" className="text-gray-700 hover:text-green-600 transition-colors">About</a>
//               <a href="#industries" className="text-gray-700 hover:text-green-600 transition-colors">Industries</a>
//               <a href="#contact" className="text-gray-700 hover:text-green-600 transition-colors">Contact</a>
//               <button 
//                 onClick={scrollToContact}
//                 className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition-colors w-full"
//               >
//                 Get Started
//               </button>
//             </nav>
//           </div>
//         )}
//       </div>
//     </header>
//   );
// };

// export default Header;




import React, { useState } from 'react';
import { Menu, X, Sun } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <button 
            onClick={scrollToTop}
            className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
          >
            <div className="bg-gradient-to-r from-emerald-600 to-teal-600 p-2 rounded-full shadow-lg">
              <Sun className="h-6 w-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-slate-900 tracking-tight">RizqTek</span>
            <span className="text-sm text-emerald-600 hidden sm:block font-medium">Sustaining Futures</span>
          </button>

          <nav className="hidden md:flex space-x-8">
            <a href="#services" className="text-slate-700 hover:text-emerald-600 transition-colors font-medium">Services</a>
            <a href="#about" className="text-slate-700 hover:text-emerald-600 transition-colors font-medium">About</a>
            <a href="#industries" className="text-slate-700 hover:text-emerald-600 transition-colors font-medium">Industries</a>
            <a href="#contact" className="text-slate-700 hover:text-emerald-600 transition-colors font-medium">Contact</a>
          </nav>

          <div className="hidden md:block">
            <button 
              onClick={scrollToContact}
              className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-6 py-2 rounded-full hover:from-emerald-700 hover:to-teal-700 transition-all duration-300 shadow-lg hover:shadow-xl font-medium"
            >
              Get Started
            </button>
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-white border-b border-gray-200 shadow-lg">
            <nav className="flex flex-col space-y-4 p-4">
              <a href="#services" className="text-gray-700 hover:text-green-600 transition-colors">Services</a>
              <a href="#about" className="text-gray-700 hover:text-green-600 transition-colors">About</a>
              <a href="#industries" className="text-gray-700 hover:text-green-600 transition-colors">Industries</a>
              <a href="#contact" className="text-gray-700 hover:text-green-600 transition-colors">Contact</a>
              <button 
                onClick={scrollToContact}
                className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition-colors w-full"
              >
                Get Started
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;