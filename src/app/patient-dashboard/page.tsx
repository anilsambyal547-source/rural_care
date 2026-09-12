'use client';
import React from 'react';
import { TopNav } from '@/components/layout/TopNav';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Calendar, Clock, Activity, FileText, Pill, Video, Stethoscope, ShoppingBag, ClipboardList } from 'lucide-react';
import { mockPatients, mockFacilities } from '@/lib/mockData';

export default function PatientDashboard() {
  const patient = mockPatients[0]; // Lakshmi Devi
  const nearestFacility = mockFacilities[0];

  return (
    <div className="min-h-screen flex flex-col bg-surface-alt dark:bg-gray-950">
      <TopNav />
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 py-8">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Welcome, {patient.name}</h1>
            <p className="text-gray-600 dark:text-gray-400">ID: {patient.id} | {patient.language} | {patient.village}</p>
          </div>
          <Button variant="primary" className="flex items-center gap-2">
            <Video className="h-4 w-4" /> Join Teleconsultation
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          
          {/* Left Column: Actions & Status */}
          <div className="md:col-span-1 space-y-6">
            
            <Card className="border-l-4 border-l-warning">
              <CardContent className="p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-xs font-semibold text-warning uppercase tracking-wider">Active Referral</span>
                    <h3 className="font-bold text-gray-900 dark:text-gray-100 mt-1">To: {mockFacilities[2].name}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Specialist Consultation required.</p>
                  </div>
                  <FileText className="text-warning h-6 w-6 opacity-50" />
                </div>
                <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-800 flex gap-2">
                  <Button variant="secondary" size="sm" fullWidth>View Details</Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-primary" /> Upcoming Visit
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-primary/5 dark:bg-primary/10 rounded-lg p-3 border border-primary/10">
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100">{nearestFacility.name}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Tomorrow, 10:00 AM</p>
                  <div className="flex items-center gap-1 mt-2 text-sm font-medium text-primary dark:text-primary-light">
                    <Clock className="h-4 w-4" /> Estimated Wait: {nearestFacility.estimatedWaitTime} mins
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column: Longitudinal Record (Timeline) */}
          <div className="md:col-span-2">
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Activity className="h-5 w-5 text-primary" /> Health Timeline
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="relative border-l border-gray-200 dark:border-gray-800 ml-3 space-y-8 pb-4">
                  
                  <TimelineItem 
                    date="Today, 09:30 AM"
                    title="Assisted Triage Completed"
                    description="Patient reported fever and cough. Recommended for General Consultation."
                    type="triage"
                  />
                  
                  <TimelineItem 
                    date="Oct 12, 2026"
                    title="Visit to Rampur PHC"
                    description="Routine checkup. Vitals normal. Iron supplements prescribed."
                    type="visit"
                  />

                  <TimelineItem 
                    date="Sep 05, 2026"
                    title="Diagnostic Test Results"
                    description="Complete Blood Count (CBC) - Haemoglobin slightly low. Awaiting physician review."
                    type="lab"
                  />

                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Comprehensive Health Report */}
        <Card className="border-t-4 border-t-primary shadow-md">
          <CardHeader className="bg-gray-50 dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800">
            <CardTitle className="flex items-center gap-2 text-2xl text-primary-dark dark:text-primary-light">
              <ClipboardList className="h-6 w-6" /> Comprehensive Health Report
            </CardTitle>
            <p className="text-gray-600 dark:text-gray-400 mt-1">Consolidated view of your health history and active treatments.</p>
          </CardHeader>
          <CardContent className="p-0">
            <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-100 dark:divide-gray-800">
              
              {/* Left Column: Problems & Treatments */}
              <div className="p-6 space-y-8">
                <div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 flex items-center gap-2 mb-4">
                    <AlertTriangle className="h-5 w-5 text-warning" /> Problems Shared (Triage)
                  </h3>
                  <ul className="space-y-3">
                    <li className="bg-warning/10 p-3 rounded-lg border border-warning/20">
                      <p className="font-semibold text-gray-900 dark:text-gray-100">Fever & Cough</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Reported today. Duration: 1-3 days. No red flags.</p>
                    </li>
                    <li className="bg-gray-50 dark:bg-gray-800 p-3 rounded-lg border border-gray-100 dark:border-gray-700">
                      <p className="font-semibold text-gray-900 dark:text-gray-100">Mild Headaches</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Reported on Oct 10, 2026. Resolved.</p>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 flex items-center gap-2 mb-4">
                    <Stethoscope className="h-5 w-5 text-primary" /> Treatments Mentioned by Doctor
                  </h3>
                  <div className="bg-primary/5 p-4 rounded-lg border border-primary/20 space-y-3">
                    <p className="text-gray-800 dark:text-gray-200">
                      <strong>Dr. Sharma (General Physician):</strong> "Patient shows signs of viral infection. Advised rest for 3 days and increased fluid intake. If fever persists beyond 3 days, complete blood count (CBC) should be repeated."
                    </p>
                    <p className="text-gray-800 dark:text-gray-200">
                      <strong>Follow-up Action:</strong> Specialist consultation (Orthopedic) referred for knee joint pain reported last month.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column: Medicines */}
              <div className="p-6 space-y-8">
                <div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 flex items-center gap-2 mb-4">
                    <Pill className="h-5 w-5 text-positive" /> Medicines Prescribed by Doctor
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-100 dark:border-gray-700">
                      <div>
                        <p className="font-semibold text-gray-900 dark:text-gray-100">Amoxicillin 250mg</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">3x daily for 5 days</p>
                      </div>
                      <span className="text-xs bg-positive/20 text-positive px-2 py-1 rounded font-bold uppercase">Active</span>
                    </li>
                    <li className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-100 dark:border-gray-700">
                      <div>
                        <p className="font-semibold text-gray-900 dark:text-gray-100">Iron Supplements</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">1x daily for 30 days</p>
                      </div>
                      <span className="text-xs bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400 px-2 py-1 rounded font-bold uppercase">Completed</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 flex items-center gap-2 mb-4">
                    <ShoppingBag className="h-5 w-5 text-blue-500" /> Medicines Purchased via App
                  </h3>
                  <ul className="space-y-3">
                    <li className="p-3 bg-blue-50 dark:bg-blue-900/10 rounded-lg border border-blue-100 dark:border-blue-900/30 flex justify-between items-center">
                      <div>
                        <p className="font-semibold text-gray-900 dark:text-gray-100">Paracetamol 500mg</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Ordered from: MediLife Hub</p>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-gray-900 dark:text-gray-100">₹18</p>
                        <p className="text-xs text-gray-500">Delivered Today</p>
                      </div>
                    </li>
                    <li className="p-3 bg-blue-50 dark:bg-blue-900/10 rounded-lg border border-blue-100 dark:border-blue-900/30 flex justify-between items-center">
                      <div>
                        <p className="font-semibold text-gray-900 dark:text-gray-100">Cetirizine 10mg</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Ordered from: City Care Pharmacy</p>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-gray-900 dark:text-gray-100">₹18</p>
                        <p className="text-xs text-gray-500">Delivered Oct 10</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

            </div>
          </CardContent>
        </Card>

      </main>
    </div>
  );
}

function TimelineItem({ date, title, description, type }: { date: string, title: string, description: string, type: 'triage'|'visit'|'lab' }) {
  const colors = {
    triage: 'bg-blue-500',
    visit: 'bg-positive',
    lab: 'bg-purple-500'
  };

  return (
    <div className="relative pl-6">
      <span className={`absolute -left-1.5 top-1.5 w-3 h-3 rounded-full ${colors[type]} ring-4 ring-white dark:ring-gray-950`}></span>
      <div className="text-xs font-semibold text-primary uppercase tracking-wide">{date}</div>
      <h3 className="font-bold text-gray-900 dark:text-gray-100 mt-1">{title}</h3>
      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{description}</p>
    </div>
  );
}
