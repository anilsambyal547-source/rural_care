'use client';
import React from 'react';
import Link from 'next/link';
import { HeartPulse, Globe, Menu, Sun, Moon } from 'lucide-react';
import { Button } from '../ui/Button';
import { useTheme } from 'next-themes';
import { useLanguage, Language } from '@/lib/LanguageContext';

export function TopNav() {
  const { theme, setTheme } = useTheme();
  const { language, setLanguage, t } = useLanguage();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => setMounted(true), []);

  return (
    <header className="bg-primary dark:bg-gray-900 text-white sticky top-0 z-50 border-b border-transparent dark:border-gray-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2">
              <HeartPulse className="h-8 w-8 text-white" />
              <span className="font-bold text-xl tracking-tight">RuralCare</span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <select 
              value={language}
              onChange={(e) => setLanguage(e.target.value as Language)}
              className="bg-primary-dark dark:bg-gray-800 text-white border border-primary-light dark:border-gray-700 rounded p-1 text-sm outline-none"
            >
              <option value="en">English</option>
              <option value="hi">हिंदी</option>
              <option value="ta">தமிழ்</option>
              <option value="te">తెలుగు</option>
            </select>
            
            <Link href="/help" className="hover:text-primary-light dark:hover:text-gray-300 transition-colors text-sm font-medium">
              {t('nav.help')}
            </Link>
            
            {mounted && (
              <button 
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="p-1 rounded-full hover:bg-white/10 transition-colors"
                aria-label="Toggle Dark Mode"
              >
                {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </button>
            )}

            <Link href="/auth">
              <Button variant="secondary" size="sm" className="dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700 dark:border-gray-700 border">
                {t('nav.signin')}
              </Button>
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button className="text-white hover:text-primary-light p-2">
              <Menu className="h-6 w-6" />
            </button>
          </div>
          
        </div>
      </div>
    </header>
  );
}
