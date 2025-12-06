import React from 'react';
import { PRICES } from '../constants';
import { ShieldCheck } from 'lucide-react';

const Prices: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Priser og Refusjon</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Vi har avtale med Helfo. Her finner du oversikt over egenandeler og priser for våre tjenester.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden mb-12">
          <div className="grid grid-cols-12 bg-slate-100 p-4 font-semibold text-slate-700 border-b border-slate-200">
            <div className="col-span-8 md:col-span-9">Behandling / Tjeneste</div>
            <div className="col-span-4 md:col-span-3 text-right">Pris</div>
          </div>
          
          <div className="divide-y divide-slate-100">
            {PRICES.map((item, index) => (
              <div key={index} className="grid grid-cols-12 p-4 hover:bg-slate-50 transition-colors">
                <div className="col-span-8 md:col-span-9">
                  <span className="text-slate-900 font-medium block">{item.treatment}</span>
                  {item.note && <span className="text-slate-500 text-sm mt-1 block">{item.note}</span>}
                </div>
                <div className="col-span-4 md:col-span-3 text-right text-brand-700 font-bold">
                  {item.price}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
            <div className="flex items-center gap-3 mb-4 text-blue-800">
              <ShieldCheck />
              <h3 className="font-bold text-lg">Frikort</h3>
            </div>
            <p className="text-blue-900/80 text-sm leading-relaxed">
              Egenandeler inngår i opptjening til frikort for helsetjenester. 
              Når du har betalt over beløpsgrensen, får du frikort automatisk i posten eller digitalt på Helsenorge.no.
            </p>
          </div>
          
          <div className="bg-amber-50 p-6 rounded-xl border border-amber-100">
             <div className="flex items-center gap-3 mb-4 text-amber-800">
              <ShieldCheck />
              <h3 className="font-bold text-lg">Forsikring</h3>
            </div>
            <p className="text-amber-900/80 text-sm leading-relaxed">
              Vi har avtale med de fleste store forsikringsselskap. 
              Har du helseforsikring som dekker fysioterapi? Ta med saksnummeret ditt til første time.
            </p>
          </div>
        </div>
        
        <div className="mt-8 text-center text-sm text-slate-500">
          <p>Prisene justeres årlig i henhold til offentlige takster. Sist oppdatert Januar 2024.</p>
        </div>
      </div>
    </div>
  );
};

export default Prices;