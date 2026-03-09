import { Heart, BookOpen, Utensils, Briefcase, Calendar, Mail, MapPin, Phone, ShieldCheck, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'motion/react';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen font-sans text-slate-900 bg-white selection:bg-yellow-200">
      {/* Navigation Bar */}
      <nav className="fixed top-0 w-full z-50 bg-blue-900 text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center"
            >
              <span className="text-2xl font-bold tracking-tight">
                ELVAR <span className="text-yellow-500">TRUST</span>
              </span>
            </motion.div>
            
            {/* Desktop Navigation */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="hidden md:flex items-center space-x-8"
            >
              <a href="#about" className="hover:text-yellow-500 transition-colors">About Us</a>
              <a href="#pillars" className="hover:text-yellow-500 transition-colors">Our Pillars</a>
              <a href="#impact" className="hover:text-yellow-500 transition-colors">Our Impact</a>
              <a href="#transparency" className="hover:text-yellow-500 transition-colors">Transparency</a>
              <a href="#donate" className="bg-red-700 hover:bg-red-800 px-6 py-2 rounded-md font-semibold transition-all transform hover:scale-105">
                Donate Now
              </a>
            </motion.div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white">
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="md:hidden bg-blue-800 px-4 pt-2 pb-6 space-y-2"
          >
            <a href="#about" onClick={() => setIsMenuOpen(false)} className="block py-2 hover:text-yellow-500">About Us</a>
            <a href="#pillars" onClick={() => setIsMenuOpen(false)} className="block py-2 hover:text-yellow-500">Our Pillars</a>
            <a href="#impact" onClick={() => setIsMenuOpen(false)} className="block py-2 hover:text-yellow-500">Our Impact</a>
            <a href="#transparency" onClick={() => setIsMenuOpen(false)} className="block py-2 hover:text-yellow-500">Transparency</a>
            <a href="#donate" onClick={() => setIsMenuOpen(false)} className="block py-3 bg-red-700 text-center rounded-md font-semibold">Donate Now</a>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-blue-900">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1532629345422-7515f3d16bb8?auto=format&fit=crop&q=80&w=2070" 
            alt="South Indian community impact" 
            className="w-full h-full object-cover opacity-30"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-blue-900/80 to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block px-4 py-1 rounded-full bg-yellow-500 text-blue-900 font-bold text-sm mb-6"
            >
              SERVING BENGALURU SINCE 2026
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight leading-tight"
            >
              Sharing <span className="text-yellow-500">God's Gift</span> With The World.
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-blue-100 mb-10 leading-relaxed"
            >
              Elvar Trust is dedicated to empowering marginalized communities in Bengaluru through sustainable health, education, and livelihood initiatives.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a href="#impact" className="bg-yellow-500 text-blue-900 px-8 py-4 rounded-lg text-lg font-bold hover:bg-yellow-400 transition-all shadow-xl">
                View Our Impact
              </a>
              <a href="#about" className="bg-transparent text-white border-2 border-white/30 px-8 py-4 rounded-lg text-lg font-bold hover:bg-white/10 transition-all backdrop-blur-sm">
                Our Story
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeIn}>
              <h2 className="text-3xl font-bold text-blue-900 mb-6 border-l-4 border-yellow-500 pl-4">About Elvar Trust</h2>
              <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                The name <span className="font-bold text-blue-900">"Elvar"</span> is derived from ancient roots meaning <span className="italic text-red-700">"God's Boon" or "God's Gift."</span> We believe that every resource we have is a gift to be shared with those who need it most.
              </p>
              <p className="text-lg text-slate-700 mb-8 leading-relaxed">
                Based in the heart of Bengaluru, Elvar Trust is dedicated to uplifting the marginalized through sustainable interventions in healthcare, education, and economic empowerment.
              </p>
              
              <div className="bg-white p-6 rounded-xl shadow-md border border-slate-100">
                <h3 className="text-xl font-bold text-blue-900 mb-4">Our Leadership</h3>
                <div className="space-y-4">
                  <div>
                    <p className="font-bold text-slate-900">Richard Sundara Raju</p>
                    <p className="text-sm text-slate-500">Managing Trustee</p>
                  </div>
                  <div>
                    <p className="font-bold text-slate-900">Jessica</p>
                    <p className="text-sm text-slate-500">Co-Trustee & Technical Steward</p>
                    <p className="text-sm text-slate-600 mt-1 italic">An AI/ML Engineer bringing technical innovation to social stewardship.</p>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <img 
                src="https://placehold.co/600x450/1e293b/e2e8f0?text=Elvar+Trust+Community+Work" 
                alt="South Indian community service" 
                className="rounded-2xl shadow-2xl"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-6 -right-6 bg-yellow-500 text-blue-900 p-6 rounded-xl font-bold shadow-lg hidden lg:block">
                Serving Bengaluru <br /> Since 2026
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Four Pillars */}
      <section id="pillars" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            {...fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Our Four Pillars</h2>
            <div className="w-24 h-1 bg-yellow-500 mx-auto"></div>
          </motion.div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Pillar 1 */}
            <motion.div 
              {...fadeIn}
              transition={{ delay: 0.1 }}
              className="p-8 bg-slate-50 rounded-2xl border border-slate-100 hover:border-yellow-500 transition-all group"
            >
              <div className="w-14 h-14 bg-blue-900 text-white rounded-lg flex items-center justify-center mb-6 group-hover:bg-yellow-500 group-hover:text-blue-900 transition-colors">
                <Heart size={32} />
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-3">Health & Medicine</h3>
              <p className="text-slate-600">Providing essential medical care, medicines, and support for the poor and needy in our community.</p>
            </motion.div>

            {/* Pillar 2 */}
            <motion.div 
              {...fadeIn}
              transition={{ delay: 0.2 }}
              className="p-8 bg-slate-50 rounded-2xl border border-slate-100 hover:border-yellow-500 transition-all group"
            >
              <div className="w-14 h-14 bg-blue-900 text-white rounded-lg flex items-center justify-center mb-6 group-hover:bg-yellow-500 group-hover:text-blue-900 transition-colors">
                <BookOpen size={32} />
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-3">Education</h3>
              <p className="text-slate-600">Covering school fees, providing books, and supporting teachers' salaries to ensure no child is left behind.</p>
            </motion.div>

            {/* Pillar 3 */}
            <motion.div 
              {...fadeIn}
              transition={{ delay: 0.3 }}
              className="p-8 bg-slate-50 rounded-2xl border border-slate-100 hover:border-yellow-500 transition-all group"
            >
              <div className="w-14 h-14 bg-blue-900 text-white rounded-lg flex items-center justify-center mb-6 group-hover:bg-yellow-500 group-hover:text-blue-900 transition-colors">
                <Utensils size={32} />
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-3">Food Security</h3>
              <p className="text-slate-600">Providing cooked meals, raw groceries, and kitchen equipment to families facing hunger.</p>
            </motion.div>

            {/* Pillar 4 */}
            <motion.div 
              {...fadeIn}
              transition={{ delay: 0.4 }}
              className="p-8 bg-slate-50 rounded-2xl border border-slate-100 hover:border-yellow-500 transition-all group"
            >
              <div className="w-14 h-14 bg-blue-900 text-white rounded-lg flex items-center justify-center mb-6 group-hover:bg-yellow-500 group-hover:text-blue-900 transition-colors">
                <Briefcase size={32} />
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-3">Empowerment</h3>
              <p className="text-slate-600">Job training and business development programs for men and women to build sustainable livelihoods.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Impact Section */}
      <section id="impact" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeIn} className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">Our Impact So Far</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">Real stories, real change. Here are some of the projects we've successfully completed in the Bengaluru community.</p>
            <div className="w-24 h-1 bg-yellow-500 mx-auto mt-6"></div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div {...fadeIn} transition={{ delay: 0.1 }} className="bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-100">
              <img src="https://images.unsplash.com/photo-1542810634-71277d95dcbb?auto=format&fit=crop&q=80&w=800" alt="Health Drive" className="w-full h-48 object-cover" referrerPolicy="no-referrer" />
              <div className="p-6">
                <div className="text-yellow-600 font-bold text-sm mb-2 uppercase">Health & Wellness</div>
                <h3 className="text-xl font-bold text-blue-900 mb-3">Community Health Drive 2025</h3>
                <p className="text-slate-600 mb-4">Served over 500 families in Basavanagudi with free screenings and essential medicines.</p>
                <div className="flex items-center gap-2 text-blue-900 font-bold">
                  <span className="text-2xl">500+</span>
                  <span className="text-sm">Beneficiaries</span>
                </div>
              </div>
            </motion.div>

            <motion.div {...fadeIn} transition={{ delay: 0.2 }} className="bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-100">
              <img src="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80&w=800" alt="Education Project" className="w-full h-48 object-cover" referrerPolicy="no-referrer" />
              <div className="p-6">
                <div className="text-blue-600 font-bold text-sm mb-2 uppercase">Education</div>
                <h3 className="text-xl font-bold text-blue-900 mb-3">Future Scholars Program</h3>
                <p className="text-slate-600 mb-4">Provided full scholarships and learning kits to 50 students from low-income backgrounds.</p>
                <div className="flex items-center gap-2 text-blue-900 font-bold">
                  <span className="text-2xl">50</span>
                  <span className="text-sm">Students Supported</span>
                </div>
              </div>
            </motion.div>

            <motion.div {...fadeIn} transition={{ delay: 0.3 }} className="bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-100">
              <img src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=800" alt="Food Relief" className="w-full h-48 object-cover" referrerPolicy="no-referrer" />
              <div className="p-6">
                <div className="text-red-600 font-bold text-sm mb-2 uppercase">Food Security</div>
                <h3 className="text-xl font-bold text-blue-900 mb-3">Bengaluru Flood Relief</h3>
                <p className="text-slate-600 mb-4">Distributed over 1,000 hot meals and dry ration kits during the monsoon crisis.</p>
                <div className="flex items-center gap-2 text-blue-900 font-bold">
                  <span className="text-2xl">1,000+</span>
                  <span className="text-sm">Meals Served</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Transparency & Appreciation Section */}
      <section id="transparency" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeIn}>
              <h2 className="text-4xl font-bold text-blue-900 mb-8">Transparency & Accountability</h2>
              <p className="text-lg text-slate-700 mb-8 leading-relaxed">
                We believe that trust is earned through transparency. Every rupee donated to Elvar Trust is tracked and directed towards our core missions.
              </p>
              
              <div className="space-y-6">
                <div className="flex gap-4 p-6 bg-blue-50 rounded-2xl border border-blue-100">
                  <div className="w-12 h-12 bg-blue-900 text-white rounded-full flex items-center justify-center shrink-0">
                    <ShieldCheck size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-blue-900 mb-1">100% Direct Impact</h4>
                    <p className="text-slate-600 text-sm">All public donations go directly to project costs. Administrative overhead is covered by our founders.</p>
                  </div>
                </div>
                <div className="flex gap-4 p-6 bg-blue-50 rounded-2xl border border-blue-100">
                  <div className="w-12 h-12 bg-blue-900 text-white rounded-full flex items-center justify-center shrink-0">
                    <Calendar size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-blue-900 mb-1">Quarterly Reports</h4>
                    <p className="text-slate-600 text-sm">We publish detailed impact reports every quarter, showing exactly where and how your support made a difference.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div {...fadeIn} transition={{ delay: 0.2 }} className="bg-slate-900 text-white p-10 rounded-3xl shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <Heart size={120} />
              </div>
              <h3 className="text-2xl font-bold mb-8 text-yellow-500">Words of Gratitude</h3>
              <div className="space-y-8">
                <blockquote className="border-l-4 border-yellow-500 pl-6 italic">
                  <p className="text-lg mb-4">"The medical camp saved my father's life. We couldn't afford the tests, but Elvar Trust stepped in when we had no hope."</p>
                  <footer className="text-blue-300 font-bold">— Lakshmi, Beneficiary</footer>
                </blockquote>
                <blockquote className="border-l-4 border-yellow-500 pl-6 italic">
                  <p className="text-lg mb-4">"I can now dream of becoming an engineer because my school fees are taken care of. Thank you for believing in me."</p>
                  <footer className="text-blue-300 font-bold">— Rahul, Student</footer>
                </blockquote>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Donation Section */}
      <section id="donate" className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            {...fadeIn}
            className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-200"
          >
            <div className="bg-red-700 text-white p-8 text-center">
              <h2 className="text-3xl font-bold mb-2">Make a Donation</h2>
              <p className="text-red-100">Your contribution brings hope and healing.</p>
            </div>
            
            <div className="p-8 md:p-12">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Full Name *</label>
                    <input type="text" required className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-900 focus:border-transparent outline-none transition-all" placeholder="Enter your full name" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Email Address *</label>
                    <input type="email" required className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-900 focus:border-transparent outline-none transition-all" placeholder="email@example.com" />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Phone Number *</label>
                    <input type="tel" required className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-900 focus:border-transparent outline-none transition-all" placeholder="+91 XXXXX XXXXX" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">PAN Card Number * (For 80G Receipt)</label>
                    <input type="text" required className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-900 focus:border-transparent outline-none transition-all uppercase" placeholder="ABCDE1234F" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Full Postal Address *</label>
                  <textarea required rows={3} className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-900 focus:border-transparent outline-none transition-all" placeholder="Enter your complete address for receipt delivery"></textarea>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Donation Amount (INR) *</label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 font-bold text-slate-500">₹</span>
                    <input type="number" required className="w-full pl-10 pr-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-900 focus:border-transparent outline-none transition-all font-bold text-xl" placeholder="5000" />
                  </div>
                </div>

                <button type="submit" className="w-full bg-red-700 text-white py-4 rounded-xl text-xl font-bold hover:bg-red-800 transition-all shadow-lg hover:shadow-red-200">
                  Proceed to Donate
                </button>
              </form>

              <div className="mt-10 p-6 bg-blue-50 rounded-2xl border border-blue-100">
                <div className="flex gap-4">
                  <ShieldCheck className="text-blue-900 shrink-0" size={28} />
                  <div>
                    <h4 className="font-bold text-blue-900 mb-1">Legal Compliance & Tax Benefits</h4>
                    <p className="text-sm text-blue-800 leading-relaxed">
                      Elvar Trust is a registered Charitable Trust. All donations are exempt from tax under <span className="font-bold">Section 80G of the Income Tax Act, 1961</span>. Receipts will be issued upon PAN verification and sent to your registered email and address.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-16 border-t border-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">ELVAR <span className="text-yellow-500">TRUST</span></h3>
              <p className="text-blue-200 leading-relaxed">
                Sharing God's gift through compassionate service and community empowerment in Bengaluru.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-6 text-yellow-500">Contact Us</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-blue-100">
                  <MapPin className="shrink-0 mt-1" size={18} />
                  <span>Bengaluru, Karnataka, India</span>
                </li>
                <li className="flex items-center gap-3 text-blue-100">
                  <Mail className="shrink-0" size={18} />
                  <a href="mailto:info@elvartrust.org" className="hover:text-yellow-500">info@elvartrust.org</a>
                </li>
                <li className="flex items-center gap-3 text-blue-100">
                  <Phone className="shrink-0" size={18} />
                  <span>+91 (Contact via Email)</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-6 text-yellow-500">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#about" className="text-blue-100 hover:text-yellow-500">About Us</a></li>
                <li><a href="#pillars" className="text-blue-100 hover:text-yellow-500">Our Pillars</a></li>
                <li><a href="#impact" className="text-blue-100 hover:text-yellow-500">Our Impact</a></li>
                <li><a href="#transparency" className="text-blue-100 hover:text-yellow-500">Transparency</a></li>
                <li><a href="#donate" className="text-blue-100 hover:text-yellow-500">Donate Now</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-blue-800 text-center text-blue-300 text-sm">
            <p>&copy; 2026 Elvar Trust. All Rights Reserved. Registered Charitable Trust.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
