import { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

export const FAQ = () => {
  const faqs: FAQItem[] = [
    {
      question: 'Who is this workshop for? Does my child need prior coding experience?',
      answer: 'This workshop is designed specifically for children aged 8 to 14 years. No prior coding, robotics, or engineering experience is required! We start from absolute scratch and build up concepts step-by-step through fun, block-based programming.',
    },
    {
      question: 'Do we need to buy any physical robotic kits for this course?',
      answer: 'No physical kits are required! We utilize state-of-the-art virtual web-based robotics simulators (such as Tinkercad and VEXcode). This allows children to program and observe 3D robots performing tasks without any expensive hardware investments.',
    },
    {
      question: 'What are the technical requirements to attend the classes?',
      answer: 'Your child will need a laptop, desktop computer, or Chromebook with a functional webcam, microphone, and a stable internet connection. All coding and simulation tools run directly inside the Google Chrome browser.',
    },
    {
      question: 'What happens if my child misses a live online session?',
      answer: 'Do not worry! All live interactive Zoom sessions are recorded. Recordings are uploaded to the student portal within 2 hours of class completion. Additionally, children can connect with our dedicated mentors on our support platform to ask questions.',
    },
    {
      question: 'How and when will the certificate be issued?',
      answer: 'Certificates of Achievement are issued digitally by GEMA Education Technology. Once your child successfully completes and showcases their Week 4 graduation project, the certificate will be emailed directly to the parent within 48 hours.',
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0); // Default open the first one

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-slate-50 border-t border-slate-100">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-bold text-accent-600 uppercase tracking-widest bg-accent-50 px-3 py-1 rounded-full">
            FAQ Section
          </span>
          <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl mt-4 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-600">
            Have questions about the workshop? We have answers to help you make the right choice for your child.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none hover:bg-slate-50 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <HelpCircle className={`h-5 w-5 shrink-0 ${isOpen ? 'text-primary-500' : 'text-slate-400'}`} />
                    <span className="font-bold text-slate-800 text-sm sm:text-base leading-tight">
                      {faq.question}
                    </span>
                  </div>
                  <div className="shrink-0 ml-4 rounded-full bg-slate-100 p-1 text-slate-500">
                    {isOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                  </div>
                </button>

                {/* Smooth collapsable content */}
                <div
                  className={`transition-all duration-300 ease-in-out ${
                    isOpen ? 'max-h-60 border-t border-slate-100 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
                  }`}
                >
                  <p className="p-6 text-sm text-slate-600 leading-relaxed bg-slate-50/50">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Support CTA */}
        <div className="text-center mt-12 bg-white rounded-2xl p-6 border border-slate-100 shadow-sm max-w-xl mx-auto">
          <p className="text-xs text-slate-500">
            Still have questions? Reach out to our summer camp advisors at{' '}
            <a href="mailto:support@kidrove.com" className="font-bold text-primary-600 hover:underline">
              support@kidrove.com
            </a>{' '}
            or call/WhatsApp{' '}
            <span className="font-bold text-slate-800">+91 98765 43210</span>. We respond within a few hours!
          </p>
        </div>
      </div>
    </section>
  );
};
