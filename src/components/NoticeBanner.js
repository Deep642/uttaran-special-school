import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { Info, X, PhoneCall } from 'lucide-react';
import { schoolInfo } from '../data/schoolInfo';
export const NoticeBanner = () => {
    const [isVisible, setIsVisible] = useState(true);
    if (!isVisible)
        return null;
    return (_jsx("div", { className: "bg-amber-500/10 border-b border-amber-200/80 text-amber-900 px-4 py-2.5 text-xs sm:text-sm transition-all duration-300", children: _jsxs("div", { className: "max-w-7xl mx-auto flex items-center justify-between gap-3", children: [_jsxs("div", { className: "flex items-center gap-2.5 flex-1", children: [_jsx("span", { className: "p-1 rounded-full bg-amber-500/20 text-amber-800 shrink-0", children: _jsx(Info, { className: "w-4 h-4" }) }), _jsxs("p", { className: "font-medium text-slate-700 leading-snug", children: [_jsx("strong", { className: "text-amber-900 font-semibold", children: "Admissions & Verification Notice: " }), "To arrange personalized assessments or verify visit timings at Raninagar / Laldighi, please call us directly before arriving."] })] }), _jsxs("div", { className: "flex items-center gap-2 shrink-0", children: [_jsxs("a", { href: `tel:${schoolInfo.contacts.phonePrimary}`, className: "hidden md:inline-flex items-center gap-1.5 px-3 py-1 bg-amber-600 hover:bg-amber-700 text-white rounded-full font-medium text-xs transition-colors shadow-xs", children: [_jsx(PhoneCall, { className: "w-3.5 h-3.5" }), _jsx("span", { children: "Call School" })] }), _jsx("button", { onClick: () => setIsVisible(false), "aria-label": "Dismiss notice", className: "p-1 rounded-md text-amber-800/70 hover:text-amber-900 hover:bg-amber-500/15 transition-colors", children: _jsx(X, { className: "w-4 h-4" }) })] })] }) }));
};
