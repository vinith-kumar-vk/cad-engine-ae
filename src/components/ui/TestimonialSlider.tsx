"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { testimonials } from "@/data/siteData";

export function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right

  const handlePrev = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  }, []);

  const handleNext = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 8500);
    return () => clearInterval(timer);
  }, [handleNext, currentIndex]);

  const selectTestimonial = (idx: number) => {
    setDirection(idx > currentIndex ? 1 : -1);
    setCurrentIndex(idx);
  };

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 50 : -50,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (dir: number) => ({
      x: dir < 0 ? 50 : -50,
      opacity: 0
    })
  };

  const current = testimonials[currentIndex];

  return (
    <div className="relative w-full max-w-4xl mx-auto px-4 md:px-8 py-8">
      {/* Background Quote Mark Decor */}
      <div className="absolute -top-4 left-0 text-slate-100/70 select-none pointer-events-none hidden md:block">
        <Quote size={120} strokeWidth={0.5} className="fill-slate-50 text-slate-100" />
      </div>

      <div className="relative overflow-hidden min-h-[300px] md:min-h-[250px] flex items-center justify-center">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="w-full text-center px-2 md:px-12"
          >
            {/* Star Ratings */}
            <div className="flex justify-center mb-5 gap-1">
              {[...Array(current.rating)].map((_, i) => (
                <Star key={i} className="h-5 w-5 text-amber-500 fill-amber-500" />
              ))}
            </div>

            {/* Testimonial Quote */}
            <blockquote className="text-base md:text-xl text-slate-800 font-medium leading-relaxed italic mb-8">
              "{current.quote}"
            </blockquote>

            {/* Author details */}
            <cite className="not-italic">
              <span className="block font-bold text-slate-900 text-lg">
                {current.name}
              </span>
              <span className="block text-brand-primary text-sm font-semibold mt-1">
                {current.role} &bull; <span className="text-slate-500 font-medium">{current.company}</span>
              </span>
            </cite>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Control Buttons and Dot Indicators */}
      <div className="flex justify-center items-center mt-6 gap-4">
        <button
          onClick={handlePrev}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200/80 bg-white text-slate-700 shadow-sm transition hover:bg-slate-50 hover:text-brand-primary active:scale-95 cursor-pointer"
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <div className="flex gap-2">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => selectTestimonial(idx)}
              className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                idx === currentIndex ? "w-8 bg-brand-primary" : "w-2.5 bg-slate-200 hover:bg-slate-300"
              }`}
              aria-label={`Go to testimonial ${idx + 1}`}
            />
          ))}
        </div>
        <button
          onClick={handleNext}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200/80 bg-white text-slate-700 shadow-sm transition hover:bg-slate-50 hover:text-brand-primary active:scale-95 cursor-pointer"
          aria-label="Next testimonial"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}
