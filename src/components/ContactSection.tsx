import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, MessageCircle, CheckCircle2, ExternalLink, AlertCircle, UserCheck } from 'lucide-react';
import { schoolInfo } from '../data/schoolInfo';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    parentName: '',
    phone: '',
    email: '',
    childAge: '',
    interestWing: 'Special Education & Cognitive Learning (স্পেশাল এডুকেশন)',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [lastWhatsAppUrl, setLastWhatsAppUrl] = useState('');

  const whatsappInquiryNumber = import.meta.env.VITE_WHATSAPP_INQUIRY_NUMBER || "919641515126";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Clean formatted message for WhatsApp
    const messageLines = [
      `*New Admission / School Inquiry* - Uttaran Special School`,
      `----------------------------------------`,
      `👤 *Parent / Guardian*: ${formData.parentName.trim()}`,
      `📞 *Contact Phone*: ${formData.phone.trim()}`,
      `👶 *Child's Age*: ${formData.childAge.trim() || 'Not specified'}`,
      `📧 *Email*: ${formData.email.trim() || 'Not specified'}`,
      `🎯 *Area of Need / Wing*: ${formData.interestWing}`,
      `📝 *Message / Notes*:`,
      `${formData.message.trim() || 'No additional notes provided.'}`,
      `----------------------------------------`,
      `_Sent via Uttaran Special School Website_`,
    ];

    const fullMessage = messageLines.join('\n');
    const whatsappUrl = `https://wa.me/${whatsappInquiryNumber}?text=${encodeURIComponent(fullMessage)}`;
    setLastWhatsAppUrl(whatsappUrl);

    // Open WhatsApp in a new tab / mobile app
    window.open(whatsappUrl, '_blank');

    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-gradient-to-br from-sky-50/70 via-emerald-50/50 via-amber-50/60 to-rose-50/60 border-t border-slate-200/60 relative overflow-hidden">
      {/* Radiant ambient glow orbs */}
      <div className="absolute top-10 -left-20 w-80 h-80 rounded-full bg-sky-300/30 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -right-20 w-80 h-80 rounded-full bg-amber-300/30 blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 w-96 h-96 rounded-full bg-emerald-300/20 blur-3xl pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs sm:text-sm font-bold tracking-wider uppercase text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
            আজই যোগাযোগ করুন • Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-4 mb-3 tracking-tight">
            Contact & Campus Location
          </h2>
          <p className="text-sm sm:text-base text-emerald-800 font-semibold mb-2">
            "আপনার প্রিয় সন্তানের সুন্দর ও স্বাবলম্বী ভবিষ্যৎ গড়ে তুলতে আজই আমাদের কেন্দ্রে আসুন এবং বিশেষজ্ঞদের পরামর্শ নিন।"
          </p>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-2xl mx-auto">
            We welcome parents, guardians, and well-wishers to speak directly with Principal Partha Bhattacharjee and our educator team at Dhopaghati, Berhampore.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Contact Cards & Google Maps */}
          <div className="lg:col-span-6 space-y-6">
            {/* Quick Contact Cards - Verified numbers */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <a
                href={`tel:${schoolInfo.contacts.phonePrimary}`}
                className="p-4 rounded-2xl bg-emerald-50/60 border border-emerald-200/80 hover:bg-emerald-50 transition-all flex items-center gap-3 group"
              >
                <div className="w-11 h-11 shrink-0 rounded-xl bg-emerald-700 text-white flex items-center justify-center shadow-2xs group-hover:scale-105 transition-transform">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-[11px] uppercase font-bold text-emerald-900 tracking-wider">School Desk (স্কুল নম্বর)</h4>
                  <p className="text-sm font-extrabold text-slate-900 mt-0.5 truncate">{schoolInfo.contacts.phoneFormatted}</p>
                  <span className="text-[11px] text-emerald-700 font-medium block">Office Landline / Desk</span>
                </div>
              </a>

              <a
                href={`tel:${schoolInfo.contacts.phoneSecondary}`}
                className="p-4 rounded-2xl bg-teal-50/60 border border-teal-200/80 hover:bg-teal-50 transition-all flex items-center gap-3 group"
              >
                <div className="w-11 h-11 shrink-0 rounded-xl bg-teal-700 text-white flex items-center justify-center shadow-2xs group-hover:scale-105 transition-transform">
                  <UserCheck className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-[11px] uppercase font-bold text-teal-900 tracking-wider">Principal (পার্থ ভট্টাচার্য)</h4>
                  <p className="text-sm font-extrabold text-slate-900 mt-0.5 truncate">{schoolInfo.contacts.phoneSecondaryFormatted}</p>
                  <span className="text-[11px] text-teal-700 font-medium block">Direct Mobile & WhatsApp</span>
                </div>
              </a>
            </div>

            {/* Email Contact Card */}
            <a
              href={`mailto:${schoolInfo.contacts.email}`}
              className="p-4 rounded-2xl bg-sky-50/60 border border-sky-200/80 hover:bg-sky-50 transition-all flex items-center gap-3.5 group"
            >
              <div className="w-11 h-11 shrink-0 rounded-xl bg-sky-700 text-white flex items-center justify-center shadow-2xs group-hover:scale-105 transition-transform">
                <Mail className="w-5 h-5" />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-[11px] uppercase font-bold text-sky-900 tracking-wider">Official Email (অফিসিয়াল ইমেইল)</h4>
                <p className="text-sm font-bold text-slate-900 mt-0.5 truncate" title={schoolInfo.contacts.email}>
                  {schoolInfo.contacts.email}
                </p>
                <span className="text-[11px] text-sky-700 font-medium block">Send assessments, reports & inquiries</span>
              </div>
            </a>

            {/* Address & Hours Box with Bengali representation */}
            <div className="p-6 rounded-2xl bg-[#FBFBFA] border border-slate-200/80 space-y-4">
              <div className="flex items-start gap-3.5">
                <MapPin className="w-5 h-5 text-emerald-700 shrink-0 mt-1" />
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Campus Address (ঠিকানা):</h4>
                  <p className="text-xs sm:text-sm font-semibold text-slate-800 mt-0.5">
                    {schoolInfo.address.fullFormatted}
                  </p>
                  <p className="text-xs text-emerald-800 font-medium mt-1">
                    বাংলায়: {schoolInfo.address.bengaliFormatted}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 pt-3 border-t border-slate-200/60">
                <Clock className="w-5 h-5 text-emerald-700 shrink-0 mt-1" />
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Visiting & School Hours (সাক্ষাতের সময়):</h4>
                  <p className="text-xs sm:text-sm text-slate-700 mt-0.5">
                    {schoolInfo.contacts.visitingHours}
                  </p>
                  <p className="text-[11px] text-slate-500 mt-1">
                    *Sundays and declared public holidays closed. Prior appointment recommended for new evaluations.
                  </p>
                </div>
              </div>
            </div>

            {/* Google Maps Embed */}
            <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-xs bg-slate-100">
              <div className="px-4 py-3 bg-slate-50 border-b border-slate-200 flex items-center justify-between text-xs font-semibold text-slate-700">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-emerald-600" />
                  Dhopaghati, C.R. Das Road, Berhampore Map
                </span>
                <a
                  href={schoolInfo.mapDirectLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-700 hover:text-emerald-800 flex items-center gap-1 hover:underline"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
              <div className="h-64 sm:h-72 w-full">
                <iframe
                  title="Uttaran Special School Location Map"
                  src={schoolInfo.mapEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Inquiry Message Form */}
          <div className="lg:col-span-6 bg-[#FCFCFB] p-6 sm:p-8 rounded-3xl border border-slate-200/90 shadow-xs">
            <div className="mb-6">
              <span className="inline-block px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase mb-2">
                নতুন সেশনে ভর্তি চলছে • Admissions Open
              </span>
              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-1">
                Send an Admission or Care Inquiry
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Fill out this quick form. Clicking submit will directly launch a pre-formatted message to Principal Partha Bhattacharjee via WhatsApp.
              </p>
            </div>

            {submitted ? (
              <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-emerald-950 mb-1">
                    Inquiry Prepared & WhatsApp Opened!
                  </h4>
                  <p className="text-xs sm:text-sm text-emerald-800 leading-relaxed max-w-md mx-auto">
                    Your child's admission details were loaded into WhatsApp. If your chat didn't open automatically, click the button below to send:
                  </p>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href={lastWhatsAppUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold shadow-xs transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Open WhatsApp Message</span>
                  </a>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        parentName: '',
                        phone: '',
                        email: '',
                        childAge: '',
                        interestWing: 'Special Education & Cognitive Learning (স্পেশাল এডুকেশন)',
                        message: '',
                      });
                    }}
                    className="px-5 py-2.5 bg-white border border-slate-300 text-slate-700 rounded-xl text-xs font-semibold hover:bg-slate-50 transition-colors cursor-pointer"
                  >
                    Send Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Parent / Guardian Name (অভিভাবকের নাম) *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Ananya Das / রমেশ ঘোষ"
                    value={formData.parentName}
                    onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                      Contact Phone (ফোন নম্বর) *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                      Child's Age (শিশুর বয়স)
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. 6 years / ৬ বছর"
                      value={formData.childAge}
                      onChange={(e) => setFormData({ ...formData, childAge: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                      Email Address (ঐচ্ছিক / Optional)
                    </label>
                    <input
                      type="email"
                      placeholder="e.g. parent@gmail.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                      Service / Need (প্রয়োজনীয় সুবিধা)
                    </label>
                    <select
                      value={formData.interestWing}
                      onChange={(e) => setFormData({ ...formData, interestWing: e.target.value })}
                      className="w-full px-3 py-2.5 rounded-xl border border-slate-200 bg-white text-xs sm:text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all cursor-pointer"
                    >
                      <option value="Special Education & Cognitive Learning (স্পেশাল এডুকেশন)">
                        স্পেশাল এডুকেশন (Special Education)
                      </option>
                      <option value="Speech & Language Therapy (স্পিচ ও ল্যাঙ্গুয়েজ থেরাপি)">
                        স্পিচ ও ল্যাঙ্গুয়েজ থেরাপি (Speech Therapy)
                      </option>
                      <option value="Occupational Therapy & Motor Skills (অকুপেশনাল থেরাপি)">
                        অকুপেশনাল থেরাপি (Occupational Therapy)
                      </option>
                      <option value="Cerebral Palsy (CP) Specialized Care (সি.পি. চাইল্ড থেরাপি)">
                        সি.পি. চাইল্ড থেরাপি (CP Child Therapy)
                      </option>
                      <option value="Autism, Down Syndrome & ADHD Care (অটিজম / ডাউন সিন্ড্রোম / ADHD)">
                        অটিজম, ডাউন সিন্ড্রোম ও ADHD পরিচর্যা
                      </option>
                      <option value="Individualized Education Plan - IEP (ব্যক্তিগত উন্নয়ন পরিকল্পনা)">
                        ব্যক্তিগত উন্নয়ন পরিকল্পনা (IEP Care Plan)
                      </option>
                      <option value="Vocational & Life Skills Training (বৃত্তিমূলক প্রশিক্ষণ)">
                        বৃত্তিমূলক প্রশিক্ষণ (Vocational Training)
                      </option>
                      <option value="General Admission Consultation / Visit Request">
                        সাধারণ পরিদর্শন ও পরামর্শ (General Consultation)
                      </option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Child's Routine / Notes (বিশেষ লক্ষণ বা মন্তব্য)
                  </label>
                  <textarea
                    rows={4}
                    placeholder="আপনার সন্তানের বর্তমান আচরণ, কথা বলার ধরণ বা আপনার কোনো বিশেষ প্রশ্ন থাকলে এখানে লিখুন..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all resize-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-emerald-600 hover:bg-emerald-700 active:scale-98 text-white rounded-xl text-sm font-bold shadow-md shadow-emerald-600/20 transition-all cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Submit & Forward to Principal via WhatsApp</span>
                  </button>
                  <p className="text-[11px] text-slate-500 text-center mt-2 flex items-center justify-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5 text-emerald-600" />
                    Directly connects to official coordinator number (+91 96415 15126)
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
