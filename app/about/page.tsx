'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'motion/react';
import { Target, Globe, Shield, Users } from 'lucide-react';
import Image from 'next/image';

export default function About() {
  const iconMap = { Target, Globe, Shield, Users };
  const values = [
    { iconName: 'Target' as const, title: 'Precision Execution', desc: 'Every mile, every minute is optimized for maximum efficiency.', color: 'text-emerald-600' },
    { iconName: 'Shield' as const, title: 'Uncompromising Safety', desc: 'Industry-leading protocols ensure your cargo and our partners arrive safely.', color: 'text-teal-600' },
    { iconName: 'Globe' as const, title: 'Nationwide Network', desc: 'Instant access to vetted carriers spanning coast-to-coast.', color: 'text-lime-600' },
    { iconName: 'Users' as const, title: 'Trusted Partnership', desc: 'We act as an extension of your team, providing 24/7 dedicated support.', color: 'text-indigo-500' }
  ];

  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center w-full min-h-screen bg-white pt-24 pb-12 overflow-hidden">
        
        {/* Hero Section */}
        <section className="w-full max-w-7xl px-6 py-16 md:py-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-display font-bold text-[#1A2E20] mb-6 leading-tight">
              Driving the Future of <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">Logistics.</span>
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Founded with a vision to streamline transportation through modern technology, DTI Cargo combines a high-quality fleet with cutting-edge 4D route optimization. We are a dedicated trucking company specializing in moving your high-value assets with speed, precision, and reliable capacity.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative h-[400px] w-full rounded-3xl overflow-hidden shadow-2xl shadow-emerald-900/10 border border-gray-100"
          >
            <Image
              src="https://picsum.photos/seed/logistics/1000/800"
              alt="Logistics Technology"
              fill
              className="object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1A2E20]/80 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 text-white font-display font-semibold text-2xl tracking-tighter">
              DTI<span className="text-emerald-400">CARGO</span>
            </div>
          </motion.div>
        </section>

        {/* Our Mission */}
        <section className="w-full bg-[#F5F7F2] py-24 flex justify-center border-t border-gray-100">
           <div className="max-w-4xl w-full px-6 text-center">
             <motion.div
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
             >
                <h2 className="text-3xl md:text-5xl font-display font-bold text-[#1A2E20] mb-6">Our Mission</h2>
                <p className="text-xl text-gray-600 leading-relaxed font-light">
                  To empower modern businesses by providing scalable, perfectly executed transportation solutions that remove friction from the supply chain, reduce operational costs, and deliver absolute peace of mind.
                </p>
             </motion.div>
           </div>
        </section>

        {/* Values Section */}
        <section className="w-full max-w-7xl px-6 py-24">
           <div className="text-center mb-16">
             <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl md:text-5xl font-display font-bold text-[#1A2E20]"
             >
                Built on <span className="text-emerald-700">Core Values.</span>
             </motion.h2>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
             {values.map((val, idx) => {
                const Icon = iconMap[val.iconName];
                return (
                 <motion.div
                    key={val.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="p-8 rounded-3xl bg-white border border-gray-100 hover:border-emerald-200 hover:shadow-xl hover:shadow-emerald-900/5 transition-all text-center flex flex-col items-center"
                 >
                    <div className="w-14 h-14 rounded-2xl bg-[#F5F7F2] flex items-center justify-center mb-6 shadow-sm">
                       {Icon && <Icon className={`w-6 h-6 ${val.color}`} />}
                    </div>
                    <h3 className="text-xl font-semibold text-[#1A2E20] mb-3">{val.title}</h3>
                    <p className="text-gray-600 focus:text-gray-700 font-light">{val.desc}</p>
                 </motion.div>
                );
             })}
           </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
