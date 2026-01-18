"use client"

import { useState } from 'react'
import { 
  FaPassport, 
  FaBook, 
  FaLanguage, 
  FaHome, 
  FaShieldAlt,
  FaUniversity,
  FaMoneyBillWave,
  FaPlaneDeparture,
  FaHandsHelping,
  FaChartLine,
  FaChevronRight,
  FaStar
} from 'react-icons/fa'

const services = [
  {
    icon: FaPassport,
    title: 'Visa Application',
    description: 'Complete visa processing with 98% success rate. Expert guidance for student, work, and tourist visas.',
    features: [
      'Document preparation & verification',
      'Financial proof assistance',
      'Interview preparation',
      'Application tracking',
      'Post-submission support'
    ],
    successRate: '98%',
    processingTime: '2-6 weeks',
    popular: true,
    color: 'from-blue-500 to-surepath-blue',
  },
  {
    icon: FaBook,
    title: 'PTE Test Preparation',
    description: 'Comprehensive PTE Academic training with personalized coaching and mock tests.',
    features: [
      'Personalized study plans',
      'Mock tests with detailed analysis',
      'Speaking & writing correction',
      'Time management strategies',
      'Score improvement guarantee'
    ],
    successRate: '95%',
    processingTime: '4-12 weeks',
    popular: true,
    color: 'from-purple-500 to-purple-600',
  },
  {
    icon: FaLanguage,
    title: 'IELTS Training',
    description: 'Expert IELTS coaching for academic and general training with guaranteed score improvement.',
    features: [
      'Band score prediction',
      'Speaking practice with experts',
      'Writing task evaluation',
      'Listening & reading strategies',
      'Test day preparation'
    ],
    successRate: '96%',
    processingTime: '6-12 weeks',
    popular: true,
    color: 'from-green-500 to-green-600',
  },
  {
    icon: FaHome,
    title: 'Study Abroad Accommodation',
    description: 'Find safe, comfortable housing near your campus with verified landlords and student-friendly options.',
    features: [
      'On-campus housing assistance',
      'Off-campus apartment search',
      'Homestay arrangements',
      'Rental agreement review',
      'Safety verification'
    ],
    successRate: '100%',
    processingTime: '2-4 weeks',
    popular: false,
    color: 'from-orange-500 to-orange-600',
  },
  {
    icon: FaShieldAlt,
    title: 'Student Health Insurance',
    description: 'Comprehensive health insurance plans meeting visa requirements for international students.',
    features: [
      'Visa-compliant coverage',
      'Emergency medical coverage',
      'Dental & optical options',
      '24/7 customer support',
      'Easy claim processing'
    ],
    successRate: '100%',
    processingTime: '1-2 weeks',
    popular: false,
    color: 'from-red-500 to-red-600',
  },
  {
    icon: FaUniversity,
    title: 'University Admissions',
    description: 'End-to-end university application support from selection to acceptance letter.',
    features: [
      'University shortlisting',
      'Application documentation',
      'Personal statement assistance',
      'LOR preparation',
      'Interview coaching'
    ],
    successRate: '92%',
    processingTime: '4-8 weeks',
    popular: true,
    color: 'from-indigo-500 to-indigo-600',
  },
  {
    icon: FaMoneyBillWave,
    title: 'Scholarship Guidance',
    description: 'Maximize your funding opportunities with expert scholarship search and application support.',
    features: [
      'Scholarship database access',
      'Eligibility assessment',
      'Application strategy',
      'Essay writing assistance',
      'Deadline management'
    ],
    successRate: '85%',
    processingTime: 'Varies',
    popular: true,
    color: 'from-yellow-500 to-yellow-600',
  },
  {
    icon: FaPlaneDeparture,
    title: 'Pre-Departure Orientation',
    description: 'Complete preparation for your study abroad journey with cultural and practical guidance.',
    features: [
      'Cultural adaptation training',
      'Academic system overview',
      'Travel arrangements',
      'Packing guidance',
      'Emergency protocols'
    ],
    successRate: '100%',
    processingTime: '1-2 weeks',
    popular: false,
    color: 'from-teal-500 to-teal-600',
  },
]

export default function Services() {
  const [selectedService, setSelectedService] = useState(services[0])
  const [showAllServices, setShowAllServices] = useState(false)

  const displayedServices = showAllServices ? services : services.slice(0, 4)

  return (
    <section className="py-20 bg-gradient-to-b from-white to-surepath-light/50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-surepath-light-blue/10 px-4 py-2 rounded-full mb-6">
            <FaStar className="w-4 h-4 text-surepath-accent" />
            <span className="text-sm font-semibold text-surepath-blue">Comprehensive Support</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-surepath-dark-blue mb-6">
            Our Complete{' '}
            <span className="bg-gradient-to-r from-surepath-blue to-surepath-light-blue bg-clip-text text-transparent">
              Study Abroad Services
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From visa applications to accommodation, we provide end-to-end support for every step of your international education journey.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {displayedServices.map((service, index) => (
            <div 
              key={index}
              onClick={() => setSelectedService(service)}
              className={`group bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 border cursor-pointer ${
                selectedService.title === service.title 
                  ? 'border-surepath-blue ring-2 ring-surepath-blue/20' 
                  : 'border-gray-100 hover:border-surepath-blue/50'
              }`}
            >
              {/* Service Icon */}
              <div className="relative mb-6">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center`}>
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                {service.popular && (
                  <div className="absolute -top-2 -right-2">
                    <span className="px-2 py-1 bg-surepath-accent text-white text-xs font-bold rounded-full">
                      Popular
                    </span>
                  </div>
                )}
              </div>
              
              {/* Service Title & Description */}
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-surepath-blue transition-colors">
                {service.title}
              </h3>
              
              <p className="text-gray-600 text-sm mb-6 line-clamp-2">
                {service.description}
              </p>
              
              {/* CTA */}
              <div className="flex items-center justify-between">
                <span className="text-surepath-blue font-semibold text-sm group-hover:underline">
                  Learn More
                </span>
                <FaChevronRight className="w-4 h-4 text-surepath-blue opacity-0 group-hover:opacity-100 translate-x-0 group-hover:translate-x-1 transition-all" />
              </div>
            </div>
          ))}
        </div>

        {/* Selected Service Details */}
        <div className="mb-16">
          <div className="bg-gradient-to-br from-white to-surepath-light rounded-2xl shadow-xl p-8 border">
            <div className="flex flex-col lg:flex-row items-start gap-8">
              {/* Left Column - Service Info */}
              <div className="lg:w-2/3">
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${selectedService.color} flex items-center justify-center`}>
                    <selectedService.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900">{selectedService.title}</h3>
                    <p className="text-gray-600 mt-2">{selectedService.description}</p>
                  </div>
                </div>

                {/* Features */}
                <div className="mb-8">
                  <h4 className="text-xl font-bold text-gray-900 mb-4">What's Included:</h4>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {selectedService.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3 p-3 bg-white border rounded-lg">
                        <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                          <FaStar className="w-3 h-3 text-green-600" />
                        </div>
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column - CTA */}
              <div className="lg:w-1/3">
                <div className="bg-gradient-to-b from-surepath-blue to-surepath-light-blue rounded-xl p-6 text-white">
                  <h4 className="text-xl font-bold mb-4">Start Your Journey</h4>
                  <p className="text-white/90 mb-6">
                    Get started with {selectedService.title.toLowerCase()} today.
                  </p>
                  
                  <div className="space-y-4">
                    <button className="w-full bg-black text-surepath-blue font-bold py-3 rounded-lg hover:bg-gray-200 hover:text-black transition-colors">
                      Get Started
                    </button>
                  </div>
                  
                  <div className="mt-6 pt-6 border-t border-white/20">
                    <div className="flex items-center gap-2 text-sm">
                      <FaHandsHelping className="w-4 h-4" />
                      <span>Personalized support from our experts</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Process Timeline */}
        <div className="bg-gradient-to-r from-surepath-light-blue/20 to-surepath-accent/20 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-surepath-dark-blue text-center mb-8">
            Our 4-Step Process
          </h3>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '1', title: 'Consultation', desc: 'Free initial assessment of your goals' },
              { step: '2', title: 'Planning', desc: 'Personalized roadmap creation' },
              { step: '3', title: 'Execution', desc: 'Documentation & application support' },
              { step: '4', title: 'Support', desc: 'Ongoing assistance until success' },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-surepath-blue to-surepath-light-blue text-white flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h4 className="font-bold text-gray-900 mb-2">{item.title}</h4>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center mt-16">
          <button className="bg-gradient-to-r from-surepath-blue to-surepath-light-blue text-white px-10 py-4 rounded-xl font-bold text-lg hover:shadow-2xl hover:shadow-surepath-blue/30 transition-all">
            Get Free Consultation Now
          </button>
          <p className="text-gray-500 mt-4">
            Speak with our experts about your study abroad plans
          </p>
        </div>
      </div>
    </section>
  )
}