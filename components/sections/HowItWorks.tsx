'use client';

import { motion } from 'motion/react';

const steps = [
  { number: '01', title: 'Request Quote', desc: 'Input your freight details and get an instant, transparent quote.' },
  { number: '02', title: '4D Routing', desc: 'Our AI optimizes the fastest and most efficient digital route.' },
  { number: '03', title: 'Dispatch', desc: 'A vetted, dedicated carrier is assigned and loaded.' },
  { number: '04', title: 'Delivery', desc: 'Real-time tracking until the POD is signed at destination.' },
];

export default function HowItWorks() {
  return (
    <section className="py-24 bg-white border-t border-gray-100 w-full flex justify-center">
      <div className="max-w-7xl w-full px-6">
        <motion.div 
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="mb-16 text-center md:text-left"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold text-[#1A2E20] mb-4">The DTI Process</h2>
          <p className="text-gray-600 text-lg">Streamlined logistics from point A to point B.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4 relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-10 left-[10%] right-[10%] h-px bg-gradient-to-r from-emerald-100 via-emerald-400 to-emerald-100" />

          {steps.map((step, idx) => (
             <motion.div
               key={step.title}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: idx * 0.15 }}
               className="relative z-10 flex flex-col items-center text-center group"
             >
               <div className="w-20 h-20 rounded-2xl bg-white border border-gray-200 flex items-center justify-center font-display font-bold text-2xl text-emerald-700 bg-clip-text mb-6 shadow-xl shadow-emerald-900/5 group-hover:scale-110 group-hover:border-emerald-200 transition-all duration-300">
                 {step.number}
               </div>
               <h3 className="text-[#1A2E20] font-semibold text-xl mb-2">{step.title}</h3>
               <p className="text-gray-600 font-light max-w-xs">{step.desc}</p>
             </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
