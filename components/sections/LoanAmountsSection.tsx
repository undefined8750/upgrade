'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';

interface LoanAmount {
  amount: string;
  purpose: string;
  rate: string;
}

interface LoanAmountsSectionProps {
  title: string;
  subtitle: string;
  loanAmounts: LoanAmount[];
  className?: string;
}

export function LoanAmountsSection({ title, subtitle, loanAmounts, className = '' }: LoanAmountsSectionProps) {
  return (
    <section className={`py-16 lg:py-24 bg-gradient-to-br from-gray-50 to-blue-50 ${className}`}>
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-8">
          {loanAmounts.map((loan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 border-0 bg-white group-hover:bg-gradient-to-br group-hover:from-blue-50 group-hover:to-green-50">
                <CardContent className="p-6 lg:p-8 text-center">
                  <div className="text-3xl lg:text-4xl font-bold text-blue-600 mb-3 group-hover:scale-110 transition-transform duration-300">
                    {loan.amount}
                  </div>
                  <div className="text-sm lg:text-base text-gray-600 mb-4">{loan.purpose}</div>
                  <div className="text-lg font-semibold text-green-600">From {loan.rate} APR</div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-sm lg:text-base text-gray-500">
            *APR rates shown are estimates and may vary based on creditworthiness and other factors.
          </p>
        </motion.div>
      </div>
    </section>
  );
} 