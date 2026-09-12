'use client';
import React, { useState } from 'react';
import { TopNav } from '@/components/layout/TopNav';
import { Footer } from '@/components/layout/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Calendar as CalendarIcon, ChevronLeft, ChevronRight, X } from 'lucide-react';
import { mockFacilities } from '@/lib/mockData';
import { useRouter } from 'next/navigation';

export default function AppointmentPage() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [showModal, setShowModal] = useState(false);
  const router = useRouter();

  // Basic calendar logic
  const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();
  
  const handlePrevMonth = () => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  const handleNextMonth = () => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));

  const handleDateClick = (day: number) => {
    // Only allow booking for future dates in this mock
    const clickedDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
    const today = new Date();
    today.setHours(0,0,0,0);
    
    if (clickedDate >= today) {
      setSelectedDate(clickedDate);
      setShowModal(true);
    }
  };

  const days = [];
  for (let i = 0; i < firstDayOfMonth; i++) {
    days.push(<div key={`empty-${i}`} className="p-4"></div>);
  }
  for (let i = 1; i <= daysInMonth; i++) {
    const isPast = new Date(currentDate.getFullYear(), currentDate.getMonth(), i) < new Date(new Date().setHours(0,0,0,0));
    days.push(
      <button
        key={i}
        disabled={isPast}
        onClick={() => handleDateClick(i)}
        className={`p-4 border rounded-lg text-center transition-colors ${
          isPast 
            ? 'opacity-30 cursor-not-allowed bg-gray-50 dark:bg-gray-900 text-gray-400' 
            : 'hover:border-primary hover:bg-primary/5 dark:hover:bg-primary/20 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-primary outline-none'
        }`}
      >
        <span className="text-lg font-medium dark:text-gray-200">{i}</span>
        {!isPast && (
          <div className="mt-1 text-[10px] text-positive font-bold uppercase tracking-wider">Available</div>
        )}
      </button>
    );
  }

  const handleConfirm = () => {
    setShowModal(false);
    router.push('/patient-dashboard');
  };

  return (
    <div className="min-h-screen flex flex-col bg-surface-alt dark:bg-gray-950">
      <TopNav />
      <main className="flex-1 max-w-4xl w-full mx-auto px-4 py-8">
        
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100 flex items-center gap-2">
            <CalendarIcon className="h-6 w-6 text-primary" />
            Book an Appointment
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mt-2">Select a date from the calendar to view available slots.</p>
        </div>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <Button variant="ghost" size="sm" onClick={handlePrevMonth}><ChevronLeft /></Button>
            <CardTitle className="text-xl">
              {currentDate.toLocaleString('default', { month: 'long', year: 'numeric' })}
            </CardTitle>
            <Button variant="ghost" size="sm" onClick={handleNextMonth}><ChevronRight /></Button>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-7 gap-2 mb-2">
              {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(d => (
                <div key={d} className="text-center text-sm font-semibold text-gray-500 py-2">{d}</div>
              ))}
            </div>
            <div className="grid grid-cols-7 gap-2">
              {days}
            </div>
          </CardContent>
        </Card>

        {/* Modal */}
        {showModal && selectedDate && (
          <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
            <div className="bg-white dark:bg-gray-900 rounded-xl max-w-md w-full shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
              <div className="flex justify-between items-center p-4 border-b dark:border-gray-800">
                <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100">
                  {selectedDate.toLocaleDateString('default', { weekday: 'short', month: 'long', day: 'numeric' })}
                </h3>
                <button onClick={() => setShowModal(false)} className="text-gray-500 hover:text-gray-900 dark:hover:text-gray-100">
                  <X className="h-5 w-5" />
                </button>
              </div>
              <div className="p-4 space-y-4">
                <p className="text-sm text-gray-600 dark:text-gray-400">Available time slots for {mockFacilities[0].name}:</p>
                <div className="grid grid-cols-2 gap-3">
                  {['09:00 AM', '10:30 AM', '01:00 PM', '03:45 PM'].map(time => (
                    <button key={time} className="p-3 border dark:border-gray-700 rounded-lg text-center font-medium hover:bg-primary hover:text-white hover:border-primary transition-colors dark:text-gray-200 dark:hover:text-white">
                      {time}
                    </button>
                  ))}
                </div>
              </div>
              <div className="p-4 border-t dark:border-gray-800 flex justify-end gap-3">
                <Button variant="ghost" onClick={() => setShowModal(false)}>Cancel</Button>
                <Button variant="primary" onClick={handleConfirm}>Confirm Booking</Button>
              </div>
            </div>
          </div>
        )}

      </main>
      <Footer />
    </div>
  );
}
