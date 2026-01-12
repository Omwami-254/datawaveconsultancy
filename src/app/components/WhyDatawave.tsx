import { CheckCircle2, BarChart3, Zap, TrendingUp, FileText, Globe2, Award, Target, Users } from 'lucide-react';

const differentiators = [
  {
    icon: Target,
    title: 'Outcome-focused delivery',
    description: 'Every engagement is measured by results, not hours'
  },
  {
    icon: BarChart3,
    title: 'Strong analytical foundation',
    description: 'Decisions backed by data and rigorous research'
  },
  {
    icon: Zap,
    title: 'Lightweight processes',
    description: 'Maximum impact with minimal friction'
  },
  {
    icon: TrendingUp,
    title: 'Solutions designed to scale',
    description: 'Built for growth and long-term sustainability'
  },
  {
    icon: FileText,
    title: 'Clear communication',
    description: 'Transparent reporting and comprehensive documentation'
  },
  {
    icon: Globe2,
    title: 'Global delivery model',
    description: 'Kenya · Nigeria · Worldwide reach'
  }
];

export function WhyDatawave() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#0A2463] via-[#1e4a8a] to-[#0A2463] px-6 py-16 md:px-12 md:py-20 lg:px-24 lg:py-24">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(0,180,216,0.1),transparent)]"></div>
        <div className="absolute left-1/4 top-1/4 size-96 animate-pulse rounded-full bg-[#00B4D8]/10 blur-3xl" style={{ animationDuration: '4s' }}></div>
        <div className="absolute bottom-1/4 right-1/4 size-96 animate-pulse rounded-full bg-[#00B4D8]/10 blur-3xl" style={{ animationDuration: '6s', animationDelay: '2s' }}></div>
      </div>

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-12 text-center md:mb-16">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 shadow-lg backdrop-blur-sm">
            <Award className="size-4 text-[#00B4D8]" />
            <span className="text-sm font-medium text-white">Why Choose Us</span>
          </div>
          
          <h2 className="mb-6 text-3xl font-bold text-white md:text-4xl lg:text-5xl">
            Why Datawave Consultancy
          </h2>
          
          <div className="mx-auto mb-6 h-1.5 w-24 rounded-full bg-gradient-to-r from-[#00B4D8] to-[#0ea5e9] shadow-lg md:mb-8"></div>
          
          <p className="mx-auto max-w-3xl text-base leading-relaxed text-white/90 md:text-lg">
            We focus on practical execution, not abstract consulting—grounded in analysis, structure, and accountability.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {differentiators.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:shadow-2xl"
              >
                {/* Hover gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#00B4D8]/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>

                <div className="relative">
                  <div className="mb-6 inline-flex size-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#00B4D8] to-[#0ea5e9] shadow-lg transition-transform duration-300 group-hover:scale-110">
                    <Icon className="size-7 text-white" strokeWidth={2} />
                  </div>
                  
                  <h3 className="mb-3 text-xl font-bold text-white">{item.title}</h3>
                  <p className="leading-relaxed text-white/80">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Stats section */}
        <div className="mt-20 grid gap-8 rounded-3xl border border-white/10 bg-white/5 p-12 backdrop-blur-sm md:grid-cols-3">
          <div className="text-center">
            <div className="mb-2 text-5xl font-bold text-[#00B4D8]">100%</div>
            <div className="text-white/80">Client Satisfaction Focus</div>
          </div>
          <div className="text-center">
            <div className="mb-2 text-5xl font-bold text-[#00B4D8]">2+</div>
            <div className="text-white/80">African Hubs</div>
          </div>
          <div className="text-center">
            <div className="mb-2 text-5xl font-bold text-[#00B4D8]">∞</div>
            <div className="text-white/80">Global Reach</div>
          </div>
        </div>
      </div>
    </section>
  );
}