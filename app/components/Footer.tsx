import { 
  FaFacebook, 
  FaInstagram, 
  FaTwitter, 
  FaLinkedin, 
  FaYoutube, 
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
  FaPaperPlane,
  FaShieldAlt,
  FaGraduationCap,
  FaGlobeAmericas,
  FaUserGraduate,
  FaChevronRight
} from 'react-icons/fa'
import { FiMail, FiPhone, FiClock, FiMapPin, FiArrowRight } from 'react-icons/fi'
import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const quickLinks = {
    'Study Programs': [
      { name: 'Semester Abroad', href: '/programs/semester' },
      { name: 'Degree Programs', href: '/programs/degree' },
      { name: 'Summer Programs', href: '/programs/summer' },
      { name: 'Internship Abroad', href: '/programs/internship' },
      { name: 'Language Courses', href: '/programs/language' },
    ],
    'Destinations': [
      { name: 'Study in USA', href: '/destinations/usa' },
      { name: 'Study in UK', href: '/destinations/uk' },
      { name: 'Study in Canada', href: '/destinations/canada' },
      { name: 'Study in Australia', href: '/destinations/australia' },
      { name: 'View All Destinations', href: '/destinations', highlight: true },
    ],
    'Services': [
      { name: 'Visa Application', href: '/services/visa' },
      { name: 'University Admissions', href: '/services/admissions' },
      { name: 'Test Preparation', href: '/services/test-prep' },
      { name: 'Accommodation', href: '/services/accommodation' },
      { name: 'Scholarship Guidance', href: '/services/scholarships' },
    ],
    'Company': [
      { name: 'About Us', href: '/about' },
      { name: 'Success Stories', href: '/testimonials' },
      { name: 'Careers', href: '/careers' },
      { name: 'Blog & Resources', href: '/blog' },
      { name: 'Contact', href: '/contact' },
    ]
  }

  const socialLinks = [
    { icon: FaFacebook, href: '#', label: 'Facebook', color: 'hover:bg-blue-600' },
    { icon: FaInstagram, href: '#', label: 'Instagram', color: 'hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600' },
    { icon: FaTwitter, href: '#', label: 'Twitter', color: 'hover:bg-sky-500' },
    { icon: FaLinkedin, href: '#', label: 'LinkedIn', color: 'hover:bg-blue-700' },
    { icon: FaYoutube, href: '#', label: 'YouTube', color: 'hover:bg-red-600' },
  ]

  return (
    <footer className="bg-gray-950 text-white border-t border-gray-800">
      {/* Top Accent Line */}
      <div className="h-0.5 bg-gradient-to-r from-surepath-blue via-surepath-light-blue to-surepath-accent"></div>
      
      <div className="container mx-auto px-4 py-16">
        {/* Main Footer Grid */}
        <div className="grid lg:grid-cols-12 gap-10">
          {/* Logo & Company Info */}
          <div className="lg:col-span-4">
            <div className="mb-8">
              <Link href="/" className="inline-block group">
                <div className="relative w-48 h-14 mb-6">
                  <Image
                    src="/images/logo-white.png"
                    alt="SurePath Travel Abroad"
                    fill
                    className="object-contain group-hover:scale-105 transition-transform duration-300 filter brightness-125"
                    sizes="(max-width: 768px) 192px, 256px"
                  />
                </div>
              </Link>
              <p className="text-gray-400 text-lg mb-8 max-w-md leading-relaxed">
                Your premier partner for international education. We transform study abroad dreams into reality with expert guidance and unparalleled support.
              </p>
              
              {/* Trust Indicators */}
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 flex items-center justify-center">
                    <FaShieldAlt className="w-5 h-5 text-surepath-accent" />
                  </div>
                  <div>
                    <div className="font-semibold">Certified Agency</div>
                    <div className="text-sm text-gray-500">Licensed & Accredited</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 flex items-center justify-center">
                    <FaUserGraduate className="w-5 h-5 text-surepath-accent" />
                  </div>
                  <div>
                    <div className="font-semibold">98% Success Rate</div>
                    <div className="text-sm text-gray-500">Visa & Admissions</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Newsletter Subscription - Darker Card */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-950 rounded-xl p-6 border border-gray-800 shadow-2xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-surepath-blue/20 to-surepath-accent/20 flex items-center justify-center">
                  <FaPaperPlane className="w-5 h-5 text-surepath-accent" />
                </div>
                <h3 className="text-xl font-bold">Get Study Abroad Updates</h3>
              </div>
              <p className="text-gray-400 text-sm mb-5">
                Exclusive tips, scholarship alerts, and success stories delivered to your inbox.
              </p>
              <form className="space-y-4">
                <div>
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="w-full px-4 py-3.5 bg-gray-900 border border-gray-700 rounded-lg placeholder-gray-500 text-white focus:outline-none focus:border-surepath-blue focus:ring-1 focus:ring-surepath-blue/30 transition-all"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-surepath-blue to-surepath-dark-blue text-white font-semibold py-3.5 rounded-lg hover:shadow-2xl hover:shadow-surepath-blue/20 transition-all duration-300 flex items-center justify-center gap-2 group"
                >
                  <span>Subscribe Now</span>
                  <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
              <p className="text-gray-500 text-xs mt-4 text-center">
                We respect your privacy. No spam, ever.
              </p>
            </div>
          </div>

          {/* Quick Links Grid */}
          <div className="lg:col-span-8">
            <div className="grid md:grid-cols-4 gap-8">
              {Object.entries(quickLinks).map(([category, links]) => (
                <div key={category}>
                  <h3 className="text-lg font-bold mb-6 pb-3 border-b border-gray-800 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                      {category === 'Study Programs' && <FaGraduationCap className="w-4 h-4 text-surepath-accent" />}
                      {category === 'Destinations' && <FaGlobeAmericas className="w-4 h-4 text-surepath-accent" />}
                      {category === 'Services' && <FaUserGraduate className="w-4 h-4 text-surepath-accent" />}
                      {category === 'Company' && <FaShieldAlt className="w-4 h-4 text-surepath-accent" />}
                    </div>
                    {category}
                  </h3>
                  <ul className="space-y-3">
                    {links.map((link) => (
                      <li key={link.name}>
                        <Link
                          href={link.href}
                          className={`flex items-center gap-2 group ${
                            link 
                              ? 'text-surepath-accent font-semibold hover:text-white' 
                              : 'text-gray-400 hover:text-white'
                          } transition-colors`}
                        >
                          <FaChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                          <span className="border-b border-transparent group-hover:border-gray-600 transition-colors">
                            {link.name}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Contact Section - Dark Panel */}
            <div className="mt-12 p-8 bg-gradient-to-br from-gray-900 to-gray-950 rounded-2xl border border-gray-800 shadow-2xl">
              <h3 className="text-2xl font-bold mb-8 text-center">
                <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  Ready to Start Your Journey?
                </span>
              </h3>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center group">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-gray-800 to-gray-900 border-2 border-gray-700 flex items-center justify-center mx-auto mb-4 group-hover:border-surepath-blue transition-colors">
                    <FaPhoneAlt className="w-7 h-7 text-surepath-accent" />
                  </div>
                  <h4 className="font-bold mb-2 text-lg">Call Us</h4>
                  <a 
                    href="tel:+12345678900" 
                    className="text-gray-300 hover:text-white transition-colors text-xl font-bold block"
                  >
                    +1 (234) 567-8900
                  </a>
                  <p className="text-gray-500 text-sm mt-2">24/7 Student Support Line</p>
                </div>
                
                <div className="text-center group">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-gray-800 to-gray-900 border-2 border-gray-700 flex items-center justify-center mx-auto mb-4 group-hover:border-surepath-blue transition-colors">
                    <FaEnvelope className="w-7 h-7 text-surepath-accent" />
                  </div>
                  <h4 className="font-bold mb-2 text-lg">Email Us</h4>
                  <a 
                    href="mailto:help@surepath.com" 
                    className="text-gray-300 hover:text-white transition-colors text-lg font-bold block"
                  >
                    help@surepath.com
                  </a>
                  <p className="text-gray-500 text-sm mt-2">Response within 12 hours</p>
                </div>
                
                <div className="text-center group">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-gray-800 to-gray-900 border-2 border-gray-700 flex items-center justify-center mx-auto mb-4 group-hover:border-surepath-blue transition-colors">
                    <FiMapPin className="w-7 h-7 text-surepath-accent" />
                  </div>
                  <h4 className="font-bold mb-2 text-lg">Visit Office</h4>
                  <p className="text-gray-300 text-lg font-bold">
                    123 Education Plaza
                  </p>
                  <p className="text-gray-500 text-sm mt-2">New York, NY 10001, USA</p>
                </div>
              </div>
              
              <div className="mt-8 pt-8 border-t border-gray-800 text-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-900 rounded-lg">
                  <FiClock className="w-5 h-5 text-surepath-accent" />
                  <span className="font-medium">Office Hours: </span>
                  <span className="text-gray-300">Mon-Fri 9:00 AM - 6:00 PM EST</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 pt-12 border-t border-gray-800">
          {/* Social Media & Apps */}
          <div className="flex flex-col lg:flex-row justify-between items-center gap-8 mb-10">
            {/* Social Media */}
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <span className="text-gray-400 font-medium">Connect With Us:</span>
              <div className="flex gap-2">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className={`w-11 h-11 rounded-xl bg-gray-900 border border-gray-800 flex items-center justify-center hover:scale-110 transition-all duration-300 group ${social.color}`}
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                  </a>
                ))}
              </div>
            </div>

            {/* Download Apps */}
            <div className="flex gap-4">
              <button className="px-5 py-3 bg-gray-900 border border-gray-800 rounded-xl flex items-center gap-3 hover:bg-gray-800 transition-colors group">
                <svg className="w-7 h-7 text-gray-400 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.666-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.787-.94 1.324-2.245 1.171-3.54-1.133.052-2.506.754-3.32 1.69-.731.85-1.377 2.207-1.207 3.514 1.26.091 2.544-.64 3.356-1.664z"/>
                </svg>
                <div className="text-left">
                  <div className="text-xs text-gray-500">Download on the</div>
                  <div className="font-bold text-white">App Store</div>
                </div>
              </button>
              <button className="px-5 py-3 bg-gray-900 border border-gray-800 rounded-xl flex items-center gap-3 hover:bg-gray-800 transition-colors group">
                <svg className="w-7 h-7 text-gray-400 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3.609 1.814L13.792 12 3.61 22.186a1.579 1.579 0 0 0-.001 2.228 1.577 1.577 0 0 0 2.228.001L18 12 5.837.585a1.577 1.577 0 0 0-2.228.001 1.579 1.579 0 0 0 0 2.228z"/>
                </svg>
                <div className="text-left">
                  <div className="text-xs text-gray-500">Get it on</div>
                  <div className="font-bold text-white">Google Play</div>
                </div>
              </button>
            </div>
          </div>

          {/* Copyright & Legal */}
          <div className="pt-8 border-t border-gray-800">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="text-gray-500 text-sm">
                <p className="mb-1">&copy; {currentYear} SurePath Travel Abroad. All rights reserved.</p>
                <p>Empowering global education dreams since 2010.</p>
              </div>
              
              <div className="flex flex-wrap justify-center gap-6 text-sm">
                <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors hover:underline">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="text-gray-400 hover:text-white transition-colors hover:underline">
                  Terms of Service
                </Link>
                <Link href="/cookies" className="text-gray-400 hover:text-white transition-colors hover:underline">
                  Cookie Policy
                </Link>
                <Link href="/accessibility" className="text-gray-400 hover:text-white transition-colors hover:underline">
                  Accessibility
                </Link>
                <Link href="/sitemap" className="text-gray-400 hover:text-white transition-colors hover:underline">
                  Sitemap
                </Link>
              </div>
            </div>
            
            {/* Accreditation Badges */}
            <div className="mt-8 pt-8 border-t border-gray-800">
              <div className="flex flex-wrap justify-center items-center gap-8">
                <div className="text-center">
                  <div className="text-xs text-gray-500 mb-2">Accredited By</div>
                  <div className="flex items-center gap-2 text-gray-300 text-sm">
                    <FaShieldAlt className="w-4 h-4" />
                    <span>International Education Association</span>
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-xs text-gray-500 mb-2">Member Of</div>
                  <div className="flex items-center gap-2 text-gray-300 text-sm">
                    <FaGlobeAmericas className="w-4 h-4" />
                    <span>NAFSA & EAIE</span>
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-xs text-gray-500 mb-2">Partner With</div>
                  <div className="flex items-center gap-2 text-gray-300 text-sm">
                    <FaUserGraduate className="w-4 h-4" />
                    <span>500+ Universities</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Ultra Dark Bottom Bar */}
      <div className="bg-black/90 py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-gray-600">
            <p>SurePath Travel Abroad is a registered trademark. All university names and logos are property of their respective owners.</p>
            <p>USD | English</p>
          </div>
        </div>
      </div>
    </footer>
  )
}