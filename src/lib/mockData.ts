export type RiskFlag = 'high' | 'medium' | 'low' | 'none';

export interface Patient {
  id: string;
  name: string;
  age: number;
  gender: string;
  language: string;
  contact: string;
  village: string;
  riskFlags: RiskFlag;
}

export interface Facility {
  id: string;
  name: string;
  type: 'PHC' | 'Sub-centre' | 'Rural Hospital' | 'District Hospital';
  distance: string; // e.g. "2.5 km"
  isOpen: boolean;
  estimatedWaitTime: number; // minutes
  services: string[];
}

export interface Encounter {
  id: string;
  patientId: string;
  date: string;
  reason: string;
  disposition: string;
}

export interface Referral {
  id: string;
  patientId: string;
  fromFacilityId: string;
  toFacilityId: string;
  reason: string;
  priority: 'routine' | 'urgent' | 'emergency';
  status: 'pending' | 'accepted' | 'completed';
  createdAt: string;
}

export const mockPatients: Patient[] = [
  {
    id: 'P001',
    name: 'Lakshmi Devi',
    age: 45,
    gender: 'Female',
    language: 'Hindi',
    contact: '+91-9876543210',
    village: 'Rampur',
    riskFlags: 'none',
  },
  {
    id: 'P002',
    name: 'Ramesh Kumar',
    age: 62,
    gender: 'Male',
    language: 'Hindi',
    contact: '+91-9876543211',
    village: 'Sitapur',
    riskFlags: 'high', // e.g. Chronic condition, missed follow-up
  }
];

export const mockFacilities: Facility[] = [
  {
    id: 'F001',
    name: 'Rampur PHC',
    type: 'PHC',
    distance: '2.5 km',
    isOpen: true,
    estimatedWaitTime: 45,
    services: ['General Consultation', 'Maternal Care', 'Vaccination'],
  },
  {
    id: 'F002',
    name: 'Sitapur Sub-centre',
    type: 'Sub-centre',
    distance: '0.8 km',
    isOpen: true,
    estimatedWaitTime: 15,
    services: ['Triage', 'First Aid', 'Medicines'],
  },
  {
    id: 'F003',
    name: 'District General Hospital',
    type: 'District Hospital',
    distance: '15.0 km',
    isOpen: true,
    estimatedWaitTime: 120,
    services: ['Specialist Care', 'Surgery', 'Advanced Diagnostics', 'Emergency'],
  }
];
