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
  name: "Director / Founder",
  role: "Founder & Managing Trustee",
  titleBadge: "From the Founder's Desk",
  credentials: "M.A., Dip. in Special Education & Social Rehabilitation",
  photoUrl: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=700&q=80",
  visionSnippet: "Every child deserves to experience the dignity of progress, the warmth of acceptance, and the pride of self-reliance.",
  message: "When we established Uttaran Special School in Berhampore, our mission was simple yet uncompromising: to provide a loving environment where children with neurodivergent needs, intellectual disabilities, and speech delays are celebrated rather than pressured. We do not focus on rigid examinations; we nurture daily living milestones, emotional stability, and vocational independence so that every child can walk with confidence.",
  contactNote: "Open for personal consultations by prior appointment every Saturday morning.",
};

export const staffMembers: StaffMember[] = [
  // Teaching Staff & Therapists
  {
    id: "staff-1",
    name: "Sunita Roy, M.Ed (Spl. Ed.)",
    role: "Senior Special Educator & Curriculum Lead",
    category: "teaching",
    categoryLabel: "Special Educator",
    qualifications: "RCI Registered • B.Ed & M.Ed in Mental Retardation / Intellectual Disability",
    specialization: "Early Intervention & Sensory Motor Readiness",
    experience: "12+ Years Experience",
    bioSnippet: "Specializes in individualized education plans (IEPs) and sensory motor integration routines for young children.",
    photoUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80",
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
