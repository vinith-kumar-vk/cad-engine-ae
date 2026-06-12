"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ChevronDown, Briefcase, Star, Users } from "lucide-react";

interface HeroVideoProps {
  videoSrc: string;
  poster: string;
  title: string;
  subtitle: string;
}

export default function HeroVideo({ videoSrc, poster, title, subtitle }: HeroVideoProps) {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (videoRef.current && videoRef.current.readyState >= 3) {
      setVideoLoaded(true);
    }
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }
    }
  };

  const floatingVariants = (delay: number) => ({
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 5,
        repeat: Infinity,
        repeatType: "reverse" as const,
        ease: "easeInOut" as const,
        delay
      }
    }
  });

  return (
    <section 
      ref={sectionRef}
      className="relative w-full h-[80vh] min-h-[450px] md:min-h-[600px] flex items-center justify-start overflow-hidden bg-slate-950 text-white"
    >
      {/* 1. Poster Image (Prevents flashing during video loading) */}
      <AnimatePresence>
        {!videoLoaded && (
          <motion.img
            src={poster}
            alt="Hero Background Poster"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 w-full h-full object-cover z-0"
          />
        )}
      </AnimatePresence>

      {/* 2. Autoplaying Background Video */}
      <motion.video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        onCanPlayThrough={() => setVideoLoaded(true)}
        initial={{ opacity: 0 }}
        animate={{ opacity: videoLoaded ? 1 : 0 }}
        transition={{ duration: 1.0, ease: "easeOut" }}
        className="absolute inset-0 w-full h-full object-cover z-0"
        poster={poster}
      >
        <source src={videoSrc} type="video/mp4" />
      </motion.video>

      {/* 3. Dark Gradient Overlay */}
      <div 
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background: "linear-gradient(90deg, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.6) 45%, rgba(0,0,0,0.25) 100%)"
        }}
      />

      {/* Blueprint Grid Decor Overlay */}
      <div className="absolute inset-0 engineering-grid opacity-[0.04] z-10 pointer-events-none" />

      {/* 4. Left-Aligned Content Overlay */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full h-full flex items-center relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-8 space-y-6"
          >
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-primary/20 border border-brand-primary/30 text-brand-accent text-xs font-bold tracking-wider uppercase"
            >
              <span className="flex h-2 w-2 rounded-full bg-brand-accent animate-pulse" />
              ISO 19650 Certified digital studio
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] max-w-3xl"
            >
              {title}
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-slate-350 text-base sm:text-lg lg:text-xl leading-relaxed max-w-2xl font-medium"
            >
              {subtitle}
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4 pt-2"
            >
              <Link
                href="/services"
                className="bg-brand-primary hover:bg-brand-primary-hover text-white font-bold px-8 py-4 rounded-lg transition-all shadow-lg shadow-brand-primary/30 flex items-center gap-2 cursor-pointer text-sm md:text-base active:scale-95 duration-150"
              >
                Explore Services
              </Link>
              <Link
                href="/contact"
                className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-bold px-8 py-4 rounded-lg border border-white/20 transition-all cursor-pointer text-sm md:text-base active:scale-95 duration-150"
              >
                Contact Us
              </Link>
            </motion.div>
          </motion.div>

          {/* Floating Glassmorphism Metric Badges */}
          <div className="lg:col-span-4 relative h-[350px] hidden lg:flex items-center justify-end">
            <div className="relative w-full max-w-[320px] h-full flex flex-col justify-center gap-6">
              
              {/* Card 1 */}
              <motion.div
                variants={floatingVariants(0)}
                animate="animate"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="glass-panel-dark px-5 py-4 rounded-xl border border-white/10 flex items-center gap-3.5 shadow-lg relative right-6"
              >
                <div className="h-10 w-10 bg-brand-accent/20 rounded-full flex items-center justify-center text-brand-accent shrink-0">
                  <Briefcase size={20} />
                </div>
                <div>
                  <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest">Execution</span>
                  <span className="text-white text-sm font-extrabold">2,500+ Projects Delivered</span>
                </div>
              </motion.div>

              {/* Card 2 */}
              <motion.div
                variants={floatingVariants(1.5)}
                animate="animate"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="glass-panel-dark px-5 py-4 rounded-xl border border-white/10 flex items-center gap-3.5 shadow-lg relative left-6"
              >
                <div className="h-10 w-10 bg-amber-500/20 rounded-full flex items-center justify-center text-amber-400 shrink-0">
                  <Star size={20} className="fill-amber-400/20" />
                </div>
                <div>
                  <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest">Industry Standing</span>
                  <span className="text-white text-sm font-extrabold">20+ Years Experience</span>
                </div>
              </motion.div>

              {/* Card 3 */}
              <motion.div
                variants={floatingVariants(0.7)}
                animate="animate"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="glass-panel-dark px-5 py-4 rounded-xl border border-white/10 flex items-center gap-3.5 shadow-lg relative right-4"
              >
                <div className="h-10 w-10 bg-blue-500/20 rounded-full flex items-center justify-center text-blue-400 shrink-0">
                  <Users size={20} />
                </div>
                <div>
                  <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest">Global Reach</span>
                  <span className="text-white text-sm font-extrabold">750+ Clients Worldwide</span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* 5. Animated Scroll Down Link */}
      <motion.div 
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 0.7, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1.5 cursor-pointer hover:opacity-100 transition-opacity"
        onClick={() => {
          if (sectionRef.current) {
            window.scrollTo({
              top: sectionRef.current.offsetHeight,
              behavior: "smooth"
            });
          }
        }}
      >
        <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Scroll Down</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={20} className="text-brand-accent" />
        </motion.div>
      </motion.div>
    </section>
  );
}
