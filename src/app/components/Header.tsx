import { Waves } from 'lucide-react';
import datawaveLogo from 'figma:asset/b587543dab8420476eba6debd586d3a4f393751c.png';

export function Header() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="mx-auto max-w-7xl px-6 lg:px-16">
        <div className="flex items-center justify-between py-3 md:py-4">
          {/* Logo Image */}
          <button 
            onClick={() => scrollToSection('hero')}
            className="transition-opacity hover:opacity-80"
          >
            <img 
              src={datawaveLogo} 
              alt="Datawave Consultancy" 
              className="h-10 w-auto md:h-12"
            />
          </button>

          {/* CTA */}
          <button
            onClick={() => scrollToSection('contact')}
            className="group relative overflow-hidden rounded-lg bg-gradient-to-r from-[#00B4D8] to-[#0ea5e9] px-4 py-2 text-sm font-medium text-white shadow-lg transition-all hover:shadow-xl hover:scale-105 md:px-6 md:py-2.5"
          >
            <span className="relative z-10">Send a Request</span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#0ea5e9] to-[#00B4D8] opacity-0 transition-opacity group-hover:opacity-100"></div>
          </button>
        </div>
      </div>
    </header>
  );
}