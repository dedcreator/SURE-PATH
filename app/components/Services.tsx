"use client"

import { useState } from 'react'
import { 
  FaUniversity, 
  FaPassport, 
  FaHome, 
  FaPlaneDeparture, 
  FaHandsHelping, 
  FaBriefcase,
  FaClock,
  FaCheck,
  FaCalendarCheck,
  FaPhoneAlt,
  FaDownload,
  FaEnvelope
} from 'react-icons/fa'

const services = [
  {
    id: 1,
    title: 'University Admissions',
    description: 'Comprehensive support from university selection to application submission and admission.',
    icon: FaUniversity,
    features: [
      'Personalized university shortlisting',
      'Application documentation review',
      'Statement of purpose assistance',
      'Letter of recommendation guidance',
      'Interview preparation'
    ],
    timeline: '4-8 weeks',
    popular: true,
  },
  {
    id: 2,
    title: 'Visa Assistance',
    description: 'End-to-end visa processing support with 98% success rate.',
    icon: FaPassport,
    features: [
      'Visa documentation checklist',
      'Financial proof preparation',
      'Interview preparation',
      'Visa application submission',
      'Follow-up and tracking'
    ],
    timeline: '2-6 weeks',
    popular: true,
  },
  {
    id: 3,
    title: 'Accommodation Support',
    description: 'Find safe and comfortable accommodation options near your campus.',
    icon: FaHome,
    features: [
      'On-campus housing assistance',
      'Off-campus accommodation search',
      'Rental agreement review',
      'Local area orientation',
      'Roommate matching'
    ],
    timeline: '2-4 weeks',
    popular: false,
  },
  {
    id: 4,
    title: 'Pre-Departure Orientation',
    description: 'Prepare for your study abroad journey with comprehensive orientation sessions.',
    icon: FaPlaneDeparture,
    features: [
      'Cultural adaptation training',
      'Academic expectations briefing',
      'Health insurance guidance',
      'Travel arrangements support',
      'Packing checklist'
    ],
    timeline: '1-2 weeks',
    popular: false,
  },
  {
    id: 5,
    title: 'Post-Arrival Support',
    description: 'Continued support after arrival to ensure smooth transition.',
    icon: FaHandsHelping,
    features: [
      'Airport pickup arrangement',
      'Bank account setup assistance',
      'Local SIM card procurement',
      '24/7 emergency support',
      'Cultural integration guidance'
    ],
    timeline: 'Ongoing',
    popular: false,
  },
  {
    id: 6,
    title: 'Career Guidance',
    description: 'Career counseling and job placement assistance for international students.',
    icon: FaBriefcase,
    features: [
      'Resume building for international market',
      'Interview preparation workshops',
      'Internship placement assistance',
      'Networking opportunities',
      'Work visa guidance'
    ],
    timeline: 'Flexible',
    popular: true,
  },
]

const additionalServices = [
  {
    icon: FaEnvelope,
    title: 'Language Preparation',
    description: 'TOEFL/IELTS coaching and language proficiency enhancement',
  },
  {
    icon: FaCheck,
    title: 'Financial Planning',
    description: 'Scholarship guidance and financial documentation support',
  },
  {
    icon: FaHandsHelping,
    title: 'Alumni Network',
    description: 'Connect with successful alumni for guidance and networking',
  },
  {
    icon: FaClock,
    title: 'Health Insurance',
    description: 'International student health insurance plans and guidance',
  },
]

export default function Services() {
  const [activeService, setActiveService] = useState(services[0])

  return (
    <section className="py-20 bg-surepath-light">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-surepath-dark-blue mb-4">
            Comprehensive Study Abroad Services
          </h2>
          <p className="text-lg text-gray-600">
            End-to-end support for your study abroad journey, from initial consultation to post-arrival assistance
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Services Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-6 sticky top-24">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Our Services</h3>
              <div className="space-y-2">
                {services.map((service) => (
                  <button
                    key={service.id}
                    onClick={() => setActiveService(service)}
                    className={`w-full text-left p-4 rounded-lg transition-all duration-200 ${
                      activeService.id === service.id
                        ? 'bg-surepath-blue text-white shadow-md'
                        : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <service.icon className={`w-5 h-5 ${
                          activeService.id === service.id ? 'text-white' : 'text-surepath-blue'
                        }`} />
                        <span className="font-medium">{service.title}</span>
                      </div>
                      {service.popular && (
                        <span className={`text-xs px-2 py-1 rounded-full ${
                          activeService.id === service.id
                            ? 'bg-white/20 text-white'
                            : 'bg-surepath-accent/20 text-surepath-blue'
                        }`}>
                          Popular
                        </span>
                      )}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Service Details */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-start justify-between mb-8">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-surepath-blue to-surepath-light-blue rounded-xl flex items-center justify-center">
                    <activeService.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{activeService.title}</h3>
                    <p className="text-gray-600 mt-1">{activeService.description}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2 bg-surepath-light px-4 py-2 rounded-lg">
                  <FaClock className="w-4 h-4 text-surepath-blue" />
                  <span className="font-medium">Timeline: {activeService.timeline}</span>
                </div>
              </div>

              {/* Features */}
              <div className="mb-8">
                <h4 className="text-xl font-bold text-gray-900 mb-4">What's Included</h4>
                <div className="grid sm:grid-cols-2 gap-3">
                  {activeService.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3 bg-gray-50 rounded-lg p-3">
                      <FaCheck className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="border-t border-gray-200 pt-8">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div>
                    <p className="text-gray-600">
                      Ready to get started with {activeService.title.toLowerCase()}?
                    </p>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <button className="px-6 py-3 bg-surepath-blue text-white rounded-lg font-semibold hover:bg-surepath-dark-blue transition-colors flex items-center justify-center space-x-2">
                      <FaCalendarCheck className="w-5 h-5" />
                      <span>Schedule Consultation</span>
                    </button>
                    <button className="px-6 py-3 border border-surepath-blue text-surepath-blue rounded-lg font-semibold hover:bg-surepath-light transition-colors">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Services */}
            <div className="mt-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Additional Support Services</h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {additionalServices.map((service, index) => (
                  <div 
                    key={index}
                    className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                  >
                    <div className="w-12 h-12 bg-surepath-light rounded-lg flex items-center justify-center mb-4">
                      <service.icon className="w-6 h-6 text-surepath-blue" />
                    </div>
                    <h4 className="font-bold text-gray-900 mb-2">{service.title}</h4>
                    <p className="text-sm text-gray-600">{service.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-8 bg-white rounded-xl shadow-lg">
            <div className="text-4xl font-bold text-surepath-blue mb-2">2,500+</div>
            <div className="text-gray-600">Students Guided</div>
          </div>
          <div className="text-center p-8 bg-white rounded-xl shadow-lg">
            <div className="text-4xl font-bold text-surepath-blue mb-2">98%</div>
            <div className="text-gray-600">Visa Success Rate</div>
          </div>
          <div className="text-center p-8 bg-white rounded-xl shadow-lg">
            <div className="text-4xl font-bold text-surepath-blue mb-2">500+</div>
            <div className="text-gray-600">Partner Universities</div>
          </div>
        </div>
      </div>
    </section>
  )
}