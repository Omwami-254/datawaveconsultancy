import { ArrowRight, Sparkles } from 'lucide-react';

export function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#f8fafc] via-white to-[#e0f2fe] px-6 pt-24 pb-16 md:px-12 md:pt-32 md:pb-20 lg:px-24">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 top-20 size-[600px] animate-pulse rounded-full bg-gradient-to-br from-[#00B4D8]/20 to-transparent blur-3xl"></div>
        <div className="absolute -right-40 bottom-20 size-[600px] animate-pulse rounded-full bg-gradient-to-br from-[#0A2463]/20 to-transparent blur-3xl" style={{ animationDelay: '1s' }}></div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #0A2463 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="relative mx-auto max-w-7xl">
        <div className="mx-auto max-w-5xl text-center">
          {/* Badge */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#00B4D8]/20 bg-white/60 px-4 py-2 shadow-sm backdrop-blur-sm">
            <Sparkles className="size-4 text-[#00B4D8]" />
            <span className="text-sm text-gray-700">Data Driven Consulting Excellence</span>
          </div>

          <h1 className="mb-6 bg-gradient-to-br from-[#0A2463] via-[#1e4a8a] to-[#00B4D8] bg-clip-text text-3xl font-bold leading-[1.15] tracking-tight text-transparent md:text-5xl lg:text-6xl">
            Practical, Data Driven Consulting for Teams Ready to Move Forward
          </h1>
          
          <p className="mb-8 text-base leading-relaxed text-gray-600 md:mb-10 md:text-xl">
            Datawave Analytics and Consultancy helps organisations turn data into insight, strategy into execution, and systems into scalable operations—focused on clarity, structure, and measurable outcomes.
          </p>

          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-4">
            <button
              onClick={scrollToContact}
              className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#00B4D8] to-[#0ea5e9] px-8 py-3.5 text-base font-medium text-white shadow-xl transition-all hover:scale-105 hover:shadow-2xl sm:w-auto md:py-4 md:text-lg"
            >
              Send a Request
              <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
            </button>
            <button
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              className="group inline-flex w-full items-center justify-center gap-2 rounded-xl border-2 border-gray-200 bg-white px-8 py-3.5 text-base font-medium text-[#0A2463] transition-all hover:border-[#00B4D8] hover:shadow-lg sm:w-auto md:py-4 md:text-lg"
            >
              Explore Services
              <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          {/* Stats */}
          <div className="mt-12 grid gap-4 sm:grid-cols-3 md:mt-16 md:gap-8">
            <div className="group rounded-2xl border border-gray-200 bg-white/60 p-5 backdrop-blur-sm transition-all hover:border-[#00B4D8] hover:shadow-lg md:p-6">
              <div className="mb-2 text-3xl font-bold text-[#00B4D8] md:text-4xl">6+</div>
              <div className="text-sm text-gray-600">Core Service Areas</div>
            </div>
            <div className="group rounded-2xl border border-gray-200 bg-white/60 p-5 backdrop-blur-sm transition-all hover:border-[#00B4D8] hover:shadow-lg md:p-6">
              <div className="mb-2 text-3xl font-bold text-[#00B4D8] md:text-4xl">2</div>
              <div className="text-sm text-gray-600">African Hubs</div>
            </div>
            <div className="group rounded-2xl border border-gray-200 bg-white/60 p-5 backdrop-blur-sm transition-all hover:border-[#00B4D8] hover:shadow-lg md:p-6">
              <div className="mb-2 text-3xl font-bold text-[#00B4D8] md:text-4xl">Global</div>
              <div className="text-sm text-gray-600">Delivery Model</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}