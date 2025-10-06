'use client';

import { motion } from 'framer-motion';

interface HeroContent {
  title: string;
  subtitle: string;
  description: string;
}

interface HeroSectionProps {
  content: HeroContent;
  className?: string;
}

export function HeroSection({ content, className = '' }: HeroSectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={`text-center mb-8 lg:mb-12 ${className}`}
    >
      <h1 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4 lg:mb-6">
        {content.title}
      </h1>
      <p className="text-lg lg:text-xl text-gray-600 mb-3 lg:mb-4">
        {content.subtitle}
      </p>
      <p className="text-base lg:text-lg text-gray-500 max-w-3xl mx-auto">
        {content.description}
      </p>
    </motion.div>
  );
} 