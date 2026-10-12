import React, { useState } from 'react';
import {
  Heart,
  QrCode,
  Building2,
  Copy,
  Check,
  Smartphone,
  MessageCircle,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';
import { donationData } from '../data/donation';

export const DonationSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'upi' | 'bank'>('upi');
  const [copiedField, setCopiedField] = useState<string | null>(null);

  // Quick copy helper with feedback
  const handleCopy = (text: string, fieldName: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(null), 2500);
  };

  const whatsappReceiptUrl = `https://wa.me/${donationData.whatsappReceiptNumber}?text=${encodeURIComponent(
    `Hello Uttaran Special School, I have made a contribution to support the students. Here are my details for the receipt:\n- Name:\n- Contribution Amount: ₹\n- Transaction Ref (UTR / UPI ID):\n- Date:`
  )}`;

  return (
    <section id="donate" className="scroll-mt-20 py-16 sm:py-24 bg-gradient-to-br from-amber-100/60 via-rose-50/50 via-sky-50/60 to-emerald-100/60 border-b border-slate-200/70 relative overflow-hidden">
      {/* Radiant ambient glow orbs from official school emblem palette */}
      <div className="absolute top-10 -right-20 w-80 h-80 rounded-full bg-rose-300/30 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -left-20 w-80 h-80 rounded-full bg-emerald-300/30 blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/3 w-96 h-96 rounded-full bg-amber-300/20 blur-3xl pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100/80 border border-emerald-200 text-emerald-900 text-xs sm:text-sm font-bold tracking-wide uppercase mb-3 shadow-2xs">
            <Heart className="w-4 h-4 text-emerald-700 fill-emerald-600" />
            <span>Support Our Special Children</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">
            Direct Support & Contributions
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            100% of your generous contribution directly aids sensory therapy, adaptive education, and child care in Berhampore with <strong className="text-slate-900">0% third-party gateway deductions</strong>.
          </p>
        </div>

        {/* 2 Main Donation Modes Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          <button
            type="button"
            onClick={() => setActiveTab('upi')}
            className={`inline-flex items-center gap-2 px-6 py-3 rounded-2xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              activeTab === 'upi'
                ? 'bg-emerald-700 text-white shadow-md shadow-emerald-700/20 scale-102'
                : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
            }`}
          >
            <QrCode className="w-4 h-4" />
            <span>Direct UPI / QR Code (0% Fee)</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('bank')}
            className={`inline-flex items-center gap-2 px-6 py-3 rounded-2xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              activeTab === 'bank'
                ? 'bg-emerald-700 text-white shadow-md shadow-emerald-700/20 scale-102'
                : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
            }`}
          >
            <Building2 className="w-4 h-4" />
            <span>Bank Transfer (NEFT / IMPS)</span>
          </button>
        </div>

        {/* Main Content Card Container */}
        <div className="max-w-4xl mx-auto bg-white rounded-3xl border border-slate-200/90 shadow-sm p-6 sm:p-10 mb-12">
          {/* TAB 1: DIRECT UPI & QR CODE */}
          {activeTab === 'upi' && (
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              {/* QR Code Container */}
              <div className="md:col-span-5 flex flex-col items-center text-center p-5 rounded-2xl bg-slate-50 border border-slate-200">
                <div className="p-2.5 bg-white rounded-xl shadow-xs border border-slate-200 mb-3">
                  <img
                    src={donationData.upiQrUrl}
                    alt="Uttaran Special School UPI QR Code"
                    className="w-48 h-48 sm:w-52 sm:h-52 object-contain"
                    loading="lazy"
                  />
                </div>
                <span className="text-xs font-semibold text-slate-700 flex items-center gap-1.5">
                  <Smartphone className="w-3.5 h-3.5 text-emerald-600" />
                  Scan with any UPI App
                </span>
                <span className="text-[11px] text-slate-500 mt-0.5">
                  GPay • PhonePe • Paytm • BHIM • Cred
                </span>
              </div>

              {/* UPI Details & Mobile Deep Link */}
              <div className="md:col-span-7 space-y-5">
                <div>
                  <span className="px-2.5 py-1 rounded-md bg-emerald-100 text-emerald-900 text-xs font-bold uppercase tracking-wider">
                    Instant Bank Transfer
                  </span>
                  <h3 className="text-2xl font-extrabold text-slate-900 mt-2">
                    Pay Directly via UPI
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                    No middlemen or payment gateway fees. Contributions directly reach the school's State Bank of India institutional account.
                  </p>
                </div>

                {/* Copy UPI ID Box */}
                <div className="p-4 rounded-xl bg-[#F8FAF9] border border-emerald-200/80 space-y-2">
                  <div className="flex items-center justify-between text-xs text-slate-500">
                    <span className="font-semibold uppercase tracking-wider text-emerald-800">Official UPI ID:</span>
                    <span>Payee: {donationData.payeeName}</span>
                  </div>
                  <div className="flex items-center justify-between gap-3 bg-white p-3 rounded-lg border border-slate-200 shadow-2xs">
                    <code className="text-sm sm:text-base font-bold text-slate-900 tracking-wide break-all">
                      {donationData.upiId}
                    </code>
                    <button
                      type="button"
                      onClick={() => handleCopy(donationData.upiId, 'upiId')}
                      className="shrink-0 inline-flex items-center gap-1.5 px-3 py-1.5 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 rounded-md text-xs font-semibold transition-colors cursor-pointer"
                    >
                      {copiedField === 'upiId' ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-700" />
                          <span className="text-emerald-700 font-bold">Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Copy ID</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>

                {/* Mobile Pay Directly Link */}
                <div className="pt-2">
                  <a
                    href={`upi://pay?pa=${donationData.upiId}&pn=${encodeURIComponent(donationData.payeeName)}&cu=INR`}
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-emerald-700 hover:bg-emerald-800 active:scale-98 text-white rounded-xl font-bold text-sm shadow-md shadow-emerald-700/20 transition-all"
                  >
                    <Smartphone className="w-4 h-4" />
                    <span>Open in UPI App (Mobile Only)</span>
                  </a>
                  <p className="text-[11px] text-slate-500 text-center mt-2">
                    Works on smartphone browsers with Google Pay, PhonePe, or Paytm installed.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: BANK TRANSFER (NEFT / RTGS / IMPS) */}
          {activeTab === 'bank' && (
            <div className="space-y-6">
              <div>
                <span className="px-2.5 py-1 rounded-md bg-teal-100 text-teal-900 text-xs font-bold uppercase tracking-wider">
                  Direct Institutional Account
                </span>
                <h3 className="text-2xl font-extrabold text-slate-900 mt-2">
                  Bank Transfer Details (NEFT / RTGS / IMPS)
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                  Recommended for family endowments, community well-wishers, and local businesses making direct bank transfers.
                </p>
              </div>

              {/* Bank Details Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="text-xs text-slate-500 uppercase tracking-wider block font-medium">Account Name</span>
                  <span className="text-sm font-bold text-slate-900 mt-1 block">
                    {donationData.bankDetails.accountName}
                  </span>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-slate-500 uppercase tracking-wider block font-medium">Account Number</span>
                    <span className="text-sm font-mono font-bold text-slate-900 mt-1 block">
                      {donationData.bankDetails.accountNumber}
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleCopy(donationData.bankDetails.accountNumber, 'accNo')}
                    className="p-2 bg-white hover:bg-slate-100 text-slate-700 rounded-lg border border-slate-200 text-xs font-medium transition-colors cursor-pointer"
                    title="Copy Account Number"
                  >
                    {copiedField === 'accNo' ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="text-xs text-slate-500 uppercase tracking-wider block font-medium">Bank & Branch</span>
                  <span className="text-sm font-bold text-slate-900 mt-1 block">
                    {donationData.bankDetails.bankName}
                  </span>
                  <span className="text-xs text-slate-600 block mt-0.5">
                    {donationData.bankDetails.branch}
                  </span>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-slate-500 uppercase tracking-wider block font-medium">IFSC Code</span>
                    <span className="text-sm font-mono font-bold text-emerald-900 mt-1 block">
                      {donationData.bankDetails.ifscCode}
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleCopy(donationData.bankDetails.ifscCode, 'ifsc')}
                    className="p-2 bg-white hover:bg-slate-100 text-slate-700 rounded-lg border border-slate-200 text-xs font-medium transition-colors cursor-pointer"
                    title="Copy IFSC Code"
                  >
                    {copiedField === 'ifsc' ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Cheque / In-Person Note */}
              <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200 text-xs text-amber-900 flex items-start gap-3">
                <Building2 className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
                <div>
                  <strong className="font-semibold block text-amber-950">Donations via Account Payee Cheque:</strong>
                  Cheques should be drawn in favor of <em>"{donationData.chequePayableTo}"</em> and can be handed over at our school office in Raninagar, Berhampore.
                </div>
              </div>
            </div>
          )}
        </div>

        {/* RECEIPT & INTIMATION BANNER */}
        <div className="max-w-4xl mx-auto rounded-3xl bg-gradient-to-r from-emerald-800 to-teal-800 text-white p-6 sm:p-8 shadow-md">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-1.5 max-w-xl">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-200 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-300" />
                Receipt & Acknowledgment
              </span>
              <h4 className="text-xl font-bold text-white">
                Already made a contribution?
              </h4>
              <p className="text-xs sm:text-sm text-emerald-100 leading-relaxed">
                Send us your transaction screenshot or reference number (UTR / UPI ID) on WhatsApp, and our coordinator will issue an official school acknowledgment letter.
              </p>
            </div>

            <a
              href={whatsappReceiptUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white hover:bg-slate-100 active:scale-95 text-emerald-900 rounded-xl font-bold text-xs sm:text-sm shadow-md transition-all self-stretch md:self-auto text-center cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 text-emerald-700" />
              <span>Send Screenshot on WhatsApp</span>
            </a>
          </div>
        </div>

        {/* Transparency & Dignity Safeguard */}
        <div className="max-w-4xl mx-auto mt-6 flex items-center gap-2.5 text-xs text-slate-500 justify-center text-center">
          <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
          <span>
            Uttaran Special School is a community-driven institution in Berhampore. All contributions are documented with official receipts.
          </span>
        </div>
      </div>
    </section>
  );
};
