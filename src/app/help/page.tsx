import React from 'react';
import { TopNav } from '@/components/layout/TopNav';
import { Footer } from '@/components/layout/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Phone, Mail, MessageCircle, HelpCircle } from 'lucide-react';

export default function HelpPage() {
  return (
    <div className="min-h-screen flex flex-col bg-surface-alt dark:bg-gray-950">
      <TopNav />
      <main className="flex-1 max-w-4xl w-full mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <HelpCircle className="mx-auto h-12 w-12 text-primary mb-4" />
          <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">Help & Support</h1>
          <p className="mt-4 text-gray-600 dark:text-gray-400">We're here to help you get the healthcare you need.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-primary" /> Customer Care
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Call our toll-free number for immediate assistance with appointments, facility information, or technical issues.
              </p>
              <a href="tel:18001234567" className="text-2xl font-bold text-primary hover:underline">
                1800-123-4567
              </a>
              <p className="text-sm text-gray-500 mt-2">Available 24/7 in English, Hindi, Tamil, and Telugu.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-primary" /> Email Support
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Send us an email with your query, and our support team will get back to you within 24 hours.
              </p>
              <a href="mailto:support@ruralcare.gov.in" className="text-xl font-bold text-primary hover:underline">
                support@ruralcare.gov.in
              </a>
            </CardContent>
          </Card>
        </div>

        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MessageCircle className="h-5 w-5 text-primary" /> Frequently Asked Questions
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-gray-100">How do I book an appointment?</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Navigate to the homepage and click 'Book Appointment'. Choose your nearest facility and select an available time slot.</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-gray-100">What if I have an emergency?</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Please call 108 immediately for ambulance services or use the 'Emergency Guidance' link on the homepage.</p>
            </div>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
