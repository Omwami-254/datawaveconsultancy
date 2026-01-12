import { MapPin, Mail, Waves, ArrowUp } from 'lucide-react';
import datawaveLogo from 'figma:asset/b587543dab8420476eba6debd586d3a4f393751c.png';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-[#0A2463] via-[#1e4a8a] to-[#0A2463] px-6 py-12 text-white md:px-12 md:py-16 lg:px-24">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-0 size-96 rounded-full bg-[#00B4D8]/10 blur-3xl"></div>
        <div className="absolute right-0 top-0 size-96 rounded-full bg-[#00B4D8]/10 blur-3xl"></div>
      </div>

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <img 
                src={datawaveLogo} 
                alt="Datawave Consultancy" 
                className="h-12 w-auto md:h-16"
              />
            </div>
            <p className="mb-6 max-w-md text-base text-white/90 md:text-lg">
              Data driven. Practical. Scalable.
            </p>
            <p className="text-sm text-white/60">
              © 2026 Datawave Analytics and Consultancy
            </p>
          </div>

          {/* Kenya */}
          <div>
            <div className="mb-4 flex items-center gap-2 md:mb-6">
              <div className="flex size-10 items-center justify-center rounded-lg bg-white/10">
                <MapPin className="size-5 text-[#00B4D8]" strokeWidth={2} />
              </div>
              <h3 className="text-base font-semibold md:text-lg">Kenya</h3>
            </div>
            <p className="text-sm leading-relaxed text-white/80 md:text-base">
              Kirawa Road, Kitisuru<br />
              Nairobi, Kenya
            </p>
          </div>

          {/* Nigeria */}
          <div>
            <div className="mb-4 flex items-center gap-2 md:mb-6">
              <div className="flex size-10 items-center justify-center rounded-lg bg-white/10">
                <MapPin className="size-5 text-[#00B4D8]" strokeWidth={2} />
              </div>
              <h3 className="text-base font-semibold md:text-lg">Nigeria</h3>
            </div>
            <p className="text-sm leading-relaxed text-white/80 md:text-base">
              7 Mohamed Isma Street<br />
              Asokoro, Abuja, Nigeria
            </p>
          </div>
        </div>

        {/* Contact & Scroll to top */}
        <div className="flex flex-col gap-6 border-t border-white/20 pt-8 md:flex-row md:items-center md:justify-between md:pt-12">
          <div className="flex items-center gap-3">
            <div className="flex size-12 items-center justify-center rounded-xl bg-white/10">
              <Mail className="size-6 text-[#00B4D8]" strokeWidth={2} />
            </div>
            <div>
              <div className="text-sm text-white/60">Get in touch</div>
              <a
                href="mailto:info@datawaveconsultancy.com"
                className="text-sm font-semibold text-white transition-colors hover:text-[#00B4D8] md:text-base"
              >
                info@datawaveconsultancy.com
              </a>
            </div>
          </div>

          <button
            onClick={scrollToTop}
            className="group inline-flex items-center gap-2 self-start rounded-xl border border-white/20 bg-white/10 px-6 py-3 text-sm font-medium transition-all hover:bg-white/20 md:self-auto md:text-base"
          >
            Back to top
            <ArrowUp className="size-4 transition-transform group-hover:-translate-y-1" />
          </button>
        </div>

        {/* Global delivery */}
        <div className="mt-8 text-center md:mt-12">
          <p className="text-sm text-white/60">Global delivery model • Remote-first approach</p>
        </div>
      </div>
    </footer>
  );
}