import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SERVICES } from '../constants';

const Hero = () => (
  <div className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
    {/* Background Image with Overlay */}
    <div className="absolute inset-0 z-0">
      <img 
        src="https://images.unsplash.com/photo-1579126038374-6064e9370f0f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
        alt="Fysioterapi behandling" 
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-slate-900/60 gradient-to-b from-slate-900/80 to-transparent"></div>
    </div>

    {/* Content */}
    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <span className="inline-block py-1 px-3 rounded-full bg-brand-500/20 text-brand-100 text-sm font-semibold mb-6 border border-brand-500/30 backdrop-blur-sm">
          Velkommen til Wergeland Fysioterapi
        </span>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight">
          Vi hjelper deg tilbake <br />
          <span className="text-brand-400">til en aktiv hverdag</span>
        </h1>
        <p className="text-lg md:text-xl text-slate-200 mb-10 max-w-2xl mx-auto leading-relaxed">
          Moderne klinikk med erfarne fysioterapeuter og manuellterapeuter. 
          Vi tilbyr skreddersydd behandling og rehabilitering for dine behov.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a 
            href="https://helseboka.app"
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-auto px-8 py-4 bg-brand-600 text-white rounded-full font-semibold text-lg hover:bg-brand-500 transition-all shadow-lg hover:shadow-brand-500/40"
          >
            Bestill Time
          </a>
          <Link 
            to="/services"
            className="w-full sm:w-auto px-8 py-4 bg-white/10 backdrop-blur-md text-white border border-white/20 rounded-full font-semibold text-lg hover:bg-white/20 transition-all"
          >
            Våre Tjenester
          </Link>
        </div>
      </motion.div>
    </div>
  </div>
);

const FeatureSection = () => (
  <section className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <img 
            src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&auto=format&fit=crop&w=1480&q=80" 
            alt="Therapist helping patient" 
            className="rounded-2xl shadow-2xl"
          />
        </motion.div>
        
        <div className="space-y-8">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Hvorfor velge oss?</h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              Hos Wergeland Fysioterapi møter du et tverrfaglig team som setter pasienten i sentrum. 
              Vi kombinerer lang klinisk erfaring med oppdatert forskningsbasert kunnskap.
            </p>
          </div>

          <div className="space-y-4">
            {[
              "Erfarne terapeuter med spesialistkompetanse",
              "Moderne treningssal for rehabilitering",
              "Kort ventetid for private konsultasjoner",
              "Sentral beliggenhet med gode parkeringsmuligheter"
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="bg-brand-100 p-1 rounded-full text-brand-600">
                  <CheckCircle2 size={20} />
                </div>
                <span className="text-slate-700 font-medium">{item}</span>
              </div>
            ))}
          </div>
          
          <Link to="/team" className="inline-flex items-center text-brand-700 font-semibold hover:text-brand-500 transition-colors">
            Møt våre terapeuter <ArrowRight size={20} className="ml-2" />
          </Link>
        </div>
      </div>
    </div>
  </section>
);

const ServicePreview = () => (
  <section className="py-20 bg-slate-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-slate-900 mb-4">Våre Behandlingstilbud</h2>
        <p className="text-slate-600 max-w-2xl mx-auto">
          Vi tilbyr et bredt spekter av fysioterapitjenester for å dekke dine behov.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {SERVICES.slice(0, 3).map((service) => (
          <motion.div 
            key={service.id}
            whileHover={{ y: -5 }}
            className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-slate-100"
          >
            <div className="bg-brand-50 w-14 h-14 rounded-xl flex items-center justify-center text-brand-600 mb-6">
              <service.icon size={28} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
            <p className="text-slate-600 mb-6 line-clamp-3">
              {service.description}
            </p>
            <Link to="/services" className="text-brand-600 font-medium hover:text-brand-700 text-sm flex items-center">
              Les mer <ArrowRight size={16} className="ml-1" />
            </Link>
          </motion.div>
        ))}
      </div>
      
      <div className="mt-12 text-center">
        <Link 
          to="/services" 
          className="inline-block px-6 py-3 border border-slate-300 rounded-full text-slate-700 font-medium hover:bg-slate-100 transition-colors"
        >
          Se alle tjenester
        </Link>
      </div>
    </div>
  </section>
);

const Testimonial = () => (
  <section className="py-20 bg-brand-900 text-white relative overflow-hidden">
    <div className="absolute top-0 right-0 -mr-20 -mt-20 opacity-10">
      <Star size={400} />
    </div>
    <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
      <div className="flex justify-center mb-8 text-brand-300">
        {[1, 2, 3, 4, 5].map((i) => <Star key={i} fill="currentColor" size={24} className="mx-1" />)}
      </div>
      <blockquote className="text-2xl md:text-3xl font-medium leading-relaxed mb-8">
        "Fantastisk oppfølging fra første stund. Manuellterapeuten tok seg god tid til å forstå problemet, 
        og treningsprogrammet jeg fikk har gjort meg helt smertefri i ryggen."
      </blockquote>
      <cite className="not-italic text-brand-200 font-medium">
        - Fornøyd pasient
      </cite>
    </div>
  </section>
);

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <FeatureSection />
      <ServicePreview />
      <Testimonial />
    </>
  );
};

export default Home;