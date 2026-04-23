'use client';

import { motion } from 'motion/react';
import { ShieldCheck, Zap, Headphones, LineChart } from 'lucide-react';
import { useEffect, useState } from 'react';

const iconMap = {
  Zap,
  ShieldCheck,
  Headphones,
  LineChart
};

const stats = [
  { label: 'Shipments Delivered', value: 15420, suffix: '+' },
  { label: 'Clients Served', value: 3200, suffix: '+' },
  { label: 'On-Time Rate', value: 99.8, suffix: '%' },
  { label: 'Nationwide Coverage', value: 100, suffix: '%' },
];

const features = [
  { iconName: 'Zap' as const, title: 'Hyper-Fast Delivery', desc: 'Optimized routing algorithms ensure your freight takes the fastest path.', color: 'text-amber-500' },
  { iconName: 'ShieldCheck' as const, title: 'Uncompromised Security', desc: 'End-to-end encryption and physical security protocols for high-value cargo.', color: 'text-emerald-600' },
  { iconName: 'Headphones' as const, title: '24/7 Dedicated Support', desc: 'A dedicated transportation expert is always just a phone call away.', color: 'text-teal-600' },
  { iconName: 'LineChart' as const, title: 'Advanced Tracking', desc: 'Real-time GPS tracking and API integrations for complete visibility.', color: 'text-indigo-500' },
];

function Counter({ to, suffix, decimals = 0 }: { to: number, suffix: string, decimals?: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    let animationFrame: number;
    
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / 2000, 1);
      const easing = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCount(to * easing);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [to]);

  return (
    <span className="font-display font-bold">
      {count.toFixed(decimals)}{suffix}
    </span>
  );
}

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-[#F5F7F2] relative border-t border-gray-200 w-full flex justify-center">
      <div className="max-w-7xl w-full px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        {/* Left Side: Features */}
        <div>
          <motion.h2 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="text-4xl md:text-5xl font-display font-bold text-[#1A2E20] mb-6"
          >
            Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">DTI CARGO?</span>
          </motion.h2>
          <motion.p 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.1 }}
             className="text-gray-600 text-lg mb-12"
          >
            We don&apos;t just move freight; we engineer transportation competitive advantages. Our combination of dedicated assets and technical expertise ensures your cargo is always moving.
          </motion.p>

          <div className="space-y-8">
            {features.map((feat, idx) => {
              const Icon = iconMap[feat.iconName];
              return (
              <motion.div 
                 key={feat.title}
                 initial={{ opacity: 0, x: -20 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: idx * 0.1 + 0.2 }}
                 className="flex gap-4 group"
              >
                <div className="w-12 h-12 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center shrink-0 group-hover:border-emerald-300 transition-colors">
                  {Icon && <Icon className={`w-6 h-6 ${feat.color}`} />}
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-[#1A2E20] mb-1 group-hover:text-emerald-700 transition-colors">{feat.title}</h4>
                  <p className="text-gray-600 font-light">{feat.desc}</p>
                </div>
              </motion.div>
              );
            })}
          </div>
        </div>

        {/* Right Side: Stats & Visual */}
        <div className="relative">
           {/* Abstract visual container */}
           <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="absolute inset-0 bg-gradient-to-br from-emerald-100/50 to-teal-50/50 rounded-3xl border border-emerald-100 backdrop-blur-3xl overflow-hidden pointer-events-none"
           >
              <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-200/40 rounded-full blur-[80px]" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-teal-200/40 rounded-full blur-[80px]" />
           </motion.div>

           <div className="grid grid-cols-2 gap-px bg-emerald-900/5 relative z-10 rounded-3xl overflow-hidden mt-8 lg:mt-0 shadow-lg shadow-emerald-900/5 border border-emerald-100">
              {stats.map((stat, idx) => (
                <motion.div 
                   key={stat.label}
                   initial={{ opacity: 0 }}
                   whileInView={{ opacity: 1 }}
                   viewport={{ once: true }}
                   transition={{ delay: idx * 0.1 + 0.3 }}
                   className="bg-white/80 backdrop-blur-md p-8 flex flex-col justify-center items-center text-center hover:bg-white transition-colors"
                >
                  <div className="text-4xl lg:text-5xl mb-2 text-[#1A2E20]">
                     <Counter to={stat.value} suffix={stat.suffix} decimals={stat.value % 1 !== 0 ? 1 : 0} />
                  </div>
                  <div className="text-sm text-emerald-800 uppercase tracking-widest font-semibold">{stat.label}</div>
                </motion.div>
              ))}
           </div>

           <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="absolute -bottom-8 -right-8 bg-[#1A2E20] p-6 rounded-2xl shadow-2xl shadow-emerald-900/20 max-w-xs hidden md:block"
           >
             <p className="text-white font-medium text-lg leading-tight">
               &quot;DTI Cargo reduced our transit times by 30% in the first quarter.&quot;
             </p>
             <p className="text-emerald-300 mt-2 text-sm">— Operations Dir., Global Retail</p>
           </motion.div>
        </div>

      </div>
    </section>
  );
}
