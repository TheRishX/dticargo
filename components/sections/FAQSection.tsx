'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'What services do you provide?',
    answer: 'We offer specialized trucking solutions including Full Truckload (FTL), Less Than Truckload (LTL), Warehousing, Expedited Freight, Local Hauling, and Dedicated Fleet Services.',
  },
  {
    question: 'How can I track my shipment?',
    answer: 'You can trace the general route map and hauling paths directly from our homepage. For exact load tracking, our upcoming customer portal provides real-time GPS precision updates.',
  },
  {
    question: 'How quickly can I get a quote?',
    answer: 'You can get an instant estimate by contacting our sales team via the Get a Quote button. We typically respond with comprehensive rate quotes within 15 minutes during standard operational hours.',
  },
  {
    question: 'Do you handle cross-border shipping?',
    answer: 'Yes, we primarily operate on robust nationwide US routes but provide seamless hauling services across the North American borders (Canada and Mexico) using our specialized assets.',
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<string | null>(null);

  const toggleFAQ = (question: string) => {
    setOpenIndex(openIndex === question ? null : question);
  };

  return (
    <section id="faq" className="py-24 bg-[#F5F7F2] relative w-full flex justify-center border-t border-gray-100">
      <div className="max-w-3xl w-full px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold text-[#1A2E20] mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-600 text-lg">Everything you need to know about our trucking and hauling services.</p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <motion.div 
              key={faq.question}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <button
                onClick={() => toggleFAQ(faq.question)}
                className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
              >
                <span className="text-lg font-semibold text-[#1A2E20]">{faq.question}</span>
                <motion.span
                  animate={{ rotate: openIndex === faq.question ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="w-8 h-8 rounded-full bg-emerald-50 flex items-center justify-center flex-shrink-0 ml-4"
                >
                  <ChevronDown className="w-5 h-5 text-emerald-600" />
                </motion.span>
              </button>
              
              <AnimatePresence mode="wait">
                {openIndex === faq.question && (
                  <motion.div
                    key={`${faq.question}-content`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-5 pt-1 text-gray-600 border-t border-gray-50 text-base leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
