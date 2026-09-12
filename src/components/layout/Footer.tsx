import React from 'react';
import Link from 'next/link';
import { Phone, ShieldAlert, Accessibility, ShieldCheck } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h4 className="text-white font-bold text-lg mb-4">RuralCare</h4>
            <p className="text-sm text-gray-400">
              Integrated Rural Healthcare Access & Quality Support Platform.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-4">Emergency</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="tel:108" className="flex items-center gap-2 hover:text-white transition-colors">
                  <Phone className="h-4 w-4" />
                  Ambulance (108)
                </a>
              </li>
              <li>
                <Link href="/emergency" className="flex items-center gap-2 text-red-400 hover:text-red-300 transition-colors">
                  <ShieldAlert className="h-4 w-4" />
                  Emergency Guidance
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Support</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/help" className="hover:text-white transition-colors">Helpline & Grievance</Link></li>
              <li>
                <Link href="/accessibility" className="flex items-center gap-2 hover:text-white transition-colors">
                  <Accessibility className="h-4 w-4" />
                  Accessibility Options
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Legal & Privacy</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/privacy" className="flex items-center gap-2 hover:text-white transition-colors">
                  <ShieldCheck className="h-4 w-4" />
                  Data Privacy
                </Link>
              </li>
              <li><Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-sm text-center text-gray-500">
          <p>© {new Date().getFullYear()} RuralCare Public Health Initiative. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
