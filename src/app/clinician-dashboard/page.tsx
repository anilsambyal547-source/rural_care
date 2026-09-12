import React from 'react';
import { TopNav } from '@/components/layout/TopNav';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Users, AlertTriangle, Stethoscope, CheckCircle2 } from 'lucide-react';
import { mockPatients } from '@/lib/mockData';

export default function ClinicianDashboard() {
  return (
    <div className="min-h-screen flex flex-col bg-surface-alt">
      <TopNav />
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 py-8">
        
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Clinician Dashboard</h1>
          <p className="text-gray-600">Dr. Sharma | General Physician | District Hospital</p>
        </div>

        {/* KPIs */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <KpiCard title="Patients Waiting" value="12" icon={<Users className="text-primary" />} />
          <KpiCard title="Priority Cases" value="3" icon={<AlertTriangle className="text-warning" />} />
          <KpiCard title="Teleconsultations" value="5" icon={<Stethoscope className="text-primary-light" />} />
          <KpiCard title="Completed Today" value="28" icon={<CheckCircle2 className="text-positive" />} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Queue */}
          <div className="lg:col-span-1">
            <Card className="h-full">
              <CardHeader>
                <CardTitle>Current Queue</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="divide-y divide-gray-100">
                  {mockPatients.map((patient, idx) => (
                    <div key={patient.id} className={`p-4 flex justify-between items-center hover:bg-gray-50 cursor-pointer ${idx === 0 ? 'bg-primary/5 border-l-4 border-l-primary' : ''}`}>
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="font-semibold text-gray-900">{patient.name}</h4>
                          {patient.riskFlags === 'high' && <span className="bg-urgent text-white text-[10px] px-1.5 py-0.5 rounded font-bold">HIGH RISK</span>}
                        </div>
                        <p className="text-xs text-gray-500 mt-1">Wait: {15 * (idx + 1)} mins | {patient.gender}, {patient.age}</p>
                      </div>
                      <Button variant={idx === 0 ? 'primary' : 'ghost'} size="sm">
                        {idx === 0 ? 'Consult' : 'View'}
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Active Consultation View */}
          <div className="lg:col-span-2">
            <Card className="h-full border-primary/20 shadow-md">
              <CardHeader className="bg-primary/5 border-b border-primary/10 flex justify-between flex-row items-center">
                <div>
                  <CardTitle className="text-primary-dark">Active Consultation</CardTitle>
                  <p className="text-sm text-gray-600 mt-1">{mockPatients[0].name} ({mockPatients[0].id})</p>
                </div>
                <div className="flex gap-2">
                  <Button variant="secondary" size="sm">Timeline</Button>
                  <Button variant="primary" size="sm">End Consult</Button>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                
                <div className="grid grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="text-sm font-semibold text-gray-700 uppercase tracking-wider mb-3">Triage Notes</h4>
                    <div className="bg-gray-50 p-4 rounded-lg border border-gray-100 text-sm space-y-2">
                      <p><strong>Symptoms:</strong> Fever, Cough</p>
                      <p><strong>Duration:</strong> 1-3 days</p>
                      <p><strong>Vitals:</strong> Temp 101°F, BP 120/80</p>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-700 uppercase tracking-wider mb-3">Actions</h4>
                    <div className="flex flex-col gap-2">
                      <Button variant="secondary" className="justify-start">Order Diagnostics</Button>
                      <Button variant="secondary" className="justify-start">Prescribe Medicine</Button>
                      <Button variant="secondary" className="justify-start text-warning border-warning/20">Create Referral</Button>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-gray-700 uppercase tracking-wider mb-3">Clinical Notes</h4>
                  <textarea 
                    className="w-full h-32 p-4 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary outline-none resize-none"
                    placeholder="Enter clinical observations here..."
                  ></textarea>
                </div>

              </CardContent>
            </Card>
          </div>

        </div>
      </main>
    </div>
  );
}

function KpiCard({ title, value, icon }: { title: string, value: string, icon: React.ReactNode }) {
  return (
    <Card>
      <CardContent className="p-4 flex items-center gap-4">
        <div className="p-3 bg-surface-alt rounded-lg">
          {icon}
        </div>
        <div>
          <p className="text-sm font-medium text-gray-500">{title}</p>
          <h3 className="text-2xl font-bold text-gray-900">{value}</h3>
        </div>
      </CardContent>
    </Card>
  );
}
