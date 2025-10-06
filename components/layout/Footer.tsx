'use client';

import { Separator } from '@/components/ui/separator';
import { Leaf, Phone, Mail, MapPin } from 'lucide-react';

interface FooterProps {
  onNavigationClick: (href: string) => void;
  className?: string;
}

export function Footer({ onNavigationClick, className = '' }: FooterProps) {
  return (
    <footer className={`bg-gray-900 text-white py-12 lg:py-16 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <img
                src="/upgrade.jpg"
                alt="Upgrade Logo"
                className="h-10 rounded-xl object-cover w-[120px]"
              />
            </div>
            <p className="text-gray-400 mb-6 text-sm lg:text-base leading-relaxed">
              1415 Vantage Park Dr Suite 700, Charlotte, North Carolina, 28203.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-blue-400 flex-shrink-0" />
                <span className="text-sm">‪+1 (888) 332-0797</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-blue-400 flex-shrink-0" />
                <span className="text-sm">getmoney@upgradebusinesses.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-blue-400 flex-shrink-0" />
                <span className="text-sm">Available in all 50 US states</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-6 text-lg">Services</h3>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Personal Loans</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Debt Consolidation</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Home Improvement</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Medical Financing</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Business Loans</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-6 text-lg">Company</h3>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li><button onClick={() => onNavigationClick('#about')} className="hover:text-white transition-colors">About Us</button></li>
              <li><button onClick={() => onNavigationClick('#how-it-works')} className="hover:text-white transition-colors">How it Works</button></li>
              <li><a href="#" className="hover:text-white transition-colors">Reviews</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Press</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-6 text-lg">Support</h3>
            <div className="space-y-6">
              <div>
                <p className="text-sm text-gray-400 mb-2">Customer Service:</p>
                <p className="font-semibold text-base">‪+1 (888) 332-0797</p>
                <p className="text-sm text-gray-400">Mon-Fri 8AM-8PM EST</p>
              </div>
              <div>
                <p className="text-sm text-gray-400 mb-2">Emergency Support:</p>
                <p className="font-semibold text-base">‪+1 (704) 267-2733</p>
                <p className="text-sm text-gray-400">24/7 Available</p>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8 lg:my-12 bg-gray-700" />

        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-gray-400 text-sm">
            © 2025 Upgrade. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center md:justify-end space-x-6 lg:space-x-8">
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Responsible Lending</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
} 