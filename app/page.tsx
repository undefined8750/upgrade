'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Separator } from '@/components/ui/separator';
import { CheckCircle, DollarSign, Shield, Clock, ChevronRight, ChevronLeft, Phone, Mail, MapPin, Users, Star, TrendingUp, Award, Zap, Lock, CreditCard, Building, Eye, EyeOff, Leaf, ArrowRight, Target, FileText, Smartphone, CheckCircle2, Globe, HeadphonesIcon, Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/components/sections/HeroSection';
import { StatsSection } from '@/components/sections/StatsSection';
import { FeaturesSection } from '@/components/sections/FeaturesSection';
import { LoanTypesSection } from '@/components/sections/LoanTypesSection';
import { HowItWorksSection } from '@/components/sections/HowItWorksSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { ContactSection } from '@/components/sections/ContactSection';
import { FaqSection } from '@/components/sections/FaqSection';
import { LoanAmountsSection } from '@/components/sections/LoanAmountsSection';
import { MainHeroSection } from '@/components/sections/MainHeroSection';


const loanAmounts = [
  { amount: '$1,000', purpose: 'Emergency Expenses', rate: '5.99%' },
  { amount: '$2,500', purpose: 'Debt Consolidation', rate: '6.49%' },
  { amount: '$5,000', purpose: 'Home Improvement', rate: '6.99%' },
  { amount: '$7,500', purpose: 'Major Purchase', rate: '7.49%' },
  { amount: '$8,000', purpose: 'Business Investment', rate: '7.99%' },
];

const loanTypes = [
  {
    icon: DollarSign,
    title: "Personal Loan",
    description: "Personal Loans provide fast and easy money solutions with loan amounts ranging from hundreds to thousands based on your state."
  },
  {
    icon: Building,
    title: "Business Loan",
    description: "Start or expand your business with loans guaranteed by the Small Business Administration. Use Lender Match to find lenders that offer loans for your business."
  },
  {
    icon: FileText,
    title: "Installment Loans",
    description: "Get the money you need right now. Pay it back over time."
  },
  {
    icon: TrendingUp,
    title: "Title Loans",
    description: "Get the money you need while continuing to drive your vehicle."
  },
  {
    icon: CreditCard,
    title: "Line Of Credit",
    description: "Get the money you need right now. Pay it back over time."
  },
  {
    icon: Clock,
    title: "Payday Loans",
    description: "Payday Loan.. also known as a fast cash loan, is a short-term loan typically due on your next payday."
  }
];

const howItWorksSteps = [
  {
    step: "Step 1",
    icon: FileText,
    title: "Fill Out Application",
    description: "Fill out our simple & easy online form and our specialist will contact you to verify identity and assist you"
  },
  {
    step: "Step 2",
    icon: Target,
    title: "Get Matched",
    description: "We match you with a lender based on their requirements and direct you Application"
  },
  {
    step: "You're Done",
    icon: CheckCircle2,
    title: "Receive Funds",
    description: "Cash is directly deposited to your bank account after approval"
  }
];

const faqData = [
  {
    question: "What are your interest rates?",
    answer: "Our rates start as low as 5.99% APR and vary based on your creditworthiness, loan amount, and term length."
  },
  {
    question: "Are there any hidden fees?",
    answer: "No, we believe in transparent pricing. All fees are clearly disclosed upfront with no hidden charges."
  },
  {
    question: "What can I use the loan for?",
    answer: "You can use your personal loan for debt consolidation, home improvements, medical expenses, major purchases, or any other personal need."
  },
  {
    question: "What information do I need to apply?",
    answer: "You'll need basic personal information, contact details, employment information, and bank account details for fund transfer."
  },
  {
    question: "Is my information secure?",
    answer: "Yes, we use bank-level 256-bit SSL encryption to protect all your personal and financial information."
  }
];

const navigationItems = [
  { name: 'Home', href: '#main-hero' },
  // { name: 'Apply', href: '#home' },
  { name: 'Loan Types', href: '#loan-types' },
  { name: 'How it Works', href: '#how-it-works' },
  { name: 'About', href: '#about' },
  // { name: 'Contact', href: '#contact' },
];

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  // Smooth scroll function
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };
  // Stats for StatsSection
  const stats = [
    { value: '500K+', label: 'Happy Customers' },
    { value: '$2B+', label: 'Loans Funded' },
    { value: '4.8/5', label: 'Customer Rating' },
    { value: '24/7', label: 'Customer Support' },
  ];

  // About section features
  const aboutFeatures = [
    { icon: require('lucide-react').Shield, title: 'Bank-Level Security', description: 'Your personal and financial information is protected with 256-bit SSL encryption.' },
    { icon: require('lucide-react').Globe, title: 'Nationwide Coverage', description: 'Available in all 50 states with a network of trusted lending partners.' },
    { icon: require('lucide-react').HeadphonesIcon, title: '24/7 Customer Support', description: 'Our dedicated support team is available around the clock to assist you.' },
  ];

  // About section stats
  const aboutStats = [
    { value: '21,532', label: 'Reviews' },
    { value: '161', label: 'Reviews' },
  ];

  // Contact info
  const contactInfo = [
    { icon: require('lucide-react').Phone, title: 'Customer Service', primary: '‪+1 (888) 332-0797', secondary: 'Monday - Friday: 8AM - 8PM EST' },
    { icon: require('lucide-react').Mail, title: 'Email Support', primary: 'getmoney@upgradebusinesses.com', secondary: 'We respond within 24 hours' },
    { icon: require('lucide-react').MapPin, title: 'Service Area', primary: 'Available in all 50 US states', secondary: 'Nationwide lending network' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-green-50 to-white">
      <Header navigationItems={navigationItems} onNavigationClick={scrollToSection} />

      <MainHeroSection />

      <StatsSection stats={stats} />

      <LoanTypesSection
        title="Types of Personal Loans from Upgrade"
        subtitle="Easy and fast online lending solutions, cash loans and more."
        loanTypes={loanTypes}
      />

      <HowItWorksSection
        title="HOW IT WORKS"
        subtitle="See all below Steps for loan application"
        steps={howItWorksSteps}
      />

      <AboutSection
        title="Proudly serving our customers"
        description="At Upgrade, we've been helping Americans achieve their financial goals for over two decades. Our commitment to transparency, competitive rates, and exceptional customer service has made us the trusted choice for millions of borrowers nationwide."
        stats={aboutStats}
        features={aboutFeatures}
      />

      <LoanAmountsSection
        title="Choose Your Loan Amount"
        subtitle="Flexible loan amounts with competitive rates for every need"
        loanAmounts={loanAmounts}
      />

      <FaqSection
        title="Frequently Asked Questions"
        subtitle="Get answers to common questions about our loan process"
        faqData={faqData}
      />

      {/* <ContactSection
        title="Get in Touch"
        subtitle="We're here to help you with your loan needs"
        contactInfo={contactInfo}
      /> */}

      <Footer onNavigationClick={scrollToSection} />
    </div>
  );
}