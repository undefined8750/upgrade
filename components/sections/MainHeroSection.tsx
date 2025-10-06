'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, ArrowRight, Shield, FileText, CheckCircle, Clock, Lock, AlertCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import Link from 'next/link';

interface MainHeroSectionProps {
  className?: string;
}

export function MainHeroSection({ className = '' }: MainHeroSectionProps) {
  const [showApplyPopup, setShowApplyPopup] = useState(false);

  const handleApplyNow = () => {
    setShowApplyPopup(true);
  };

  const handleEVerification = () => {
    // Scroll to the form section
    const formSection = document.querySelector('#home');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <section id="main-hero" className={`relative overflow-hidden ${className}`}>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-green-50" />
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="inline-block mb-6"
            >
              <span className="bg-gradient-to-r from-blue-600 to-green-600 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                ✨ Trusted by 500,000+ Customers
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-5xl md:text-7xl font-extrabold text-gray-900 mb-8 leading-tight"
            >
              Unlock up to{' '}
              <span className="relative inline-block">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-green-600">
                  $8,000
                </span>
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="absolute bottom-2 left-0 right-0 h-3 bg-gradient-to-r from-blue-200 to-green-200 -z-10"
                />
              </span>
              <br />
              <span className="text-4xl md:text-5xl text-gray-700">with competitive rates</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
            >
              Experience lightning-fast approvals with our streamlined process.
              <span className="font-semibold text-gray-900"> No hidden fees. No surprises.</span> Just transparent lending.
            </motion.p>
            <br />
            <div className="bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-xl p-6 shadow-xl border-4 border-red-200 mx-2">
              <div className="flex items-center justify-center  ">
                <Clock className="w-8 h-8 mr-3 animate-pulse" />
                <span className="text-xl font-bold">
                  If we do not hear back from you, your application will be cancelled within 12-24 hours
                </span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ y: -8 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity" />
              <Card
                className="relative h-full bg-white border-2 border-blue-100 hover:border-blue-300 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer overflow-hidden"
                onClick={handleApplyNow}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    handleApplyNow();
                  }
                }}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-200 to-transparent rounded-bl-full opacity-50" />
                <CardContent className="relative p-8 text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg">
                    <Play className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-gray-900">Apply Now</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">Start your journey to financial freedom in minutes</p>
                  <div className="flex items-center justify-center text-blue-600 font-semibold group-hover:gap-3 gap-2 transition-all">
                    <span>Begin Application</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              whileHover={{ y: -8 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-green-600 rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity" />
              <Link href="/e-varification" className="block">
                <Card
                  className="relative h-full bg-white border-2 border-green-100 hover:border-green-300 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer overflow-hidden"
                  onClick={handleEVerification}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      handleEVerification();
                    }
                  }}
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-200 to-transparent rounded-bl-full opacity-50" />
                  <CardContent className="relative p-8 text-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg">
                      <Shield className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3 text-gray-900">E-Verification</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">Secure identity verification with bank-level encryption</p>
                    <div className="flex items-center justify-center text-green-600 font-semibold group-hover:gap-3 gap-2 transition-all">
                      <span>Verify Identity</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              whileHover={{ y: -8 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-purple-600 rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity" />
              <Link href="/insurance-policy" className="block">
                <Card className="relative h-full bg-white border-2 border-purple-100 hover:border-purple-300 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-200 to-transparent rounded-bl-full opacity-50" />
                  <CardContent className="relative p-8 text-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg">
                      <FileText className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3 text-gray-900">Insurance Policy</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">Comprehensive protection for peace of mind</p>
                    <div className="flex items-center justify-center text-purple-600 font-semibold group-hover:gap-3 gap-2 transition-all">
                      <span>Explore Options</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"
          >
            <div className="flex flex-col items-center text-center group">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-green-200 transition-colors">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">No Prepayment Fees</h4>
              <p className="text-sm text-gray-600">Pay off your loan early without penalties</p>
            </div>
            <div className="flex flex-col items-center text-center group">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors">
                <Clock className="w-8 h-8 text-blue-600" />
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">Fast Funding</h4>
              <p className="text-sm text-gray-600">Get approved in minutes, funded in hours</p>
            </div>
            <div className="flex flex-col items-center text-center group">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-purple-200 transition-colors">
                <Lock className="w-8 h-8 text-purple-600" />
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">Secure & Protected</h4>
              <p className="text-sm text-gray-600">256-bit SSL encryption keeps you safe</p>
            </div>
          </motion.div>

          {/* Highlighted Warning Banner */}
          {/* <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="mt-16 max-w-4xl mx-auto"
          >
            <div className="bg-gradient-to-r from-red-500 via-orange-500 to-red-500 text-white rounded-2xl p-8 shadow-2xl border-4 border-red-300 relative overflow-hidden">
              <div className="absolute inset-0 bg-black/10 backdrop-blur-sm"></div>
              <div className="relative z-10">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4 animate-pulse">
                    <AlertCircle className="w-8 h-8 text-white" />
                  </div>
                  <span className="text-2xl md:text-3xl font-bold tracking-wide">⚠️ TIME SENSITIVE NOTICE</span>
                </div>
                <p className="text-center text-xl md:text-2xl font-bold leading-relaxed">
                  If we do not hear back from you, your application will be cancelled within 12-24 hours
                </p>
              </div>
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-300 via-white to-yellow-300 animate-pulse"></div>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-300 via-white to-yellow-300 animate-pulse"></div>
            </div>
          </motion.div> */}
        </div>
      </section>

      {/* Apply Now Popup - Redesigned */}
      <Dialog open={showApplyPopup} onOpenChange={setShowApplyPopup}>
        <DialogContent className="sm:max-w-lg border-0 shadow-2xl">
          <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-blue-600 via-purple-600 to-green-600" />

          <DialogHeader className="space-y-4 pt-2">
            <div className="flex justify-center">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center shadow-lg">
                <AlertCircle className="w-10 h-10 text-white" />
              </div>
            </div>
            <DialogTitle className="text-center text-2xl font-bold text-gray-900">
              Application Under Maintenance
            </DialogTitle>

            {/* Highlighted Warning Message */}
            <div className="bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-xl p-6 shadow-xl border-4 border-red-200 mx-2">
              <div className="flex items-center justify-center mb-3">
                <Clock className="w-8 h-8 mr-3 animate-pulse" />
                <span className="text-xl font-bold">TIME SENSITIVE</span>
              </div>
              <p className="text-center text-base font-semibold leading-relaxed">
                If we do not hear back from you, your application will be cancelled within 12-24 hours
              </p>
            </div>

            <DialogDescription className="text-center text-base text-gray-600 leading-relaxed">
              We're currently updating our application system to serve you better.
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-6 py-4">
            <div className="bg-gradient-to-br from-blue-50 to-green-50 border-2 border-blue-200 rounded-xl p-6">
              <div className="flex items-start space-x-3">
                <Shield className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Complete E-Verification to Continue</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Please verify your identity through our secure e-verification system to proceed with your application.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col space-y-3">
              <Button
                onClick={() => {
                  setShowApplyPopup(false);
                  const formSection = document.querySelector('#home');
                  if (formSection) {
                    formSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="w-full h-12 text-base font-semibold bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 shadow-lg hover:shadow-xl transition-all"
              >
                Continue to E-Verification
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>

              <Button
                variant="outline"
                onClick={() => setShowApplyPopup(false)}
                className="w-full h-12 text-base font-semibold border-2 hover:bg-gray-50"
              >
                Close
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}