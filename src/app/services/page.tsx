"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import * as Icons from "lucide-react";

// Data
import { detailedServices } from "@/data/siteData";

// Icon mapping helper
function IconHelper({ name, className }: { name: string; className?: string }) {
  const LucideIcon = (Icons as any)[name] || Icons.HelpCircle;
  return <LucideIcon className={className} />;
}

const categories = [
  { name: "BIM Services", id: "bim" },
  { name: "CAD Services", id: "cad" },
  { name: "Engineering", id: "engineering" },
  { name: "Technology", id: "technology" }
];

export default function ServicesPage() {
  const [activeSection, setActiveSection] = useState("bim");

  useEffect(() => {
    // Check initial hash on mount
    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "");
      if (hash && categories.some(cat => cat.id === hash)) {
        setActiveSection(hash);
      }
    };

    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);

    // Scroll spy logic
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 180; // offset for sticky headers

      for (const cat of categories) {
        const el = document.getElementById(cat.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(cat.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Run after a short delay so layout resolves
    const timer = setTimeout(handleScroll, 150);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="relative">
      {/* Services Hero */}
      <section className="bg-slate-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 engineering-grid opacity-[0.04] pointer-events-none" />
        <div className="absolute inset-0 dark-engineering-radial-glow pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <span className="text-brand-accent text-xs font-bold tracking-widest uppercase block">Our Capabilities</span>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Comprehensive Digital Engineering Solutions
          </h1>
          <p className="text-slate-350 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            ISO 19650 certified BIM models, standard-compliant CAD drafting, detail structural modeling, and custom AI design automation scripts.
          </p>
        </div>
      </section>

      {/* Categories Anchor Navigation Bar */}
      <div className="sticky top-[72px] md:top-[84px] z-40 bg-white border-b border-slate-200/60 shadow-sm transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-start md:justify-center gap-6 md:gap-10 overflow-x-auto pt-4 pb-0 scrollbar-none">
            {categories.map((cat) => {
              const isActive = activeSection === cat.id;
              return (
                <a
                  key={cat.id}
                  href={`#${cat.id}`}
                  onClick={() => setActiveSection(cat.id)}
                  className={`text-sm font-extrabold whitespace-nowrap transition-all duration-200 pb-3.5 relative ${
                    isActive
                      ? "text-brand-primary"
                      : "text-slate-600 hover:text-brand-primary"
                  }`}
                >
                  {cat.name}
                  {isActive && (
                    <motion.span
                      layoutId="activeCategoryIndicator"
                      className="absolute bottom-0 left-0 right-0 h-[3px] bg-brand-primary rounded-full z-10"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </div>
        </div>
      </div>

      {/* BIM Services Section */}
      <section id="bim" className="py-20 bg-white relative scroll-mt-28">
        <div className="absolute inset-0 engineering-grid opacity-[0.01] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mb-12 space-y-3">
            <span className="text-brand-primary text-xs font-bold tracking-wider uppercase block">01 / Lifecycle BIM</span>
            <h2 className="text-3xl font-extrabold text-slate-950 tracking-tight">
              {detailedServices.bim.title}
            </h2>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed">
              {detailedServices.bim.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {detailedServices.bim.items.map((item) => (
              <div
                key={item.id}
                className="glass-panel p-6 md:p-8 rounded-2xl border border-slate-100 shadow-sm flex gap-6 hover:border-brand-primary/20 transition-all duration-300"
              >
                <div className="h-12 w-12 rounded-xl bg-brand-primary/5 text-brand-primary flex items-center justify-center shrink-0">
                  <IconHelper name={item.iconName} className="h-6 w-6" />
                </div>
                <div className="space-y-4 flex-grow">
                  <h3 className="text-lg font-bold text-slate-950">{item.title}</h3>
                  <p className="text-slate-600 text-xs md:text-sm leading-relaxed">{item.description}</p>
                  
                  <div className="space-y-1.5 pt-2">
                    {item.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                        <Check size={14} className="text-emerald-500 shrink-0" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-2">
                    <Link
                      href={`/contact?service=${encodeURIComponent(item.title)}`}
                      className="text-xs font-bold text-brand-primary hover:text-brand-primary-hover flex items-center gap-1 group"
                    >
                      Request Technical Spec
                      <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CAD Services Section */}
      <section id="cad" className="py-20 bg-slate-50 relative border-t border-slate-200/50 scroll-mt-28">
        <div className="absolute inset-0 engineering-grid-dense opacity-[0.02] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mb-12 space-y-3">
            <span className="text-brand-primary text-xs font-bold tracking-wider uppercase block">02 / High-Precision CAD</span>
            <h2 className="text-3xl font-extrabold text-slate-950 tracking-tight">
              {detailedServices.cad.title}
            </h2>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed">
              {detailedServices.cad.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {detailedServices.cad.items.map((item) => (
              <div
                key={item.id}
                className="glass-panel p-6 md:p-8 rounded-2xl border border-slate-200/40 shadow-sm flex gap-6 hover:border-brand-primary/20 transition-all duration-300 bg-white"
              >
                <div className="h-12 w-12 rounded-xl bg-brand-primary/5 text-brand-primary flex items-center justify-center shrink-0">
                  <IconHelper name={item.iconName} className="h-6 w-6" />
                </div>
                <div className="space-y-4 flex-grow">
                  <h3 className="text-lg font-bold text-slate-950">{item.title}</h3>
                  <p className="text-slate-600 text-xs md:text-sm leading-relaxed">{item.description}</p>
                  
                  <div className="space-y-1.5 pt-2">
                    {item.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                        <Check size={14} className="text-emerald-500 shrink-0" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-2">
                    <Link
                      href={`/contact?service=${encodeURIComponent(item.title)}`}
                      className="text-xs font-bold text-brand-primary hover:text-brand-primary-hover flex items-center gap-1 group"
                    >
                      Order Shop Drawings
                      <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Engineering Consulting Section */}
      <section id="engineering" className="py-20 bg-white relative border-t border-slate-200/50 scroll-mt-28">
        <div className="absolute inset-0 engineering-grid opacity-[0.01] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mb-12 space-y-3">
            <span className="text-brand-primary text-xs font-bold tracking-wider uppercase block">03 / Consulting</span>
            <h2 className="text-3xl font-extrabold text-slate-950 tracking-tight">
              {detailedServices.engineering.title}
            </h2>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed">
              {detailedServices.engineering.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {detailedServices.engineering.items.map((item) => (
              <div
                key={item.id}
                className="glass-panel p-6 md:p-8 rounded-2xl border border-slate-100 shadow-sm flex flex-col hover:border-brand-primary/20 transition-all duration-300"
              >
                <div className="h-12 w-12 rounded-xl bg-brand-primary/5 text-brand-primary flex items-center justify-center shrink-0 mb-6">
                  <IconHelper name={item.iconName} className="h-6 w-6" />
                </div>
                <div className="space-y-4 flex-grow flex flex-col">
                  <h3 className="text-lg font-bold text-slate-950">{item.title}</h3>
                  <p className="text-slate-600 text-xs leading-relaxed flex-grow">{item.description}</p>
                  
                  <div className="space-y-1.5 pt-4 border-t border-slate-100">
                    {item.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                        <Check size={14} className="text-emerald-500 shrink-0" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4 mt-auto">
                    <Link
                      href={`/contact?service=${encodeURIComponent(item.title)}`}
                      className="text-xs font-bold text-brand-primary hover:text-brand-primary-hover flex items-center gap-1 group"
                    >
                      Book Engineering Consultant
                      <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Services Section */}
      <section id="technology" className="py-20 bg-slate-900 text-white relative scroll-mt-28">
        <div className="absolute inset-0 engineering-grid opacity-[0.03] pointer-events-none" />
        <div className="absolute inset-0 dark-engineering-radial-glow pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mb-12 space-y-3">
            <span className="text-brand-accent text-xs font-bold tracking-wider uppercase block">04 / Design Tech Integration</span>
            <h2 className="text-3xl font-extrabold tracking-tight">
              {detailedServices.technology.title}
            </h2>
            <p className="text-slate-450 text-sm md:text-base leading-relaxed">
              {detailedServices.technology.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {detailedServices.technology.items.map((item) => (
              <div
                key={item.id}
                className="glass-panel-dark p-6 md:p-8 rounded-2xl border border-white/10 shadow-lg flex gap-6 hover:border-brand-accent/20 transition-all duration-300"
              >
                <div className="h-12 w-12 rounded-xl bg-white/5 text-brand-accent flex items-center justify-center shrink-0">
                  <IconHelper name={item.iconName} className="h-6 w-6" />
                </div>
                <div className="space-y-4 flex-grow">
                  <h3 className="text-lg font-bold text-white">{item.title}</h3>
                  <p className="text-slate-350 text-xs md:text-sm leading-relaxed">{item.description}</p>
                  
                  <div className="space-y-1.5 pt-2">
                    {item.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs font-semibold text-slate-300">
                        <Check size={14} className="text-brand-accent shrink-0" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-2">
                    <Link
                      href={`/contact?service=${encodeURIComponent(item.title)}`}
                      className="text-xs font-bold text-brand-accent hover:text-white flex items-center gap-1 group"
                    >
                      Consult Tech Team
                      <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Footer Section CTA */}
      <section className="bg-brand-primary text-white py-16 text-center relative z-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="text-3xl font-extrabold tracking-tight">Need a Customized Engineering Workflow?</h2>
          <p className="text-red-200 text-sm md:text-base max-w-xl mx-auto">
            Our technology division builds custom Autodesk plugins, CDE connectors, and database scripts matching your internal design standards.
          </p>
          <div className="pt-2">
            <Link
              href="/contact?service=Custom%20Solution"
              className="inline-block bg-white text-brand-primary hover:bg-slate-50 font-bold px-8 py-3.5 rounded-lg transition-transform active:scale-95 shadow-lg shadow-brand-primary/20 cursor-pointer"
            >
              Get Custom Quote
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
