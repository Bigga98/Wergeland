import { LucideIcon } from 'lucide-react';

export enum ServiceCategory {
  PHYSIOTHERAPY = 'Fysioterapi',
  MANUAL_THERAPY = 'Manuellterapi',
  PSYCHOMOTOR = 'Psykomotorisk Fysioterapi',
  SPECIALIZED = 'Spesialisert Behandling'
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  category: ServiceCategory;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  specialties: string[];
  imageUrl: string;
  email?: string;
  phone?: string;
}

export interface PriceItem {
  treatment: string;
  price: string;
  note?: string;
}