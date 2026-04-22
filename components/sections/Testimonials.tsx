'use client';

import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

const testimonials = [
  { quote: "Their API integration is flawless. We reduced manual data entry by 90% and have total visibility into our supply chain.", author: "Sarah Jenkins", role: "VP Supply Chain, TechCorp" },
  { quote: "When you have high-value freight that needs to move across the country overnight, DTI Cargo is the only call you make.", author: "Michael Chang", role: "Logistics Manager, AutoParts Hub" },
  { quote: "Reliable, communicative, and transparent. The tracking interface alone solved half of our customer service inquiries.", author: "Elena Rodriguez", role: "COO, E-com Retail" },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-[#F5F7F2] relative w-full flex justify-center border-t border-gray-100">
       <div className="max-w-7xl w-full px-6">
          <motion.div 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="text-center mb-16"
          >
             <h2 className="text-3xl md:text-5xl font-display font-bold text-[#1A2E20]">Trust <span className="text-emerald-700">Earned.</span></h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             {testimonials.map((test, idx) => (
                <motion.div
                   key={test.author}
                   initial={{ opacity: 0, y: 30 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   transition={{ delay: idx * 0.1 }}
                   className="p-8 rounded-3xl bg-white border border-gray-200 hover:border-emerald-200 hover:shadow-xl hover:shadow-emerald-900/5 transition-all relative group"
                >
                   <Quote className="w-10 h-10 text-emerald-100 mb-6 group-hover:text-emerald-500/30 transition-colors" />
                   <p className="text-gray-600 text-lg mb-8 italic">&quot;{test.quote}&quot;</p>
                   <div>
                     <p className="text-[#1A2E20] font-semibold">{test.author}</p>
                     <p className="text-sm text-emerald-700">{test.role}</p>
                   </div>
                </motion.div>
             ))}
          </div>
       </div>
    </section>
  );
}
