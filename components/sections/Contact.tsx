'use client';

import { motion } from 'motion/react';
import { ArrowRight, Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white relative w-full flex justify-center overflow-hidden border-t border-gray-100">
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
         <div className="w-full max-w-4xl h-full bg-gradient-to-tr from-emerald-100/50 to-teal-50/50 blur-[100px] rounded-full" />
      </div>

      <div className="max-w-4xl w-full px-6 relative z-10 flex flex-col items-center text-center">
        <motion.h2 
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="text-4xl md:text-6xl font-display font-bold text-[#1A2E20] mb-6 leading-tight"
        >
           Move Your Freight <br />
           <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">Today.</span>
        </motion.h2>
        <motion.p 
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ delay: 0.1 }}
           className="text-gray-600 text-lg mb-12 max-w-2xl"
        >
           Partner with DTI Cargo and experience a new standard of transportation efficiency. Let&apos;s discuss your hauling needs.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
           <div className="flex flex-col items-center gap-4 text-gray-700 p-6 rounded-2xl bg-white border border-gray-100 shadow-sm">
             <div className="w-12 h-12 rounded-full bg-[#F5F7F2] border border-emerald-100 flex items-center justify-center text-emerald-600"><Phone className="w-6 h-6" /></div>
             <div className="text-center">
               <p className="font-semibold text-[#1A2E20]">+1 (323) 408-0241</p>
               <p className="text-sm font-light uppercase tracking-wider text-emerald-700">24/7 Dispatch</p>
             </div>
           </div>
           <div className="flex flex-col items-center gap-4 text-gray-700 p-6 rounded-2xl bg-white border border-gray-100 shadow-sm">
             <div className="w-12 h-12 rounded-full bg-[#F5F7F2] border border-emerald-100 flex items-center justify-center text-emerald-600"><Mail className="w-6 h-6" /></div>
              <div className="text-center">
               <p className="font-semibold text-[#1A2E20]">Support@dticargo.com</p>
               <p className="text-sm font-light uppercase tracking-wider text-emerald-700">Sales & Inquiries</p>
             </div>
           </div>
           <div className="flex flex-col items-center gap-4 text-gray-700 p-6 rounded-2xl bg-white border border-gray-100 shadow-sm">
             <div className="w-12 h-12 rounded-full bg-[#F5F7F2] border border-emerald-100 flex items-center justify-center text-emerald-600"><MapPin className="w-6 h-6" /></div>
              <div className="text-center">
               <p className="font-semibold text-[#1A2E20]">548 Bacon Ridge Way</p>
               <p className="text-sm font-light uppercase tracking-wider text-emerald-700">CA 92377</p>
             </div>
           </div>
        </div>
      </div>
    </section>
  );
}
