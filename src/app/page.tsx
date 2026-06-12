"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, ChevronRight } from "lucide-react";
import * as Icons from "lucide-react";

// Components
import { Counter } from "@/components/ui/Counter";
import { TestimonialSlider } from "@/components/ui/TestimonialSlider";
import HeroVideo from "@/components/sections/HeroVideo";

// Data
import {
  homeServices,
  industries,
  whyChooseUs,
  featuredProjects
} from "@/data/siteData";

// Icon mapping helper
function IconHelper({ name, className }: { name: string; className?: string }) {
  const LucideIcon = (Icons as any)[name] || Icons.HelpCircle;
  return <LucideIcon className={className} />;
}

// Framer Motion Animation Settings
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
};

export default function HomePage() {
  return (
    <div className="relative overflow-hidden">
      {/* SECTION 1 - HERO */}
      <HeroVideo
        videoSrc="/videos/hero-video.mp4"
        poster="/images/banner.jpg"
        title="Engineering Intelligence for the Future"
        subtitle="Delivering BIM, CAD, Digital Engineering, Technology Consulting, and Professional Training Solutions Across Global Industries."
      />

      {/* SECTION 2 - TRUST INDICATORS */}
      <section className="bg-brand-primary text-white py-12 md:py-16 shadow-lg relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 text-center">
            <div>
              <div className="text-3xl sm:text-5xl font-extrabold tracking-tight">
                <Counter value={750} suffix="+" />
              </div>
              <p className="text-xs sm:text-sm text-red-200 mt-2 font-bold uppercase tracking-wider">Clients Served</p>
            </div>
            <div>
              <div className="text-3xl sm:text-5xl font-extrabold tracking-tight">
                <Counter value={20} suffix="+" />
              </div>
              <p className="text-xs sm:text-sm text-red-200 mt-2 font-bold uppercase tracking-wider">Years Experience</p>
            </div>
            <div>
              <div className="text-3xl sm:text-5xl font-extrabold tracking-tight">
                <Counter value={150} suffix="+" />
              </div>
              <p className="text-xs sm:text-sm text-red-200 mt-2 font-bold uppercase tracking-wider">Industry Experts</p>
            </div>
            <div>
              <div className="text-3xl sm:text-5xl font-extrabold tracking-tight">
                <Counter value={2500} suffix="+" />
              </div>
              <p className="text-xs sm:text-sm text-red-200 mt-2 font-bold uppercase tracking-wider">Projects Delivered</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 - SERVICES */}
      <section className="py-20 md:py-28 bg-white relative">
        <div className="absolute inset-0 engineering-grid opacity-[0.02] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20 space-y-4">
            <span className="text-brand-primary text-xs font-bold tracking-widest uppercase block">Our Capabilities</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
              Elite Engineering & Digital Design Services
            </h2>
            <p className="text-slate-600 text-base md:text-lg">
              We cover the entire lifecycle of design technology solutions, ensuring precision, compliance, and optimized execution pipelines.
            </p>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {homeServices.map((service) => (
              <motion.div
                key={service.id}
                variants={fadeInUp}
                className="glass-panel p-8 rounded-2xl premium-card shadow-sm flex flex-col items-start gap-5 group border border-slate-100"
              >
                <div className="h-12 w-12 rounded-xl bg-brand-primary/5 text-brand-primary flex items-center justify-center group-hover:bg-brand-primary group-hover:text-white transition-all duration-300">
                  <IconHelper name={service.iconName} className="h-6 w-6" />
                </div>
                <div className="space-y-2.5">
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-brand-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
                <Link
                  href={`/services#${service.id}`}
                  className="mt-auto text-sm font-bold text-brand-primary hover:text-brand-primary-hover flex items-center gap-1.5 pt-4"
                >
                  Learn More
                  <ChevronRight size={16} />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SECTION 4 - INDUSTRIES */}
      <section className="py-20 md:py-28 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 engineering-grid opacity-[0.03] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20 space-y-4">
            <span className="text-brand-accent text-xs font-bold tracking-widest uppercase block">Sectors We Serve</span>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
              Driving Digital Execution Across Key Industries
            </h2>
            <p className="text-slate-400 text-base md:text-lg">
              Our specialists deliver domain-specific BIM structures, parametric machine blueprints, and enterprise technology pathways.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((ind, idx) => (
              <motion.div
                key={ind.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="group relative overflow-hidden rounded-2xl aspect-video md:aspect-[4/3] flex flex-col justify-end p-6 border border-white/10 shadow-lg cursor-pointer"
              >
                {/* Background image overlay */}
                <Image
                  src={ind.imagePath}
                  alt={ind.title}
                  fill
                  sizes="(max-w-768px) 100vw, 380px"
                  className="object-cover brightness-50 group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent z-10" />

                <div className="relative z-20 space-y-2">
                  <div className="h-10 w-10 bg-white/10 rounded-lg text-brand-accent flex items-center justify-center shrink-0 mb-4 backdrop-blur border border-white/10">
                    <IconHelper name={ind.iconName} className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-bold text-white group-hover:text-brand-accent transition-colors">
                    {ind.title}
                  </h3>
                  <p className="text-slate-350 text-xs leading-relaxed max-w-sm">
                    {ind.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5 - WHY CHOOSE US */}
      <section className="py-20 md:py-28 bg-slate-50 relative">
        <div className="absolute inset-0 engineering-grid opacity-[0.02] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Content Header */}
            <div className="lg:col-span-5 space-y-6">
              <span className="text-brand-primary text-xs font-bold tracking-widest uppercase block">Why CAD Engine</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Enterprise Design Partners You Can Count On
              </h2>
              <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                We bridge the critical gap between conceptual intent and real-world constructability. We configure custom workflows that bypass legacy hurdles and deliver absolute accuracy.
              </p>
              
              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-brand-primary/10 flex items-center justify-center text-brand-primary shrink-0 mt-0.5">
                    <CheckCircle2 size={16} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">ISO 19650 Compliance Checklist</h4>
                    <p className="text-slate-600 text-xs mt-0.5">We maintain strict compliance check gates throughout models federation.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-brand-primary/10 flex items-center justify-center text-brand-primary shrink-0 mt-0.5">
                    <CheckCircle2 size={16} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">Flexible Resource Scaling</h4>
                    <p className="text-slate-600 text-xs mt-0.5">Deploy expert drafting crews overnight to secure high-priority milestones.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Grid of features */}
            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {whyChooseUs.map((feat, idx) => (
                  <motion.div
                    key={feat.id}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.05 }}
                    className="glass-panel p-6 rounded-xl border border-slate-200/50 shadow-sm space-y-3"
                  >
                    <div className="h-10 w-10 rounded-lg bg-brand-primary/5 text-brand-primary flex items-center justify-center shrink-0">
                      <IconHelper name={feat.iconName} className="h-5 w-5" />
                    </div>
                    <h3 className="font-bold text-slate-950 text-base">{feat.title}</h3>
                    <p className="text-slate-600 text-xs leading-relaxed">{feat.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6 - FEATURED PROJECTS */}
      <section className="py-20 md:py-28 bg-white relative">
        <div className="absolute inset-0 engineering-grid opacity-[0.02] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20 space-y-4">
            <span className="text-brand-primary text-xs font-bold tracking-widest uppercase block">Our Portfolio</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight animate-fade-in">
              Milestone Engineering Projects Showcase
            </h2>
            <p className="text-slate-600 text-base md:text-lg">
              Explore how our high-precision BIM models and coordinated shop drawing layouts support major contractors globally.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((proj, idx) => (
              <motion.div
                key={proj.id}
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="glass-panel rounded-2xl overflow-hidden border border-slate-100 shadow-sm flex flex-col group"
              >
                <div className="relative aspect-video w-full overflow-hidden bg-slate-100">
                  <Image
                    src={proj.imagePath}
                    alt={proj.title}
                    fill
                    sizes="(max-w-768px) 100vw, 380px"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-slate-900/90 text-white font-bold text-[10px] tracking-widest uppercase px-3 py-1 rounded-full backdrop-blur border border-white/10">
                    {proj.category}
                  </div>
                </div>

                <div className="p-6 flex-grow flex flex-col gap-4">
                  <div className="space-y-1.5">
                    <span className="text-[10px] text-brand-primary font-bold uppercase tracking-wider block">
                      {proj.location} &bull; {proj.year}
                    </span>
                    <h3 className="text-lg font-bold text-slate-950 group-hover:text-brand-primary transition-colors leading-snug">
                      {proj.title}
                    </h3>
                    <p className="text-slate-600 text-xs leading-relaxed mt-2">
                      {proj.description}
                    </p>
                  </div>

                  <div className="mt-auto border-t border-slate-100 pt-4 flex justify-between items-center text-xs text-slate-400 font-semibold">
                    <span>Client: {proj.client}</span>
                    <Link
                      href="/contact"
                      className="text-brand-primary hover:text-brand-primary-hover flex items-center gap-1 group/btn"
                    >
                      Scope Review
                      <ChevronRight size={14} className="group-hover/btn:translate-x-0.5 transition-transform" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7 - TESTIMONIALS */}
      <section className="py-20 md:py-28 bg-slate-50 relative border-t border-b border-slate-200/40">
        <div className="absolute inset-0 engineering-grid-dense opacity-[0.03] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-10 space-y-4">
            <span className="text-brand-primary text-xs font-bold tracking-widest uppercase block">Client Reviews</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
              Trusted by Leading Contractors & Developers
            </h2>
          </div>
          <TestimonialSlider />
        </div>
      </section>

      {/* SECTION 8 - CTA */}
      <section className="relative py-20 md:py-24 bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 engineering-grid opacity-[0.04] pointer-events-none" />
        <div className="absolute inset-0 dark-engineering-radial-glow pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-brand-primary/10 rounded-full filter blur-[80px]" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
            Ready to Digitally Transform Your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-red-400">Design & Construction Workflows?</span>
          </h2>
          <p className="text-slate-350 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Partner with CAD Engine for ISO 19650 certified BIM models, high-fidelity CAD shop blueprints, and advanced technology integrations. Schedule a dedicated scoping session with our coordinators.
          </p>
          <div className="flex justify-center gap-4 flex-wrap pt-2">
            <Link
              href="/contact"
              className="bg-brand-primary hover:bg-brand-primary-hover text-white font-bold px-8 py-4 rounded-lg transition-all shadow-lg shadow-brand-primary/30 text-base cursor-pointer"
            >
              Book Scoping Session
            </Link>
            <Link
              href="/services"
              className="bg-slate-800 hover:bg-slate-700 text-white font-bold px-8 py-4 rounded-lg border border-slate-700 transition text-base cursor-pointer"
            >
              Explore Solutions
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
