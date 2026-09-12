'use client';
import React, { useState, useMemo } from 'react';
import { TopNav } from '@/components/layout/TopNav';
import { Footer } from '@/components/layout/Footer';
import { Card, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Search, MapPin, Pill, ShoppingBag, CheckCircle2 } from 'lucide-react';

interface MedicineVariant {
  pharmacyName: string;
  distance: string;
  price: number;
  inStock: boolean;
}

interface Medicine {
  id: string;
  name: string;
  description: string;
  variants: MedicineVariant[];
}

const mockMedicines: Medicine[] = [
  {
    id: 'm1',
    name: 'Paracetamol 500mg',
    description: 'Pain reliever and a fever reducer.',
    variants: [
      { pharmacyName: 'City Care Pharmacy', distance: '1.2 km', price: 15, inStock: true },
      { pharmacyName: 'Rampur Health Store', distance: '3.5 km', price: 12, inStock: true },
      { pharmacyName: 'MediLife Hub', distance: '0.8 km', price: 18, inStock: false },
    ]
  },
  {
    id: 'm2',
    name: 'Amoxicillin 250mg',
    description: 'Antibiotic used to treat a number of bacterial infections.',
    variants: [
      { pharmacyName: 'District Hospital Pharmacy', distance: '5.0 km', price: 45, inStock: true },
      { pharmacyName: 'MediLife Hub', distance: '0.8 km', price: 55, inStock: true },
    ]
  },
  {
    id: 'm3',
    name: 'Metformin 500mg',
    description: 'First-line medication for the treatment of type 2 diabetes.',
    variants: [
      { pharmacyName: 'City Care Pharmacy', distance: '1.2 km', price: 30, inStock: true },
      { pharmacyName: 'Rampur Health Store', distance: '3.5 km', price: 28, inStock: true },
      { pharmacyName: 'Rural Care Dispensary', distance: '8.0 km', price: 25, inStock: true },
    ]
  },
  {
    id: 'm4',
    name: 'Ibuprofen 400mg',
    description: 'Nonsteroidal anti-inflammatory drug (NSAID) for pain and inflammation.',
    variants: [
      { pharmacyName: 'Rampur Health Store', distance: '3.5 km', price: 20, inStock: true },
      { pharmacyName: 'MediLife Hub', distance: '0.8 km', price: 22, inStock: true },
    ]
  },
  {
    id: 'm5',
    name: 'Cetirizine 10mg',
    description: 'Antihistamine used to relieve allergy symptoms.',
    variants: [
      { pharmacyName: 'City Care Pharmacy', distance: '1.2 km', price: 18, inStock: true },
      { pharmacyName: 'Rural Care Dispensary', distance: '8.0 km', price: 15, inStock: false },
      { pharmacyName: 'MediLife Hub', distance: '0.8 km', price: 20, inStock: true },
    ]
  },
  {
    id: 'm6',
    name: 'Azithromycin 500mg',
    description: 'Macrolide antibiotic used to treat many different types of infections.',
    variants: [
      { pharmacyName: 'District Hospital Pharmacy', distance: '5.0 km', price: 80, inStock: true },
      { pharmacyName: 'City Care Pharmacy', distance: '1.2 km', price: 85, inStock: true },
    ]
  },
  {
    id: 'm7',
    name: 'Pantoprazole 40mg',
    description: 'Used to treat certain stomach and esophagus problems (such as acid reflux).',
    variants: [
      { pharmacyName: 'MediLife Hub', distance: '0.8 km', price: 40, inStock: true },
      { pharmacyName: 'Rampur Health Store', distance: '3.5 km', price: 35, inStock: true },
    ]
  },
  {
    id: 'm8',
    name: 'Oral Rehydration Salts (ORS)',
    description: 'Electrolyte mixture used to treat dehydration.',
    variants: [
      { pharmacyName: 'City Care Pharmacy', distance: '1.2 km', price: 20, inStock: true },
      { pharmacyName: 'Rural Care Dispensary', distance: '8.0 km', price: 18, inStock: true },
      { pharmacyName: 'District Hospital Pharmacy', distance: '5.0 km', price: 15, inStock: true },
    ]
  }
];

export default function MedicinesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [orderPlaced, setOrderPlaced] = useState<string | null>(null);

  const filteredMedicines = useMemo(() => {
    if (!searchQuery.trim()) return [];
    
    const lowerQuery = searchQuery.toLowerCase();
    return mockMedicines.filter(m => 
      m.name.toLowerCase().includes(lowerQuery) || 
      m.description.toLowerCase().includes(lowerQuery)
    ).map(medicine => ({
      ...medicine,
      // Sort variants by price (lowest first), but keep out-of-stock at the bottom
      variants: [...medicine.variants].sort((a, b) => {
        if (a.inStock === b.inStock) {
          return a.price - b.price;
        }
        return a.inStock ? -1 : 1;
      })
    }));
  }, [searchQuery]);

  const handleOrder = (medicineName: string, pharmacyName: string) => {
    setOrderPlaced(`Successfully placed order for ${medicineName} from ${pharmacyName}. It will be delivered to your home shortly!`);
    setTimeout(() => setOrderPlaced(null), 5000);
  };

  return (
    <div className="min-h-screen flex flex-col bg-surface-alt dark:bg-gray-950">
      <TopNav />
      <main className="flex-1 max-w-5xl w-full mx-auto px-4 py-8">
        
        <div className="mb-8 text-center max-w-2xl mx-auto">
          <div className="inline-flex bg-primary/10 p-4 rounded-full mb-4">
            <Pill className="h-8 w-8 text-primary" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">Find & Order Medicines</h1>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            Search for medicines to see availability across nearby pharmacies. We automatically sort by the lowest price.
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto relative mb-12">
          <Search className="absolute left-4 top-4 h-5 w-5 text-gray-400" />
          <input 
            type="text" 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search for 'Paracetamol', 'Amoxicillin'..."
            className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-primary focus:border-transparent outline-none shadow-sm text-lg"
          />
        </div>

        {/* Order Success Toast */}
        {orderPlaced && (
          <div className="fixed top-20 right-4 bg-positive text-white px-6 py-4 rounded-lg shadow-lg flex items-start gap-3 z-50 max-w-sm animate-in fade-in slide-in-from-top-4">
            <CheckCircle2 className="h-6 w-6 shrink-0" />
            <p className="text-sm font-medium leading-snug">{orderPlaced}</p>
          </div>
        )}

        {/* Results */}
        {searchQuery.trim() && (
          <div className="space-y-8">
            {filteredMedicines.length > 0 ? (
              filteredMedicines.map(medicine => (
                <div key={medicine.id} className="bg-white dark:bg-gray-900 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 overflow-hidden">
                  <div className="p-6 bg-gray-50 dark:bg-gray-800/50 border-b border-gray-100 dark:border-gray-800">
                    <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100">{medicine.name}</h2>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{medicine.description}</p>
                  </div>
                  
                  <div className="divide-y divide-gray-100 dark:divide-gray-800">
                    {medicine.variants.map((variant, idx) => (
                      <div key={idx} className={`p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 transition-colors ${idx === 0 && variant.inStock ? 'bg-green-50/50 dark:bg-green-900/10' : 'hover:bg-gray-50 dark:hover:bg-gray-800/50'}`}>
                        
                        <div>
                          <div className="flex items-center gap-2">
                            <h3 className="font-semibold text-gray-900 dark:text-gray-100">{variant.pharmacyName}</h3>
                            {idx === 0 && variant.inStock && (
                              <span className="bg-positive/20 text-positive dark:text-green-400 text-[10px] px-2 py-0.5 rounded font-bold uppercase tracking-wider">
                                Lowest Price
                              </span>
                            )}
                            {!variant.inStock && (
                              <span className="bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-[10px] px-2 py-0.5 rounded font-bold uppercase tracking-wider">
                                Out of Stock
                              </span>
                            )}
                          </div>
                          <p className="text-sm flex items-center gap-1 text-gray-500 mt-1">
                            <MapPin className="h-3 w-3" /> {variant.distance} away
                          </p>
                        </div>
                        
                        <div className="flex items-center gap-6 w-full md:w-auto justify-between md:justify-end">
                          <div className="text-right">
                            <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">₹{variant.price}</p>
                            <p className="text-xs text-gray-500">per strip</p>
                          </div>
                          
                          <Button 
                            variant={idx === 0 ? 'primary' : 'secondary'} 
                            disabled={!variant.inStock}
                            onClick={() => handleOrder(medicine.name, variant.pharmacyName)}
                            className="flex items-center gap-2"
                          >
                            <ShoppingBag className="h-4 w-4" />
                            Order Home
                          </Button>
                        </div>

                      </div>
                    ))}
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-12">
                <p className="text-lg text-gray-500 dark:text-gray-400">No medicines found for "{searchQuery}".</p>
              </div>
            )}
          </div>
        )}
        
        {!searchQuery.trim() && (
          <div className="text-center py-12">
            <p className="text-gray-500 dark:text-gray-400">Type a medicine name above to check prices and availability.</p>
          </div>
        )}

      </main>
      <Footer />
    </div>
  );
}
