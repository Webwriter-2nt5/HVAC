export interface Testimonial {
  id: number;
  name: string;
  neighborhood: string;
  rating: number;
  date: string;
  service: string;
  text: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Jennifer M.",
    neighborhood: "Uptown, Dallas",
    rating: 5,
    date: "April 2026",
    service: "AC Installation",
    text: "Deciding to replace our old unit with Arctic Breeze was the best decision we ever made. Their technicians walked us through the efficiency ratings and designed a custom system that easily handles the intense Texas summer. Our electric bill is already down 25%!"
  },
  {
    id: 2,
    name: "Robert T.",
    neighborhood: "Highland Park",
    rating: 5,
    date: "June 2026",
    service: "AC Repair",
    text: "Our air conditioner completely stopped blowing cold air on a Sunday afternoon when it was 102 degrees out. Their emergency tech arrived within 45 minutes of our call, diagnosed a failed capacitor, replaced it immediately, and had the air blowing freezing cold in no time. Unbelievable response time!"
  },
  {
    id: 3,
    name: "Marcus G.",
    neighborhood: "Lake Highlands",
    rating: 5,
    date: "January 2026",
    service: "Heating Repair",
    text: "Our gas furnace would not ignite on the coldest night of the winter. Arctic Breeze arrived early the next morning. They cleared the line and replaced a faulty safety sensor. They performed a carbon monoxide safety check of the heat exchanger as well. Outstanding attention to detail!"
  },
  {
    id: 4,
    name: "Sarah L.",
    neighborhood: "Lakewood",
    rating: 5,
    date: "March 2026",
    service: "Duct Cleaning",
    text: "We struggle with seasonal allergies in Lakewood. We booked Arctic Breeze for an intensive duct cleaning and whole-home filtration filter installation. The volume of dirt they showed us on their video inspection camera was shocking! The house instantly smells fresh and clean."
  },
  {
    id: 5,
    name: "David K.",
    neighborhood: "Oak Lawn",
    rating: 5,
    date: "May 2026",
    service: "Preventive Maintenance",
    text: "I joined their preventive maintenance plan last year, and the bi-annual tuneups are excellent. They scheduled my spring tuneup promptly, cleaned the drains, adjusted the components, and gave me a full health report of my system. Excellent value and very professional technicians."
  },
  {
    id: 6,
    name: "Elena R.",
    neighborhood: "Preston Hollow",
    rating: 5,
    date: "February 2026",
    service: "Heating Installation",
    text: "We hired Arctic Breeze to install a multi-zone heat pump system. They coordinated the engineering load, clean installation, and took care of all local permits. They are clean, organized, and polite. Definitely Dallas's best HVAC team."
  },
  {
    id: 7,
    name: "Michael B.",
    neighborhood: "White Rock",
    rating: 5,
    date: "September 2025",
    service: "Smart Thermostat Installation",
    text: "We had them install two Ecobee smart thermostats. The technician ran a new C-wire neatly behind the walls and walked us through setting up our daily cooling routines. Our system maintains an optimal temperature and saves us so much electricity."
  },
  {
    id: 8,
    name: "William D.",
    neighborhood: "University Park",
    rating: 5,
    date: "October 2025",
    service: "Air Quality Services",
    text: "We wanted a clean UV air purifier system integrated into our existing central vents. Arctic Breeze completed the installation in under three hours. We have already noticed a significant drop in airborne dust on our furniture. Highly recommended!"
  },
  {
    id: 9,
    name: "Sophia P.",
    neighborhood: "North Dallas",
    rating: 5,
    date: "December 2025",
    service: "Emergency HVAC Services",
    text: "My office heating went down just before a major meeting on a Monday morning. The Arctic Breeze team responded immediately, diagnosed the faulty heater component, and made the repair on site. Fantastic emergency service that keeps our retail operations running."
  }
];
