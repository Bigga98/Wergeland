import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { SERVICES, COMPANY_NAME } from '../constants';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] // Custom cubic-bezier for smooth professional feel
    } 
  }
};

const Services: React.FC = () => {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Header */}
      <div className="bg-slate-900 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Våre Tjenester</h1>
            <p className="text-slate-300 text-lg max-w-2xl mx-auto">
              Ved {COMPANY_NAME} tilbyr vi omfattende utredning og behandling. 
              Vi tilpasser behandlingen etter dine spesifikke behov og mål.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {SERVICES.map((service) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all border border-slate-100 flex flex-col group"
            >
              <div className="mb-6 flex justify-between items-start">
                <div className="bg-brand-50 w-16 h-16 rounded-2xl flex items-center justify-center text-brand-600 group-hover:bg-brand-100 transition-colors">
                  <service.icon size={32} />
                </div>
                <span className="bg-slate-100 text-slate-600 text-xs px-3 py-1 rounded-full font-medium">
                  {service.category}
                </span>
              </div>
              
              <h3 className="text-2xl font-bold text-slate-900 mb-4">{service.title}</h3>
              <p className="text-slate-600 leading-relaxed mb-6 flex-grow">
                {service.description}
              </p>
              
              <div className="pt-6 border-t border-slate-50">
                 <button className="text-brand-700 font-semibold hover:text-brand-500 transition-colors text-sm flex items-center gap-2 group-hover:gap-3">
                   Les mer om {service.title} <ArrowRight size={16} />
                 </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* FAQ / Info Section */}
      <div className="bg-white py-20 border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">Ofte stilte spørsmål</h2>
            
            <div className="space-y-6">
              <div className="bg-slate-50 p-6 rounded-xl">
                <h3 className="font-bold text-lg text-slate-900 mb-2">Trenger jeg henvisning fra lege?</h3>
                <p className="text-slate-600">
                  Nei, du trenger ikke lenger henvisning fra lege for å få støtte fra Helfo hos fysioterapeut eller manuellterapeut. 
                  Du kan ta direkte kontakt med oss.
                </p>
              </div>
              
              <div className="bg-slate-50 p-6 rounded-xl">
                <h3 className="font-bold text-lg text-slate-900 mb-2">Hva koster behandlingen?</h3>
                <p className="text-slate-600">
                  Prisene følger offentlig takstplakat for terapeuter med driftstilskudd. 
                  Ved privat behandling (uten driftstilskudd) gjelder egne satser. Se vår prisside for detaljer.
                </p>
              </div>

              <div className="bg-slate-50 p-6 rounded-xl">
                <h3 className="font-bold text-lg text-slate-900 mb-2">Hva skal jeg ha med til første time?</h3>
                <p className="text-slate-600">
                  Ta gjerne med deg ledige klær som er lette å bevege seg i (f.eks. treningstøy). 
                  Har du nylige røntgenbilder eller MR-beskrivelser, er det nyttig om du tar med disse.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Services;