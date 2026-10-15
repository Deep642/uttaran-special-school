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

export type StaffDesignationGroup = 'leadership' | 'special-educator' | 'co-teacher';

export interface StaffMember {
  id: string;
  name: string;
  role: string;
  category: 'teaching' | 'non-teaching';
  designationGroup: StaffDesignationGroup;
  categoryLabel: string;
  qualifications: string;
  specialization: string;
  experience: string;
  bioSnippet: string;
  photoUrl: string;
}

export const leadershipData: LeadershipInfo = {
  name: "Partha Bhattacharjee (পার্থ ভট্টাচার্য)",
  role: "Principal CUM Coordinator (IDD & ASD)",
  titleBadge: "From the Principal's Desk • সম্পাদকের কলমে",
  credentials: "Principal CUM Coordinator (IDD & ASD) • Dhopaghati, Berhampore",
  photoUrl: "/team/partha-bhattacharjee.jpg",
  visionSnippet: "প্রতিটি শিশুই অনন্য, প্রতিটি শিশুই সম্ভাবনাময়। ভালোবাসা, সংগ্রাম ও সম্ভাবনার এক আলোকবর্তিকা।",
  message: "২০১৬ সালে 'উত্তরণ স্প্যাস্টিক সোসাইটি' নামে ছোট্ট একটি থেরাপি সেন্টার হিসেবে যে যাত্রা শুরু হয়েছিল, ২০২০ সালের ৬ ফেব্রুয়ারি তা পূর্ণাঙ্গ 'উত্তরণ স্পেশাল স্কুল'-এ রূপ নেয়। প্রতিটি শিশুর মধ্যেই লুকিয়ে থাকে বিশেষ শক্তি ও সম্ভাবনা। এখানে কোনো শিশুকে তার সীমাবদ্ধতা দিয়ে বিচার করা হয় না, বরং ভালোবাসা, যত্ন ও সঠিক প্রশিক্ষণের মাধ্যমে তাকে সমাজের মূল স্রোতে ফিরিয়ে আনাই আমাদের একমাত্র সংকল্প।",
  contactNote: "Direct Desk & WhatsApp: +91 96415 15126 | School Desk: +91 97335 42545",
};

export const staffMembers: StaffMember[] = [
  // 1. Leadership & Institutional Head
  {
    id: "staff-partha-bhattacharjee",
    name: "Partha Bhattacharjee (পার্থ ভট্টাচার্য)",
    role: "Principal CUM Coordinator (IDD & ASD)",
    category: "teaching",
    designationGroup: "leadership",
    categoryLabel: "Principal & Coordinator",
    qualifications: "Principal CUM Coordinator (IDD & ASD)",
    specialization: "Intellectual & Developmental Disabilities (IDD) & ASD",
    experience: "Founder & Principal",
    bioSnippet: "Founder and Principal leading Uttaran Special School, dedicated to empowering children with special needs through tailored developmental guidance.",
    photoUrl: "/team/partha-bhattacharjee.jpg",
  },

  // 2. Specialized Educators (IDD, H.I, V.I)
  {
    id: "staff-krishna-ghosh",
    name: "Krishna Ghosh",
    role: "Special Educator (IDD)",
    category: "teaching",
    designationGroup: "special-educator",
    categoryLabel: "Special Educator (IDD)",
    qualifications: "Special D.Ed (MR) • Special B.Ed (IDD)",
    specialization: "Intellectual & Developmental Disabilities (IDD)",
    experience: "Faculty Member",
    bioSnippet: "Specialist educator in intellectual and developmental disabilities, guiding individualized milestone learning and classroom communication.",
    photoUrl: "/team/krishna-ghosh.jpg",
  },
  {
    id: "staff-madhab-mandal",
    name: "Madhab Mandal",
    role: "Special Educator (IDD)",
    category: "teaching",
    designationGroup: "special-educator",
    categoryLabel: "Special Educator (IDD)",
    qualifications: "Certified Special Educator (IDD)",
    specialization: "Intellectual & Developmental Disabilities (IDD)",
    experience: "Faculty Member",
    bioSnippet: "Dedicated special educator guiding differently-abled children in cognitive concepts, motor skills, and interactive learning.",
    photoUrl: "/team/madhab-mandal.png",
  },
  {
    id: "staff-niladri-chatterjee",
    name: "Niladri Chatterjee",
    role: "Special Educator (H.I)",
    category: "teaching",
    designationGroup: "special-educator",
    categoryLabel: "Special Educator (H.I)",
    qualifications: "Certified Special Educator (H.I)",
    specialization: "Hearing Impairment (H.I) & Auditory Communication",
    experience: "Faculty Member",
    bioSnippet: "Specialist educator in hearing impairment, guiding auditory-verbal training, sign communication, and inclusive learning.",
    photoUrl: "/team/niladri-chatterjee.png",
  },
  {
    id: "staff-sampa-joyarder",
    name: "Sampa Joyarder",
    role: "Special Educator (V.I)",
    category: "teaching",
    designationGroup: "special-educator",
    categoryLabel: "Special Educator (V.I)",
    qualifications: "Certified Special Educator (V.I)",
    specialization: "Visual Impairment (V.I) & Tactile Education",
    experience: "Faculty Member",
    bioSnippet: "Specialist educator dedicated to visually-impaired students, focusing on tactile learning, mobility, and adaptive education.",
    photoUrl: "/team/sampa-joyarder.png",
  },

  // 3. Co-Teaching & Academic Mentors
  {
    id: "staff-namita-thakur",
    name: "Namita Thakur",
    role: "Co-Teacher",
    category: "teaching",
    designationGroup: "co-teacher",
    categoryLabel: "Co-Teacher",
    qualifications: "Trained Co-Educator",
    specialization: "Classroom Learning Assistance & Student Engagement",
    experience: "Faculty Member",
    bioSnippet: "Supports lead special educators during classroom sessions, personalized activities, motor coordination exercises, and collaborative learning.",
    photoUrl: "/team/namita-thakur.png",
  },
];

