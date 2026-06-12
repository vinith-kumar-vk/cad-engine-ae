"use client";

import { motion } from "framer-motion";
import { Clock, Mail, MapPin, Phone } from "lucide-react";

// Components
import ContactForm from "@/components/forms/ContactForm";
import { Accordion } from "@/components/ui/Accordion";

// Data
import { generalFaqs } from "@/data/siteData";

export default function ContactPage() {
  return (
    <div className="relative">
      {/* Contact Hero */}
      <section className="bg-slate-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 engineering-grid opacity-[0.04] pointer-events-none" />
        <div className="absolute inset-0 dark-engineering-radial-glow pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <span className="text-brand-accent text-xs font-bold tracking-widest uppercase block">Get In Touch</span>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Connect With Our Design Consultants
          </h1>
          <p className="text-slate-350 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Ready to optimize your drafting standards or coordinate a multi-disciplinary BIM project? Let's discuss your execution plan.
          </p>
        </div>
      </section>

      {/* Main Section */}
      <section className="py-20 bg-white relative">
        <div className="absolute inset-0 engineering-grid opacity-[0.01] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            
            {/* Column 1: Info Cards & Blueprint Map Mockup */}
            <div className="lg:col-span-5 space-y-10">
              <div className="space-y-6">
                <span className="text-brand-primary text-xs font-bold tracking-widest uppercase block">CAD Engine Hub</span>
                <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
                  Office Location & Channels
                </h2>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Whether you prefer a face-to-face scoping meeting at our Dubai headquarters or a digital project review, our coordinators are available to support you.
                </p>
              </div>

              {/* Info Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="glass-panel p-5 rounded-xl border border-slate-100 shadow-sm space-y-2 flex flex-col">
                  <div className="h-9 w-9 rounded-lg bg-brand-primary/5 text-brand-primary flex items-center justify-center shrink-0 mb-2">
                    <MapPin size={18} />
                  </div>
                  <h4 className="font-bold text-slate-950 text-xs uppercase tracking-wider">Office Location</h4>
                  <p className="text-slate-600 text-xs leading-relaxed flex-grow">
                    Business Bay, Downtown District,<br />Dubai, UAE
                  </p>
                </div>

                <div className="glass-panel p-5 rounded-xl border border-slate-100 shadow-sm space-y-2 flex flex-col">
                  <div className="h-9 w-9 rounded-lg bg-brand-primary/5 text-brand-primary flex items-center justify-center shrink-0 mb-2">
                    <Phone size={18} />
                  </div>
                  <h4 className="font-bold text-slate-950 text-xs uppercase tracking-wider">Call Inquiries</h4>
                  <p className="text-slate-650 text-xs font-semibold leading-relaxed flex-grow">
                    +971 4 123 4567 (Main Line)<br />
                    +971 50 987 6543 (Hotline)
                  </p>
                </div>

                <div className="glass-panel p-5 rounded-xl border border-slate-100 shadow-sm space-y-2 flex flex-col">
                  <div className="h-9 w-9 rounded-lg bg-brand-primary/5 text-brand-primary flex items-center justify-center shrink-0 mb-2">
                    <Mail size={18} />
                  </div>
                  <h4 className="font-bold text-slate-950 text-xs uppercase tracking-wider">Email Channels</h4>
                  <p className="text-slate-650 text-xs font-semibold leading-relaxed flex-grow">
                    info@cadengine.com<br />
                    bids@cadengine.com
                  </p>
                </div>

                <div className="glass-panel p-5 rounded-xl border border-slate-100 shadow-sm space-y-2 flex flex-col">
                  <div className="h-9 w-9 rounded-lg bg-brand-primary/5 text-brand-primary flex items-center justify-center shrink-0 mb-2">
                    <Clock size={18} />
                  </div>
                  <h4 className="font-bold text-slate-950 text-xs uppercase tracking-wider">Working Hours</h4>
                  <p className="text-slate-600 text-xs leading-relaxed flex-grow">
                    Monday - Friday:<br />
                    9:00 AM - 6:00 PM (GST)
                  </p>
                </div>
              </div>

              {/* Custom Blueprint Map Placeholder */}
              <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-slate-950 border border-slate-800 shadow-lg p-5 flex flex-col justify-between">
                <div className="absolute inset-0 engineering-grid opacity-[0.07]" />
                
                <div className="flex justify-between items-start border-b border-slate-900 pb-2 relative z-10 text-[9px] font-mono text-slate-500">
                  <span>DUBAI MAIN HUB GRAPH</span>
                  <span>LAT: 25.2048&deg; N / LON: 55.2708&deg; E</span>
                </div>

                {/* Target design indicator in red */}
                <div className="flex flex-col items-center justify-center relative z-10 flex-grow py-4">
                  <div className="relative flex items-center justify-center">
                    <div className="absolute h-14 w-14 rounded-full border border-brand-accent/30 animate-ping" />
                    <div className="absolute h-8 w-8 rounded-full border border-brand-accent/40" />
                    <div className="h-3.5 w-3.5 rounded-full bg-brand-accent shrink-0 relative flex items-center justify-center">
                      <span className="h-1 w-1 bg-white rounded-full animate-ping" />
                    </div>
                  </div>
                  <span className="block text-[10px] text-white font-bold tracking-widest uppercase mt-4">
                    CAD Engine Office
                  </span>
                  <span className="block text-[8px] text-slate-500 font-mono mt-0.5">
                    Business Bay Corridor, Sector 4
                  </span>
                </div>

                <div className="border-t border-slate-900 pt-2 flex justify-between items-center text-[9px] font-mono text-slate-500 relative z-10">
                  <span>SCALE: 1:25,000</span>
                  <span>GRID: MERCATOR UTM</span>
                </div>
              </div>
            </div>

            {/* Column 2: RFP Contact Form Card */}
            <div className="lg:col-span-7">
              <div className="glass-panel p-6 md:p-10 rounded-2xl border border-slate-100 shadow-md">
                <div className="mb-8 space-y-2">
                  <span className="text-brand-primary text-xs font-bold tracking-wider uppercase block">Project Intake</span>
                  <h3 className="text-xl md:text-2xl font-bold text-slate-900">Request for Proposal</h3>
                  <p className="text-slate-550 text-xs leading-relaxed">
                    Provide your modeling standards, deadlines, and drawing index below. Our estimators will follow up with a detailed response.
                  </p>
                </div>
                
                <ContactForm />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* General FAQs Accordion Section */}
      <section className="py-20 bg-slate-50 relative border-t border-slate-200/50">
        <div className="absolute inset-0 engineering-grid-dense opacity-[0.02] pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
          <div className="text-center space-y-4">
            <span className="text-brand-primary text-xs font-bold tracking-widest uppercase block">FAQ</span>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              General Scoping & Collaboration
            </h2>
            <p className="text-slate-655 text-sm">
              Explore guidelines on resource allocation, deliverables checkpoints, and remote team setup.
            </p>
          </div>

          <Accordion items={generalFaqs} />
        </div>
      </section>
    </div>
  );
}
