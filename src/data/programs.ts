export interface ProgramLevel {
  id: string;
  name: string;
  badge: string;
  focusAge: string;
  summary: string;
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
    id: "early-intervention",
    name: "Early Intervention & Sensory Stimulation",
    badge: "Level 1: Foundation",
    focusAge: "Ages 3 – 7 (Early Developmental Stages)",
    summary: "Gentle stimulation and play-based behavioral readiness designed to assist neurodivergent children in sensory integration, emotional grounding, and basic physical coordination.",
    colorScheme: {
      bg: "bg-emerald-50/60",
      border: "border-emerald-200",
      text: "text-emerald-900",
      badgeBg: "bg-emerald-100 text-emerald-800",
      accent: "bg-emerald-500",
    },
    keyGoals: [
      "Sensory motor coordination & tactile tolerance",
      "Basic response to environmental cues and gentle routines",
      "Reduction of sensory overwhelm through calming therapy",
      "Bonding and social comfort with caregivers and peers",
    ],
    methodologies: [
      "Multi-sensory play corners & soft obstacles",
      "Music, rhythmic clapping, and tactile texture boards",
      "One-on-one gentle guidance with specialized educators",
    ],
    icon: "Sparkles",
  },
  {
    id: "functional-literacy",
    name: "Primary Level (Functional Literacy & Communication)",
    badge: "Level 2: Communication",
    focusAge: "Ages 7 – 12 (Cognitive Expansion)",
    summary: "Custom visual schedules, Augmentative & Alternative Communication (AAC) concepts, and practical literacy designed to help every child express their thoughts and needs with dignity.",
    colorScheme: {
      bg: "bg-sky-50/60",
      border: "border-sky-200",
      text: "text-sky-900",
      badgeBg: "bg-sky-100 text-sky-800",
      accent: "bg-sky-500",
    },
    keyGoals: [
      "Expressive and receptive communication building",
      "Visual symbol recognition, picture cards & basic words",
      "Expressing personal needs (hunger, rest, bathroom, emotion)",
      "Interactive storytelling and basic receptive comprehension",
    ],
    methodologies: [
      "Picture Exchange and flashcard visual timetables",
      "Adaptive tablet/audio-visual learning tools",
      "Speech exercises and phonics-based rhythmic repetition",
    ],
    icon: "BookOpen",
  },
  {
    id: "daily-living-skills",
    name: "Secondary / Pre-Vocational (Daily Living Skills - ADL)",
    badge: "Level 3: Autonomy",
    focusAge: "Ages 12 – 16 (Practical Independence)",
    summary: "Fostering practical self-reliance so students feel capable in their everyday home and community lives, focusing on Activities of Daily Living (ADL) and applied functional numeracy.",
    colorScheme: {
      bg: "bg-amber-50/60",
      border: "border-amber-200",
      text: "text-amber-900",
      badgeBg: "bg-amber-100 text-amber-800",
      accent: "bg-amber-500",
    },
    keyGoals: [
      "Self-care routines: grooming, dining etiquette, dressing",
      "Practical numeracy: identifying currency, time concepts, weights",
      "Safe handling of everyday tools and kitchen appliances",
      "Navigating local community spaces and etiquette",
    ],
    methodologies: [
      "Simulated home living environments (mock kitchen & dining)",
      "Step-by-step chore mastery with positive reinforcement",
      "Structured peer collaboration exercises",
    ],
    icon: "HeartHandshake",
  },
  {
    id: "vocational-training",
    name: "Vocational & Life Skills Training",
    badge: "Level 4: Empowerment",
    focusAge: "Ages 16+ (Adolescents & Young Adults)",
    summary: "Equipping young adults with tangible vocational craft skills, digital fundamentals, and creative capabilities to boost self-worth and open avenues for community inclusion.",
    colorScheme: {
      bg: "bg-teal-50/60",
      border: "border-teal-200",
      text: "text-teal-900",
      badgeBg: "bg-teal-100 text-teal-800",
      accent: "bg-teal-500",
    },
    keyGoals: [
      "Handmade crafts: eco-friendly paper bags, diya painting, envelopes",
      "Computer fundamentals: mouse handling, typing, basic data entry",
      "Pottery, ceramic shaping, and creative canvas arts",
      "Workplace responsibility, task stamina, and teamwork",
    ],
    methodologies: [
      "Workstation task decomposition & hands-on craft sessions",
      "Exhibitions during festivals to showcase student creations",
      "Assistance in transition toward supportive local employment",
    ],
    icon: "Briefcase",
  },
];
