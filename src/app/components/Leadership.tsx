import { Mail, Users } from 'lucide-react';
import duncanPhoto from 'figma:asset/bce01225830dbf22910498b30f6fcd64d5bb7ba4.png';
import michaelPhoto from 'figma:asset/102dd554a8f10f0d66279a677b8a5c2edbac92d1.png';

const leaders = [
  {
    name: 'Duncan Muhilikha',
    title: 'Founder & Lead Consultant',
    description: 'Leads Datawave Consultancy with a focus on data driven decision making, digital execution, and scalable delivery.',
    photo: duncanPhoto,
    gradient: 'from-[#00B4D8] to-[#0ea5e9]'
  },
  {
    name: 'Michael Ajayi',
    title: 'Senior Engineer & Lead Research Advisor',
    description: 'Brings extensive experience across engineering systems, research leadership, and large-scale project coordination.',
    photo: michaelPhoto,
    gradient: 'from-[#0A2463] to-[#1e4a8a]'
  }
];

export function Leadership() {
  return (
    <section className="relative overflow-hidden bg-white px-6 py-16 md:px-12 md:py-20 lg:px-24 lg:py-24">
      {/* Background decoration */}
      <div className="absolute right-0 top-0 h-full w-1/2 bg-gradient-to-l from-gray-50 to-transparent"></div>

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-12 text-center md:mb-16">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-[#00B4D8]/10 px-4 py-2">
            <Users className="size-4 text-[#00B4D8]" />
            <span className="text-sm font-medium text-[#0A2463]">Leadership</span>
          </div>
          
          <h2 className="mb-6 text-4xl font-bold text-[#0A2463] lg:text-5xl">
            Meet Our Team
          </h2>
          
          <p className="mx-auto max-w-3xl text-lg text-gray-600">
            Experienced professionals committed to delivering exceptional results
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 md:gap-8">
          {leaders.map((leader, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 transition-all duration-300 hover:border-[#00B4D8] hover:shadow-2xl md:rounded-3xl md:p-10"
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#00B4D8]/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>

              <div className="relative">
                {/* Profile Photo */}
                <div className="mb-6 inline-block md:mb-8">
                  <div className="relative mb-4 size-20 overflow-hidden rounded-2xl shadow-xl ring-4 ring-white transition-transform duration-300 group-hover:scale-105 md:size-24">
                    <img 
                      src={leader.photo} 
                      alt={leader.name}
                      className="size-full object-cover"
                    />
                  </div>
                </div>

                {/* Content */}
                <h3 className="mb-2 text-2xl font-bold text-[#0A2463] md:text-3xl">{leader.name}</h3>
                <div className="mb-4 flex items-center gap-2 text-[#00B4D8] md:mb-6">
                  <div className="h-px w-8 bg-[#00B4D8]"></div>
                  <span className="text-sm font-medium md:text-base">{leader.title}</span>
                </div>
                <p className="mb-6 text-base leading-relaxed text-gray-600 md:mb-8 md:text-lg">{leader.description}</p>

                {/* Email button */}
                <a 
                  href="mailto:info@datawaveconsultancy.com"
                  className="inline-flex size-10 items-center justify-center rounded-lg border border-gray-200 text-gray-600 transition-all hover:border-[#00B4D8] hover:bg-[#00B4D8] hover:text-white"
                >
                  <Mail className="size-5" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Team values */}
        <div className="mt-12 grid gap-6 rounded-2xl border border-gray-200 bg-gradient-to-br from-gray-50 to-white p-8 md:mt-16 md:grid-cols-3 md:rounded-3xl md:p-12">
          <div className="text-center">
            <div className="mb-3 text-4xl">🎯</div>
            <h4 className="mb-2 font-semibold text-[#0A2463]">Results-Driven</h4>
            <p className="text-sm text-gray-600">Focused on delivering measurable outcomes</p>
          </div>
          <div className="text-center">
            <div className="mb-3 text-4xl">🤝</div>
            <h4 className="mb-2 font-semibold text-[#0A2463]">Collaborative</h4>
            <p className="text-sm text-gray-600">Working closely with your team</p>
          </div>
          <div className="text-center">
            <div className="mb-3 text-4xl">💡</div>
            <h4 className="mb-2 font-semibold text-[#0A2463]">Innovative</h4>
            <p className="text-sm text-gray-600">Always seeking better solutions</p>
          </div>
        </div>
      </div>
    </section>
  );
}