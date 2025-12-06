import React from 'react';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import { TEAM } from '../constants';

const Team: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Møt våre terapeuter</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Vårt team består av høyt kvalifiserte fysioterapeuter og manuellterapeuter 
            med bred kompetanse og lang erfaring.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {TEAM.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all group"
            >
              <div className="relative overflow-hidden aspect-square">
                <img 
                  src={member.imageUrl} 
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                  <a href={`mailto:${member.email}`} className="text-white flex items-center gap-2 hover:text-brand-300">
                    <Mail size={18} />
                    <span>Send e-post</span>
                  </a>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-lg font-bold text-slate-900">{member.name}</h3>
                <p className="text-brand-600 font-medium text-sm mb-4">{member.role}</p>
                
                <div className="space-y-2">
                  <p className="text-xs text-slate-500 uppercase tracking-wide font-semibold">Kompetanseområder:</p>
                  <div className="flex flex-wrap gap-2">
                    {member.specialties.map((spec) => (
                      <span key={spec} className="bg-slate-100 text-slate-600 text-xs px-2 py-1 rounded">
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 bg-brand-50 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-2">Usikker på hvem du bør velge?</h3>
            <p className="text-slate-600">Ta kontakt med oss, så hjelper vi deg å finne terapeuten som passer best for dine plager.</p>
          </div>
          <a href="/contact" className="bg-brand-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-brand-700 transition-colors whitespace-nowrap">
            Kontakt Oss
          </a>
        </div>
      </div>
    </div>
  );
};

export default Team;