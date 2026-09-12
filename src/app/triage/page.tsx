'use client';
import React, { useState } from 'react';
import { TopNav } from '@/components/layout/TopNav';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { AlertCircle, ArrowRight, HeartPulse } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function TriagePage() {
  const [step, setStep] = useState(1);
  const router = useRouter();

  const nextStep = () => {
    if (step === 3) {
      router.push('/patient-dashboard');
    } else {
      setStep(s => s + 1);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-surface-alt">
      <TopNav />
      <main className="flex-1 max-w-3xl w-full mx-auto px-4 py-8">
        
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Assisted Triage</h1>
          <p className="text-gray-600">Help us understand your symptoms so we can route you to the right care.</p>
        </div>

        {/* Progress Bar */}
        <div className="mb-8 flex gap-2">
          {[1, 2, 3].map(s => (
            <div key={s} className={`h-2 flex-1 rounded-full ${s <= step ? 'bg-primary' : 'bg-gray-200'}`} />
          ))}
        </div>

        <Card>
          <CardHeader>
            <CardTitle>
              {step === 1 && "What are your primary symptoms?"}
              {step === 2 && "How long have you had these symptoms?"}
              {step === 3 && "Any danger signs? (Red Flags)"}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            
            {step === 1 && (
              <div className="grid grid-cols-2 gap-3">
                {['Fever', 'Cough', 'Breathing Difficulty', 'Stomach Pain', 'Headache', 'Injury/Trauma'].map(symptom => (
                  <button key={symptom} className="p-4 border rounded-lg text-left hover:border-primary hover:bg-primary/5 focus:border-primary focus:bg-primary/5 outline-none transition-colors">
                    {symptom}
                  </button>
                ))}
              </div>
            )}

            {step === 2 && (
              <div className="flex flex-col gap-3">
                {['Less than 24 hours', '1-3 days', 'More than a week', 'Chronic / Ongoing'].map(dur => (
                  <button key={dur} className="p-4 border rounded-lg text-left hover:border-primary hover:bg-primary/5 focus:border-primary focus:bg-primary/5 outline-none transition-colors">
                    {dur}
                  </button>
                ))}
              </div>
            )}

            {step === 3 && (
              <div className="flex flex-col gap-3">
                <div className="p-4 bg-red-50 border border-red-200 rounded-lg flex gap-3 items-start">
                  <AlertCircle className="text-red-600 h-6 w-6 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-red-900">Are you experiencing any of the following?</h4>
                    <ul className="text-sm text-red-800 list-disc list-inside mt-2 space-y-1">
                      <li>Severe difficulty breathing</li>
                      <li>Unconsciousness or confusion</li>
                      <li>Heavy bleeding</li>
                      <li>Convulsions / Seizures</li>
                    </ul>
                  </div>
                </div>
                
                <div className="flex gap-4 mt-4">
                  <Button variant="danger" className="flex-1" onClick={() => router.push('/emergency')}>Yes, I need urgent help</Button>
                  <Button variant="secondary" className="flex-1" onClick={nextStep}>No, none of these</Button>
                </div>
              </div>
            )}

            {step < 3 && (
              <div className="flex justify-end pt-4 mt-4 border-t">
                <Button onClick={nextStep} className="flex items-center gap-2">
                  Continue <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            )}

          </CardContent>
        </Card>

      </main>
    </div>
  );
}
