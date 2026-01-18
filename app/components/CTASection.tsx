"use client"

import { 
  FaCalendarCheck, 
  FaPhoneAlt, 
  FaDownload, 
  FaEnvelope,
  FaShieldAlt,
  FaAward,
  FaCheckCircle,
  FaStar,
  FaUsers
} from 'react-icons/fa'

const ctaOptions = [
  {
    id: 'consultation',
    title: 'Free Consultation',
    description: 'Book a 30-minute one-on-one session with our study abroad experts',
    icon: FaCalendarCheck,
    actionText: 'Schedule Now',
    color: 'bg-blue-500',
  },
  {
    id: 'callback',
    title: 'Request Callback',
    description: 'We\'ll call you at your preferred time to discuss your options',
    icon: FaPhoneAlt,
    actionText: 'Request Call',
    color: 'bg-green-500',
  },
  {
    id: 'brochure',
    title: 'Download Brochure',
    description: 'Get our comprehensive guide to study abroad programs and services',
    icon: FaDownload,
    actionText: 'Download PDF',
    color: 'bg-purple-500',
  },
  {
    id: 'newsletter',
    title: 'Stay Updated',
    description: 'Get study abroad tips, program updates, and scholarship alerts',
    icon: FaEnvelope,
    actionText: 'Subscribe',
    color: 'bg-orange-500',
  },
]

const trustBadges = [
  {
    icon: FaShieldAlt,
    label: 'Trusted',
  },
  {
    icon: FaAward,
    label: 'Certified',
  },
  {
    icon: FaCheckCircle,
    label: 'Verified',
  },
]

export default function CTASection() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Email submitted:', email)
    setEmail('')
  }

  return (
    <section className="relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-surepath-blue via-surepath-light-blue to-surepath-dark-blue opacity-95"></div>
      
      {/* Pattern Overlay */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
        backgroundSize: '100px 100px'
      }}></div>

      <div className="relative container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Start Your{' '}
              <span className="text-surepath-accent">Study Abroad Journey</span>
              {' '}Today
            </h2>
            
            <p className="text-xl opacity-90 mb-8">
              Take the first step towards your international education dreams. 
              Our expert advisors are ready to help you find the perfect program.
            </p>

            {/* Trust Indicators */}
            <div className="flex items-center space-x-6 mb-8">
              <div className="flex items-center space-x-2">
                <FaStar className="w-5 h-5 text-yellow-400" />
                <span className="font-semibold">4.9/5 Rating</span>
              </div>
              <div className="flex items-center space-x-2">
                <FaUsers className="w-5 h-5" />
                <span className="font-semibold">2,500+ Students</span>
              </div>
              <div className="flex items-center space-x-2">
                <FaCheckCircle className="w-5 h-5 text-green-400" />
                <span className="font-semibold">98% Success</span>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                  <FaPhoneAlt className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm opacity-80">Call Us</div>
                  <div className="text-xl font-semibold">+1 (555) 123-4567</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                  <FaEnvelope className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm opacity-80">Email Us</div>
                  <div className="text-xl font-semibold">help@surepath.com</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - CTA Options */}
          <div>
            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              {ctaOptions.map((option) => (
                <div 
                  key={option.id}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group cursor-pointer"
                >
                  <div className={`w-12 h-12 ${option.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <option.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{option.title}</h3>
                  <p className="text-white/80 text-sm mb-4">{option.description}</p>
                  <button className="w-full bg-white text-surepath-blue font-semibold py-2 rounded-lg hover:bg-gray-100 transition-colors">
                    {option.actionText}
                  </button>
                </div>
              ))}
            </div>

            {/* Newsletter Signup */}
            <div className="bg-white rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Get Free Study Abroad Guide</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-surepath-blue"
                    required
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-surepath-blue"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-surepath-blue text-white font-semibold py-3 rounded-lg hover:bg-surepath-dark-blue transition-colors flex items-center justify-center space-x-2"
                >
                  <FaDownload className="w-5 h-5" />
                  <span>Download Free Guide</span>
                </button>
              </form>
            </div>

            {/* Trust Badges */}
            <div className="flex justify-center space-x-6 mt-8">
              {trustBadges.map((badge, index) => (
                <div key={index} className="flex items-center space-x-2 text-white">
                  <badge.icon className="w-5 h-5" />
                  <span className="font-medium">{badge.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Final Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">2,500+</div>
            <div className="text-white/80">Students Guided</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">15+</div>
            <div className="text-white/80">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">500+</div>
            <div className="text-white/80">Partner Universities</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">50+</div>
            <div className="text-white/80">Countries</div>
          </div>
        </div>
      </div>
    </section>
  )
}

import { useState } from 'react'