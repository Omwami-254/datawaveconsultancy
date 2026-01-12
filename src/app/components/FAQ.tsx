import { useState } from 'react';
import { Plus, Minus, HelpCircle } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: 'What types of organizations do you work with?',
    answer: 'We work with startups, growing businesses, research institutions, professional service firms, and impact-driven organizations. Engagements are tailored based on your goals, scale, and level of complexity.'
  },
  {
    question: 'Do you work with organizations outside Kenya and Nigeria?',
    answer: 'Yes. We operate a remote-first model and support teams across Kenya, Nigeria, and globally.'
  },
  {
    question: 'How do engagements typically start?',
    answer: 'Engagements usually begin with a short scoping discussion to understand your needs, objectives, and constraints. From there, we propose a clear scope, timeline, and delivery approach.'
  },
  {
    question: 'Do you offer short-term or long-term support?',
    answer: 'Both. We support fixed-scope projects, advisory engagements, and longer-term delivery or retainer-based work depending on your requirements.'
  },
  {
    question: 'Can you support research organizations and fieldwork projects?',
    answer: 'Yes. We provide structured research and fieldwork support, including planning, coordination, data collection oversight, quality assurance, monitoring and evaluation, and reporting.'
  },
  {
    question: 'Do you provide implementation or only advisory services?',
    answer: 'We provide both. Our focus is on practical execution, meaning we support strategy, implementation, and delivery—not just recommendations.'
  },
  {
    question: 'How quickly do you respond to requests?',
    answer: 'We review all requests and respond with clarity on scope, timelines, and next steps as quickly as possible.'
  },
  {
    question: 'How do we get started?',
    answer: 'Use the Send a Request button to share a brief overview of your needs, or email us directly at info@datawaveconsultancy.com.'
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white px-6 py-16 md:px-12 md:py-20 lg:px-24 lg:py-24">
      <div className="mx-auto max-w-4xl">
        <div className="mb-10 text-center md:mb-12">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-[#00B4D8]/10 px-4 py-2">
            <HelpCircle className="size-4 text-[#00B4D8]" />
            <span className="text-sm font-medium text-[#0A2463]">FAQ</span>
          </div>
          
          <h2 className="mb-6 text-3xl font-bold text-[#0A2463] md:text-4xl lg:text-5xl">
            Frequently Asked Questions
          </h2>
          
          <div className="mx-auto mb-6 h-1.5 w-24 rounded-full bg-gradient-to-r from-[#00B4D8] to-[#0ea5e9] md:mb-8"></div>
          
          <p className="mx-auto max-w-3xl text-base text-gray-600 md:text-lg">
            Everything you need to know about working with Datawave Consultancy
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="overflow-hidden rounded-2xl border-2 border-gray-200 bg-white transition-all hover:border-[#00B4D8] hover:shadow-lg"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="flex w-full items-start justify-between gap-4 p-5 text-left transition-all md:p-6"
                >
                  <span className="text-base font-semibold text-[#0A2463] md:text-lg">{faq.question}</span>
                  <div className="flex-shrink-0">
                    {isOpen ? (
                      <Minus className="size-5 text-[#00B4D8] md:size-6" strokeWidth={2} />
                    ) : (
                      <Plus className="size-5 text-[#00B4D8] md:size-6" strokeWidth={2} />
                    )}
                  </div>
                </button>

                {isOpen && (
                  <div className="animate-in fade-in slide-in-from-top-2 border-t border-gray-200 px-5 py-5 duration-300 md:px-6 md:py-6">
                    <p className="text-sm leading-relaxed text-gray-600 md:text-base">{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-16 rounded-3xl border-2 border-[#00B4D8] bg-gradient-to-br from-[#00B4D8]/5 to-transparent p-8 text-center">
          <h3 className="mb-4 text-2xl font-bold text-[#0A2463]">Still have questions?</h3>
          <p className="mb-6 text-gray-600">We're here to help. Get in touch with our team.</p>
          <a
            href="mailto:info@datawaveconsultancy.com"
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#00B4D8] to-[#0ea5e9] px-6 py-3 font-semibold text-white shadow-lg transition-all hover:scale-105 hover:shadow-xl"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}