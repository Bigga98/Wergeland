import { 
  Activity, 
  Brain, 
  HeartPulse, 
  Users, 
  Baby, 
  Dumbbell, 
  Stethoscope, 
  Syringe 
} from 'lucide-react';
import { ServiceItem, ServiceCategory, TeamMember, PriceItem } from './types';

export const COMPANY_NAME = "Wergeland Fysioterapi";
export const ADDRESS = "Fjøsangerveien 38, 5068 Bergen";
export const PHONE = "55 28 42 60";
export const EMAIL = "kontor@wergelandfysioterapi.no";

export const SERVICES: ServiceItem[] = [
  {
    id: '1',
    title: 'Allmenn Fysioterapi',
    description: 'Utredning og behandling av muskel- og skjelettplager. Vi fokuserer på aktiv rehabilitering og funksjonsforbedring.',
    icon: Activity,
    category: ServiceCategory.PHYSIOTHERAPY
  },
  {
    id: '2',
    title: 'Manuellterapi',
    description: 'Spesialistkompetanse på utredning av muskel- og skjelettlidelser. Manuellterapeuter kan sykemelde og henvise til bildediagnostikk.',
    icon: Stethoscope,
    category: ServiceCategory.MANUAL_THERAPY
  },
  {
    id: '3',
    title: 'Psykomotorisk Fysioterapi',
    description: 'Behandling rettet mot bevisstgjøring og endring av spenningstilstander i kroppen som følge av langvarig belastning.',
    icon: Brain,
    category: ServiceCategory.PSYCHOMOTOR
  },
  {
    id: '4',
    title: 'Trykkbølgebehandling',
    description: 'Effektiv behandling for langvarige senebetennelser som plantar fascitt, tennisalbue og akillessenebetennelse.',
    icon: HeartPulse,
    category: ServiceCategory.SPECIALIZED
  },
  {
    id: '5',
    title: 'Barnefysioterapi',
    description: 'Spesialisert oppfølging av barn og unge med motoriske utfordringer eller skader.',
    icon: Baby,
    category: ServiceCategory.PHYSIOTHERAPY
  },
  {
    id: '6',
    title: 'Trening og Rehabilitering',
    description: 'Veiledet trening i vår moderne treningssal, både individuelt og i grupper.',
    icon: Dumbbell,
    category: ServiceCategory.PHYSIOTHERAPY
  },
  {
    id: '7',
    title: 'Nålebehandling (IMS)',
    description: 'Behandling av stram muskulatur ved bruk av akupunkturnåler for å løse opp triggerpunkter.',
    icon: Syringe,
    category: ServiceCategory.SPECIALIZED
  },
  {
    id: '8',
    title: 'Gruppetrening',
    description: 'Vi tilbyr ulike grupper som "Aktiv med Artrose", lungegrupper og rygg-grupper.',
    icon: Users,
    category: ServiceCategory.PHYSIOTHERAPY
  }
];

export const TEAM: TeamMember[] = [
  {
    id: 't1',
    name: 'Anders Andersen',
    role: 'Manuellterapeut',
    specialties: ['Rygg/Nakke', 'Idrettsskader', 'Ultralyddiagnostikk'],
    imageUrl: 'https://picsum.photos/id/1005/400/400',
    email: 'anders@wergelandfysioterapi.no'
  },
  {
    id: 't2',
    name: 'Kari Nordmann',
    role: 'Spesialist i psykomotorisk fysioterapi',
    specialties: ['Stressmestring', 'Kroniske smerter', 'Pusteteknikk'],
    imageUrl: 'https://picsum.photos/id/1011/400/400',
    email: 'kari@wergelandfysioterapi.no'
  },
  {
    id: 't3',
    name: 'Lars Larsen',
    role: 'Fysioterapeut',
    specialties: ['Opptrening', 'Kne/Hofte', 'Trykkbølge'],
    imageUrl: 'https://picsum.photos/id/1025/400/400',
    email: 'lars@wergelandfysioterapi.no'
  },
  {
    id: 't4',
    name: 'Ingrid Olsen',
    role: 'Fysioterapeut',
    specialties: ['Barnefysioterapi', 'Nevrologi', 'Kvinnehelse'],
    imageUrl: 'https://picsum.photos/id/1027/400/400',
    email: 'ingrid@wergelandfysioterapi.no'
  }
];

export const PRICES: PriceItem[] = [
  { treatment: 'Førstegangskonsultasjon', price: '580,-' },
  { treatment: 'Oppfølgende behandling', price: '420,-' },
  { treatment: 'Trykkbølgebehandling', price: '650,-' },
  { treatment: 'Manuellterapi (med refusjon)', price: 'Egenandel' },
  { treatment: 'Uteblitt time (ikke avbestilt 24t før)', price: '350,-' },
];