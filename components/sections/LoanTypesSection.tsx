'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { LucideIcon } from 'lucide-react';

interface LoanType {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface LoanTypesSectionProps {
  title: string;
  subtitle: string;
  loanTypes: LoanType[];
  className?: string;
}

export function LoanTypesSection({ title, subtitle, loanTypes, className = '' }: LoanTypesSectionProps) {
  return (
    <section id="loan-types"className={`py-16 lg:py-24 bg-white ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 lg:mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
          <p className="text-lg lg:text-xl text-gray-600">
            {subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {loanTypes.map((loan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-blue-50 to-green-50 group-hover:from-blue-100 group-hover:to-green-100">
                <CardContent className="p-6 lg:p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <loan.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4">{loan.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{loan.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 