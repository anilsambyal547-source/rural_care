'use client';
import React from 'react';
import { TopNav } from '@/components/layout/TopNav';
import { Footer } from '@/components/layout/Footer';
import { Card, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Phone, Video, MapPin, UserSquare2 } from 'lucide-react';

const doctors = [
  { id: 1, name: "Dr. Ananya Sharma", spec: "General Physician", contact: "+91-9876543210", location: "Rampur PHC" },
  { id: 2, name: "Dr. Rajesh Kumar", spec: "Pediatrician", contact: "+91-9876543211", location: "District Hospital, Sitapur" },
  { id: 3, name: "Dr. Sneha Patil", spec: "Gynecologist", contact: "+91-9876543212", location: "Women's Health Clinic, Pune" },
  { id: 4, name: "Dr. Vikram Singh", spec: "Orthopedic Surgeon", contact: "+91-9876543213", location: "City Care Hospital" },
  { id: 5, name: "Dr. Meera Reddy", spec: "Dermatologist", contact: "+91-9876543214", location: "Skin & Care Center" },
  { id: 6, name: "Dr. Amit Patel", spec: "Cardiologist", contact: "+91-9876543215", location: "Heart Institute, Mumbai" },
  { id: 7, name: "Dr. Priya Das", spec: "Psychiatrist", contact: "+91-9876543216", location: "Mind Wellness Clinic" },
  { id: 8, name: "Dr. Rohan Gupta", spec: "ENT Specialist", contact: "+91-9876543217", location: "Clear Hearing & ENT Center" },
  { id: 9, name: "Dr. Kavita Verma", spec: "Endocrinologist", contact: "+91-9876543218", location: "Diabetes & Thyroid Clinic" },
  { id: 10, name: "Dr. Sunil Joshi", spec: "Ophthalmologist", contact: "+91-9876543219", location: "Vision Care Eye Hospital" },
];

export default function TeleconsultationPage() {
  return (
    <div className="min-h-screen flex flex-col bg-surface-alt dark:bg-gray-950">
      <TopNav />
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 py-8">
        
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 flex items-center gap-2">
            <Video className="h-8 w-8 text-primary" />
            Talk to a Doctor
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mt-2">Connect with leading specialists for a teleconsultation or find their clinic details.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {doctors.map((doc) => (
            <Card key={doc.id} className="hover:shadow-lg transition-shadow border-gray-200 dark:border-gray-800">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full shrink-0">
                    <UserSquare2 className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100">{doc.name}</h3>
                    <p className="text-sm font-semibold text-primary-dark dark:text-primary-light mb-4">{doc.spec}</p>
                    
                    <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                      <p className="flex items-center gap-2">
                        <Phone className="h-4 w-4 shrink-0 text-gray-400" />
                        <a href={`tel:${doc.contact}`} className="hover:text-primary transition-colors">{doc.contact}</a>
                      </p>
                      <p className="flex items-start gap-2">
                        <MapPin className="h-4 w-4 shrink-0 text-gray-400 mt-0.5" />
                        <span>{doc.location}</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-6 flex gap-3 border-t dark:border-gray-800 pt-4">
                  <Button variant="secondary" className="flex-1" size="sm">
                    Book Visit
                  </Button>
                  <Button variant="primary" className="flex-1 flex items-center gap-2" size="sm">
                    <Video className="h-4 w-4" /> Start Call
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

      </main>
      <Footer />
    </div>
  );
}
