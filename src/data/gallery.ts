export interface GalleryItem {
  id: string;
  title: string;
  category: 'classroom' | 'therapy' | 'crafts' | 'events';
  categoryLabel: string;
  description: string;
  imageUrl: string;
}

export const galleryItems: GalleryItem[] = [
  {
    id: "g0-brochure",
    title: "Official Admissions Prospectus & Care Wings",
    category: "events",
    categoryLabel: "Prospectus & Events",
    description: "Official published leaflet showcasing special facilities, admission guidelines, and direct contact numbers.",
    imageUrl: "/uttaran-brochure.jpg",
  },
  {
    id: "g0-logo",
    title: "Official School Emblem & Badge",
    category: "events",
    categoryLabel: "Prospectus & Events",
    description: "Embroidered official institutional emblem of Uttaran Special School, Berhampur, Murshidabad.",
    imageUrl: "/uttaran-logo.jpg",
  },
  {
    id: "g1",
    title: "Sensory Stimulation Corner",
    category: "therapy",
    categoryLabel: "Sensory & Therapy",
    description: "Equipped with gentle tactile boards, textured mats, and soft lighting for emotional calming.",
    imageUrl: "https://images.unsplash.com/photo-1584697964190-705b8932788e?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "g2",
    title: "Individualized Learning Station",
    category: "classroom",
    categoryLabel: "Classroom Spaces",
    description: "Low-distraction spaces designed for one-on-one attention between special educators and students.",
    imageUrl: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "g3",
    title: "Eco-Friendly Paper & Diya Workshop",
    category: "crafts",
    categoryLabel: "Handicrafts & Art",
    description: "Vocational learners assembling handcrafted decorative paper bags and festival earthen lamps.",
    imageUrl: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "g4",
    title: "Daily Living Activities (ADL) Center",
    category: "classroom",
    categoryLabel: "Classroom Spaces",
    description: "Mock home living environment where students practice practical kitchen, dining, and hygiene habits.",
    imageUrl: "https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "g5",
    title: "Annual Sports & Inclusive Games",
    category: "events",
    categoryLabel: "Events & Festivals",
    description: "Adaptive games celebrating participation, peer encouragement, and physical wellness.",
    imageUrl: "https://images.unsplash.com/photo-1472162072942-cd5147eb3902?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "g6",
    title: "Music & Rhythm Circle Therapy",
    category: "therapy",
    categoryLabel: "Sensory & Therapy",
    description: "Therapeutic rhythm instruments helping non-verbal children regulate emotions and express energy.",
    imageUrl: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "g7",
    title: "Cultural Celebration & Rabindra Jayanti",
    category: "events",
    categoryLabel: "Events & Festivals",
    description: "Students participating in traditional dance, recitations, and seasonal celebrations.",
    imageUrl: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "g8",
    title: "Pottery & Fine Motor Development",
    category: "crafts",
    categoryLabel: "Handicrafts & Art",
    description: "Gentle clay molding exercises that strengthen wrist flexibility and tactile confidence.",
    imageUrl: "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?auto=format&fit=crop&w=800&q=80",
  },
];
