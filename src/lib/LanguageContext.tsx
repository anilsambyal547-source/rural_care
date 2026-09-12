'use client';
import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'en' | 'hi' | 'ta' | 'te';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const dictionaries: Record<Language, Record<string, string>> = {
  en: {
    'nav.home': 'Home',
    'nav.help': 'Help',
    'nav.signin': 'Sign In',
    'hero.title': 'Healthcare closer to home.',
    'hero.subtitle': 'Assisted access to doctors, facilities, records, and follow-up — connecting you to the right care when you need it.',
    'hero.cta1': 'Get Care Now',
    'hero.cta2': 'Find a Facility',
    'quick.book': 'Book Appointment',
    'quick.queue': 'Join Queue',
    'quick.talk': 'Talk to a Doctor',
    'quick.referral': 'Check Referral',
    'quick.medicine': 'Find Medicine',
    'quick.record': 'My Health Record',
  },
  hi: {
    'nav.home': 'होम',
    'nav.help': 'मदद',
    'nav.signin': 'साइन इन करें',
    'hero.title': 'स्वास्थ्य सेवा घर के करीब।',
    'hero.subtitle': 'डॉक्टरों, सुविधाओं, रिकॉर्ड और फॉलो-अप तक आसान पहुंच — आपको सही देखभाल से जोड़ना।',
    'hero.cta1': 'अभी देखभाल पाएं',
    'hero.cta2': 'सुविधा खोजें',
    'quick.book': 'अपॉइंटमेंट बुक करें',
    'quick.queue': 'कतार में शामिल हों',
    'quick.talk': 'डॉक्टर से बात करें',
    'quick.referral': 'रेफरल जांचें',
    'quick.medicine': 'दवा खोजें',
    'quick.record': 'मेरा स्वास्थ्य रिकॉर्ड',
  },
  ta: {
    'nav.home': 'முகப்பு',
    'nav.help': 'உதவி',
    'nav.signin': 'உள்நுழைய',
    'hero.title': 'வீட்டிற்கு அருகில் சுகாதாரம்.',
    'hero.subtitle': 'மருத்துவர்கள், வசதிகள், பதிவுகள் மற்றும் பின்தொடர்தல் ஆகியவற்றிற்கான எளிதான அணுகல்.',
    'hero.cta1': 'இப்போது கவனிப்பு பெறுங்கள்',
    'hero.cta2': 'ஒரு வசதியைத் தேடுங்கள்',
    'quick.book': 'நியமனம் பதிவு செய்யுங்கள்',
    'quick.queue': 'வரிசையில் சேரவும்',
    'quick.talk': 'மருத்துவரிடம் பேசுங்கள்',
    'quick.referral': 'பரிந்துரையை சரிபார்க்கவும்',
    'quick.medicine': 'மருந்து தேடுங்கள்',
    'quick.record': 'என் சுகாதார பதிவு',
  },
  te: {
    'nav.home': 'హోమ్',
    'nav.help': 'సహాయం',
    'nav.signin': 'సైన్ ఇన్ చేయండి',
    'hero.title': 'ఇంటికి దగ్గరగా ఆరోగ్యం.',
    'hero.subtitle': 'వైద్యులు, సౌకర్యాలు మరియు రికార్డులకు సులభమైన యాక్సెస్.',
    'hero.cta1': 'ఇప్పుడే సంరక్షణ పొందండి',
    'hero.cta2': 'సౌకర్యాన్ని వెతకండి',
    'quick.book': 'అపాయింట్‌మెంట్ బుక్ చేయండి',
    'quick.queue': 'క్యూలో చేరండి',
    'quick.talk': 'డాక్టర్‌తో మాట్లాడండి',
    'quick.referral': 'రెఫరల్ తనిఖీ చేయండి',
    'quick.medicine': 'మందులు వెతకండి',
    'quick.record': 'నా ఆరోగ్య రికార్డు',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return dictionaries[language][key] || dictionaries['en'][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
