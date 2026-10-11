import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { NoticeBanner } from './components/NoticeBanner';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Programs } from './components/Programs';
import { AlumniSection } from './components/AlumniSection';
import { GallerySection } from './components/GallerySection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
export const App = () => {
    return (_jsxs("div", { className: "min-h-screen flex flex-col bg-[#FBFBFA] text-slate-800 font-sans selection:bg-emerald-100 selection:text-emerald-900", children: [_jsx(NoticeBanner, {}), _jsx(Navbar, {}), _jsxs("main", { className: "flex-1", children: [_jsx(Hero, {}), _jsx(About, {}), _jsx(Programs, {}), _jsx(AlumniSection, {}), _jsx(GallerySection, {}), _jsx(ContactSection, {})] }), _jsx(Footer, {})] }));
};
export default App;
