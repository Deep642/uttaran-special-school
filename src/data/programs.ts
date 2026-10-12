export interface ProgramLevel {
  id: string;
  name: string;
  bengaliName: string;
  badge: string;
  focusTag: string;
  summary: string;
  bengaliSummary: string;
  colorScheme: {
    bg: string;
    border: string;
    text: string;
    badgeBg: string;
    accent: string;
  };
  keyGoals: string[];
  methodologies: string[];
  icon: string;
}

export const developmentalPrograms: ProgramLevel[] = [
  {
    id: "special-education",
    name: "Special Education & Cognitive Learning",
    bengaliName: "স্পেশাল এডুকেশন (Special Education)",
    badge: "Academic & Cognitive",
    focusTag: "বিশেষ শিক্ষণ পদ্ধতির মাধ্যমে সহজ পাঠ",
    summary: "Child-centered adaptive learning tailored for slow learners, intellectual challenges, and learning disabilities. We simplify complex ideas using multi-sensory techniques so every child progresses without fear.",
    bengaliSummary: "অভিজ্ঞ স্পেশাল এডুকেটরদের তত্ত্বাবধানে প্রতিটি শিশুর মানসিক সক্ষমতা অনুযায়ী বিশেষ শিক্ষণ পদ্ধতির মাধ্যমে আনন্দদায়ক পাঠদান।",
    colorScheme: {
      bg: "bg-emerald-50/70",
      border: "border-emerald-200",
      text: "text-emerald-900",
      badgeBg: "bg-emerald-100 text-emerald-800",
      accent: "bg-emerald-600",
    },
    keyGoals: [
      "Functional literacy: recognizing numbers, letters & daily words",
      "Conceptual understanding through visual storyboards & flashcards",
      "Memory retention, focus enhancement & sequential thinking",
      "Positive classroom behavior, curiosity & peer cooperation",
    ],
    methodologies: [
      "Montessori-inspired multi-sensory educational kits",
      "One-on-one tailored sessions & small-group interactions",
      "Activity-based continuous assessment without exam stress",
    ],
    icon: "BookOpen",
  },
  {
    id: "speech-therapy",
    name: "Speech & Language Therapy",
    bengaliName: "স্পিচ ও ল্যাঙ্গুয়েজ থেরাপি (Speech & Language Therapy)",
    badge: "Communication Wing",
    focusTag: "কথা বলা ও যোগাযোগের দক্ষতা বৃদ্ধি",
    summary: "Comprehensive speech intervention for children with articulation delays, stammering, phonological difficulties, and non-verbal communication barriers to unlock their inner voice.",
    bengaliSummary: "কথা বলতে দেরি হওয়া বা উচ্চারণের জড়তা দূর করে শিশুকে আত্মবিশ্বাসের সঙ্গে নিজের মনের ভাব প্রকাশ করতে সক্ষম করে তোলা।",
    colorScheme: {
      bg: "bg-sky-50/70",
      border: "border-sky-200",
      text: "text-sky-900",
      badgeBg: "bg-sky-100 text-sky-800",
      accent: "bg-sky-600",
    },
    keyGoals: [
      "Oro-motor stimulation and tongue-jaw movement coordination",
      "Clear syllable pronunciation, phonetic rhythm & vocal clarity",
      "Receptive understanding: following daily spoken instructions",
      "Expressing primary needs (thirst, hunger, comfort, emotion)",
    ],
    methodologies: [
      "Oro-facial motor exercises, blow toys & mirror biofeedback",
      "Picture Exchange Communication (PECS) & assistive symbols",
      "Rhythm, singing, and phonetic play routines",
    ],
    icon: "MessageSquare",
  },
  {
    id: "occupational-therapy",
    name: "Occupational Therapy & Sensory Integration",
    bengaliName: "অকুপেশনাল থেরাপি (Occupational Therapy)",
    badge: "Motor & Sensory Wing",
    focusTag: "দৈনন্দিন কাজ ও শারীরিক সমন্বয় সাধনে সহায়তা",
    summary: "Therapeutic exercises dedicated to building hand-eye coordination, balance, fine motor grasp (writing, holding utensils), and calming sensory over-responsiveness in daily life.",
    bengaliSummary: "দৈনন্দিন জীবনের কাজ নিজে নিজে করার মতো শারীরিক সক্ষমতা, সূক্ষ্ম পেশির নিয়ন্ত্রণ ও ইন্দ্রিয়গত সমন্বয় গড়ে তোলা।",
    colorScheme: {
      bg: "bg-amber-50/70",
      border: "border-amber-200",
      text: "text-amber-900",
      badgeBg: "bg-amber-100 text-amber-800",
      accent: "bg-amber-600",
    },
    keyGoals: [
      "Fine motor control: pencil grip, buttoning clothes, tying laces",
      "Gross motor stamina: jumping, balance beams, postural stability",
      "Sensory modulation: managing sound, light & texture sensitivities",
      "Activities of Daily Living (ADL): eating and dressing independently",
    ],
    methodologies: [
      "Tactile balance boards, textured balls & sensory swings",
      "Fine-manipulation pegboards, clay moulding & finger exercises",
      "Simulated home living environments for autonomous practice",
    ],
    icon: "Activity",
  },
  {
    id: "cp-child-therapy",
    name: "Cerebral Palsy (CP) Specialized Care & Physiotherapy",
    bengaliName: "সি.পি. চাইল্ড থেরাপি (CP Child Therapy)",
    badge: "Neuromotor Support",
    focusTag: "সি.পি. আক্রান্ত শিশুদের বিশেষ যত্ন ও থেরাপি",
    summary: "Targeted neuromotor rehabilitation and physiotherapeutic support to ease muscle spasticity, assist upright posture, prevent deformities, and foster independent mobility.",
    bengaliSummary: "সেরিব্রাল পালসি (CP) আক্রান্ত শিশুদের বিশেষ শারীরিক পরিচর্যা, ফিজিওথেরাপি ও সহায়ক সরঞ্জামের মাধ্যমে স্বাবলম্বী করা।",
    colorScheme: {
      bg: "bg-rose-50/70",
      border: "border-rose-200",
      text: "text-rose-900",
      badgeBg: "bg-rose-100 text-rose-800",
      accent: "bg-rose-600",
    },
    keyGoals: [
      "Muscle tone relaxation & prevention of joint contractures",
      "Pelvic stability, assisted standing, and step facilitation",
      "Adaptive seating posture and comfort during study hours",
      "Confidence in using adaptive mobility aids and walkers",
    ],
    methodologies: [
      "Neurodevelopmental therapy (NDT) & gentle stretching",
      "Parallel walking bars, bolster rolls & standing frames",
      "Regular clinical evaluation with Kolkata visiting physiotherapists",
    ],
    icon: "Accessibility",
  },
  {
    id: "neurodevelopmental-care",
    name: "Autism, Down Syndrome & ADHD Care",
    bengaliName: "অটিজম, ডাউন সিন্ড্রোম ও এডিএইচডি পরিচর্যা",
    badge: "Behavioral & Developmental",
    focusTag: "আচরণগত ও সামাজিক বিকাশে নিবিড় পরিচর্যা",
    summary: "Supportive behavioral programs for neurodivergent children. We address hyperactivity, attention deficits, repetitive behaviors, and emotional meltdowns through positive reinforcement and patience.",
    bengaliSummary: "অটিজম (ASD), ডাউন সিন্ড্রোম ও ADHD শিশুদের সামাজিক মেলামেশা, মনোযোগ বৃদ্ধি ও আবেগ নিয়ন্ত্রণের বিশেষ পরিচর্যা।",
    colorScheme: {
      bg: "bg-purple-50/70",
      border: "border-purple-200",
      text: "text-purple-900",
      badgeBg: "bg-purple-100 text-purple-800",
      accent: "bg-purple-600",
    },
    keyGoals: [
      "Improving attention span and task completion duration",
      "Social interaction with classmates and group tolerance",
      "Emotion regulation and constructive self-calming strategies",
      "Safe and joyful engagement in cultural events and sports",
    ],
    methodologies: [
      "Predictable visual routines & sensory de-escalation corners",
      "Applied Behavior Analysis (ABA) inspired positive rewards",
      "Music, dance, recitation, and expressive art therapy",
    ],
    icon: "Sparkles",
  },
  {
    id: "iep-care-plan",
    name: "Individualized Education Plan (IEP)",
    bengaliName: "ব্যক্তিগত উন্নয়ন পরিকল্পনা (IEP Care Plan)",
    badge: "1:1 Roadmap",
    focusTag: "প্রতিটি শিশুর জন্য আলাদা ও সুনির্দিষ্ট উন্নয়ন পরিকল্পনা",
    summary: "Every child is unique. We conduct an in-depth baseline evaluation of their cognitive, speech, sensory, and motor milestones to craft a personalized learning and therapy roadmap updated termly.",
    bengaliSummary: "কোনো সাধারণ ছকে না ফেলে প্রতিটি শিশুর নিজস্ব গতি ও সম্ভাবনা অনুযায়ী আলাদা কেয়ার প্ল্যান (IEP) তৈরি করা হয়।",
    colorScheme: {
      bg: "bg-teal-50/70",
      border: "border-teal-200",
      text: "text-teal-900",
      badgeBg: "bg-teal-100 text-teal-800",
      accent: "bg-teal-600",
    },
    keyGoals: [
      "Detailed baseline developmental profile across 5 domains",
      "Bi-weekly measurable milestone goals shared with parents",
      "Continuous parent-teacher counseling and home guidance",
      "Regular review sessions with consulting Kolkata clinical panel",
    ],
    methodologies: [
      "Standardized developmental screening checklist",
      "Integrated multidisciplinary review (Educator + Therapist + Parent)",
      "Progress tracking journals with photographic milestone records",
    ],
    icon: "ClipboardList",
  },
  {
    id: "vocational-life-skills",
    name: "Vocational & Life Skills Training",
    bengaliName: "বৃত্তিমূলক ও জীবনমুখী প্রশিক্ষণ (Vocational Training)",
    badge: "Self-Reliance",
    focusTag: "হস্তশিল্প, মোমবাতি, বাগান ও স্বাবলম্বী ভবিষ্যৎ",
    summary: "Preparing senior students for adulthood and financial dignity. Practical hands-on training in handicrafts, paper craft, candle fabrication, packaging, basic gardening, and everyday household tasks.",
    bengaliSummary: "হস্তশিল্প, মোমবাতি তৈরি, কাগজের প্যাকেট ও বাগান পরিচর্যার মাধ্যমে ভবিষ্যৎ জীবনের আত্মমর্যাদা ও স্বাবলম্বিতা অর্জন।",
    colorScheme: {
      bg: "bg-emerald-50/70",
      border: "border-emerald-200",
      text: "text-emerald-900",
      badgeBg: "bg-emerald-100 text-emerald-800",
      accent: "bg-emerald-600",
    },
    keyGoals: [
      "Handicrafts, decorative envelope making & paper bag crafting",
      "Candle making, packaging and festival exhibition participation",
      "Basic horticulture, plant care, and environmental awareness",
      "Kitchen safety, table arrangement, and personal money concepts",
    ],
    methodologies: [
      "Step-by-step task decomposition and assembly-line practice",
      "Showcasing student-made crafts at community exhibitions",
      "Instilling dignity of labor and self-reliance in adult life",
    ],
    icon: "Briefcase",
  },
];
