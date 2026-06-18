import { Hero } from './components/Hero';
import { CourseDetails } from './components/CourseDetails';
import { Outcomes } from './components/Outcomes';
import { FAQ } from './components/FAQ';
import { RegistrationForm } from './components/RegistrationForm';
import { Bot, HelpCircle, GraduationCap, Calendar, Phone, Mail, Award } from 'lucide-react';

function App() {
  const scrollToRegister = () => {
    const element = document.getElementById('register');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-800 antialiased font-sans">
      {/* Navigation Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
        <div className="container mx-auto px-4 max-w-7xl h-16 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-primary-600 to-accent-500 flex items-center justify-center shadow-md shadow-primary-600/10">
              <Bot className="h-5 w-5 text-white" />
            </div>
            <div>
              <span className="font-black text-xl tracking-tight text-slate-900">
                Kid<span className="text-primary-600">rove</span>
              </span>
              <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest block -mt-1">
                by GEMA
              </span>
            </div>
          </div>

          {/* Nav Links - Desktop */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-600">
            <a href="#details" className="hover:text-primary-600 transition-colors flex items-center gap-1.5">
              <Calendar className="h-4 w-4" /> Overview
            </a>
            <a href="#outcomes" className="hover:text-primary-600 transition-colors flex items-center gap-1.5">
              <GraduationCap className="h-4 w-4" /> Outcomes
            </a>
            <a href="#faq" className="hover:text-primary-600 transition-colors flex items-center gap-1.5">
              <HelpCircle className="h-4 w-4" /> FAQs
            </a>
          </nav>

          {/* CTA Button */}
          <button
            onClick={scrollToRegister}
            className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-5 py-2 text-sm font-bold text-white shadow transition-all hover:bg-primary-600 hover:shadow-lg hover:shadow-primary-600/10 focus:outline-none active:scale-95"
          >
            Enroll Now
          </button>
        </div>
      </header>

      {/* Main Sections */}
      <main>
        <Hero onEnrollClick={scrollToRegister} />
        
        <div id="details">
          <CourseDetails />
        </div>

        <div id="outcomes">
          <Outcomes />
        </div>

        <div id="faq">
          <FAQ />
        </div>

        <div id="register">
          <RegistrationForm />
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 pt-16 pb-8 border-t border-slate-800">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4 mb-12">
            
            {/* Brand Card */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-primary-600 to-accent-500 flex items-center justify-center">
                  <Bot className="h-5 w-5 text-white" />
                </div>
                <div>
                  <span className="font-black text-xl tracking-tight text-white">
                    Kid<span className="text-primary-400">rove</span>
                  </span>
                  <span className="text-[9px] font-bold text-slate-500 uppercase tracking-widest block -mt-1">
                    by GEMA
                  </span>
                </div>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">
                Kidrove organizes leading-edge tech camps, interactive workshops, and project courses helping kids build digital proficiency and logical confidence.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bold text-white text-sm uppercase tracking-wider mb-4">Camp Details</h4>
              <ul className="space-y-2 text-xs">
                <li>AI & Robotics Summer Camp</li>
                <li>Age Limit: 8–14 Years</li>
                <li>Duration: 4 Weeks</li>
                <li>Mode: Live Online classes</li>
                <li>Registration Deadline: 12 July 2026</li>
              </ul>
            </div>

            {/* Contact Details */}
            <div>
              <h4 className="font-bold text-white text-sm uppercase tracking-wider mb-4">Contact Info</h4>
              <ul className="space-y-3 text-xs">
                <li className="flex items-center gap-2.5">
                  <Mail className="h-4 w-4 text-primary-400" />
                  <a href="mailto:camp@kidrove.com" className="hover:text-white transition-colors">camp@kidrove.com</a>
                </li>
                <li className="flex items-center gap-2.5">
                  <Phone className="h-4 w-4 text-primary-400" />
                  <span>+91 98765 43210</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Award className="h-4 w-4 text-primary-400 mt-0.5" />
                  <span>GEMA Education Technology and Pvt Ltd</span>
                </li>
              </ul>
            </div>

            {/* Certification Footer text */}
            <div>
              <h4 className="font-bold text-white text-sm uppercase tracking-wider mb-4">Credentials</h4>
              <p className="text-xs text-slate-500 leading-relaxed mb-3">
                GEMA is a registered educational service provider. Our courses adhere to global computer science benchmarks and interactive learning methodologies.
              </p>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-800 px-3 py-1 text-[10px] font-semibold text-slate-300 border border-slate-700">
                ★ ISO 9001 Certified
              </span>
            </div>

          </div>

          {/* Copyright and links */}
          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-600">
            <div>
              &copy; {new Date().getFullYear()} GEMA Education Technology and Pvt Ltd. All rights reserved.
            </div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-slate-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-slate-400 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-slate-400 transition-colors">Refund Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
