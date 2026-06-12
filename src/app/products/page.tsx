"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { Check, CheckCircle2, ChevronRight, HelpCircle, Info, X } from "lucide-react";

// Components
import { Accordion } from "@/components/ui/Accordion";

// Data
import { products, productComparison, productFaqs } from "@/data/siteData";

export default function ProductsPage() {
  const [activeTab, setActiveTab] = useState(products[0].id);

  const currentProduct = products.find((p) => p.id === activeTab) || products[0];

  return (
    <div className="relative">
      {/* Products Hero */}
      <section className="bg-slate-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 engineering-grid opacity-[0.04] pointer-events-none" />
        <div className="absolute inset-0 dark-engineering-radial-glow pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <span className="text-brand-accent text-xs font-bold tracking-widest uppercase block">Proprietary Software</span>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Enterprise Design & BIM Automation Tools
          </h1>
          <p className="text-slate-350 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Boost quantity takeoffs, model coordination audits, drafting protocols, and digital twin operations.
          </p>
        </div>
      </section>

      {/* Product Selection Tabs */}
      <section className="py-8 bg-white border-b border-slate-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center border-b border-slate-100 pb-2 overflow-x-auto gap-2 md:gap-4 scrollbar-none">
            {products.map((p) => (
              <button
                key={p.id}
                onClick={() => setActiveTab(p.id)}
                className={`px-5 py-3 rounded-lg text-sm font-bold transition-all shrink-0 cursor-pointer ${
                  activeTab === p.id
                    ? "bg-brand-primary text-white shadow-md shadow-brand-primary/10"
                    : "text-slate-600 hover:text-brand-primary hover:bg-slate-50"
                }`}
              >
                {p.title}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Active Product Showcase */}
      <section className="py-20 bg-white relative">
        <div className="absolute inset-0 engineering-grid opacity-[0.01] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Overview & Key benefits */}
            <div className="lg:col-span-7 space-y-8">
              <div className="space-y-4">
                <span className="text-brand-primary text-xs font-bold uppercase tracking-wider block">
                  Product Overview
                </span>
                <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
                  {currentProduct.title}
                </h2>
                <p className="text-brand-primary text-base font-semibold leading-relaxed italic">
                  "{currentProduct.tagline}"
                </p>
                <p className="text-slate-655 text-sm md:text-base leading-relaxed pt-2">
                  {currentProduct.overview}
                </p>
              </div>

              {/* Features grid */}
              <div className="space-y-4 pt-4 border-t border-slate-100">
                <h3 className="font-bold text-slate-950 text-base">Key Capabilities</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {currentProduct.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <div className="h-5 w-5 rounded-full bg-slate-100 text-slate-700 flex items-center justify-center shrink-0 mt-0.5">
                        <span className="text-xs font-bold">{idx + 1}</span>
                      </div>
                      <span className="text-slate-650 text-xs leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Benefits checklist */}
              <div className="space-y-4 pt-4 border-t border-slate-100">
                <h3 className="font-bold text-slate-950 text-base">Business Impact</h3>
                <div className="space-y-2.5">
                  {currentProduct.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <CheckCircle2 size={18} className="text-emerald-500 shrink-0" />
                      <span className="text-slate-700 text-sm font-semibold">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6">
                <Link
                  href={`/contact?service=SaaS:${encodeURIComponent(currentProduct.title)}`}
                  className="inline-flex items-center justify-center bg-brand-primary hover:bg-brand-primary-hover text-white font-bold px-7 py-3.5 rounded-lg transition shadow-md shadow-brand-primary/20 gap-2 cursor-pointer text-sm md:text-base group"
                >
                  Schedule Live Sandbox Demo
                  <ChevronRight size={18} className="group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Product visual mockup panel */}
            <div className="lg:col-span-5 relative flex justify-center">
              <div className="relative w-full max-w-[400px] aspect-[4/3] rounded-2xl overflow-hidden bg-slate-950 p-6 flex flex-col justify-between border border-slate-800 shadow-xl">
                <div className="absolute inset-0 engineering-grid opacity-[0.05]" />
                
                <div className="flex items-center justify-between border-b border-slate-850 pb-3 relative z-10">
                  <div className="flex gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-red-500/50" />
                    <span className="h-2.5 w-2.5 rounded-full bg-amber-500/50" />
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/50" />
                  </div>
                  <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">
                    {currentProduct.title}.log
                  </span>
                </div>

                <div className="space-y-4 my-8 relative z-10">
                  <div className="h-2 w-1/3 bg-slate-800 rounded animate-pulse" />
                  <div className="h-3 w-3/4 bg-slate-700 rounded animate-pulse" />
                  <div className="h-2 w-5/6 bg-slate-800 rounded animate-pulse" />
                  <div className="h-2 w-2/3 bg-slate-800 rounded animate-pulse animate-delay-100" />
                  <div className="border border-brand-accent/25 rounded p-3 bg-brand-primary/5 flex items-start gap-2">
                    <Info size={14} className="text-brand-accent shrink-0 mt-0.5" />
                    <div className="space-y-1">
                      <span className="block text-[10px] font-mono text-white">System Status</span>
                      <span className="block text-[9px] font-mono text-brand-accent uppercase tracking-wider font-bold">
                        Sandbox online &bull; Ready
                      </span>
                    </div>
                  </div>
                </div>

                <div className="border-t border-slate-850 pt-4 flex justify-between items-center text-[10px] font-mono text-slate-500 relative z-10">
                  <span>Version: 3.4.1</span>
                  <span>CAD Engine Cloud</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products statistics ROI indicators */}
      <section className="bg-slate-900 text-white py-16 border-t border-b border-slate-850">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <span className="text-brand-accent text-xs font-bold uppercase tracking-wider">Business Impact</span>
            <h2 className="text-2xl sm:text-3xl font-bold">Documented Automation ROI Metrics</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="glass-panel-dark p-6 rounded-xl border border-white/5 shadow">
              <span className="block text-4xl font-extrabold text-brand-accent">65%</span>
              <span className="block text-sm font-bold text-white mt-2">Coordination Time Saved</span>
              <p className="text-slate-400 text-xs mt-1.5 leading-relaxed">Average clash resolution speed using SmartBIM issues syncing.</p>
            </div>
            <div className="glass-panel-dark p-6 rounded-xl border border-white/5 shadow">
              <span className="block text-4xl font-extrabold text-brand-accent">8.5x</span>
              <span className="block text-sm font-bold text-white mt-2">Faster Document Export</span>
              <p className="text-slate-400 text-xs mt-1.5 leading-relaxed">Direct batch binder printing via DesignFlow command scripts.</p>
            </div>
            <div className="glass-panel-dark p-6 rounded-xl border border-white/5 shadow">
              <span className="block text-4xl font-extrabold text-brand-accent">2.4M</span>
              <span className="block text-sm font-bold text-white mt-2">Active IoT Nodes</span>
              <p className="text-slate-400 text-xs mt-1.5 leading-relaxed">Sensors actively monitored on operational twins in AssetVision.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Comparison Matrix Section */}
      <section className="py-20 bg-slate-50 relative">
        <div className="absolute inset-0 engineering-grid-dense opacity-[0.02] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <span className="text-brand-primary text-xs font-bold tracking-widest uppercase block">Compare Platforms</span>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              Features Matrix Breakdown
            </h2>
            <p className="text-slate-655 text-sm">
              Review features configuration comparison matrix for each proprietary engineering tool.
            </p>
          </div>

          <div className="glass-panel rounded-2xl overflow-hidden border border-slate-200 shadow-sm max-w-4xl mx-auto bg-white">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs md:text-sm">
                <thead>
                  <tr className="bg-slate-900 text-white font-bold">
                    <th className="p-4 md:p-5">Platform Capabilities</th>
                    <th className="p-4 md:p-5 text-center">SmartBIM</th>
                    <th className="p-4 md:p-5 text-center">ConstructIQ</th>
                    <th className="p-4 md:p-5 text-center">DesignFlow</th>
                    <th className="p-4 md:p-5 text-center">AssetVision</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {productComparison.features.map((feat, idx) => (
                    <tr key={idx} className="hover:bg-slate-50 transition-colors">
                      <td className="p-4 md:p-5 font-semibold text-slate-900">{feat.name}</td>
                      <td className="p-4 md:p-5 text-center">
                        {feat.smartBIM ? (
                          <Check size={18} className="text-emerald-500 mx-auto" />
                        ) : (
                          <X size={18} className="text-slate-300 mx-auto" />
                        )}
                      </td>
                      <td className="p-4 md:p-5 text-center">
                        {feat.constructIQ ? (
                          <Check size={18} className="text-emerald-500 mx-auto" />
                        ) : (
                          <X size={18} className="text-slate-300 mx-auto" />
                        )}
                      </td>
                      <td className="p-4 md:p-5 text-center">
                        {feat.designFlow ? (
                          <Check size={18} className="text-emerald-500 mx-auto" />
                        ) : (
                          <X size={18} className="text-slate-300 mx-auto" />
                        )}
                      </td>
                      <td className="p-4 md:p-5 text-center">
                        {feat.assetVision ? (
                          <Check size={18} className="text-emerald-500 mx-auto" />
                        ) : (
                          <X size={18} className="text-slate-300 mx-auto" />
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Products FAQs Accordion Section */}
      <section className="py-20 bg-white relative border-t border-slate-200/50">
        <div className="absolute inset-0 engineering-grid opacity-[0.01] pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
          <div className="text-center space-y-4">
            <span className="text-brand-primary text-xs font-bold tracking-widest uppercase block">FAQ</span>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              Product Subscription Support
            </h2>
            <p className="text-slate-655 text-sm">
              Answers regarding licenses deployment, APIs integration, and cloud security compliance gates.
            </p>
          </div>

          <Accordion items={productFaqs} />
        </div>
      </section>
    </div>
  );
}
