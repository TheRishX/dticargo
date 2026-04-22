'use client';

import { motion } from 'motion/react';
import { ArrowRight, Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white relative w-full flex justify-center overflow-hidden border-t border-gray-100">
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
         <div className="w-full max-w-4xl h-full bg-gradient-to-tr from-emerald-100/50 to-teal-50/50 blur-[100px] rounded-full" />
      </div>

      <div className="max-w-7xl w-full px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div>
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
              className="text-gray-600 text-lg mb-10 max-w-md"
           >
              Partner with DTI Cargo and experience a new standard of logistics efficiency. Let&apos;s discuss your supply chain needs.
           </motion.p>

           <div className="space-y-6">
              <div className="flex items-center gap-4 text-gray-700">
                <div className="w-10 h-10 rounded-full bg-[#F5F7F2] border border-emerald-100 flex items-center justify-center text-emerald-600"><Phone className="w-4 h-4" /></div>
                <div>
                  <p className="font-semibold text-[#1A2E20]">(800) 555-0199</p>
                  <p className="text-sm font-light uppercase tracking-wider text-emerald-700">24/7 Dispatch</p>
                </div>
              </div>
              <div className="flex items-center gap-4 text-gray-700">
                <div className="w-10 h-10 rounded-full bg-[#F5F7F2] border border-emerald-100 flex items-center justify-center text-emerald-600"><Mail className="w-4 h-4" /></div>
                 <div>
                  <p className="font-semibold text-[#1A2E20]">quotes@dticargo.com</p>
                  <p className="text-sm font-light uppercase tracking-wider text-emerald-700">Sales & Inquiries</p>
                </div>
              </div>
              <div className="flex items-center gap-4 text-gray-700">
                <div className="w-10 h-10 rounded-full bg-[#F5F7F2] border border-emerald-100 flex items-center justify-center text-emerald-600"><MapPin className="w-4 h-4" /></div>
                 <div>
                  <p className="font-semibold text-[#1A2E20]">100 Logistics Way, Suite 400</p>
                  <p className="text-sm font-light uppercase tracking-wider text-emerald-700">Chicago, IL 60601</p>
                </div>
              </div>
           </div>
        </div>

        <motion.div 
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{ delay: 0.2 }}
           className="bg-white border border-gray-200 p-8 md:p-10 rounded-3xl backdrop-blur-xl shadow-2xl shadow-emerald-900/10"
        >
           <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-6">
                 <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-emerald-800 mb-2">First Name</label>
                    <input type="text" className="w-full bg-transparent border-b border-gray-300 pb-2 text-[#1A2E20] focus:outline-none focus:border-emerald-500 transition-colors" />
                 </div>
                 <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-emerald-800 mb-2">Last Name</label>
                    <input type="text" className="w-full bg-transparent border-b border-gray-300 pb-2 text-[#1A2E20] focus:outline-none focus:border-emerald-500 transition-colors" />
                 </div>
              </div>
              <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-emerald-800 mb-2">Company Email</label>
                  <input type="email" className="w-full bg-transparent border-b border-gray-300 pb-2 text-[#1A2E20] focus:outline-none focus:border-emerald-500 transition-colors" />
              </div>
               <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-emerald-800 mb-2">Freight Details (Optional)</label>
                  <textarea rows={3} className="w-full bg-transparent border-b border-gray-300 pb-2 text-[#1A2E20] focus:outline-none focus:border-emerald-500 transition-colors resize-none" />
              </div>
              <button className="mt-4 bg-[#1A2E20] text-white py-4 rounded-full font-semibold hover:bg-emerald-900 transition-colors flex justify-center items-center gap-2 group shadow-xl shadow-emerald-900/20">
                 Request Quote <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
           </form>
        </motion.div>
      </div>
    </section>
  );
}
