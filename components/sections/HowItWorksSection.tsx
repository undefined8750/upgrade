'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { LucideIcon } from 'lucide-react';

interface HowItWorksStep {
  step: string;
  icon: LucideIcon;
  title: string;
  description: string;
}

interface HowItWorksSectionProps {
  title: string;
  subtitle: string;
  steps: HowItWorksStep[];
  className?: string;
}

export function HowItWorksSection({ title, subtitle, steps, className = '' }: HowItWorksSectionProps) {
  return (
    <section id="how-it-works" className={`py-16 lg:py-24 bg-gradient-to-br from-gray-50 to-blue-50 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 lg:mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">{title}</h2>
          <p className="text-lg lg:text-xl text-gray-600">{subtitle}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="text-center group relative"
            >
              <div className="relative mb-8">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <step.icon className="h-10 w-10 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 bg-blue-600 text-white text-sm font-bold px-2 py-1 rounded-full">
                  {step.step}
                </div>
              </div>
              <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4">{step.title}</h3>
              <p className="text-gray-600 leading-relaxed">{step.description}</p>

              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 left-full w-full">
                  <ArrowRight className="h-6 w-6 text-blue-400 mx-auto" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 