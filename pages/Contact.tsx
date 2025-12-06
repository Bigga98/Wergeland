import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { ADDRESS, PHONE, EMAIL } from '../constants';

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-slate-900 text-center mb-16">Kontakt Oss</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Info Card */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Besøksinformasjon</h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-brand-50 p-3 rounded-lg text-brand-600">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">Adresse</h3>
                    <p className="text-slate-600">{ADDRESS}</p>
                    <p className="text-sm text-slate-500 mt-1">Vi holder til i 3. etasje. Heis tilgjengelig.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-brand-50 p-3 rounded-lg text-brand-600">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">Telefon</h3>
                    <p className="text-slate-600">{PHONE}</p>
                    <p className="text-sm text-slate-500 mt-1">Telefontid: 08:30 - 11:00 (Man-Fre)</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-brand-50 p-3 rounded-lg text-brand-600">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">E-post</h3>
                    <p className="text-slate-600">{EMAIL}</p>
                    <p className="text-sm text-slate-500 mt-1">Vi svarer vanligvis innen 24 timer.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                   <div className="bg-brand-50 p-3 rounded-lg text-brand-600">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">Åpningstider</h3>
                    <ul className="text-slate-600 text-sm space-y-1">
                        <li className="flex justify-between w-40"><span>Man - Tor:</span> <span>08:00 - 16:00</span></li>
                        <li className="flex justify-between w-40"><span>Fredag:</span> <span>08:00 - 15:00</span></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                <h3 className="font-bold text-slate-900 mb-4">Adkomst</h3>
                <p className="text-slate-600 mb-4">
                    Klinikken ligger sentralt til ved bybanestoppet på Wergeland. 
                    Det er gode bussforbindelser i området.
                </p>
                <h3 className="font-bold text-slate-900 mb-4">Parkering</h3>
                <p className="text-slate-600">
                    Det er gjesteparkering mot avgift rett utenfor bygget, samt gateparkering i området rundt.
                </p>
            </div>
          </div>

          {/* Map */}
          <div className="h-full min-h-[400px] bg-slate-200 rounded-2xl overflow-hidden shadow-inner relative group">
            {/* Placeholder for map - using an image or iframe would be typical here. simulating visual map */}
            <iframe 
                width="100%" 
                height="100%" 
                frameBorder="0" 
                scrolling="no" 
                marginHeight={0} 
                marginWidth={0} 
                src="https://maps.google.com/maps?q=Wergelandsveien%201%2C%20Bergen&t=&z=15&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full grayscale group-hover:grayscale-0 transition-all duration-500"
                title="Map"
            ></iframe>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;