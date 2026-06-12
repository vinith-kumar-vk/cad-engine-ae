"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion } from "framer-motion";
import { CheckCircle2, Loader2, Send } from "lucide-react";
import { homeServices } from "@/data/siteData";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  company: z.string().min(2, "Company name must be at least 2 characters.").or(z.literal("")),
  email: z.string().email("Please enter a valid email address."),
  phone: z.string().min(7, "Please enter a valid phone number including area code."),
  service: z.string().min(1, "Please select a required service."),
  message: z.string().min(10, "Message must be at least 10 characters long.")
});

type ContactFormValues = z.infer<typeof contactSchema>;

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      company: "",
      email: "",
      phone: "",
      service: "",
      message: ""
    }
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log("Form Submitted:", data);
    setIsSubmitting(false);
    setIsSuccess(true);
    reset();
  };

  if (isSuccess) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="glass-panel rounded-2xl p-8 text-center shadow-lg border-emerald-500/20 max-w-xl mx-auto"
      >
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50 text-emerald-500 mb-6">
          <CheckCircle2 size={36} />
        </div>
        <h3 className="text-2xl font-bold text-slate-900 mb-2">Message Sent Successfully!</h3>
        <p className="text-slate-600 mb-6">
          Thank you for contacting CAD Engine. One of our digital construction and engineering consulting coordinators will review your requirements and respond within 24 hours.
        </p>
        <button
          onClick={() => setIsSuccess(false)}
          className="inline-flex items-center justify-center bg-brand-primary hover:bg-brand-primary-hover text-white font-semibold px-6 py-3 rounded-lg transition active:scale-95 cursor-pointer shadow-sm"
        >
          Send Another Message
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-2">
            Full Name *
          </label>
          <input
            id="name"
            type="text"
            placeholder="John Doe"
            {...register("name")}
            className={`w-full px-4 py-3 rounded-lg border bg-white text-slate-900 focus-ring-brand ${
              errors.name ? "border-red-500" : "border-slate-200"
            }`}
          />
          {errors.name && (
            <p className="text-red-500 text-xs mt-1.5 font-medium">{errors.name.message}</p>
          )}
        </div>

        {/* Company */}
        <div>
          <label htmlFor="company" className="block text-sm font-semibold text-slate-700 mb-2">
            Company Name
          </label>
          <input
            id="company"
            type="text"
            placeholder="Acme Construction Ltd"
            {...register("company")}
            className={`w-full px-4 py-3 rounded-lg border bg-white text-slate-900 focus-ring-brand ${
              errors.company ? "border-red-500" : "border-slate-200"
            }`}
          />
          {errors.company && (
            <p className="text-red-500 text-xs mt-1.5 font-medium">{errors.company.message}</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">
            Work Email *
          </label>
          <input
            id="email"
            type="email"
            placeholder="john.doe@company.com"
            {...register("email")}
            className={`w-full px-4 py-3 rounded-lg border bg-white text-slate-900 focus-ring-brand ${
              errors.email ? "border-red-500" : "border-slate-200"
            }`}
          />
          {errors.email && (
            <p className="text-red-500 text-xs mt-1.5 font-medium">{errors.email.message}</p>
          )}
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className="block text-sm font-semibold text-slate-700 mb-2">
            Phone Number *
          </label>
          <input
            id="phone"
            type="tel"
            placeholder="+971 50 123 4567"
            {...register("phone")}
            className={`w-full px-4 py-3 rounded-lg border bg-white text-slate-900 focus-ring-brand ${
              errors.phone ? "border-red-500" : "border-slate-200"
            }`}
          />
          {errors.phone && (
            <p className="text-red-500 text-xs mt-1.5 font-medium">{errors.phone.message}</p>
          )}
        </div>
      </div>

      {/* Service Dropdown */}
      <div>
        <label htmlFor="service" className="block text-sm font-semibold text-slate-700 mb-2">
          Required Service *
        </label>
        <select
          id="service"
          {...register("service")}
          className={`w-full px-4 py-3 rounded-lg border bg-white text-slate-900 focus-ring-brand appearance-none ${
            errors.service ? "border-red-500" : "border-slate-200"
          }`}
          style={{
            backgroundImage: `url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3E%3Cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3E%3C/svg%3E")`,
            backgroundPosition: "right 1rem center",
            backgroundSize: "1.25rem",
            backgroundRepeat: "no-repeat",
            paddingRight: "2.5rem"
          }}
        >
          <option value="">Select a service category...</option>
          {homeServices.map((service) => (
            <option key={service.id} value={service.title}>
              {service.title}
            </option>
          ))}
          <option value="Multi-disciplinary Integration">Multi-disciplinary Integration</option>
          <option value="Other / Customized Consultancy">Other / Customized Consultancy</option>
        </select>
        {errors.service && (
          <p className="text-red-500 text-xs mt-1.5 font-medium">{errors.service.message}</p>
        )}
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-2">
          Brief Project Scope / Requirements *
        </label>
        <textarea
          id="message"
          rows={5}
          placeholder="Describe your design criteria, LOD requirement, coordination scope, or software needs..."
          {...register("message")}
          className={`w-full px-4 py-3 rounded-lg border bg-white text-slate-900 focus-ring-brand ${
            errors.message ? "border-red-500" : "border-slate-200"
          }`}
        />
        {errors.message && (
          <p className="text-red-500 text-xs mt-1.5 font-medium">{errors.message.message}</p>
        )}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full flex items-center justify-center bg-brand-primary hover:bg-brand-primary-hover text-white font-semibold py-4 px-6 rounded-lg transition active:scale-[0.99] disabled:opacity-75 disabled:cursor-not-allowed cursor-pointer shadow-md shadow-brand-primary/10 gap-2 text-base"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="h-5 w-5 animate-spin" />
            Validating Requirements...
          </>
        ) : (
          <>
            <Send size={18} />
            Submit Request for Proposal
          </>
        )}
      </button>
    </form>
  );
}
