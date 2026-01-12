import { Lightbulb, Target, Zap } from 'lucide-react';

export function WhatWeDo() {
  return (
    <section className="relative overflow-hidden bg-white px-6 py-16 md:px-12 md:py-20 lg:px-24 lg:py-24">
      {/* Background decoration */}
      <div className="absolute right-0 top-0 h-full w-1/3 bg-gradient-to-l from-gray-50 to-transparent"></div>

      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Left side - Text content */}
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-[#00B4D8]/10 px-4 py-2">
              <div className="size-2 animate-pulse rounded-full bg-[#00B4D8]"></div>
              <span className="text-sm font-medium text-[#0A2463]">What We Do</span>
            </div>
            
            <h2 className="mb-6 text-3xl font-bold leading-tight text-[#0A2463] md:text-4xl lg:text-5xl">
              We support organisations in making better decisions
            </h2>
            
            <div className="mb-6 h-1.5 w-20 rounded-full bg-gradient-to-r from-[#00B4D8] to-[#0ea5e9] md:mb-8"></div>
            
            <p className="text-base leading-relaxed text-gray-600 md:text-lg">
              Building effective digital systems, and delivering projects with confidence. Our work combines analytics, technology, research, and disciplined execution—without unnecessary complexity.
            </p>
          </div>

          {/* Right side - Feature cards */}
          <div className="grid gap-4 md:gap-6">
            <div className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-gradient-to-br from-white to-gray-50 p-6 transition-all hover:border-[#00B4D8] hover:shadow-xl md:p-8">
              <div className="mb-4 inline-flex size-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#00B4D8] to-[#0ea5e9] shadow-lg">
                <Target className="size-6 text-white" strokeWidth={2} />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-[#0A2463] md:text-xl">Strategic Clarity</h3>
              <p className="text-sm text-gray-600 md:text-base">Data driven insights that guide decision making with precision and confidence.</p>
            </div>

            <div className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-gradient-to-br from-white to-gray-50 p-6 transition-all hover:border-[#00B4D8] hover:shadow-xl md:p-8">
              <div className="mb-4 inline-flex size-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#0A2463] to-[#1e4a8a] shadow-lg">
                <Zap className="size-6 text-white" strokeWidth={2} />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-[#0A2463] md:text-xl">Rapid Execution</h3>
              <p className="text-sm text-gray-600 md:text-base">Lightweight processes that deliver results without friction or unnecessary overhead.</p>
            </div>

            <div className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-gradient-to-br from-white to-gray-50 p-6 transition-all hover:border-[#00B4D8] hover:shadow-xl md:p-8">
              <div className="mb-4 inline-flex size-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#00B4D8] to-[#0A2463] shadow-lg">
                <Lightbulb className="size-6 text-white" strokeWidth={2} />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-[#0A2463] md:text-xl">Scalable Solutions</h3>
              <p className="text-sm text-gray-600 md:text-base">Systems designed to grow with your organization and adapt to changing needs.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}