"use client"

import { useState } from 'react'
import { FaUniversity, FaChartLine, FaStar } from 'react-icons/fa'

const destinations = [
  {
    country: 'United States',
    flag: '🇺🇸',
    universities: 1200,
    popularField: 'Business & Technology',
    description: 'Home to world-renowned Ivy League universities and cutting-edge research institutions.',
    imageColor: 'bg-gradient-to-br from-blue-500 to-red-500',
  },
  {
    country: 'United Kingdom',
    flag: '🇬🇧',
    universities: 400,
    popularField: 'Humanities & Law',
    description: 'World-class education with centuries of academic tradition and global recognition.',
    imageColor: 'bg-gradient-to-br from-red-500 to-blue-500',
  },
  {
    country: 'Australia',
    flag: '🇦🇺',
    universities: 200,
    popularField: 'Marine Biology & Healthcare',
    description: 'High-quality education in a beautiful, multicultural environment with strong research focus.',
    imageColor: 'bg-gradient-to-br from-green-500 to-yellow-500',
  },
  {
    country: 'Canada',
    flag: '🇨🇦',
    universities: 300,
    popularField: 'Engineering & Computer Science',
    description: 'Affordable education with excellent post-graduation work opportunities and multicultural cities.',
    imageColor: 'bg-gradient-to-br from-red-500 to-white',
  },
  {
    country: 'Germany',
    flag: '🇩🇪',
    universities: 150,
    popularField: 'Engineering & Automotive',
    description: 'Tuition-free education at public universities with strong industry connections.',
    imageColor: 'bg-gradient-to-br from-black to-yellow-500',
  },
  {
    country: 'Japan',
    flag: '🇯🇵',
    universities: 180,
    popularField: 'Technology & Robotics',
    description: 'Blend of traditional culture with cutting-edge technology and research opportunities.',
    imageColor: 'bg-gradient-to-br from-red-500 to-white',
  },
]

const regions = [
  { id: 'all', name: 'All Destinations' },
  { id: 'north-america', name: 'North America' },
  { id: 'europe', name: 'Europe' },
  { id: 'asia-pacific', name: 'Asia Pacific' },
]

export default function Destinations() {
  const [selectedRegion, setSelectedRegion] = useState('all')

  const filteredDestinations = selectedRegion === 'all' 
    ? destinations 
    : destinations.filter(dest => {
        if (selectedRegion === 'north-america') return ['United States', 'Canada'].includes(dest.country)
        if (selectedRegion === 'europe') return ['United Kingdom', 'Germany'].includes(dest.country)
        if (selectedRegion === 'asia-pacific') return ['Australia', 'Japan'].includes(dest.country)
        return false
      })

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-surepath-dark-blue mb-4">
            Explore Study Abroad Destinations
          </h2>
          <p className="text-lg text-gray-600">
            Discover top study destinations with our expert guidance and comprehensive support services
          </p>
        </div>

        {/* Region Filter */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-gray-100 rounded-lg p-1">
            {regions.map((region) => (
              <button
                key={region.id}
                onClick={() => setSelectedRegion(region.id)}
                className={`px-6 py-2 rounded-md text-sm font-medium transition-colors ${
                  selectedRegion === region.id
                    ? 'bg-surepath-blue text-white'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {region.name}
              </button>
            ))}
          </div>
        </div>

        {/* Destinations Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredDestinations.map((destination, index) => (
            <div 
              key={index}
              className="group bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Destination Header */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <span className="text-3xl">{destination.flag}</span>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{destination.country}</h3>
                      <div className="flex items-center space-x-1 text-sm text-gray-500">
                        <FaUniversity className="w-4 h-4" />
                        <span>{destination.universities}+ Universities</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-600 mb-6">
                  {destination.description}
                </p>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-surepath-light rounded-lg p-3">
                    <div className="flex items-center space-x-2">
                      <FaUniversity className="w-5 h-5 text-surepath-blue" />
                      <div>
                        <div className="text-lg font-bold text-gray-900">{destination.universities}+</div>
                        <div className="text-xs text-gray-500">Universities</div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-surepath-light rounded-lg p-3">
                    <div className="flex items-center space-x-2">
                      <FaChartLine className="w-5 h-5 text-surepath-blue" />
                      <div>
                        <div className="text-lg font-bold text-gray-900">
                          {destination.popularField.split(' ')[0]}
                        </div>
                        <div className="text-xs text-gray-500">Popular Field</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Popular Field */}
                <div className="flex items-center space-x-2 bg-gradient-to-r from-surepath-light to-blue-50 rounded-lg p-3">
                  <FaStar className="w-5 h-5 text-yellow-500" />
                  <span className="font-medium text-gray-900">
                    Popular: {destination.popularField}
                  </span>
                </div>
              </div>

              {/* Footer */}
              <div className="border-t border-gray-100 p-6 bg-gray-50">
                <div className="flex justify-between items-center">
                  <button className="text-surepath-blue font-semibold hover:text-surepath-dark-blue transition-colors">
                    Explore Programs
                  </button>
                  <button className="px-4 py-2 bg-surepath-blue text-white rounded-lg text-sm font-medium hover:bg-surepath-dark-blue transition-colors">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-16">
          <button className="bg-surepath-blue text-white px-8 py-3 rounded-lg font-semibold hover:bg-surepath-dark-blue transition-colors flex items-center justify-center mx-auto space-x-2">
            <span>View All 50+ Destinations</span>
            <span>→</span>
          </button>
          <p className="text-gray-500 text-sm mt-4">
            500+ universities available across all destinations
          </p>
        </div>
      </div>
    </section>
  )
}