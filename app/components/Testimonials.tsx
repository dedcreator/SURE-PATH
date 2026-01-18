"use client"

import { useState } from 'react'
import { 
  FaStar, 
  FaQuoteLeft, 
  FaUniversity, 
  FaGlobeAmericas,
  FaCheckCircle,
  FaUserShield
} from 'react-icons/fa'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    program: 'MBA',
    university: 'Harvard University',
    country: 'USA',
    rating: 5,
    content: 'SurePath made my dream of studying at Harvard a reality. Their guidance through the entire process was exceptional. From application to visa, everything was handled professionally.',
    image: 'SJ',
    date: 'June 2023',
  },
  {
    id: 2,
    name: 'Michael Chen',
    program: 'Computer Science',
    university: 'University of Toronto',
    country: 'Canada',
    rating: 5,
    content: 'As an international student from China, I was worried about the visa process. SurePath\'s team guided me through every step and helped me secure my student visa in just 3 weeks!',
    image: 'MC',
    date: 'August 2023',
  },
  {
    id: 3,
    name: 'Emma Williams',
    program: 'Medicine',
    university: 'University of Sydney',
    country: 'Australia',
    rating: 5,
    content: 'The pre-departure orientation was incredibly helpful. They connected me with other students going to Australia, and we formed a support group before even arriving!',
    image: 'EW',
    date: 'September 2023',
  },
  {
    id: 4,
    name: 'David Rodriguez',
    program: 'Engineering',
    university: 'ETH Zurich',
    country: 'Switzerland',
    rating: 5,
    content: 'The scholarship guidance helped me secure funding for my Master\'s program. I wouldn\'t have known about these opportunities without SurePath.',
    image: 'DR',
    date: 'October 2023',
  },
  {
    id: 5,
    name: 'Priya Sharma',
    program: 'Business Analytics',
    university: 'London Business School',
    country: 'UK',
    rating: 5,
    content: 'From university selection to accommodation, SurePath provided end-to-end support. Their local contacts in London made my transition smooth.',
    image: 'PS',
    date: 'November 2023',
  },
  {
    id: 6,
    name: 'Kenji Tanaka',
    program: 'Robotics',
    university: 'University of Tokyo',
    country: 'Japan',
    rating: 5,
    content: 'Studying in Japan was challenging due to language barriers. SurePath\'s language preparation program and cultural orientation made all the difference.',
    image: 'KT',
    date: 'December 2023',
  },
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAdmin, setIsAdmin] = useState(false)

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    )
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    )
  }

  const getCurrentTestimonials = () => {
    const indices = [
      currentIndex,
      (currentIndex + 1) % testimonials.length,
      (currentIndex + 2) % testimonials.length,
    ]
    return indices.map(i => testimonials[i])
  }

  const renderStars = (rating: number) => {
    return Array(5).fill(0).map((_, i) => (
      <FaStar 
        key={i} 
        className={`w-5 h-5 ${i < rating ? 'text-yellow-500' : 'text-gray-300'}`}
      />
    ))
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-surepath-dark-blue mb-4">
            Student Success Stories
          </h2>
          <p className="text-lg text-gray-600">
            Hear from students who achieved their study abroad dreams with SurePath
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="bg-gradient-to-br from-surepath-blue to-surepath-light-blue rounded-xl p-8 text-white text-center">
            <div className="text-4xl font-bold mb-2">4.9/5</div>
            <div className="flex justify-center mb-3">
              {renderStars(5)}
            </div>
            <div>Average Student Rating</div>
          </div>
          <div className="bg-gradient-to-br from-surepath-dark-blue to-surepath-blue rounded-xl p-8 text-white text-center">
            <div className="text-4xl font-bold mb-2">2,500+</div>
            <div className="flex items-center justify-center space-x-2">
              <FaUniversity className="w-5 h-5" />
              <div>Student Success Stories</div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-surepath-light-blue to-surepath-accent rounded-xl p-8 text-white text-center">
            <div className="text-4xl font-bold mb-2">50+</div>
            <div className="flex items-center justify-center space-x-2">
              <FaGlobeAmericas className="w-5 h-5" />
              <div>Countries Represented</div>
            </div>
          </div>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative mb-16">
          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
          >
            <FiChevronLeft className="w-6 h-6 text-gray-700" />
          </button>
          
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
          >
            <FiChevronRight className="w-6 h-6 text-gray-700" />
          </button>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {getCurrentTestimonials().map((testimonial, index) => (
              <div 
                key={testimonial.id}
                className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow"
              >
                {/* Quote Icon */}
                <div className="text-surepath-accent mb-6">
                  <FaQuoteLeft className="w-8 h-8" />
                </div>

                {/* Content */}
                <p className="text-gray-700 italic mb-8">
                  "{testimonial.content}"
                </p>

                {/* Rating */}
                <div className="flex mb-6">
                  {renderStars(testimonial.rating)}
                </div>

                {/* Student Info */}
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-surepath-blue to-surepath-light-blue rounded-full flex items-center justify-center text-white font-bold text-xl">
                    {testimonial.image}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">{testimonial.name}</h4>
                    <p className="text-surepath-blue font-medium">{testimonial.program}</p>
                    <p className="text-gray-600 text-sm">
                      {testimonial.university}, {testimonial.country}
                    </p>
                    <p className="text-gray-500 text-xs mt-1">{testimonial.date}</p>
                  </div>
                  <FaCheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Admin Panel (Hidden by default) */}
        {isAdmin && (
          <div className="bg-gray-50 rounded-xl p-6 mb-8">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <FaUserShield className="w-6 h-6 text-surepath-blue" />
                <h3 className="text-xl font-bold text-gray-900">Admin Panel</h3>
              </div>
              <button 
                onClick={() => setIsAdmin(false)}
                className="text-sm text-gray-600 hover:text-gray-900"
              >
                Logout
              </button>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-surepath-blue">{testimonials.length}</div>
                <div className="text-sm text-gray-600">Total Testimonials</div>
              </div>
              <div className="bg-white p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-green-600">{testimonials.length}</div>
                <div className="text-sm text-gray-600">Approved</div>
              </div>
              <div className="bg-white p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-yellow-600">0</div>
                <div className="text-sm text-gray-600">Pending Review</div>
              </div>
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <button className="px-8 py-3 bg-surepath-blue text-white rounded-lg font-semibold hover:bg-surepath-dark-blue transition-colors flex items-center justify-center space-x-2">
            <span>Share Your Story</span>
          </button>
          
          {!isAdmin && (
            <button 
              onClick={() => setIsAdmin(true)}
              className="px-8 py-3 border border-surepath-blue text-surepath-blue rounded-lg font-semibold hover:bg-surepath-light transition-colors flex items-center justify-center space-x-2"
            >
              <FaUserShield className="w-5 h-5" />
              <span>Admin Login</span>
            </button>
          )}
        </div>

        {/* Testimonial Submission Form (Collapsible) */}
        <div className="mt-12 bg-gray-50 rounded-xl p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Share Your Experience</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-surepath-blue"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-surepath-blue"
            />
            <input
              type="text"
              placeholder="Your Program"
              className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-surepath-blue"
            />
            <input
              type="text"
              placeholder="University & Country"
              className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-surepath-blue"
            />
          </div>
          <textarea
            placeholder="Share your study abroad experience..."
            rows={4}
            className="w-full mt-4 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-surepath-blue"
          />
          <div className="flex justify-between items-center mt-4">
            <div className="flex items-center space-x-2">
              <span className="text-gray-600">Rating:</span>
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <FaStar key={star} className="w-6 h-6 text-gray-300 cursor-pointer hover:text-yellow-500" />
                ))}
              </div>
            </div>
            <button className="px-6 py-3 bg-surepath-blue text-white rounded-lg font-semibold hover:bg-surepath-dark-blue transition-colors">
              Submit Testimonial
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}