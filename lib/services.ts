export interface Service {
  slug: string;
  name: string;
  shortDescription: string;
  fullDescription: string;
  included: string[];
  icon: string;
  imageUrl: string;
  emergencyAvailable: boolean;
}

export const services: Service[] = [
  {
    slug: "ac-installation",
    name: "AC Installation",
    shortDescription: "High-efficiency air conditioning installation tailored to withstand the intense Dallas heat.",
    fullDescription: "Dallas summers are brutal, and a reliable air conditioning unit is not a luxury—it is an absolute necessity. Our professional technicians size and install modern, high-efficiency cooling systems custom-tailored to the layout of your home or commercial space. We feature top-tier equipment that delivers outstanding performance while reducing your monthly utility bills.",
    included: [
      "Rigorous home cooling load calculation",
      "Removal and disposal of your old, inefficient system",
      "Surgical installation of energy-efficient condenser and coil",
      "Electrical connection and safety check-off",
      "10-year manufacturer warranty registration"
    ],
    icon: "AcUnit",
    imageUrl: "https://picsum.photos/seed/ac-installation/800/500",
    emergencyAvailable: false
  },
  {
    slug: "ac-repair",
    name: "AC Repair",
    shortDescription: "Rapid-response air conditioning repairs to get your cold air flowing again within hours.",
    fullDescription: "When your AC goes out in the middle of a triple-digit July heatwave, you need help immediately. Our team responds instantly with fully stocked trucks, ready to diagnose and repair your cooling issues on the spot. We service all major manufacturers and models, ensuring we find the root cause of the breakdown and implement a lasting fix.",
    included: [
      "Comprehensive cooling cycle diagnostic",
      "Refrigerant leak detection and charge optimization",
      "Compressor, capacitor, and fan motor repair",
      "NATE-certified technician on every call",
      "Upfront pricing with no hidden diagnosis fees"
    ],
    icon: "Wrench",
    imageUrl: "https://picsum.photos/seed/ac-repair/800/500",
    emergencyAvailable: true
  },
  {
    slug: "heating-installation",
    name: "Heating Installation",
    shortDescription: "Premium furnace and heat pump installations to keep your DFW home warm during cold snaps.",
    fullDescription: "Texas winters can surprise you with extreme temperature drops. Ensure your home is ready with a powerful, modern heating system. From high-output gas furnaces to state-of-the-art electric heat pumps, we offer precision heating installations designed according to strict engineering requirements to maximize both thermal comfort and fuel efficiency.",
    included: [
      "Custom heating system sizing and configuration",
      "Premium gas furnace or electric heat pump assembly",
      "Complete exhaust flue and gas line safety inspection",
      "Integration with existing ductwork and airflow balancing",
      "Post-installation combustion and safety analysis"
    ],
    icon: "Furnace",
    imageUrl: "https://picsum.photos/seed/heating-install/800/500",
    emergencyAvailable: false
  },
  {
    slug: "heating-repair",
    name: "Heating Repair",
    shortDescription: "Expert heating repairs for complete restoration of home warmth and safety.",
    fullDescription: "A broken furnace during a Dallas freeze can cause major structural issues like frozen pipes, and presents a safety risk to your family. We offer prompt heating repair services, troubleshooting electrical errors, faulty ignition switches, failed blowers, and worse. We prioritize your residential security, checking critical points for dangerous carbon monoxide leaks.",
    included: [
      "Carbon monoxide leak and heat exchanger testing",
      "Ignitor, thermocouple, and flame sensor replacement",
      "Blower motor and belt restoration",
      "Thermostat troubleshooting and recalibration",
      "Full safety system checks prior to sign-off"
    ],
    icon: "Flame",
    imageUrl: "https://picsum.photos/seed/heating-repair/800/500",
    emergencyAvailable: true
  },
  {
    slug: "air-quality",
    name: "Air Quality Services",
    shortDescription: "Whole-home filtration and UV air purifiers to filter out Texas dust, pollen, and pet dander.",
    fullDescription: "Indoor air can often have higher levels of pollutants than outdoor air, which is a major concern for Dallas asthma and allergy sufferers. We install advanced, whole-home air filtration systems, UV sterilizers, and dehumidifiers that integrate directly into your HVAC system to constantly scrub pollutants, mold, bacteria, and allergens from the air you breathe.",
    included: [
      "Whole-home indoor air purification analysis",
      "HEPA and media air filter installation",
      "Germicidal UV-C light installations in air ducts",
      "Whole-home humidity regulation accessories",
      "Allergen and biological contaminant reduction"
    ],
    icon: "Snowflake",
    imageUrl: "https://picsum.photos/seed/air-quality/800/500",
    emergencyAvailable: false
  },
  {
    slug: "duct-cleaning",
    name: "Duct Cleaning",
    shortDescription: "Deep soot, dust, and allergen extraction to optimize air flow and ductwork cleanliness.",
    fullDescription: "Over the years, your ductwork active channels accumulate thick layers of household dust, pollen, pet dander, drywall particulate, and other debris. This buildup restricts HVAC airflow and endlessly recirculates micro-allergens. Our professional duct cleaning service completely extracts this buildup, optimizing air volume and indoor air hygiene.",
    included: [
      "Full video camera inspection of interior ducts",
      "Negative-pressure vacuum cleaning of trunk lines",
      "Manual cleaning of register grills and distribution boots",
      "Eco-safe duct sanitation and odor neutralization",
      "Post-cleaning debris extraction verification"
    ],
    icon: "Duct",
    imageUrl: "https://picsum.photos/seed/duct-cleaning/800/500",
    emergencyAvailable: false
  },
  {
    slug: "smart-thermostat",
    name: "Smart Thermostat Installation",
    shortDescription: "Smart thermostat integration to optimize cooling schedules and slash electric fees.",
    fullDescription: "Maximize your energy savings with smart thermostats from industry leaders like Nest and Ecobee. We configure modern thermostat controls that learn your household schedules, auto-adjust when you are away from home, and allow you to fully govern DFW home temperature directly from your smartphone.",
    included: [
      "Universal smart thermostat physical installation",
      "System common wire (C-wire) safety provisioning",
      "Wi-Fi connection and interface synchronization",
      "Multi-zone and remote sensor calibration",
      "Complete client feature walkthrough and app setup"
    ],
    icon: "Thermostat",
    imageUrl: "https://picsum.photos/seed/smart-thermostat/800/500",
    emergencyAvailable: false
  },
  {
    slug: "preventive-maintenance",
    name: "Preventive Maintenance",
    shortDescription: "Comprehensive bi-annual tune-ups to extend furnace life and prevent costly breakdowns.",
    fullDescription: "Don't wait for your cooling or heating system to break down when you need it most. Our preventive seasonal maintenance membership provides complete bi-annual tune-ups (heating in fall, cooling in spring). This program guarantees that your equipment runs or remains calibrated at peak efficiency, and helps you avoid expensive emergency repairs.",
    included: [
      "Rigorous 27-point spring/fall system review",
      "Electrical component, wire connection, and amp checks",
      "Condensate drain cleaning and trap flushing",
      "Priority customer dispatch and booking windows",
      "Exclusive 15% discount on all repairs and services"
    ],
    icon: "Shield",
    imageUrl: "https://picsum.photos/seed/maintenance/800/500",
    emergencyAvailable: false
  },
  {
    slug: "emergency-service",
    name: "Emergency HVAC Services",
    shortDescription: "Immediate, 24/7 HVAC rescue dispatch for severe heating or cooling emergencies.",
    fullDescription: "Dallas heatwaves and freezes don't check the calendar or your working hours. When your system suffers a total breakdown inside dangerous weather conditions, you can count on us. Our rapid-dispatch emergency technicians are available 24/7, 365 days a year, arriving on-site with standard parts to restore safety and normal climate operations.",
    included: [
      "24/7 priority emergency dispatch line",
      "Immediate diagnostic prioritization",
      "Equipped to repair gas leaks, ignition errors, and cooling failures",
      "Safe DFW residential environmental restoration",
      "Comprehensive secondary support and followups"
    ],
    icon: "Clock",
    imageUrl: "https://picsum.photos/seed/emergency-hvac/800/500",
    emergencyAvailable: true
  }
];
