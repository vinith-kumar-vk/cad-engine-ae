"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 15) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services", hasDropdown: true },
    { name: "Products", href: "/products" },
    { name: "Contact", href: "/contact" }
  ];

  const dropdownItems = [
    { name: "BIM Solutions", href: "/services#bim" },
    { name: "CAD Services", href: "/services#cad" },
    { name: "Engineering Consulting", href: "/services#engineering" },
    { name: "Training Programs", href: "/services#technology" }
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
          isScrolled
            ? "bg-white/80 backdrop-blur-xl shadow-lg border-slate-200/50 py-2.5 md:py-3.5 h-[80px] md:h-[84px] flex items-center"
            : "bg-white/98 border-slate-200/80 py-4 md:py-6 h-[72px] md:h-[96px] flex items-center"
        }`}
      >
        <div className="max-w-[1400px] w-full mx-auto px-5 md:px-8 flex items-center justify-between">
          {/* Brand/Logo Block */}
          <Link href="/" className="flex items-center gap-3 shrink-0 group">
            <div className="relative flex items-center justify-center bg-white p-1 rounded border border-slate-200/50 shadow-sm transition-all group-hover:border-brand-primary/30">
              <Image
                src="/logo.jpeg"
                alt="CAD Engine Logo"
                width={75}
                height={75}
                priority
                className="object-contain transition-all duration-300"
                style={{
                  height: isScrolled ? "46px" : "56px",
                  width: "auto"
                }}
              />
            </div>
            <div className="flex flex-col justify-center select-none">
              <span className="font-extrabold text-slate-900 tracking-wide transition-all duration-300 leading-none text-xl md:text-2xl group-hover:text-brand-primary">
                CAD ENGINE
              </span>
              <span className="text-[9px] md:text-[10px] text-slate-500 font-bold uppercase tracking-widest mt-1">
                Engineering &amp; Digital Solutions
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Menu */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              
              if (link.hasDropdown) {
                return (
                  <div
                    key={link.name}
                    className="relative"
                    onMouseEnter={() => setIsServicesDropdownOpen(true)}
                    onMouseLeave={() => setIsServicesDropdownOpen(false)}
                  >
                    <Link
                      href={link.href}
                      className={`text-sm font-semibold tracking-wide transition-colors duration-200 relative py-2 flex items-center gap-1.5 ${
                        isActive || pathname.startsWith(link.href)
                          ? "text-brand-primary"
                          : "text-slate-700 hover:text-brand-primary"
                      }`}
                    >
                      {link.name}
                      <ChevronDown
                        size={14}
                        className={`transition-transform duration-300 ${
                          isServicesDropdownOpen ? "rotate-180 text-brand-primary" : "text-slate-400"
                        }`}
                      />
                      {(isActive || pathname.startsWith(link.href)) && (
                        <motion.span
                          layoutId="activeTabIndicator"
                          className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-brand-primary rounded-full"
                          transition={{ type: "spring", stiffness: 380, damping: 30 }}
                        />
                      )}
                    </Link>

                    {/* Services Mega Dropdown */}
                    <AnimatePresence>
                      {isServicesDropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.25 }}
                          className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-64 bg-white rounded-xl shadow-xl border border-slate-100 p-3.5 z-50"
                        >
                          <div className="flex flex-col gap-1">
                            {dropdownItems.map((item) => (
                              <Link
                                key={item.name}
                                href={item.href}
                                className="px-3.5 py-2.5 rounded-lg hover:bg-slate-50 hover:text-brand-primary font-bold text-slate-800 text-sm transition-colors block"
                              >
                                {item.name}
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-semibold tracking-wide transition-colors duration-200 relative py-2 ${
                    isActive
                      ? "text-brand-primary"
                      : "text-slate-700 hover:text-brand-primary"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.span
                      layoutId="activeTabIndicator"
                      className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-brand-primary rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Premium CTA Button */}
          <div className="hidden md:block">
            <Link
              href="/contact"
              className="h-12 px-7 bg-brand-primary hover:bg-brand-primary-hover text-white text-sm font-bold tracking-wide rounded-xl shadow-md shadow-brand-primary/20 hover:shadow-lg hover:shadow-brand-primary/30 hover:-translate-y-0.5 active:scale-95 duration-150 flex items-center justify-center cursor-pointer transition-all"
            >
              Request Proposal
            </Link>
          </div>

          {/* Mobile Burger Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-slate-800 hover:bg-slate-100 transition-colors focus:outline-none cursor-pointer"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Slide-Out Drawer - Moved outside header to prevent clipping by containing block */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="md:hidden fixed inset-x-0 bottom-0 z-45 bg-white/98 backdrop-blur-md px-6 py-8 shadow-xl overflow-y-auto"
            style={{
              top: isScrolled ? "80px" : "72px"
            }}
          >
            <nav className="flex flex-col gap-6">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;

                if (link.hasDropdown) {
                  const isLinkActive = pathname === link.href || pathname.startsWith(link.href);
                  return (
                    <div key={link.name} className="space-y-2">
                      <Link
                        href={link.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`text-lg font-bold transition-all py-2 pl-3 border-l-4 block ${
                          isLinkActive
                            ? "text-brand-primary border-brand-primary bg-slate-50"
                            : "text-slate-700 hover:text-brand-primary border-transparent"
                        }`}
                      >
                        {link.name}
                      </Link>
                      <div className="flex flex-col gap-3 pl-6 border-l border-slate-200 ml-3 mt-1">
                        {dropdownItems.map((item) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="text-base font-bold text-slate-700 hover:text-brand-primary transition-colors py-1 block"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  );
                }

                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`text-lg font-bold transition-all py-2 pl-3 border-l-4 ${
                      isActive
                        ? "text-brand-primary border-brand-primary bg-slate-50"
                        : "text-slate-700 hover:text-brand-primary border-transparent"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
              
              <Link
                href="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-6 h-12 bg-brand-primary hover:bg-brand-primary-hover text-white text-center font-bold rounded-xl flex items-center justify-center transition-all shadow-md shadow-brand-primary/15 active:scale-95 cursor-pointer text-base"
              >
                Request Proposal
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
