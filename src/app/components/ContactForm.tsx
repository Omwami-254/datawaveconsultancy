import { useState } from 'react';
import { Send, Mail, CheckCircle2, Sparkles } from 'lucide-react';

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Send form data to info@datawaveconsultancy.com
    const mailtoLink = `mailto:info@datawaveconsultancy.com?subject=New Request from ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nOrganization: ${formData.organization || 'Not specified'}\n\nMessage:\n${formData.message}`
    )}`;
    
    window.location.href = mailtoLink;
    
    // Show success message
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', organization: '', message: '' });
    }, 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-50 px-6 py-16 md:px-12 md:py-20 lg:px-24 lg:py-24">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute left-1/4 top-1/4 size-96 rounded-full bg-[#00B4D8]/5 blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 size-96 rounded-full bg-[#0A2463]/5 blur-3xl"></div>
      </div>

      <div className="relative mx-auto max-w-5xl">
        <div className="mb-10 text-center md:mb-12">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-[#00B4D8]/10 px-4 py-2">
            <Sparkles className="size-4 text-[#00B4D8]" />
            <span className="text-sm font-medium text-[#0A2463]">Work With Us</span>
          </div>
          
          <h2 className="mb-6 text-3xl font-bold text-[#0A2463] md:text-4xl lg:text-5xl">
            Ready to Get Started?
          </h2>
          
          <div className="mx-auto mb-6 h-1.5 w-24 rounded-full bg-gradient-to-r from-[#00B4D8] to-[#0ea5e9] md:mb-8"></div>
          
          <p className="mx-auto max-w-3xl text-base text-gray-600 md:text-lg">
            If you're planning a project, research initiative, or need structured support across data, digital, or delivery, send a request and we'll review your needs.
          </p>
        </div>

        <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-2xl md:rounded-3xl">
          {isSubmitted ? (
            <div className="px-6 py-16 text-center md:px-12 md:py-20">
              <div className="mx-auto mb-6 flex size-16 items-center justify-center rounded-full bg-gradient-to-br from-[#00B4D8] to-[#0ea5e9] shadow-lg md:size-20">
                <CheckCircle2 className="size-8 text-white md:size-10" strokeWidth={2} />
              </div>
              <h3 className="mb-4 text-3xl font-bold text-[#0A2463]">Request Sent Successfully!</h3>
              <p className="text-lg text-gray-600">We'll respond with clarity on scope, timelines, and next steps.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="p-8 md:p-12">
              <div className="grid gap-8 md:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-3 block text-sm font-semibold text-[#0A2463]">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full rounded-xl border-2 border-gray-200 bg-gray-50 px-5 py-4 text-gray-700 transition-all focus:border-[#00B4D8] focus:bg-white focus:outline-none focus:ring-4 focus:ring-[#00B4D8]/10"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="mb-3 block text-sm font-semibold text-[#0A2463]">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full rounded-xl border-2 border-gray-200 bg-gray-50 px-5 py-4 text-gray-700 transition-all focus:border-[#00B4D8] focus:bg-white focus:outline-none focus:ring-4 focus:ring-[#00B4D8]/10"
                    placeholder="john@example.com"
                  />
                </div>

                <div className="md:col-span-2">
                  <label htmlFor="organization" className="mb-3 block text-sm font-semibold text-[#0A2463]">
                    Organization <span className="font-normal text-gray-500">(optional)</span>
                  </label>
                  <input
                    type="text"
                    id="organization"
                    name="organization"
                    value={formData.organization}
                    onChange={handleChange}
                    className="w-full rounded-xl border-2 border-gray-200 bg-gray-50 px-5 py-4 text-gray-700 transition-all focus:border-[#00B4D8] focus:bg-white focus:outline-none focus:ring-4 focus:ring-[#00B4D8]/10"
                    placeholder="Your company or organization"
                  />
                </div>

                <div className="md:col-span-2">
                  <label htmlFor="message" className="mb-3 block text-sm font-semibold text-[#0A2463]">
                    How can we help? *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Brief description of your project or request..."
                    className="w-full rounded-xl border-2 border-gray-200 bg-gray-50 px-5 py-4 text-gray-700 transition-all focus:border-[#00B4D8] focus:bg-white focus:outline-none focus:ring-4 focus:ring-[#00B4D8]/10"
                  />
                </div>
              </div>

              <div className="mt-8 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                <button
                  type="submit"
                  className="group inline-flex items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-[#00B4D8] to-[#0ea5e9] px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all hover:scale-105 hover:shadow-xl"
                >
                  <Send className="size-5 transition-transform group-hover:translate-x-1" />
                  Send Request
                </button>

                <div className="flex items-center gap-3">
                  <div className="flex size-12 items-center justify-center rounded-xl bg-gray-100">
                    <Mail className="size-6 text-[#00B4D8]" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Or email us directly</div>
                    <a
                      href="mailto:info@datawaveconsultancy.com"
                      className="font-medium text-[#00B4D8] transition-colors hover:text-[#0ea5e9]"
                    >
                      info@datawaveconsultancy.com
                    </a>
                  </div>
                </div>
              </div>

              <p className="mt-6 text-center text-sm text-gray-500">
                We respond with clarity on scope, timelines, and next steps.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}