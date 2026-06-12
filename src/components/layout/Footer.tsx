"use client";

import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";
import { FacebookIcon, InstagramIcon, LinkedInIcon, TwitterIcon } from "@/components/shared/SocialIcons";
import NewsletterForm from "../forms/NewsletterForm";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-8 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Column 1: Brand Info */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block bg-white px-3 py-1.5 rounded border border-slate-800 mb-6">
              <Image
                src="/logo.jpeg"
                alt="CAD Engine Logo"
                width={130}
                height={36}
                className="object-contain h-7 w-auto"
              />
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-6 max-w-sm">
              CAD Engine is a leading engineering, BIM, CAD, and design technology consulting company, driving digital transformation and upskilling programs for AEC firms worldwide.
            </p>
            <div className="flex gap-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-brand-accent transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedInIcon size={18} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-brand-accent transition-colors"
                aria-label="Twitter"
              >
                <TwitterIcon size={18} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-brand-accent transition-colors"
                aria-label="Facebook"
              >
                <FacebookIcon size={18} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-brand-accent transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon size={18} />
              </a>
            </div>
          </div>

          {/* Column 2: Services */}
          <div>
            <h4 className="text-white font-semibold mb-5 tracking-wider uppercase text-xs">Services</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/services#bim" className="text-slate-400 hover:text-white transition-colors">
                  BIM Consulting
                </Link>
              </li>
              <li>
                <Link href="/services#cad" className="text-slate-400 hover:text-white transition-colors">
                  CAD Engineering
                </Link>
              </li>
              <li>
                <Link href="/services#engineering" className="text-slate-400 hover:text-white transition-colors">
                  Engineering Consulting
                </Link>
              </li>
              <li>
                <Link href="/services#technology" className="text-slate-400 hover:text-white transition-colors">
                  Digital Transformation
                </Link>
              </li>
              <li>
                <Link href="/services#technology" className="text-slate-400 hover:text-white transition-colors">
                  Cloud Infrastructure
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Products */}
          <div>
            <h4 className="text-white font-semibold mb-5 tracking-wider uppercase text-xs">Products</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/products#smartbim-platform" className="text-slate-400 hover:text-white transition-colors">
                  SmartBIM Platform
                </Link>
              </li>
              <li>
                <Link href="/products#constructiq" className="text-slate-400 hover:text-white transition-colors">
                  ConstructIQ
                </Link>
              </li>
              <li>
                <Link href="/products#designflow" className="text-slate-400 hover:text-white transition-colors">
                  DesignFlow
                </Link>
              </li>
              <li>
                <Link href="/products#assetvision" className="text-slate-400 hover:text-white transition-colors">
                  AssetVision
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Newsletter */}
          <div>
            <h4 className="text-white font-semibold mb-5 tracking-wider uppercase text-xs">Contact Info</h4>
            <ul className="space-y-3 text-sm mb-6">
              <li className="flex items-start gap-2">
                <MapPin size={16} className="text-brand-accent mt-0.5 shrink-0" />
                <span className="text-slate-400">Dubai, UAE</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-brand-accent shrink-0" />
                <span className="text-slate-400">+971 4 123 4567</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-brand-accent shrink-0" />
                <span className="text-slate-400">info@cadengine.com</span>
              </li>
            </ul>
            <div>
              <span className="block text-xs font-semibold text-white mb-2 uppercase tracking-wider">
                Newsletter
              </span>
              <NewsletterForm />
            </div>
          </div>
        </div>

        {/* Divider and Copyright */}
        <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-semibold">
          <p>&copy; {currentYear} CAD Engine. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/contact" className="hover:text-slate-300 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/contact" className="hover:text-slate-300 transition-colors">
              Terms & Conditions
            </Link>
            <Link href="/about" className="hover:text-slate-300 transition-colors">
              Careers
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
