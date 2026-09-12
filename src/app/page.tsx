'use client';
import React from 'react';
import { TopNav } from '@/components/layout/TopNav';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';
import { 
  CalendarCheck, Users, Stethoscope, FileText, 
  Pill, ArrowRight, MapPin, AlertTriangle
} from 'lucide-react';
import Link from 'next/link';
import { useLanguage } from '@/lib/LanguageContext';

export default function Home() {
  const { t } = useLanguage();

  return (
    <>
      <TopNav />
      <main className="flex-1 flex flex-col">
        
        {/* Emergency Banner */}
        <div className="bg-urgent text-white px-4 py-3 text-center sm:px-6 lg:px-8">
          <p className="flex items-center justify-center gap-2 text-sm font-medium">
            <AlertTriangle className="h-5 w-5" />
            <span>Need urgent help? Call 108 immediately or</span>
            <Link href="/emergency" className="underline hover:text-red-100 font-bold ml-1">
              view emergency protocols
            </Link>
          </p>
        </div>

        {/* Hero Section */}
        <div className="relative bg-primary dark:bg-gray-900 border-b border-transparent dark:border-gray-800 transition-colors">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center opacity-10 mix-blend-multiply"></div>
          </div>
          <div className="relative max-w-7xl mx-auto px-4 py-20 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl text-balance">
              {t('hero.title')}
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-xl text-teal-100 dark:text-gray-300 text-balance">
              {t('hero.subtitle')}
            </p>
            <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center gap-4">
              <div className="space-y-4 sm:space-y-0 sm:inline-flex sm:space-x-4">
                <Link href="/triage">
                  <Button variant="primary" size="lg" className="bg-white dark:bg-primary text-primary dark:text-white hover:bg-gray-50 shadow-md">
                    {t('hero.cta1')}
                  </Button>
                </Link>
                <Link href="/facilities">
                  <Button variant="ghost" size="lg" className="text-white hover:bg-primary-light/50 ring-1 ring-white/50">
                    {t('hero.cta2')}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 -mt-10 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            <QuickAction icon={<CalendarCheck />} label={t('quick.book')} href="/appointment" />
            <QuickAction icon={<Users />} label={t('quick.queue')} href="/queue" />
            <QuickAction icon={<Stethoscope />} label={t('quick.talk')} href="/teleconsultation" />
            <QuickAction icon={<ArrowRight />} label={t('quick.referral')} href="/referrals" />
            <QuickAction icon={<Pill />} label={t('quick.medicine')} href="/medicines" />
            <QuickAction icon={<FileText />} label={t('quick.record')} href="/patient-dashboard" />
          </div>
        </div>

        {/* Service Finder */}
        <div className="bg-surface-alt dark:bg-gray-950 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">Find the right service near you</h2>
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">Search by location, facility type, or available treatments.</p>
            </div>
            
            <Card className="max-w-4xl mx-auto">
              <CardContent className="p-6">
                <form className="flex flex-col md:flex-row gap-4">
                  <div className="flex-1 relative">
                    <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                    <input 
                      type="text" 
                      placeholder="Enter village, block or district..." 
                      className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                    />
                  </div>
                  <div className="flex-1">
                    <select className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-primary outline-none">
                      <option>Any Service</option>
                      <option>General Consultation</option>
                      <option>Maternal & Child Health</option>
                      <option>Diagnostics</option>
                      <option>Emergency Care</option>
                    </select>
                  </div>
                  <Button type="button" size="lg" className="md:w-auto w-full">Search</Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

      </main>
      <Footer />
    </>
  );
}

function QuickAction({ icon, label, href }: { icon: React.ReactNode, label: string, href: string }) {
  return (
    <Link href={href}>
      <Card className="h-full hover:shadow-md transition-shadow group cursor-pointer border-transparent hover:border-primary/20 dark:hover:border-primary/50">
        <CardContent className="p-4 flex flex-col items-center text-center gap-3">
          <div className="p-3 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
            {React.cloneElement(icon as React.ReactElement<any>, { className: 'h-6 w-6' })}
          </div>
          <span className="text-sm font-medium text-gray-900 dark:text-gray-200 leading-tight">{label}</span>
        </CardContent>
      </Card>
    </Link>
  );
}
