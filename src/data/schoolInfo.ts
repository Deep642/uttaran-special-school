export interface SchoolInfo {
  name: string;
  fullName: string;
  bengaliName: string;
  tagline: string;
  bengaliTagline: string;
  subTagline: string;
  bengaliSubTagline: string;
  foundedYear: string;
  establishedDate: string;
  principal: {
    name: string;
    bengaliName: string;
    designation: string;
    phone: string;
    phoneFormatted: string;
  };
  address: {
    line1: string;
    locality: string;
    landmark: string;
    city: string;
    district: string;
    state: string;
    pin: string;
    fullFormatted: string;
    bengaliFormatted: string;
  };
  contacts: {
    phonePrimary: string;
    phoneFormatted: string;
    phoneSecondary: string;
    phoneSecondaryFormatted: string;
    email: string;
    visitingHours: string;
  };
  socials: {
    facebook: string;
  };
  mapEmbedUrl: string;
  mapDirectLink: string;
  statusNotice: string;
  stats: Array<{
    label: string;
    value: string;
    description: string;
  }>;
}

export const schoolInfo: SchoolInfo = {
  name: "Uttaran Special School",
  fullName: "Uttaran Special School For Differently Able",
  bengaliName: "উত্তরণ স্পেশাল স্কুল",
  tagline: "Every Child is Unique, Every Child is Full of Potential",
  bengaliTagline: "প্রতিটি শিশুই অনন্য, প্রতিটি শিশুই সম্ভাবনাময়।",
  subTagline: "A compassionate and trusted learning sanctuary for differently abled children, nurturing cognitive growth, sensory therapy, and lifelong independence in Berhampore.",
  bengaliSubTagline: "বিশেষ চাহিদাসম্পন্ন শিশুদের স্নেহময় ও নির্ভরযোগ্য ঠিকানা (Co-education learning centre for the differently abled)",
  foundedYear: "2016",
  establishedDate: "February 6, 2020",
  principal: {
    name: "Partha Bhattacharjee",
    bengaliName: "পার্থ ভট্টাচার্য",
    designation: "Principal / Administrator",
    phone: "+919641515126",
    phoneFormatted: "+91 96415 15126",
  },
  address: {
    line1: "20/5, C. R. Das Road",
    locality: "Dhopaghati",
    landmark: "Near Laldighi",
    city: "Berhampore",
    district: "Murshidabad",
    state: "West Bengal",
    pin: "742101",
    fullFormatted: "20/5, C. R. Das Road, Dhopaghati (Near Laldighi), Berhampore, Murshidabad, West Bengal 742101",
    bengaliFormatted: "২০/৫, সি. আর. দাস রোড, ধূপঘাঁটি (লালদিঘির কাছে), বহরমপুর, মুর্শিদাবাদ",
  },
  contacts: {
    phonePrimary: "+919733542545",
    phoneFormatted: "+91 97335 42545",
    phoneSecondary: "+919641515126",
    phoneSecondaryFormatted: "+91 96415 15126",
    email: "uttaranashray22@gmail.com",
    visitingHours: "Mon – Sat: 9:30 AM – 3:00 PM",
  },
  socials: {
    facebook: "https://www.facebook.com/profile.php?id=61565479896427",
  },
  // Google Maps embed centered on C.R. Das Road, Dhopaghati / Raninagar area, Berhampore
  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3655.080517724391!2d88.2486!3d24.0955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f97dcd1bfbf4d7%3A0x1bb29910d6439b1a!2sC.R.+Das+Road%2C+Dhopaghati%2C+Berhampore%2C+West+Bengal+742101!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
  mapDirectLink: "https://maps.google.com/?q=20/5+CR+Das+Road+Dhopaghati+Berhampore+Murshidabad+742101",
  statusNotice: "Admissions & Care Plan Assessment: To arrange personalized developmental evaluations (IEP) or consult with our therapists, please call our school desk or visit during working hours.",
  stats: [
    {
      label: "Specialized Services",
      value: "6+ Domains",
      description: "Speech, Occupational, CP care, Autism, ADHD & Special Ed",
    },
    {
      label: "Support Model",
      value: "1:1 IEP",
      description: "Individualized Education & Care Plan tailored to every child",
    },
    {
      label: "Therapy Excellence",
      value: "Kolkata Panel",
      description: "Regular supervision from experienced Kolkata visiting therapists",
    },
    {
      label: "Serving Community",
      value: "Berhampore",
      description: "Empowering families across Murshidabad with dignity & care",
    },
  ],
};
