'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqSectionProps {
  title: string;
  subtitle: string;
  faqData: FaqItem[];
  className?: string;
}

export function FaqSection({ title, subtitle, faqData, className = '' }: FaqSectionProps) {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  return (
    <section id="faq" className={`py-16 lg:py-24 bg-white ${className}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
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

        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="shadow-sm hover:shadow-md transition-shadow duration-300">
                <CardContent className="p-0">
                  <button
                    className="w-full text-left p-6 lg:p-8 hover:bg-gray-50 transition-colors"
                    onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                  >
                    <div className="flex justify-between items-center">
                      <h3 className="font-semibold text-gray-900 text-base lg:text-lg pr-4">{faq.question}</h3>
                      <ChevronRight className={cn(
                        "h-5 w-5 text-gray-500 transition-transform flex-shrink-0",
                        expandedFaq === index && "rotate-90"
                      )} />
                    </div>
                  </button>
                  <AnimatePresence>
                    {expandedFaq === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 lg:px-8 pb-6 lg:pb-8">
                          <p className="text-gray-600 text-sm lg:text-base leading-relaxed">{faq.answer}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}