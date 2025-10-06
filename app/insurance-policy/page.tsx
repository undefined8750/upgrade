'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  Leaf,
  Shield,
  CheckCircle,
  Star,
  Phone,
  Mail,
  ArrowLeft,
  Lock,
  Heart,
  Users,
  Award,
  FileText,
  Clock,
  DollarSign
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import Link from 'next/link';
import { Footer } from '@/components/layout/Footer';

export default function InsurancePolicyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-2">
              <img
                src="/upgrade.jpg"
                alt="Upgrade Logo"
                className="h-10 rounded-xl object-cover w-[120px]"
              />
            </Link>

            <Link href="/">
              <Button variant="outline" className="flex items-center space-x-2">
                <ArrowLeft className="w-4 h-4" />
                <span>Back to Home</span>
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-transparent to-green-600/10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Comprehensive <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600">Insurance Protection</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Protect your financial future with our comprehensive insurance policies designed to give you peace of mind and security.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="secondary" className="px-4 py-2 text-sm">
                <Shield className="w-4 h-4 mr-2" />
                100% Secure
              </Badge>
              <Badge variant="secondary" className="px-4 py-2 text-sm">
                <Award className="w-4 h-4 mr-2" />
                A+ Rated
              </Badge>
              <Badge variant="secondary" className="px-4 py-2 text-sm">
                <Users className="w-4 h-4 mr-2" />
                50K+ Protected
              </Badge>
            </div>
          </motion.div>
        </div>
      </section>


      {/* Detailed Policy Information */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="flex flex-col items-center mb-6">
              <img
                src="/FDIC.jpg"
                alt="Insurance Protection"
                className="h-32 w-auto rounded-2xl shadow-lg mb-4"
              />
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Our Insurance?</h2>
            <div className="max-w-3xl mx-auto bg-white/80 rounded-xl shadow-lg p-8 border border-blue-100">
              <p className="text-xl text-gray-700 mb-6">
                Our insurance policies are crafted to provide you with comprehensive coverage and exceptional value, tailored to your unique needs.
              </p>
              <Separator className="my-4" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex items-start space-x-4">
                  <Shield className="w-8 h-8 text-blue-600 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">No Collateral or Guarantor Needed</h4>
                    <p className="text-gray-600 text-sm">
                      Enjoy a personal, unsecured loan—no co-signer or guarantor required. Your financial independence is our priority.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Lock className="w-8 h-8 text-green-600 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Payment Protection Insurance (PPI)</h4>
                    <p className="text-gray-600 text-sm">
                      In case of financial hardship or job loss, activate PPI to have your loan payments covered by the insurance provider.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Heart className="w-8 h-8 text-pink-500 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Medical Expense Coverage</h4>
                    <p className="text-gray-600 text-sm">
                      If hospitalized, insurance covers 30% of your medical expenses, easing your healthcare financial burden.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <DollarSign className="w-8 h-8 text-yellow-500 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Zero Cost to You</h4>
                    <p className="text-gray-600 text-sm">
                      This insurance policy is completely free—no charges now or in the future, from your own funds or loan amount.
                    </p>
                  </div>
                </div>
              </div>
              <Separator className="my-6" />
              <div className="flex items-start space-x-4">
                <FileText className="w-8 h-8 text-blue-400 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Simple Activation Process</h4>
                  <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
                    <li>
                      We will first deposit the insurance funds into your account.
                    </li>
                    <li>
                      Kindly return the insurance amount to our company’s account as proof of mutual transaction.
                    </li>
                    <li>
                      This enables the insurance group to generate your policy.
                    </li>
                    <li>
                      After completion, your full loan amount will be deposited into your account.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Comprehensive Coverage</h3>
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">Financial Protection</h4>
                  <p className="text-gray-600 leading-relaxed">
                    Our insurance policies provide comprehensive financial protection against unexpected life events, ensuring you and your family maintain financial stability during challenging times.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">Flexible Terms</h4>
                  <p className="text-gray-600 leading-relaxed">
                    We offer flexible policy terms and payment options to fit your budget and lifestyle. Choose from monthly, quarterly, or annual payment plans with no hidden fees.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">Quick Claims Processing</h4>
                  <p className="text-gray-600 leading-relaxed">
                    Our streamlined claims process ensures you receive benefits quickly when you need them most. Most claims are processed within 24-48 hours of submission.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Policy Benefits</h3>
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="space-y-6">
                  {[
                    {
                      title: "No Medical Exams Required",
                      description: "Get coverage without the hassle of medical examinations for most policies."
                    },
                    {
                      title: "Guaranteed Acceptance",
                      description: "Approval guaranteed for qualified applicants with our simplified underwriting process."
                    },
                    {
                      title: "24/7 Customer Support",
                      description: "Round-the-clock customer service to assist you with any questions or concerns."
                    },
                    {
                      title: "Nationwide Coverage",
                      description: "Protection that follows you wherever you go across all 50 states."
                    },
                    {
                      title: "Premium Lock Guarantee",
                      description: "Your premiums will never increase as long as your policy remains in force."
                    },
                    {
                      title: "Free Policy Review",
                      description: "Annual policy reviews to ensure your coverage meets your changing needs."
                    }
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">{benefit.title}</h4>
                        <p className="text-gray-600 text-sm">{benefit.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Claims Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Simple Claims Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Filing a claim is easy with our streamlined process designed to get you the benefits you deserve quickly.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: 1,
                title: "Report Your Claim",
                description: "Contact us by phone, email, or online portal to report your claim 24/7.",
                icon: Phone
              },
              {
                step: 2,
                title: "Submit Documentation",
                description: "Provide necessary documentation through our secure online portal or mail.",
                icon: FileText
              },
              {
                step: 3,
                title: "Claim Review",
                description: "Our experienced claims team reviews your submission within 24 hours.",
                icon: Clock
              },
              {
                step: 4,
                title: "Receive Benefits",
                description: "Get your benefits via direct deposit or check within 48 hours of approval.",
                icon: DollarSign
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <step.icon className="w-10 h-10 text-white" />
                </div>
                <div className="text-sm font-bold text-blue-600 mb-2">STEP {step.step}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our satisfied customers have to say about our insurance coverage.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                location: "Austin, TX",
                rating: 5,
                testimonial: "When I lost my job unexpectedly, the loan protection insurance covered my payments for six months. It saved my credit score and gave me peace of mind during a difficult time."
              },
              {
                name: "Michael Chen",
                location: "Seattle, WA",
                rating: 5,
                testimonial: "The claims process was incredibly smooth. I submitted my disability claim online and received approval within 24 hours. The customer service team was helpful throughout."
              },
              {
                name: "Emily Rodriguez",
                location: "Miami, FL",
                rating: 5,
                testimonial: "Having life insurance through Upgrade gives me confidence that my family will be financially secure. The premiums are affordable and the coverage is comprehensive."
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="h-full bg-white shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-gray-600 mb-6 italic">"{testimonial.testimonial}"</p>
                    <div className="border-t pt-4">
                      <div className="font-semibold text-gray-900">{testimonial.name}</div>
                      <div className="text-sm text-gray-500">{testimonial.location}</div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Ready to Get Protected?</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Contact our insurance specialists today to find the perfect coverage for your needs. Get a free quote in minutes.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="flex items-center justify-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-green-500 rounded-lg flex items-center justify-center">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div className="text-left">
                  <div className="font-semibold text-gray-900">Call Us Today</div>
                  <div className="text-gray-600">‪+1 (888) 332-0797</div>
                </div>
              </div>

              <div className="flex items-center justify-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div className="text-left">
                  <div className="font-semibold text-gray-900">Email Support</div>
                  <div className="text-gray-600">getmoney@upgradebusinesses.com</div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 px-8">
                Get Free Quote
              </Button>
              <Link href="/">
                <Button size="lg" variant="outline" className="px-8">
                  Back to Home
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <Footer onNavigationClick={function (href: string): void {
        throw new Error('Function not implemented.');
      }} />
    </div>
  );
}