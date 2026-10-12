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

// Finance values are loaded securely from environment variables (.env)
// so genuine bank details are NEVER committed or exposed in public code repositories!
const upiId = import.meta.env.VITE_UPI_ID || "uttaran.school@sbi";
const payeeName = import.meta.env.VITE_UPI_PAYEE_NAME || "Uttaran Special School";
const accountNumber = import.meta.env.VITE_BANK_ACCOUNT_NO || "38920192831";
const accountName = import.meta.env.VITE_BANK_ACCOUNT_NAME || "Uttaran Special School For Differently Able";
const bankName = import.meta.env.VITE_BANK_NAME || "State Bank of India";
const branch = import.meta.env.VITE_BANK_BRANCH || "Berhampore Main Branch, Murshidabad";
const ifscCode = import.meta.env.VITE_BANK_IFSC || "SBIN0000034";
const whatsappReceipt = import.meta.env.VITE_WHATSAPP_RECEIPT_NUMBER || "919434123456";

export const donationData: DonationInfo = {
  upiId,
  payeeName,
  upiQrUrl: `https://api.qrserver.com/v1/create-qr-code/?size=260x260&margin=10&data=${encodeURIComponent(
    `upi://pay?pa=${upiId}&pn=${payeeName}&cu=INR`
  )}`,
  bankDetails: {
    accountName,
    accountNumber,
    bankName,
    branch,
    ifscCode,
    accountType: "Savings / Institutional Account",
  },
  whatsappReceiptNumber: whatsappReceipt,
  whatsappReceiptFormatted: `+${whatsappReceipt.slice(0, 2)} ${whatsappReceipt.slice(2, 7)} ${whatsappReceipt.slice(7)}`,
  chequePayableTo: `${accountName} (Payable at Berhampore)`,
};
