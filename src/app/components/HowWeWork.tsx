import { Target, Pencil, Rocket, TrendingUp } from 'lucide-react';

const steps = [
  {
    icon: Target,
    number: '01',
    title: 'Clarify',
    description: 'Define goals, scope, constraints, and success metrics.',
    color: 'from-[#00B4D8] to-[#0ea5e9]'
  },
  {
    icon: Pencil,
    number: '02',
    title: 'Design',
    description: 'Create a focused execution plan with clear responsibilities.',
    color: 'from-[#0ea5e9] to-[#0A2463]'
  },
  {
    icon: Rocket,
    number: '03',
    title: 'Deliver',
    description: 'Execute in clear phases with transparent communication and measurable outputs.',
    color: 'from-[#0A2463] to-[#1e4a8a]'
  },
  {
    icon: TrendingUp,
    number: '04',
    title: 'Improve',
    description: 'Review outcomes, optimize solutions, and scale what works.',
    color: 'from-[#1e4a8a] to-[#00B4D8]'
  }
];

export function HowWeWork() {
  return (
    <section className="relative overflow-hidden bg-white px-6 py-16 md:px-12 md:py-20 lg:px-24 lg:py-24">
      {/* Background decoration */}
      <div className="absolute left-0 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-[#00B4D8]/5 blur-3xl"></div>
      <div className="absolute right-0 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-[#0A2463]/5 blur-3xl"></div>

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-12 text-center md:mb-16">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-[#00B4D8]/10 px-4 py-2">
            <div className="size-2 animate-pulse rounded-full bg-[#00B4D8]"></div>
            <span className="text-sm font-medium text-[#0A2463]">How We Work</span>
          </div>
          
          <h2 className="mb-6 text-3xl font-bold text-[#0A2463] md:text-4xl lg:text-5xl">
            A Proven Process
          </h2>
          
          <p className="mx-auto max-w-3xl text-base text-gray-600 md:text-lg">
            Our structured approach ensures clarity, accountability, and measurable results at every stage
          </p>
        </div>

        <div className="relative">
          {/* Connection line */}
          <div className="absolute left-1/2 top-0 hidden h-full w-0.5 -translate-x-1/2 bg-gradient-to-b from-[#00B4D8] via-[#0A2463] to-[#00B4D8] lg:block"></div>

          <div className="space-y-16">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isEven = index % 2 === 0;

              return (
                <div key={index} className={`relative grid gap-8 lg:grid-cols-2 lg:gap-16 ${isEven ? '' : 'lg:text-right'}`}>
                  {/* Content */}
                  <div className={`${isEven ? 'lg:text-right' : 'lg:col-start-2'}`}>
                    <div className={`inline-block ${isEven ? 'lg:text-right' : 'lg:text-left'}`}>
                      <div className="mb-4 inline-flex items-baseline gap-3">
                        <span className={`bg-gradient-to-r ${step.color} bg-clip-text text-5xl font-bold text-transparent`}>
                          {step.number}
                        </span>
                      </div>
                      <h3 className="mb-4 text-3xl font-bold text-[#0A2463]">{step.title}</h3>
                      <p className="text-lg leading-relaxed text-gray-600">{step.description}</p>
                    </div>
                  </div>

                  {/* Icon card */}
                  <div className={`flex items-center ${isEven ? 'lg:justify-end' : 'lg:col-start-1 lg:row-start-1'}`}>
                    <div className="group relative">
                      <div className={`absolute inset-0 animate-pulse rounded-3xl bg-gradient-to-br ${step.color} opacity-20 blur-xl`}></div>
                      <div className={`relative flex size-28 items-center justify-center rounded-3xl bg-gradient-to-br ${step.color} shadow-2xl transition-transform duration-300 group-hover:scale-110`}>
                        <Icon className="size-14 text-white" strokeWidth={1.5} />
                      </div>
                    </div>
                  </div>

                  {/* Center dot for timeline */}
                  <div className="absolute left-1/2 top-1/2 hidden size-4 -translate-x-1/2 -translate-y-1/2 rounded-full border-4 border-white bg-[#00B4D8] shadow-lg lg:block"></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}