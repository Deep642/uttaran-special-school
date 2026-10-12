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
};
