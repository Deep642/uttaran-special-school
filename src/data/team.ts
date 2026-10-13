export interface LeadershipInfo {
  name: string;
  role: string;
  titleBadge: string;
  message: string;
  visionSnippet: string;
  photoUrl: string;
  credentials: string;
  contactNote?: string;
}

export interface StaffMember {
  id: string;
  name: string;
  role: string;
  category: 'teaching' | 'non-teaching';
  categoryLabel: string;
  qualifications: string;
  specialization: string;
  experience: string;
  bioSnippet: string;
  photoUrl: string;
}

export const leadershipData: LeadershipInfo = {
  name: "Partha Bhattacharya (পার্থ ভট্টাচার্য)",
  role: "Principal (Special Educator)",
  titleBadge: "From the Principal's Desk • সম্পাদকের কলমে",
  credentials: "Principal & Special Educator Lead • Dhopaghati, Berhampore",
  photoUrl: "/team/partha-bhattacharya.jpg",
  visionSnippet: "প্রতিটি শিশুই অনন্য, প্রতিটি শিশুই সম্ভাবনাময়। ভালোবাসা, সংগ্রাম ও সম্ভাবনার এক আলোকবর্তিকা।",
  message: "২০১৬ সালে 'উত্তরণ স্প্যাস্টিক সোসাইটি' নামে ছোট্ট একটি থেরাপি সেন্টার হিসেবে যে যাত্রা শুরু হয়েছিল, ২০২০ সালের ৬ ফেব্রুয়ারি তা পূর্ণাঙ্গ 'উত্তরণ স্পেশাল স্কুল'-এ রূপ নেয়। প্রতিটি শিশুর মধ্যেই লুকিয়ে থাকে বিশেষ শক্তি ও সম্ভাবনা। এখানে কোনো শিশুকে তার সীমাবদ্ধতা দিয়ে বিচার করা হয় না, বরং ভালোবাসা, যত্ন ও সঠিক প্রশিক্ষণের মাধ্যমে তাকে সমাজের মূল স্রোতে ফিরিয়ে আনাই আমাদের একমাত্র সংকল্প।",
  contactNote: "Direct Desk & WhatsApp: +91 96415 15126 | School Desk: +91 97335 42545",
};

export const staffMembers: StaffMember[] = [
  // Genuine Registered Teaching Staff & Special Educators
  {
    id: "staff-madhab-mandal",
    name: "Madhab Mandal",
    role: "Special Educator (Teacher)",
    category: "teaching",
    categoryLabel: "Special Educator",
    qualifications: "Certified Special Educator",
    specialization: "Special Education & Cognitive Learning",
    experience: "Experienced Faculty",
    bioSnippet: "Dedicated special educator guiding differently-abled children in cognitive concepts, motor skills, and interactive learning.",
    photoUrl: "/team/madhab-mandal.jpg",
  },
  {
    id: "staff-krishna-ghosh",
    name: "Krishna Ghosh",
    role: "Special Educator (Teacher)",
    category: "teaching",
    categoryLabel: "Special Educator",
    qualifications: "Special D.Ed (MR) • Special B.Ed (IDD)",
    specialization: "Intellectual & Developmental Disabilities (IDD / MR)",
    experience: "Certified Special Educator",
    bioSnippet: "Specialist educator in intellectual disability and developmental delays, guiding individualized milestone learning and classroom communication.",
    photoUrl: "/team/krishna-ghosh.jpg",
  },
  {
    id: "staff-2",
    name: "Dr. Partha Mukherjee",
    role: "Speech & Communication Consultant",
    category: "teaching",
    categoryLabel: "Speech & AAC Specialist",
    qualifications: "BASLP (Speech & Hearing) • RCI Certified",
    specialization: "Alternative Communication (AAC) & Verbal Phonics",
    experience: "9+ Years Experience",
    bioSnippet: "Guides non-verbal children using picture exchange systems (PECS) and gentle oral-motor exercises.",
    photoUrl: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "staff-3",
    name: "Barnali Sen",
    role: "Vocational Instructor & Art Therapist",
    category: "teaching",
    categoryLabel: "Vocational Instructor",
    qualifications: "Diploma in Fine Arts & Adaptive Craftsmanship",
    specialization: "Pottery, Earthen Diyas & Paper Craft",
    experience: "8+ Years Experience",
    bioSnippet: "Trains adolescent students in tactile crafts, eco-friendly paper work, and festival decorative products.",
    photoUrl: "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "staff-4",
    name: "Debashis Saha",
    role: "Daily Living Skills (ADL) & Computer Coach",
    category: "teaching",
    categoryLabel: "Life Skills Educator",
    qualifications: "B.A. • Certificate in Adaptive Assistive Computing",
    specialization: "Practical Numeracy, Currency & Digital Literacy",
    experience: "6+ Years Experience",
    bioSnippet: "Focuses on computer fundamentals, keyboard navigation, and functional numeracy for teenage learners.",
    photoUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80",
  },

  // Non-Teaching & Support Staff
  {
    id: "staff-5",
    name: "Kakoli Mondal",
    role: "Senior Child Caregiver & Support Attendant",
    category: "non-teaching",
    categoryLabel: "Child Care & Hygiene",
    qualifications: "Certified Pediatric Caregiver Training",
    specialization: "Assisted Dining, Hygiene & Mobility Support",
    experience: "10+ Years Experience",
    bioSnippet: "Provides loving, patient assistance during lunch routines, sensory soothing, and personal care.",
    photoUrl: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "staff-6",
    name: "Manas Das",
    role: "Campus Administrative & Welfare Coordinator",
    category: "non-teaching",
    categoryLabel: "Administration & Support",
    qualifications: "B.Com • Office & Welfare Administration",
    specialization: "Parent Coordination, Records & Safety Oversight",
    experience: "7+ Years Experience",
    bioSnippet: "Coordinates parent visits, documentation for government assistance programs, and day-to-day facilities.",
    photoUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "staff-7",
    name: "Shyamali Ghosh",
    role: "Classroom Assistant & Sensory Aide",
    category: "non-teaching",
    categoryLabel: "Classroom Support",
    qualifications: "Trained Support Attendant",
    specialization: "Activity Transitions & Calm Corner Management",
    experience: "5+ Years Experience",
    bioSnippet: "Ensures students move safely between sensory play zones and classrooms with reassurance and smile.",
    photoUrl: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&w=600&q=80",
  },
];
