import { BarChart3, Brain, TrendingUp, Globe, CheckCircle2, Search, ArrowRight, Sparkles } from 'lucide-react';
import { useState } from 'react';

interface Service {
  icon: React.ElementType;
  title: string;
  description: string;
  subServices: string[];
  gradient: string;
}

const services: Service[] = [
  {
    icon: BarChart3,
    title: 'Data & Analytics',
    description: 'Transforming data into actionable insight that supports strategic and operational decision making.',
    gradient: 'from-blue-500 to-cyan-500',
    subServices: [
      'KPI and metrics framework design',
      'Business intelligence dashboards',
      'Data analysis and reporting',
      'Performance monitoring and insights',
      'Data quality audits and cleanup'
    ]
  },
  {
    icon: Brain,
    title: 'Data Science & Machine Learning',
    description: 'Advanced analytics support and practical ML capability building for teams and organizations.',
    gradient: 'from-purple-500 to-pink-500',
    subServices: [
      'Predictive analytics and forecasting',
      'Applied machine learning model development',
      'Data preparation and feature engineering',
      'Data annotation and labeling workflows',
      'Model evaluation and optimization',
      'Responsible AI and bias awareness'
    ]
  },
  {
    icon: TrendingUp,
    title: 'Digital Marketing & Growth',
    description: 'Data driven strategies that improve visibility, conversion, and sustainable growth.',
    gradient: 'from-orange-500 to-red-500',
    subServices: [
      'SEO strategy and optimization',
      'Content and messaging strategy',
      'Landing page optimization',
      'Digital campaign planning',
      'Performance tracking and reporting'
    ]
  },
  {
    icon: Globe,
    title: 'Web Development & Digital Platforms',
    description: 'Modern, fast, and maintainable digital solutions aligned with business goals.',
    gradient: 'from-green-500 to-emerald-500',
    subServices: [
      'Business websites and landing pages',
      'MVP and prototype development',
      'UX-focused front-end implementation',
      'Website performance optimization',
      'Deployment and technical handover'
    ]
  },
  {
    icon: CheckCircle2,
    title: 'Project Delivery & Operations',
    description: 'Structured project and operational support to ensure delivery with clarity and accountability.',
    gradient: 'from-[#00B4D8] to-[#0A2463]',
    subServices: [
      'Project planning and roadmapping',
      'Agile and workflow setup',
      'Stakeholder coordination',
      'Delivery tracking and reporting',
      'Documentation and handover'
    ]
  },
  {
    icon: Search,
    title: 'Research & Fieldwork Support',
    description: 'Reliable execution support for research organisations, institutions, and impact-driven programmes.',
    gradient: 'from-indigo-500 to-purple-500',
    subServices: [
      'Fieldwork planning and coordination',
      'Enumerator recruitment and training',
      'Survey design and data collection support',
      'Qualitative and quantitative field research',
      'Data validation and quality assurance',
      'Monitoring and evaluation (M&E) support',
      'Research documentation and reporting'
    ]
  }
];

export function CoreServices() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <section id="services" className="relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-50 px-6 py-16 md:px-12 md:py-20 lg:px-24 lg:py-24">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `linear-gradient(#00B4D8 1px, transparent 1px), linear-gradient(90deg, #00B4D8 1px, transparent 1px)`,
        backgroundSize: '50px 50px'
      }}></div>

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-12 text-center md:mb-16">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-[#00B4D8]/10 px-4 py-2">
            <Sparkles className="size-4 text-[#00B4D8]" />
            <span className="text-sm font-medium text-[#0A2463]">Core Services</span>
          </div>
          
          <h2 className="mb-6 text-3xl font-bold text-[#0A2463] md:text-4xl lg:text-5xl">
            Comprehensive Solutions for Every Need
          </h2>
          
          <p className="mx-auto max-w-3xl text-base text-gray-600 md:text-lg">
            From data analytics to digital platforms, we provide end-to-end support for your most critical initiatives
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 md:gap-6 lg:grid-cols-3 lg:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isExpanded = expandedIndex === index;

            return (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 transition-all duration-300 hover:border-[#00B4D8] hover:shadow-2xl md:rounded-3xl md:p-8"
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#00B4D8]/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>

                <div className="relative">
                  {/* Icon */}
                  <div className={`mb-5 inline-flex size-14 items-center justify-center rounded-2xl bg-gradient-to-br ${service.gradient} shadow-lg transition-transform duration-300 group-hover:scale-110 md:mb-6 md:size-16`}>
                    <Icon className="size-7 text-white md:size-8" strokeWidth={2} />
                  </div>

                  {/* Content */}
                  <h3 className="mb-2 text-xl font-bold text-[#0A2463] md:mb-3 md:text-2xl">{service.title}</h3>
                  <p className="mb-5 text-sm leading-relaxed text-gray-600 md:mb-6 md:text-base">{service.description}</p>
                  
                  {/* Expand button */}
                  <button
                    onClick={() => setExpandedIndex(isExpanded ? null : index)}
                    className="group/btn inline-flex items-center gap-2 text-sm font-medium text-[#00B4D8] transition-all hover:gap-3"
                  >
                    {isExpanded ? 'Hide details' : 'View sub-services'}
                    <ArrowRight className="size-4 transition-transform group-hover/btn:translate-x-1" />
                  </button>

                  {/* Expandable content */}
                  {isExpanded && (
                    <div className="mt-5 animate-in fade-in slide-in-from-top-2 border-t border-gray-200 pt-5 duration-300 md:mt-6 md:pt-6">
                      <ul className="space-y-2.5 md:space-y-3">
                        {service.subServices.map((subService, subIndex) => (
                          <li key={subIndex} className="flex items-start gap-3 text-sm text-gray-600">
                            <div className="mt-1.5 size-1.5 flex-shrink-0 rounded-full bg-[#00B4D8]"></div>
                            <span>{subService}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}