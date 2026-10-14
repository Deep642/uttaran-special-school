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
    experience: "Faculty Member",
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
    experience: "Faculty Member",
    bioSnippet: "Specialist educator in intellectual disability and developmental delays, guiding individualized milestone learning and classroom communication.",
    photoUrl: "/team/krishna-ghosh.jpg",
  },
];

