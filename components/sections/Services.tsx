'use client';

import { motion } from 'motion/react';
import { Truck, Package, Anchor, Plane, Warehouse, Combine } from 'lucide-react';

const iconMap = {
  Combine,
  Truck,
  Package,
  Warehouse,
  Anchor,
  Plane
};

const services = [
  {
    iconName: 'Combine',
    title: 'Local & Regional Hauling',
    description: 'Expert regional distribution with a dedicated fleet ensuring your freight arrives on schedule.',
    routePath: 'M0 20 Q 50 -10, 100 20',
    color: '#059669', // emerald-600
    vehicle: 'truck',
  },
  {
    iconName: 'Truck',
    title: 'Full Truckload (FTL)',
    description: 'Dedicated capacity for large shipments. Direct routes ensuring maximum speed.',
    routePath: 'M0 10 L 100 10',
    color: '#0d9488', // teal-600
    vehicle: 'truck',
  },
  {
    iconName: 'Package',
    title: 'Less Than Truckload (LTL)',
    description: 'Cost-effective hauling for smaller loads. Pay only for the space you use.',
    routePath: 'M0 15 Q 15 15, 25 10 T 50 5 T 75 10 T 100 15',
    color: '#65a30d', // lime-600
    vehicle: 'truck',
  },
  {
    iconName: 'Warehouse',
    title: 'Warehousing',
    description: 'State-of-the-art facilities offering secure storage and cross-docking.',
    routePath: 'M0 20 Q 25 10, 50 10 T 100 0',
    color: '#15803d', // green-700
    vehicle: 'truck',
  },
  {
    iconName: 'Anchor',
    title: 'Expedited Freight',
    description: 'Direct, time-sensitive transport solutions using our most reliable dedicated assets.',
    routePath: 'M0 0 Q 30 20, 60 15 T 100 10',
    color: '#10b981', // emerald-500
    vehicle: 'plane',
  },
  {
    iconName: 'Plane',
    title: 'Last-Mile Delivery',
    description: 'The final step of the journey, handled with precision for customer satisfaction.',
    routePath: 'M0 20 Q 30 -10, 60 0 T 100 20',
    color: '#14b8a6', // teal-500
    vehicle: 'plane',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 relative overflow-hidden bg-white z-10 w-full flex justify-center border-t border-gray-100">
       <div className="max-w-7xl w-full px-6 relative z-10">
          <div className="flex flex-col items-start mb-16">
             <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className="text-4xl md:text-5xl font-display font-bold tracking-tight text-[#1A2E20] mb-4"
             >
                 Intelligent Logistics Services
             </motion.h2>
             <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: 0.1 }}
                className="text-gray-600 max-w-2xl text-lg"
             >
                 Empowering your business with scalable, tech-driven 4D route optimization. From a single pallet to a dedicated fleet, we visualize and execute perfectly.
             </motion.p>
          </div>

          <svg className="absolute w-0 h-0" aria-hidden="true">
            <defs>
               <linearGradient id="trailerGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#ffffff"/>
                  <stop offset="20%" stopColor="#f8fafc"/>
                  <stop offset="100%" stopColor="#e2e8f0"/>
               </linearGradient>
               <linearGradient id="wheelGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#475569"/>
                  <stop offset="100%" stopColor="#0f172a"/>
               </linearGradient>
               <linearGradient id="fuselageGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#ffffff"/>
                  <stop offset="40%" stopColor="#f1f5f9"/>
                  <stop offset="100%" stopColor="#cbd5e1"/>
               </linearGradient>
               <linearGradient id="wingGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#f8fafc"/>
                  <stop offset="100%" stopColor="#94a3b8"/>
               </linearGradient>
               <linearGradient id="glassGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#94a3b8"/>
                  <stop offset="50%" stopColor="#475569"/>
                  <stop offset="100%" stopColor="#1e293b"/>
               </linearGradient>
               <linearGradient id="overlayGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#ffffff" stopOpacity="0.7"/>
                  <stop offset="40%" stopColor="#ffffff" stopOpacity="0.1"/>
                  <stop offset="100%" stopColor="#000000" stopOpacity="0.4"/>
               </linearGradient>
            </defs>
          </svg>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
             {services.map((service, index) => {
                const Icon = iconMap[service.iconName as keyof typeof iconMap];
                return (
                 <motion.div
                    key={service.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    whileHover={{ y: -5, transition: { duration: 0.2 } }}
                    className="group relative p-8 rounded-2xl bg-white border border-gray-200 hover:border-emerald-200 hover:shadow-xl hover:shadow-emerald-900/5 transition-all overflow-hidden"
                 >
                     {/* Background Subtle Gradient */}
                     <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 to-teal-50/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                     
                     <div className="relative z-10">
                         <div className="w-14 h-14 rounded-xl bg-[#F5F7F2] border border-gray-100 flex items-center justify-center mb-6 group-hover:bg-white group-hover:scale-110 transition-transform duration-300 shadow-sm">
                             {Icon && <Icon className="w-7 h-7" style={{ color: service.color }} />}
                         </div>
                         <h3 className="text-xl font-semibold text-[#1A2E20] mb-3">{service.title}</h3>
                         <p className="text-gray-600 font-light leading-relaxed mb-6">
                             {service.description}
                         </p>

                         {/* Interactive Route Visualization (Mini) */}
                         <div className="w-full h-10 mt-auto border-t border-gray-100 pt-4 flex items-center relative overflow-hidden">
                            <svg viewBox="0 0 100 20" className="w-full h-full overflow-visible" preserveAspectRatio="none">
                              {/* Base Path (always visible) */}
                              <path 
                                d={service.routePath}
                                fill="none"
                                stroke="#d1d5db" // gray-300
                                strokeWidth="1.5"
                                strokeDasharray="3 3"
                              />
                              {/* Highlight Path (animates on hover) */}
                              <motion.path 
                                d={service.routePath}
                                fill="none"
                                stroke={service.color}
                                strokeWidth="2"
                                initial={{ pathLength: 0 }}
                                whileHover={{ pathLength: 1 }}
                                transition={{ duration: 1.5, ease: "easeInOut" }}
                              />
                              {/* Animated Vehicle on hover */}
                              <g className="opacity-0 group-hover:opacity-100 transition-opacity">
                                 <animateMotion dur="3s" repeatCount="indefinite" path={service.routePath} rotate="auto" />
                                 {service.vehicle === 'truck' ? (
                                     <g transform="scale(0.35)">
                                        <rect x="-16" y="4.5" width="31" height="1.5" fill="#334155" />
                                        <rect x="-16" y="-8" width="22" height="12.5" rx="1" fill="url(#trailerGrad)" />
                                        <rect x="-16" y="-8" width="22" height="12.5" rx="1" fill="transparent" stroke="#94a3b8" strokeWidth="0.5" />
                                        <rect x="-12" y="-6" width="14" height="9" fill="transparent" stroke="#cbd5e1" strokeWidth="0.5" />
                                        <line x1="-5" y1="-6" x2="-5" y2="3" stroke="#cbd5e1" strokeWidth="0.5" />
                                        <path d="M 7 -5 L 12 -5 C 13.5 -5, 14.5 -3.5, 15 -2 L 16.5 1 C 17 2, 17 3, 17 4 L 17 5.5 C 17 6, 16.5 6.5, 16 6.5 L 7 6.5 Z" fill={service.color} />
                                        <path d="M 7 -5 L 12 -5 C 13.5 -5, 14.5 -3.5, 15 -2 L 16.5 1 C 17 2, 17 3, 17 4 L 17 5.5 C 17 6, 16.5 6.5, 16 6.5 L 7 6.5 Z" fill="url(#overlayGrad)" />
                                        <path d="M 7.5 -3.5 L 11.5 -3.5 C 12.5 -3.5, 13.2 -2.5, 13.6 -1.2 L 14.8 0.5 L 7.5 0.5 Z" fill="url(#glassGrad)" />
                                        <path d="M 8 -3.5 L 9.5 -3.5 L 8 -1 Z" fill="#ffffff" opacity="0.3" />
                                        <rect x="15.5" y="2.5" width="1.5" height="3" fill="#cbd5e1" rx="0.5" />
                                        <circle cx="16.5" cy="4.5" r="0.8" fill="#facc15" />
                                        <g fill="url(#wheelGrad)">
                                           <circle cx="-11.5" cy="6.5" r="2.8" />
                                           <circle cx="-4.5" cy="6.5" r="2.8" />
                                           <circle cx="11.5" cy="6.5" r="2.8" />
                                        </g>
                                        <g fill="#cbd5e1">
                                           <circle cx="-11.5" cy="6.5" r="1.2" />
                                           <circle cx="-4.5" cy="6.5" r="1.2" />
                                           <circle cx="11.5" cy="6.5" r="1.2" />
                                        </g>
                                     </g>
                                 ) : (
                                     <g transform="scale(0.35)">
                                        <path d="M -16 -2 L -19 -4 L -17 -4 L -14 -2 Z" fill="#94a3b8" />
                                        <rect x="-3" y="1.5" width="4" height="2" rx="1" fill="#475569" />
                                        <path d="M -4 2 L -9 -6 L -4 -6 L 2 2 Z" fill="#94a3b8" />
                                        <path d="M -18 0 C -18 -4, 12 -4, 18 -1 C 21 0, 21 2, 18 3 C 12 4, -18 4, -18 0 Z" fill="url(#fuselageGrad)" />
                                        <path d="M -15 -1.5 L -19 -9 L -13 -9 L -10 -1.5 Z" fill={service.color} />
                                        <path d="M -15 -1.5 L -19 -9 L -13 -9 L -10 -1.5 Z" fill="url(#overlayGrad)" />
                                        <path d="M -16 1 L -19 4 L -17 4 L -14 1 Z" fill="url(#wingGrad)" />
                                        <path d="M -1 2 L -7 11 L -2 11 L 5 2 Z" fill="url(#wingGrad)" />
                                        <path d="M -1 2 L -7 11 L -5 11 L 5 2 Z" fill="#ffffff" opacity="0.4" />
                                        <rect x="-1" y="4" width="6" height="2.8" rx="1.4" fill="#334155" />
                                        <rect x="-1" y="4" width="6" height="2.8" rx="1.4" fill="url(#overlayGrad)" />
                                        <path d="M -1 4.5 L 0.5 4.5 L 0.5 6.3 L -1 6.3 Z" fill="#0f172a" />
                                        <path d="M 13.5 -1 C 15 -1, 16.5 0, 17 0.5 L 14 0.5 Z" fill="url(#glassGrad)" />
                                        <path d="M -10 0 L 8 0" stroke="#475569" strokeWidth="0.8" strokeDasharray="1.5 1.5" />
                                        <rect x="9.5" y="-0.5" width="1.2" height="2" fill="transparent" stroke="#94a3b8" strokeWidth="0.3" />
                                     </g>
                                 )}
                              </g>
                            </svg>
                            <p className="absolute top-0 right-0 text-[10px] uppercase font-bold text-emerald-600/0 group-hover:text-emerald-600/100 transition-colors bg-white/80 px-1 rounded backdrop-blur">
                              Trace Route
                            </p>
                         </div>
                     </div>
                 </motion.div>
                );
             })}
          </div>
       </div>
    </section>
  );
}
