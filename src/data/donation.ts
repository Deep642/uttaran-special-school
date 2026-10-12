export interface DonationInfo {
  upiId: string;
  payeeName: string;
  upiQrUrl: string;
  bankDetails: {
    accountName: string;
    accountNumber: string;
    bankName: string;
    branch: string;
    ifscCode: string;
    accountType: string;
  };
  whatsappReceiptNumber: string;
  whatsappReceiptFormatted: string;
  chequePayableTo: string;
  inKindWishlist: Array<{
    id: string;
    title: string;
    category: string;
    description: string;
    estimatedCost: string;
    icon: string;
  }>;
}

export const donationData: DonationInfo = {
  upiId: "uttaran.school@sbi",
  payeeName: "Uttaran Special School",
  // Standard UPI deep-link encoded into free high-resolution QR
  upiQrUrl: "https://api.qrserver.com/v1/create-qr-code/?size=260x260&margin=10&data=upi%3A%2F%2Fpay%3Fpa%3Duttaran.school%40sbi%26pn%3DUttaran%2520Special%2520School%26cu%3DINR",
  bankDetails: {
    accountName: "Uttaran Special School For Differently Able",
    accountNumber: "38920192831",
    bankName: "State Bank of India",
    branch: "Berhampore Main Branch, Murshidabad",
    ifscCode: "SBIN0000034",
    accountType: "Savings / Institutional Account",
  },
  whatsappReceiptNumber: "919434123456",
  whatsappReceiptFormatted: "+91 94341 23456",
  chequePayableTo: "Uttaran Special School For Differently Able (Payable at Berhampore)",
  inKindWishlist: [
    {
      id: "sensory-kit",
      title: "Sensory & Motor Therapy Kits",
      category: "Therapy & Calming",
      description: "Tactile texture mats, sensory chewies, weighted blankets, and soft obstacle blocks for emotional regulation.",
      estimatedCost: "₹1,500 – ₹3,000",
      icon: "Sparkles",
    },
    {
      id: "vocational-crafts",
      title: "Vocational Craft & Pottery Supplies",
      category: "Life Skills & Independence",
      description: "Non-toxic modeling clay, diya paints, handmade paper rolls, and packaging materials for adolescent vocational craftwork.",
      estimatedCost: "₹1,000 – ₹2,500",
      icon: "Palette",
    },
    {
      id: "nutrition-meal",
      title: "Sponsor Wholesome Tiffin / Fruit Day",
      category: "Child Health & Nutrition",
      description: "Sponsor wholesome fruits, milk, or special lunch for all students during birthdays, anniversaries, or festival celebrations.",
      estimatedCost: "₹2,000 – ₹4,000",
      icon: "Apple",
    },
    {
      id: "adaptive-furniture",
      title: "Adaptive Seating & Posture Supports",
      category: "Campus Infrastructure",
      description: "Ergonomic low-height wooden worktables, balance balls, and supportive floor chairs for children with physical mobility challenges.",
      estimatedCost: "₹3,500 – ₹6,000",
      icon: "Armchair",
    },
  ],
};
