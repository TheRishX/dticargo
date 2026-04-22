'use client';

import { motion } from 'motion/react';
import Image from 'next/image';

const industries = [
  { name: 'Retail & Consumer Goods', img: 'https://picsum.photos/seed/retail1/800/600' },
  { name: 'E-commerce Fulfillment', img: 'https://picsum.photos/seed/ecommerce2/800/600' },
  { name: 'Manufacturing & Industrial', img: 'https://picsum.photos/seed/industry/800/600' },
  { name: 'Automotive Parts', img: 'https://picsum.photos/seed/auto1/800/600' },
  { name: 'Healthcare & Pharma', img: 'https://picsum.photos/seed/health2/800/600' },
];

export default function Industries() {
  return (
    <section id="industries" className="py-24 bg-[#FAF9F6] w-full flex justify-center overflow-hidden border-t border-gray-200">
      <div className="max-w-7xl w-full px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <motion.div 
             initial={{ opacity: 0, x: -20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="max-w-2xl"
          >
            <h2 className="text-3xl md:text-5xl font-display font-bold text-[#1A2E20] mb-4">
              Specialized Solutions for <br />
              <span className="text-emerald-700">Every Industry.</span>
            </h2>
          </motion.div>
          <motion.p 
             initial={{ opacity: 0, x: 20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="text-gray-600 max-w-sm md:text-right"
          >
            Our logistics experts understand the unique regulatory and handling requirements of your specific sector.
          </motion.p>
        </div>

        <div className="flex overflow-x-auto pb-8 md:grid md:grid-cols-5 md:pb-0 gap-6 snap-x snap-mandatory hide-scrollbar">
          {industries.map((ind, idx) => (
            <motion.div
               key={ind.name}
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: idx * 0.1 }}
               className="group min-w-[280px] md:min-w-0 md:w-full aspect-[3/4] md:aspect-[2/3] relative rounded-2xl overflow-hidden snap-center cursor-pointer shadow-lg shadow-gray-200/50"
            >
               <Image 
                 src={ind.img} 
                 alt={ind.name} 
                 fill 
                 className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                 referrerPolicy="no-referrer"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-[#1A2E20] via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
               <div className="absolute inset-0 border border-white/20 rounded-2xl" />
               
               <div className="absolute bottom-6 left-6 right-6">
                 <div className="w-8 h-1 bg-emerald-500 mb-4 transition-all duration-300 group-hover:w-12 group-hover:bg-lime-400 rounded-full" />
                 <h3 className="text-white font-semibold text-lg drop-shadow-md">{ind.name}</h3>
               </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
