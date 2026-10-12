import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, MessageCircle, CheckCircle2, ExternalLink, AlertCircle } from 'lucide-react';
import { schoolInfo } from '../data/schoolInfo';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    parentName: '',
    phone: '',
    email: '',
    childAge: '',
    interestWing: 'Early Intervention & Sensory',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [lastWhatsAppUrl, setLastWhatsAppUrl] = useState('');

  const whatsappInquiryNumber = import.meta.env.VITE_WHATSAPP_INQUIRY_NUMBER || "919434123456";

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
    <section id="contact" className="py-16 sm:py-24 bg-white border-t border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs sm:text-sm font-bold tracking-wider uppercase text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-4 mb-4 tracking-tight">
            Contact & Campus Location
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            We welcome parents, caregivers, and community well-wishers to speak with our educators and visit our center.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Contact Cards & Google Maps */}
          <div className="lg:col-span-6 space-y-6">
            {/* Quick Contact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a
                href={`tel:${schoolInfo.contacts.phonePrimary}`}
                className="p-5 rounded-2xl bg-emerald-50/50 border border-emerald-200/80 hover:bg-emerald-50 transition-all flex items-start gap-3.5 group"
              >
                <div className="p-2.5 rounded-xl bg-emerald-600 text-white group-hover:scale-105 transition-transform">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs uppercase font-bold text-emerald-800 tracking-wider">Phone Call</h4>
                  <p className="text-sm font-bold text-slate-900 mt-0.5">{schoolInfo.contacts.phoneFormatted}</p>
                  <span className="text-[11px] text-emerald-700 font-medium">Tap to call our desk</span>
                </div>
              </a>

              <a
                href={`mailto:${schoolInfo.contacts.email}`}
                className="p-5 rounded-2xl bg-teal-50/50 border border-teal-200/80 hover:bg-teal-50 transition-all flex items-start gap-3.5 group"
              >
                <div className="p-2.5 rounded-xl bg-teal-600 text-white group-hover:scale-105 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs uppercase font-bold text-teal-800 tracking-wider">Email Inquiry</h4>
                  <p className="text-xs sm:text-sm font-bold text-slate-900 mt-0.5 truncate">{schoolInfo.contacts.email}</p>
                  <span className="text-[11px] text-teal-700 font-medium">Send general questions</span>
                </div>
              </a>
            </div>

            {/* Address & Hours Box */}
            <div className="p-6 rounded-2xl bg-[#FBFBFA] border border-slate-200/80 space-y-4">
              <div className="flex items-start gap-3.5">
                <MapPin className="w-5 h-5 text-emerald-700 shrink-0 mt-1" />
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Campus Address:</h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-0.5">
                    {schoolInfo.address.fullFormatted}
                  </p>
                  <p className="text-xs text-emerald-700 font-medium mt-1">
                    Landmark: Dhupghati / Raninagar area near Laldighi, Berhampore.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 pt-3 border-t border-slate-200/60">
                <Clock className="w-5 h-5 text-emerald-700 shrink-0 mt-1" />
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Visiting & School Hours:</h4>
                  <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
                    {schoolInfo.contacts.visitingHours}
                  </p>
                  <p className="text-[11px] text-slate-500 mt-1">
                    *Sundays and declared public holidays closed.
                  </p>
                </div>
              </div>
            </div>

            {/* Google Maps Embed */}
            <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-xs bg-slate-100">
              <div className="px-4 py-3 bg-slate-50 border-b border-slate-200 flex items-center justify-between text-xs font-semibold text-slate-700">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-emerald-600" />
                  Raninagar / Laldighi, Berhampore Map
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
            <h3 className="text-xl font-extrabold text-slate-900 mb-2">
              Send an Admission or General Inquiry
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">
              Fill out this form, and clicking submit will directly forward your child's inquiry to our school coordinator via WhatsApp.
            </p>

            {submitted ? (
              <div className="p-8 text-center bg-emerald-50 rounded-2xl border border-emerald-200 fade-in space-y-4">
                <div className="w-12 h-12 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h4 className="text-lg font-bold text-emerald-900">Inquiry Ready on WhatsApp</h4>
                <p className="text-xs sm:text-sm text-emerald-800 leading-relaxed max-w-md mx-auto">
                  Thank you, <strong>{formData.parentName || 'Parent'}</strong>. Your inquiry for the <strong>{formData.interestWing}</strong> wing has been prepared for WhatsApp.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                  {lastWhatsAppUrl && (
                    <a
                      href={lastWhatsAppUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl text-xs font-semibold shadow-xs transition-colors"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Re-open WhatsApp Chat</span>
                    </a>
                  )}
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        parentName: '',
                        phone: '',
                        email: '',
                        childAge: '',
                        interestWing: 'Early Intervention & Sensory',
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
                    Parent / Guardian Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Ananya Das"
                    value={formData.parentName}
                    onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                      Contact Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. +91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                      Child's Age (Approx)
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. 6 years"
                      value={formData.childAge}
                      onChange={(e) => setFormData({ ...formData, childAge: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                      Email Address (Optional)
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
                      Area of Need / Wing
                    </label>
                    <select
                      value={formData.interestWing}
                      onChange={(e) => setFormData({ ...formData, interestWing: e.target.value })}
                      className="w-full px-3 py-2.5 rounded-xl border border-slate-200 bg-white text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all cursor-pointer"
                    >
                      <option value="Early Intervention & Sensory (Ages 3-7)">Early Intervention & Sensory (Ages 3-7)</option>
                      <option value="Functional Literacy & AAC (Ages 7-12)">Functional Literacy & AAC (Ages 7-12)</option>
                      <option value="Daily Living Skills / ADL (Ages 12-16)">Daily Living Skills / ADL (Ages 12-16)</option>
                      <option value="Vocational & Craft Training (Ages 16+)">Vocational & Craft Training (Ages 16+)</option>
                      <option value="General Consultation / Visit Verification">General Consultation / Visit Verification</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Your Message / Specific Notes
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us a little about your child's current routines, comfort level, or any questions you have..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all resize-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-emerald-700 hover:bg-emerald-800 active:scale-98 text-white rounded-xl font-bold text-sm shadow-md shadow-emerald-700/20 hover:shadow-lg transition-all cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Submit & Send via WhatsApp</span>
                  </button>
                </div>

                <div className="flex items-center gap-2 pt-2 text-[11px] text-slate-500">
                  <AlertCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>
                    Your inquiry details open directly in WhatsApp to speak with the school coordinator.
                  </span>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
