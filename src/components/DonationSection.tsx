import React, { useEffect, useState } from 'react';
import { ArrowRight, CreditCard, Heart, LockKeyhole, Smartphone, X } from 'lucide-react';

const donationAmounts = [500, 1000, 2000, 5000];

interface DonorDetails {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}

export const DonationSection: React.FC = () => {
  const [frequency, setFrequency] = useState<'once' | 'monthly'>('once');
  const [selectedAmount, setSelectedAmount] = useState<number | null>(500);
  const [customAmount, setCustomAmount] = useState('');
  const [anonymous, setAnonymous] = useState(false);
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const [donor, setDonor] = useState<DonorDetails>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
  });

  const amount = customAmount.trim() ? Number(customAmount) : selectedAmount ?? 0;
  const isValidAmount = Number.isFinite(amount) && amount > 0;

  useEffect(() => {
    if (!checkoutOpen) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setCheckoutOpen(false);
    };

    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, [checkoutOpen]);

  const selectAmount = (value: number) => {
    setSelectedAmount(value);
    setCustomAmount('');
  };

  const updateDonor = (field: keyof DonorDetails, value: string) => {
    setDonor((current) => ({ ...current, [field]: value }));
  };

  return (
    <section id="donate" className="scroll-mt-24 bg-gradient-to-b from-white to-emerald-50/60 py-16 sm:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-3.5 py-1.5 text-xs font-semibold text-amber-900">
            <Heart className="h-4 w-4" />
            Make a difference
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Help every child flourish
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
            Your contribution supports inclusive learning, therapy resources, and everyday skills for our students.
          </p>
        </div>

        <div className="mx-auto max-w-3xl rounded-3xl border border-slate-200 bg-white p-5 shadow-lg shadow-slate-900/5 sm:p-8">
          <label className="mb-6 flex cursor-pointer items-center gap-3 text-sm font-medium text-slate-700">
            <input
              type="checkbox"
              checked={anonymous}
              onChange={(event) => setAnonymous(event.target.checked)}
              className="h-4 w-4 rounded border-slate-300 accent-emerald-700"
            />
            Make my donation anonymous
          </label>

          {anonymous ? (
            <div>
              <div className="mb-6 grid grid-cols-2 gap-3">
                {([
                  ['once', 'One-time'],
                  ['monthly', 'Monthly'],
                ] as const).map(([value, label]) => (
                  <button
                    key={value}
                    type="button"
                    aria-pressed={frequency === value}
                    onClick={() => setFrequency(value)}
                    className={`rounded-xl border px-4 py-3.5 text-left text-sm font-semibold transition-colors ${
                      frequency === value
                        ? 'border-emerald-700 bg-emerald-50 text-emerald-900 ring-1 ring-emerald-700'
                        : 'border-slate-200 text-slate-600 hover:border-emerald-300'
                    }`}
                  >
                    <span className={`mr-2 inline-block h-4 w-4 align-[-3px] rounded-full border ${
                      frequency === value ? 'border-[5px] border-emerald-700' : 'border-slate-300'
                    }`} />
                    {label}
                  </button>
                ))}
              </div>

              <fieldset>
                <legend className="mb-3 text-lg font-bold text-slate-900">
                  Choose an amount to donate
                </legend>
                <div className="grid grid-cols-2 gap-3">
                  {donationAmounts.map((value) => (
                    <button
                      key={value}
                      type="button"
                      aria-pressed={!customAmount && selectedAmount === value}
                      onClick={() => selectAmount(value)}
                      className={`rounded-xl border px-4 py-4 text-left text-lg font-bold transition-colors ${
                        !customAmount && selectedAmount === value
                          ? 'border-emerald-700 bg-emerald-50 text-emerald-900 ring-1 ring-emerald-700'
                          : 'border-slate-200 text-slate-700 hover:border-emerald-300'
                      }`}
                    >
                      <span className="mr-2 text-sm font-normal">₹</span>
                      {value.toLocaleString('en-IN')}
                    </button>
                  ))}
                </div>
                <label className="sr-only" htmlFor="anonymous-donation-amount">Other donation amount in rupees</label>
                <div className={`mt-3 flex items-center rounded-xl border px-4 ${
                  customAmount ? 'border-emerald-700 ring-1 ring-emerald-700' : 'border-slate-200'
                }`}>
                  <span className="text-slate-500">₹</span>
                  <input
                    id="anonymous-donation-amount"
                    type="number"
                    min="1"
                    step="1"
                    inputMode="numeric"
                    placeholder="Other amount"
                    value={customAmount}
                    onChange={(event) => {
                      setCustomAmount(event.target.value);
                      setSelectedAmount(null);
                    }}
                    className="w-full border-0 bg-transparent px-3 py-4 text-sm text-slate-900 outline-none placeholder:text-slate-400 focus:ring-0"
                  />
                </div>
              </fieldset>

              <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-5">
                <span className="text-sm font-semibold text-slate-700">Total donation</span>
                <span className="text-xl font-extrabold text-slate-900">
                  ₹{isValidAmount ? amount.toLocaleString('en-IN') : '0'}
                  {frequency === 'monthly' && <span className="text-sm font-medium text-slate-500"> / month</span>}
                </span>
              </div>

              <button
                type="button"
                disabled={!isValidAmount}
                onClick={() => setCheckoutOpen(true)}
                className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-700 px-5 py-3.5 text-sm font-bold text-white transition-colors hover:bg-emerald-800 disabled:cursor-not-allowed disabled:bg-slate-300"
              >
                Continue
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          ) : (
            <form
              onSubmit={(event) => {
                event.preventDefault();
                setCheckoutOpen(true);
              }}
            >
              <fieldset>
                <legend className="mb-3 text-lg font-bold text-indigo-900">
                  Choose an amount to donate
                </legend>
                <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
                  {donationAmounts.map((value) => (
                    <button
                      key={value}
                      type="button"
                      aria-pressed={!customAmount && selectedAmount === value}
                      onClick={() => selectAmount(value)}
                      className={`flex items-center gap-3 rounded-lg border px-4 py-3 text-left text-base font-semibold transition-colors ${
                        !customAmount && selectedAmount === value
                          ? 'border-emerald-700 bg-emerald-50 text-emerald-900 ring-1 ring-emerald-700'
                          : 'border-slate-300 text-slate-600 hover:border-emerald-400'
                      }`}
                    >
                      <span className={`inline-block h-4 w-4 shrink-0 rounded-full border ${
                        !customAmount && selectedAmount === value
                          ? 'border-[5px] border-emerald-700'
                          : 'border-slate-300'
                      }`} />
                      ₹{value.toLocaleString('en-IN')}
                    </button>
                  ))}
                </div>
                <label className="sr-only" htmlFor="donation-amount">Other donation amount in rupees</label>
                <input
                  id="donation-amount"
                  type="number"
                  min="1"
                  step="1"
                  inputMode="numeric"
                  placeholder="Other Amount"
                  value={customAmount}
                  onChange={(event) => {
                    setCustomAmount(event.target.value);
                    setSelectedAmount(null);
                  }}
                  className="mt-3 w-full rounded-lg border border-slate-300 px-4 py-3 text-sm text-slate-900 outline-none placeholder:text-slate-400 focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100"
                />
              </fieldset>

              <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <label className="block text-sm font-medium text-indigo-900">
                  First Name<span className="text-red-600">*</span>
                  <input
                    autoComplete="given-name"
                    placeholder="First Name"
                    required
                    value={donor.firstName}
                    onChange={(event) => updateDonor('firstName', event.target.value)}
                    className="mt-1 w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 outline-none placeholder:text-slate-400 focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100"
                  />
                </label>
                <label className="block text-sm font-medium text-indigo-900">
                  Last Name<span className="text-red-600">*</span>
                  <input
                    autoComplete="family-name"
                    placeholder="Last Name"
                    required
                    value={donor.lastName}
                    onChange={(event) => updateDonor('lastName', event.target.value)}
                    className="mt-1 w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 outline-none placeholder:text-slate-400 focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100"
                  />
                </label>
                <label className="block text-sm font-medium text-indigo-900">
                  Email<span className="text-red-600">*</span>
                  <input
                    type="email"
                    autoComplete="email"
                    placeholder="Email"
                    required
                    value={donor.email}
                    onChange={(event) => updateDonor('email', event.target.value)}
                    className="mt-1 w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 outline-none placeholder:text-slate-400 focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100"
                  />
                </label>
                <label className="block text-sm font-medium text-indigo-900">
                  Mobile Number<span className="text-red-600">*</span>
                  <input
                    type="tel"
                    autoComplete="tel"
                    inputMode="tel"
                    placeholder="Mobile Number"
                    required
                    value={donor.phone}
                    onChange={(event) => updateDonor('phone', event.target.value)}
                    className="mt-1 w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 outline-none placeholder:text-slate-400 focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100"
                  />
                </label>
              </div>

              <button
                type="submit"
                disabled={!isValidAmount}
                className="mx-auto mt-6 flex w-full items-center justify-center gap-2 rounded-lg bg-amber-400 px-8 py-3.5 text-sm font-bold text-slate-950 transition-colors hover:bg-amber-500 disabled:cursor-not-allowed disabled:bg-slate-300 sm:w-60"
              >
                Continue
              </button>
              <p className="mt-3 text-center text-xs text-slate-500">
                This preview does not submit or store your details.
              </p>
            </form>
          )}
        </div>
      </div>

      {checkoutOpen && (
        <div
          className="fixed inset-0 z-50 flex items-end justify-center bg-slate-950/60 sm:items-center sm:p-5"
          onClick={(event) => {
            if (event.target === event.currentTarget) setCheckoutOpen(false);
          }}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="donation-checkout-title"
            className="w-full max-w-lg rounded-t-3xl bg-white p-6 shadow-2xl sm:rounded-3xl"
          >
            <div className="flex items-start justify-between border-b border-slate-100 pb-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Razorpay checkout preview</p>
                <h3 id="donation-checkout-title" className="mt-1 text-2xl font-extrabold text-slate-900">
                  Pay ₹{amount.toLocaleString('en-IN')}
                </h3>
              </div>
              <button
                type="button"
                aria-label="Close checkout preview"
                onClick={() => setCheckoutOpen(false)}
                className="rounded-lg p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-700"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="py-5">
              <div className="rounded-2xl border border-slate-200 p-4 sm:p-5">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-950 text-white">
                      <LockKeyhole className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="font-extrabold tracking-tight text-slate-900">Razorpay</p>
                      <p className="text-xs text-slate-500">Payment gateway</p>
                    </div>
                  </div>
                  <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-900">
                    Setup pending
                  </span>
                </div>

                <div className="mt-5 border-t border-slate-100 pt-4">
                  <p className="text-sm font-semibold text-slate-800">Payment methods planned</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <span className="inline-flex items-center gap-1.5 rounded-lg bg-slate-50 px-3 py-2 text-xs font-medium text-slate-600">
                      <Smartphone className="h-4 w-4 text-emerald-700" />
                      UPI
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-lg bg-slate-50 px-3 py-2 text-xs font-medium text-slate-600">
                      <CreditCard className="h-4 w-4 text-slate-700" />
                      Cards
                    </span>
                    <span className="rounded-lg bg-slate-50 px-3 py-2 text-xs font-medium text-slate-600">
                      Net banking
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-amber-200 bg-amber-50 p-4">
              <div className="flex items-start gap-2.5">
                <LockKeyhole className="mt-0.5 h-4 w-4 shrink-0 text-amber-800" />
                <p className="text-sm leading-relaxed text-amber-950">
                  This is a preview only. Uttaran’s Razorpay account is not connected, so payments cannot be made here yet.
                </p>
              </div>
            </div>
            <button
              type="button"
              disabled
              className="mt-5 w-full cursor-not-allowed rounded-xl bg-slate-200 px-5 py-3.5 text-sm font-bold text-slate-500"
            >
              Razorpay setup required
            </button>
            <p className="mt-3 text-center text-xs text-slate-500">
              {anonymous ? 'Anonymous donation' : `Donor: ${donor.firstName} ${donor.lastName}`.trim()}
              {frequency === 'monthly' && anonymous ? ' · Monthly' : ''}
            </p>
          </div>
        </div>
      )}
    </section>
  );
};
