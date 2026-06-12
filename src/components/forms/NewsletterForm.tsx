"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Check, Loader2 } from "lucide-react";

const newsletterSchema = z.object({
  email: z.string().email("Please enter a valid email address.")
});

type NewsletterFormValues = z.infer<typeof newsletterSchema>;

export default function NewsletterForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<NewsletterFormValues>({
    resolver: zodResolver(newsletterSchema),
    defaultValues: { email: "" }
  });

  const onSubmit = async (data: NewsletterFormValues) => {
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log("Newsletter Sign Up:", data);
    setIsSubmitting(false);
    setIsSuccess(true);
    reset();
    setTimeout(() => setIsSuccess(false), 5000);
  };

  return (
    <div className="w-full">
      {isSuccess ? (
        <div className="flex items-center gap-2 text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-4 py-3 rounded-lg text-sm font-medium animate-fade-in">
          <Check size={18} className="shrink-0" />
          <span>Subscribed successfully! Thank you.</span>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-2">
          <div className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="Enter work email..."
              {...register("email")}
              className={`flex-grow px-4 py-2.5 rounded-lg border text-sm bg-slate-900/60 border-slate-700/80 text-white placeholder-slate-400 focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent ${
                errors.email ? "border-red-500/50" : ""
              }`}
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-brand-primary hover:bg-brand-primary-hover text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition active:scale-95 disabled:opacity-75 disabled:cursor-not-allowed shrink-0 cursor-pointer flex items-center justify-center gap-2 shadow-sm"
            >
              {isSubmitting ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                "Subscribe"
              )}
            </button>
          </div>
          {errors.email && (
            <p className="text-red-400 text-xs font-medium pl-1">{errors.email.message}</p>
          )}
        </form>
      )}
    </div>
  );
}
