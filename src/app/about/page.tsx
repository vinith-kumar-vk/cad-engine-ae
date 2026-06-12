"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Award, Compass, Eye, Heart, Layers, Target, Users, Zap } from "lucide-react";
import * as Icons from "lucide-react";
import { LinkedInIcon } from "@/components/shared/SocialIcons";

// Components
import { Counter } from "@/components/ui/Counter";

// Data
import { leadershipTeam, timelineEvents } from "@/data/siteData";

// Icon mapping helper
function IconHelper({ name, className }: { name: string; className?: string }) {
  const LucideIcon = (Icons as any)[name] || Icons.HelpCircle;
  return <LucideIcon className={className} />;
}

export default function AboutPage() {
  const coreValues = [
    {
      title: "Innovation",
      description: "Constantly pushing design tech boundaries, writing custom script modules, and embracing generative AI models.",
      icon: Zap,
      color: "text-amber-500 bg-amber-50"
    },
    {
      title: "Integrity",
      description: "Ensuring models represent physical ground truth precisely, building trust across all submittals.",
      icon: ShieldIcon,
      color: "text-emerald-500 bg-emerald-50"
    },
    {
      title: "Excellence",
      description: "Adhering to strict ISO quality control protocols, securing near-zero clash ratings on site.",
      icon: Award,
      color: "text-brand-primary bg-brand-primary/5"
    },
    {
      title: "Collaboration",
      description: "Embedding our team into client structural coordination, serving as an extension of their studio.",
      icon: Users,
      color: "text-blue-500 bg-blue-50"
    },
    {
      title: "Customer Success",
      description: "Aligning schedules, allocating emergency staff overnight, and helping clients meet strict deadlines.",
      icon: Heart,
      color: "text-red-500 bg-red-50"
    }
  ];

  function ShieldIcon(props: any) {
    return <Icons.Shield {...props} />;
  }

  return (
    <div className="relative">
      {/* 1. HERO SECTION */}
      <section className="bg-slate-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 engineering-grid opacity-[0.04] pointer-events-none" />
        <div className="absolute inset-0 dark-engineering-radial-glow pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <span className="text-brand-accent text-xs font-bold tracking-widest uppercase block">About CAD Engine</span>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Pioneering Digital Construction Engineering
          </h1>
          <p className="text-slate-350 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Bridging structural engineering precision with cloud design technology to build error-free structures.
          </p>
        </div>
      </section>

      {/* 2. COMPANY STORY */}
      <section className="py-20 bg-white relative">
        <div className="absolute inset-0 engineering-grid opacity-[0.01] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Story Image Placeholder with brand styling */}
            <div className="lg:col-span-5 relative flex justify-center">
              <div className="relative w-full max-w-[400px] aspect-square rounded-2xl overflow-hidden shadow-xl border border-slate-100 bg-slate-950 p-6 flex flex-col justify-between">
                <div className="absolute inset-0 engineering-grid opacity-[0.08]" />
                <span className="text-xs font-bold tracking-widest text-slate-400 uppercase">Est. 2006</span>
                
                <div className="space-y-4 relative z-10">
                  <span className="block text-4xl font-extrabold text-white">20 Years</span>
                  <span className="block text-sm text-brand-accent font-bold uppercase tracking-wider">Of BIM & CAD Excellence</span>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Starting as a drafting shop in Dubai, CAD Engine has evolved into a global engineering consultancy with 150+ subject matter specialists.
                  </p>
                </div>
                
                <div className="flex gap-4 border-t border-slate-800 pt-6 mt-6">
                  <div>
                    <span className="block text-lg font-bold text-white">50M+</span>
                    <span className="block text-[10px] text-slate-500 uppercase font-bold tracking-wider">Sq. Ft. Modeled</span>
                  </div>
                  <div>
                    <span className="block text-lg font-bold text-white">ISO 19650</span>
                    <span className="block text-[10px] text-slate-500 uppercase font-bold tracking-wider">Certified Processes</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Story Text */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-brand-primary text-xs font-bold tracking-widest uppercase block">Our Journey</span>
              <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
                From Precision Blueprints to Connected Digital Twins
              </h2>
              <p className="text-slate-650 text-sm md:text-base leading-relaxed">
                Founded in Dubai, UAE in 2006, CAD Engine was established with a clear mandate: to deliver high-precision, standard-compliant technical drawings that bridge the gap between design concepts and construction.
              </p>
              <p className="text-slate-650 text-sm md:text-base leading-relaxed">
                As Building Information Modeling (BIM) gained global traction, we adapted early, constructing dedicated teams of BIM coordinators, structural engineers, and parametric script technicians. We recognized that digital modeling was not just a tool, but an intelligence matrix that could optimize resource distribution, eliminate waste, and secure schedule milestones.
              </p>
              <p className="text-slate-650 text-sm md:text-base leading-relaxed">
                Today, CAD Engine serves general contractors, government municipalities, and developers across key global markets. By integrating our proprietary cloud tools like the SmartBIM Platform and ConstructIQ, we enable projects to operate at near-zero coordination downtime.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. MISSION & VISION */}
      <section className="py-16 bg-slate-55 border-y border-slate-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {/* Mission Card */}
            <div className="glass-panel p-8 rounded-2xl border border-slate-200 shadow-sm flex flex-col md:flex-row gap-5 items-start">
              <div className="h-12 w-12 rounded-xl bg-brand-primary/5 text-brand-primary flex items-center justify-center shrink-0">
                <Target size={24} />
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-bold text-slate-950">Our Mission</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  To deliver elite, clash-free digital construction models, high-precision CAD drafts, and customized software systems that empower builders to streamline workflows, eliminate on-site rework, and build a sustainable future.
                </p>
              </div>
            </div>

            {/* Vision Card */}
            <div className="glass-panel p-8 rounded-2xl border border-slate-200 shadow-sm flex flex-col md:flex-row gap-5 items-start">
              <div className="h-12 w-12 rounded-xl bg-brand-primary/5 text-brand-primary flex items-center justify-center shrink-0">
                <Eye size={24} />
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-bold text-slate-950">Our Vision</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  To lead the global AEC digital transformation, transforming static design processes into interactive IoT-connected digital twin environments that manage smart, high-performing facilities throughout their operational lifecycle.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CORE VALUES */}
      <section className="py-20 bg-white relative">
        <div className="absolute inset-0 engineering-grid opacity-[0.01] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-brand-primary text-xs font-bold tracking-widest uppercase block">Our Culture</span>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              Values That Drive Our Execution
            </h2>
            <p className="text-slate-600 text-sm md:text-base">
              At CAD Engine, we are unified by five core guidelines that ensure high-quality delivery and client success on every submittal.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {coreValues.map((value, idx) => {
              const ValIcon = value.icon;
              return (
                <div
                  key={idx}
                  className="glass-panel p-6 rounded-xl border border-slate-100 shadow-sm space-y-4 hover:border-brand-primary/20 transition-all duration-300 flex flex-col"
                >
                  <div className={`h-10 w-10 rounded-lg flex items-center justify-center shrink-0 ${value.color}`}>
                    <ValIcon size={20} />
                  </div>
                  <h3 className="font-bold text-slate-950 text-base">{value.title}</h3>
                  <p className="text-slate-600 text-xs leading-relaxed flex-grow">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. LEADERSHIP TEAM */}
      <section className="py-20 bg-slate-50 relative border-t border-slate-200/50">
        <div className="absolute inset-0 engineering-grid opacity-[0.02] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-brand-primary text-xs font-bold tracking-widest uppercase block">Leadership</span>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              Executive Directors & Technology Architects
            </h2>
            <p className="text-slate-600 text-sm md:text-base">
              Our directors combine traditional engineering disciplines with modern software development expertise to direct CAD Engine's global growth.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {leadershipTeam.map((member) => (
              <div
                key={member.id}
                className="glass-panel rounded-2xl overflow-hidden border border-slate-200/60 shadow-sm flex flex-col group hover:border-brand-primary/20 transition-all duration-350"
              >
                {/* Visual Avatar Header */}
                <div className="h-48 w-full bg-slate-950 relative flex items-center justify-center p-6 border-b border-slate-200/40">
                  <div className="absolute inset-0 engineering-grid opacity-[0.08]" />
                  <div className="h-24 w-24 rounded-full bg-brand-primary/10 border border-brand-primary/25 flex items-center justify-center text-brand-primary text-3xl font-extrabold relative z-10 group-hover:scale-105 transition-transform">
                    {member.name.split(" ").slice(-1)[0][0]}
                  </div>
                </div>

                <div className="p-6 flex-grow flex flex-col gap-3">
                  <div>
                    <h3 className="font-bold text-slate-950 text-base">{member.name}</h3>
                    <span className="block text-brand-primary text-xs font-bold mt-0.5 uppercase tracking-wide">
                      {member.role}
                    </span>
                  </div>
                  <p className="text-slate-600 text-xs leading-relaxed flex-grow mt-1">{member.bio}</p>
                  
                  <div className="border-t border-slate-100 pt-4 mt-auto">
                    <a
                      href={member.linkedIn}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-400 hover:text-brand-primary transition-colors flex items-center gap-1.5 text-xs font-semibold"
                    >
                      <LinkedInIcon size={14} />
                      <span>Professional Profile</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. TIMELINE SECTION */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 engineering-grid opacity-[0.02] pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 space-y-4">
            <span className="text-brand-primary text-xs font-bold tracking-widest uppercase block">Our Timeline</span>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              Our Historic Execution Path
            </h2>
            <p className="text-slate-650 text-sm max-w-xl mx-auto">
              How CAD Engine grew from a local Dubai drafting shop to a leading international BIM & design technology consultancy.
            </p>
          </div>

          {/* Timeline Nodes */}
          <div className="relative border-l-2 border-slate-200 ml-4 md:ml-32 py-2 space-y-12">
            {timelineEvents.map((evt, idx) => (
              <div key={idx} className="relative pl-8 md:pl-12">
                {/* Year tag for larger screens */}
                <div className="absolute left-[-110px] top-0.5 text-right w-20 hidden md:block">
                  <span className="text-xl font-black text-brand-primary tracking-tight">{evt.year}</span>
                </div>
                
                {/* Timeline node dot */}
                <div className="absolute left-[-6px] top-2.5 h-3.5 w-3.5 rounded-full border-[3px] border-brand-primary bg-white shadow-sm ring-4 ring-slate-100 shrink-0" />

                <div className="space-y-1.5">
                  {/* Year tag for mobile */}
                  <span className="inline-block md:hidden text-brand-primary font-black text-lg mb-1">
                    {evt.year}
                  </span>
                  <h3 className="text-lg font-bold text-slate-950 leading-tight">
                    {evt.title}
                  </h3>
                  <p className="text-slate-650 text-sm leading-relaxed">
                    {evt.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. STATISTICS METRICS */}
      <section className="bg-brand-primary text-white py-16 text-center relative z-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <h2 className="text-2xl sm:text-3xl font-bold">Leading BIM & CAD Execution Globally</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <span className="block text-3xl sm:text-4xl font-extrabold">100%</span>
              <span className="block text-xs text-red-200 mt-1 uppercase tracking-wider font-bold">ISO 19650 Compliant</span>
            </div>
            <div>
              <span className="block text-3xl sm:text-4xl font-extrabold">24 hr</span>
              <span className="block text-xs text-red-200 mt-1 uppercase tracking-wider font-bold">Drafting Turnaround</span>
            </div>
            <div>
              <span className="block text-3xl sm:text-4xl font-extrabold">0%</span>
              <span className="block text-xs text-red-200 mt-1 uppercase tracking-wider font-bold">On-Site Coordination Errors</span>
            </div>
            <div>
              <span className="block text-3xl sm:text-4xl font-extrabold">50M+</span>
              <span className="block text-xs text-red-200 mt-1 uppercase tracking-wider font-bold">Square Feet Modeled</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
