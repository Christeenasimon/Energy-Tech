
import { Service, ProductGroup } from './types';

export const COMPANY_NAME = "ENERGY TECH SALES & SERVICES";
export const TAGLINE = "APPROVED IBR ERECTORS OF FACTORIES AND BOILERS, KERALA";

export const SERVICES: Service[] = [
  { title: "Boiler Sales", description: "Premium quality boiler systems tailored to industrial requirements." },
  { title: "Boiler Erection", description: "Turnkey solutions for boiler installation and commission across Kerala." },
  { title: "Boiler Services", description: "Comprehensive repair, maintenance, and optimization services." },
  { title: "Annual Maintenance Contract (AMC)", description: "Proactive care to ensure peak efficiency and minimum fuel consumption." },
  { title: "Annual Cleaning for IBR Boilers", description: "Certified cleaning services strictly adhering to IBR standards." },
  { title: "Training for Boiler Operators", description: "Technical training to enhance safety and operational expertise." },
  { title: "Supply of Boiler Spares & Chemicals", description: "High-grade components and specialty chemicals for system longevity." }
];

export const PRODUCTS: ProductGroup[] = [
  {
    category: "Boiler Water Treatment Chemicals",
    items: [
      { name: "AQUA PURE 230", description: "Free-flowing liquid to prevent scaling and corrosion in low-medium pressure boilers using raw water." },
      { name: "AQUA PURE 240", description: "Phosphate-based multifunctional liquid to control scale and maintain alkalinity." },
      { name: "AQUA PURE 250", description: "Liquid catalyzed oxygen scavenger and sludge conditioner to prevent corrosion from dissolved gases." }
    ]
  },
  {
    category: "Cooling Water Treatment Chemicals",
    items: [
      { name: "AQUA PURE 501", description: "Formulated with sequestering agents and dispersants for complex scale formation control." },
      { name: "AQUA PURE 505", description: "pH and alkalinity control formulation with effective corrosion inhibitors." },
      { name: "AQUA PURE 588", description: "Quaternary Ammonium based biocide for controlling bacteria, fungi, and algae." },
      { name: "AQUA PURE 599", description: "Broad spectrum biocide effective over a wide pH range to eliminate micro-organisms." }
    ]
  },
  {
    category: "Specialty Chemicals",
    items: [
      { name: "AQUA PURE 350", description: "Acidic-based descaling chemical with corrosion inhibitors for efficient system cleaning." },
      { name: "AQUA PURE 370", description: "Acidic membrane cleaner for R.O plants, highly effective in removing calcium carbonate and metal oxides." },
      { name: "AQUA PURE 380", description: "Alkaline membrane cleaner for removing organics, bio-films, and heavy metals." }
    ]
  }
];

export const BENEFITS = [
  "Reduced Fuel Cost through peak efficiency tuning",
  "Improved Boiler Efficiency ensuring economy and longevity",
  "Maximum Equipment Output as per manufacturer recommendations",
  "Longer Boiler Life via accurate defect analysis and rectification",
  "Preventive Maintenance benefits that ensure trouble-free operations"
];

export const CONTACT_INFO = {
  phone: "7907284651",
  secondaryPhones: ["0484-4023861", "9447525889"],
  email: "energytechmail@yahoo.co.in",
  instagram: "https://www.instagram.com/energytechsales?igsh=MXIzdXIzeG1jcWF2ZQ==",
  address: "283-E, Kaitharans Building, Veekshanam Road, Kochi 682 018"
};
