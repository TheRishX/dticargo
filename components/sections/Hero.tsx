'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import Link from 'next/link';
import { ArrowRight, MapPin, Navigation } from 'lucide-react';
import { MouseEvent, useState } from 'react';

const NODES = [
  { id: '1', cx: 15, cy: 30, label: 'Seattle' },
  { id: '2', cx: 20, cy: 75, label: 'Los Angeles' },
  { id: '3', cx: 45, cy: 45, label: 'Chicago' },
  { id: '4', cx: 60, cy: 80, label: 'Dallas' },
  { id: '5', cx: 85, cy: 35, label: 'New York' },
  { id: '6', cx: 80, cy: 70, label: 'Miami' },
];

const ROUTES = [
  { id: 'r1', path: 'M 15 30 Q 30 20 45 45', duration: 4, color: '#f59e0b' },
  { id: 'r2', path: 'M 20 75 Q 40 90 60 80', duration: 5, color: '#10b981' },
  { id: 'r3', path: 'M 45 45 Q 60 50 85 35', duration: 3.5, color: '#3b82f6' },
  { id: 'r4', path: 'M 45 45 Q 50 60 60 80', duration: 4.5, color: '#8b5cf6' },
  { id: 'r5', path: 'M 60 80 Q 75 75 80 70', duration: 3, color: '#ec4899' },
  { id: 'r6', path: 'M 85 35 Q 90 50 80 70', duration: 4, color: '#14b8a6' },
];

export default function Hero() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 100, damping: 30 });
  const mouseY = useSpring(y, { stiffness: 100, damping: 30 });

  const rotateX = useTransform(mouseY, [-500, 500], [15, -15]);
  const rotateY = useTransform(mouseX, [-500, 500], [-15, 15]);

  const hudX = useTransform(mouseX, [-500, 500], [-30, 30]);
  const hudY = useTransform(mouseY, [-500, 500], [-30, 30]);

  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.x + rect.width / 2;
    const centerY = rect.y + rect.height / 2;
    x.set(e.clientX - centerX);
    y.set(e.clientY - centerY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <section 
      className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#F5F7F2] to-white"
    >
      {/* Background Decor */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[800px] h-[800px] bg-emerald-400/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-lime-300/10 rounded-full blur-[100px]" />
        {/* Soft geometric grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_40%,#000_70%,transparent_100%)]" />
      </div>

      <div className="relative z-10 max-w-7xl w-full px-6 flex flex-col lg:flex-row items-center gap-12 mt-12">
        
        {/* Text Content */}
        <div className="flex-1 lg:pr-10 z-20 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/50 mb-6 shadow-sm shadow-emerald-900/5"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-800">4D Smart Routing Enabled</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-5xl md:text-7xl lg:text-[5.5rem] font-black tracking-tighter leading-[0.9] text-[#0A1F10] mb-6"
          >
            NATIONWIDE <br className="hidden lg:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
               LOGISTICS.
            </span> <br className="hidden lg:block" />
            REDEFINED.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg md:text-xl text-gray-600 max-w-xl mx-auto lg:mx-0 mb-10 font-light"
          >
            Experience pure supply chain efficiency. We leverage interactive 4D routing and dedicated capacity to move your freight with unmatched speed and precision.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <a href="/#contact" className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-semibold text-white bg-[#1A2E20] rounded-full overflow-hidden shadow-xl shadow-[#1A2E20]/20 hover:shadow-2xl hover:shadow-[#1A2E20]/30 transition-all">
              <span className="relative z-10 flex items-center gap-2">
                Get an Instant Quote <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </a>
            
            <a href="/#services" className="group inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-semibold text-emerald-800 bg-emerald-50 rounded-full border border-emerald-200 hover:bg-emerald-100 transition-colors">
              Explore Services <Navigation className="w-4 h-4" />
            </a>
          </motion.div>
        </div>

        {/* 4D Interactive Map Container */}
        <div className="flex-1 w-full max-w-2xl lg:max-w-none perspective-1000">
          <motion.div 
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ rotateX, rotateY }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4, ease: 'easeOut' }}
            className="w-full aspect-square md:aspect-[4/3] bg-white border border-gray-200 rounded-[2rem] shadow-2xl shadow-emerald-900/10 relative overflow-hidden group cursor-crosshair transform-style-3d"
          >
            {/* Inner Depth Layer */}
            <div className="absolute inset-4 rounded-[1.5rem] bg-[#F5F7F2]/50 border border-emerald-100 flex items-center justify-center overflow-hidden transform-style-3d">
              
              {/* Map Grid Pattern */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.05)_1px,transparent_1px)] bg-[size:20px_20px]" />
              
              <svg className="w-full h-full p-8 overflow-visible" viewBox="0 0 100 100" preserveAspectRatio="none">
                {/* Background Static Dashed Routes */}
                {ROUTES.map((route) => (
                  <path
                    key={`bg-${route.id}`}
                    d={route.path}
                    fill="none"
                    stroke="rgba(16, 185, 129, 0.15)"
                    strokeWidth="0.8"
                    strokeDasharray="2 2"
                  />
                ))}

                {/* Animated Routes Lines */}
                {ROUTES.map((route) => (
                  <motion.path
                    key={route.id}
                    d={route.path}
                    fill="none"
                    stroke={route.color}
                    strokeWidth="0.8"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ 
                      duration: route.duration, 
                      repeat: Infinity, 
                      ease: 'linear'
                    }}
                    style={{ filter: `drop-shadow(0px 0px 3px ${route.color}80)` }}
                  />
                ))}

                {/* Simulated Moving Freight (Enhanced Pulsing Dots) */}
                {ROUTES.map((route) => (
                  <g key={`dot-${route.id}`}>
                     <animateMotion dur={`${route.duration}s`} repeatCount="indefinite" path={route.path} />
                     {/* Solid Core */}
                     <circle cx="0" cy="0" r="1.5" fill={route.color} style={{ filter: `drop-shadow(0px 0px 4px ${route.color})` }} />
                     {/* Expanding Pulse Ring */}
                     <circle cx="0" cy="0" r="1.5" fill="none" stroke={route.color} strokeWidth="0.5">
                        <animate attributeName="r" from="1.5" to="6" dur="1.5s" repeatCount="indefinite" />
                        <animate attributeName="opacity" from="0.8" to="0" dur="1.5s" repeatCount="indefinite" />
                     </circle>
                  </g>
                ))}

                {/* Distribution Nodes */}
                {NODES.map((node) => (
                  <g 
                    key={node.id} 
                    transform={`translate(${node.cx}, ${node.cy})`}
                    onMouseEnter={() => setHoveredNode(node.id)}
                    onMouseLeave={() => setHoveredNode(null)}
                    className="cursor-pointer"
                  >
                    <motion.circle 
                      r="2.5" 
                      fill={hoveredNode === node.id ? "#059669" : "#1A2E20"}
                      animate={{ 
                        scale: hoveredNode === node.id ? 2 : 1,
                        opacity: hoveredNode === node.id ? 1 : 0.8
                      }}
                      className="transition-colors duration-300 drop-shadow-md"
                    />
                    
                    {/* Ripple Effect */}
                    <motion.circle 
                      r="2.5" 
                      fill="none"
                      stroke={hoveredNode === node.id ? "#059669" : "#1A2E20"}
                      strokeWidth="0.5"
                      initial={{ scale: 1, opacity: 0.5 }}
                      animate={{ scale: 4, opacity: 0 }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: 'easeOut' }}
                    />
                    
                    {/* Node Labels */}
                    <motion.text
                      y="-5"
                      textAnchor="middle"
                      className="text-[3px] font-sans font-bold uppercase tracking-wider fill-[#1A2E20]"
                      animate={{
                        opacity: hoveredNode === node.id ? 1 : 0,
                        y: hoveredNode === node.id ? -8 : -5
                      }}
                    >
                      {node.label}
                    </motion.text>
                  </g>
                ))}
              </svg>

              {/* Foreground interactive HUD element */}
              <motion.div 
                style={{ 
                   x: hudX,
                   y: hudY
                }}
                className="absolute bottom-6 right-6 backdrop-blur-md bg-white/70 border border-emerald-900/10 rounded-xl p-4 shadow-xl pointer-events-none"
              >
                  <p className="text-xs uppercase tracking-widest text-emerald-800 font-bold mb-1">Live Load</p>
                  <p className="text-xl font-mono font-semibold text-[#1A2E20]">4,209 <span className="text-sm font-sans font-normal text-gray-500">units/hr</span></p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
