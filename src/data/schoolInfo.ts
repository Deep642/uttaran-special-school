export interface SchoolInfo {
  name: string;
  fullName: string;
  tagline: string;
  subTagline: string;
  address: {
    line1: string;
    locality: string;
    landmark: string;
    city: string;
    district: string;
    state: string;
    pin: string;
    fullFormatted: string;
  };
  contacts: {
    phonePrimary: string;
    phoneFormatted: string;
    email: string;
    visitingHours: string;
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
  tagline: "Empowering Every Child to Learn, Grow & Flourish",
  subTagline: "A dedicated development and day-care learning center nurturing cognitive milestones, sensory integration, and life-long independence in Berhampore.",
  address: {
    line1: "Near Prabin Sabha, Nabapalli",
    locality: "Dhupghati / Raninagar",
    landmark: "Near Laldighi",
    city: "Berhampore",
    district: "Murshidabad",
    state: "West Bengal",
    pin: "742101",
    fullFormatted: "Near Prabin Sabha, Nabapalli (Dhupghati, Raninagar area near Laldighi), Berhampore, Murshidabad, West Bengal 742101",
  },
  contacts: {
    phonePrimary: "+919434123456",
    phoneFormatted: "+91 94341 23456",
    email: "contact@uttaranspecialschool.org",
    visitingHours: "Mon – Fri: 9:30 AM – 3:00 PM | Sat: 9:30 AM – 1:00 PM",
  },
  // Clean embed pointing to Raninagar / Laldighi, Berhampore
  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14620.252033066497!2d88.24355!3d24.0955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f97dcd1bfbf4d7%3A0x1bb29910d6439b1a!2sRaninagar%2C%20Berhampore%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
  mapDirectLink: "https://maps.google.com/?q=Raninagar+Nabapalli+Laldighi+Berhampore+West+Bengal",
  statusNotice: "Notice for Parents: To ensure the best individualized support for your child, please contact our team via phone or visit during official morning hours for personal consultation and assessment verification.",
  stats: [
    {
      label: "Child-Centric Wings",
      value: "4 Levels",
      description: "Developmental milestone grouping rather than rigid grades",
    },
    {
      label: "Support Model",
      value: "1:1 Care",
      description: "Individualized attention tailored to sensory needs",
    },
    {
      label: "Life Skills Training",
      value: "100%",
      description: "Focus on functional independence and daily living",
    },
    {
      label: "Community Serving",
      value: "Berhampore",
      description: "Serving families across Murshidabad district",
    },
  ],
};
