"use client"

import { useState, useRef } from 'react'
import { FaUniversity, FaChartLine, FaStar, FaChevronDown, FaChevronUp, FaSearch, FaGlobeAmericas, FaGlobeEurope, FaGlobeAsia, FaGlobe } from 'react-icons/fa'
import { IoMdClose } from 'react-icons/io'

const destinations = [
  {
    id: 1,
    country: 'United States',
    flag: '🇺🇸',
    region: 'North America',
    universities: 1200,
    popularField: 'Business & Technology',
    description: 'Home to world-renowned Ivy League universities and cutting-edge research institutions.',
    imageColor: 'bg-gradient-to-br from-blue-500 via-white to-red-500',
    featured: true,
    costRange: 'High',
    language: 'English',
  },
  {
    id: 2,
    country: 'United Kingdom',
    flag: '🇬🇧',
    region: 'Europe',
    universities: 400,
    popularField: 'Humanities & Law',
    description: 'World-class education with centuries of academic tradition and global recognition.',
    imageColor: 'bg-gradient-to-br from-red-500 via-white to-blue-500',
    featured: true,
    costRange: 'High',
    language: 'English',
  },
  {
    id: 3,
    country: 'Australia',
    flag: '🇦🇺',
    region: 'Asia Pacific',
    universities: 200,
    popularField: 'Marine Biology & Healthcare',
    description: 'High-quality education in a beautiful, multicultural environment with strong research focus.',
    imageColor: 'bg-gradient-to-br from-green-500 via-white to-yellow-500',
    featured: true,
    costRange: 'Medium-High',
    language: 'English',
  },
  {
    id: 4,
    country: 'Canada',
    flag: '🇨🇦',
    region: 'North America',
    universities: 300,
    popularField: 'Engineering & Computer Science',
    description: 'Affordable education with excellent post-graduation work opportunities and multicultural cities.',
    imageColor: 'bg-gradient-to-br from-red-500 via-white to-red-300',
    featured: true,
    costRange: 'Medium',
    language: 'English/French',
  },
  {
    id: 5,
    country: 'Thailand',
    flag: '🇹🇭',
    region: 'Asia Pacific',
    universities: 85,
    popularField: 'Tourism & Hospitality',
    description: 'Affordable living costs with growing international programs in tropical environment.',
    imageColor: 'bg-gradient-to-br from-blue-500 via-white to-red-500',
    featured: true,
    costRange: 'Low',
    language: 'Thai/English',
  },
  {
    id: 6,
    country: 'New Zealand',
    flag: '🇳🇿',
    region: 'Asia Pacific',
    universities: 25,
    popularField: 'Agriculture & Environmental Science',
    description: 'Safe, scenic environment with high-quality education and work opportunities.',
    imageColor: 'bg-gradient-to-br from-blue-900 via-white to-red-500',
    featured: true,
    costRange: 'Medium',
    language: 'English',
  },
  {
    id: 7,
    country: 'Germany',
    flag: '🇩🇪',
    region: 'Europe',
    universities: 150,
    popularField: 'Engineering & Automotive',
    description: 'Tuition-free education at public universities with strong industry connections.',
    imageColor: 'bg-gradient-to-br from-black via-red-500 to-yellow-500',
    featured: true,
    costRange: 'Low-Medium',
    language: 'German/English',
  },
  {
    id: 8,
    country: 'Japan',
    flag: '🇯🇵',
    region: 'Asia Pacific',
    universities: 180,
    popularField: 'Technology & Robotics',
    description: 'Blend of traditional culture with cutting-edge technology and research opportunities.',
    imageColor: 'bg-gradient-to-br from-red-500 via-white to-red-500',
    featured: false,
    costRange: 'Medium-High',
    language: 'Japanese/English',
  },
  {
    id: 9,
    country: 'France',
    flag: '🇫🇷',
    region: 'Europe',
    universities: 120,
    popularField: 'Art & Fashion',
    description: 'Rich cultural heritage with prestigious universities and research centers.',
    imageColor: 'bg-gradient-to-br from-blue-500 via-white to-red-500',
    featured: false,
    costRange: 'Medium',
    language: 'French/English',
  },
  {
    id: 10,
    country: 'Singapore',
    flag: '🇸🇬',
    region: 'Asia Pacific',
    universities: 35,
    popularField: 'Business & Finance',
    description: 'Global education hub with world-class universities and multicultural environment.',
    imageColor: 'bg-gradient-to-br from-red-500 via-white to-red-500',
    featured: false,
    costRange: 'High',
    language: 'English',
  },
  {
    id: 11,
    country: 'Netherlands',
    flag: '🇳🇱',
    region: 'Europe',
    universities: 45,
    popularField: 'Engineering & Design',
    description: 'Innovative education system with English-taught programs and international focus.',
    imageColor: 'bg-gradient-to-br from-red-500 via-white to-blue-500',
    featured: false,
    costRange: 'Medium',
    language: 'Dutch/English',
  },
  {
    id: 12,
    country: 'Sweden',
    flag: '🇸🇪',
    region: 'Europe',
    universities: 40,
    popularField: 'Sustainability & Technology',
    description: 'Progressive education system with focus on innovation and sustainability.',
    imageColor: 'bg-gradient-to-br from-blue-500 via-yellow-500 to-blue-500',
    featured: false,
    costRange: 'Medium-High',
    language: 'Swedish/English',
  },
]

const regions = [
  { id: 'all', name: 'All', icon: FaGlobe, count: destinations.length },
  { id: 'north-america', name: 'NA', icon: FaGlobeAmericas, count: destinations.filter(d => d.region === 'North America').length, fullName: 'North America' },
  { id: 'europe', name: 'EU', icon: FaGlobeEurope, count: destinations.filter(d => d.region === 'Europe').length, fullName: 'Europe' },
  { id: 'asia-pacific', name: 'APAC', icon: FaGlobeAsia, count: destinations.filter(d => d.region === 'Asia Pacific').length, fullName: 'Asia Pacific' },
]

const sortOptions = [
  { id: 'featured', name: 'Featured' },
  { id: 'universities', name: 'Universities' },
  { id: 'name', name: 'A-Z' },
  { id: 'cost-low', name: 'Low Cost' },
  { id: 'cost-high', name: 'High Cost' },
]

export default function MobileFriendlyDestinations() {
  const [selectedRegion, setSelectedRegion] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [sortBy, setSortBy] = useState('featured')
  const [showMore, setShowMore] = useState(false)
  const searchInputRef = useRef<HTMLInputElement>(null)

  // Filter destinations based on region and search
  const filteredDestinations = destinations.filter(destination => {
    // Filter by region
    const regionMatch = selectedRegion === 'all' || destination.region.toLowerCase().replace(' ', '-') === selectedRegion
    
    // Filter by search query
    const searchMatch = !searchQuery || 
      destination.country.toLowerCase().includes(searchQuery.toLowerCase()) ||
      destination.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      destination.popularField.toLowerCase().includes(searchQuery.toLowerCase())
    
    return regionMatch && searchMatch
  })

  // Sort destinations
  const sortedDestinations = [...filteredDestinations].sort((a, b) => {
    switch (sortBy) {
      case 'featured':
        return (b.featured ? 1 : 0) - (a.featured ? 1 : 0)
      case 'universities':
        return b.universities - a.universities
      case 'name':
        return a.country.localeCompare(b.country)
      case 'cost-low':
        const costOrder = { 'Low': 1, 'Low-Medium': 2, 'Medium': 3, 'Medium-High': 4, 'High': 5 }
        return (costOrder[a.costRange as keyof typeof costOrder] || 0) - (costOrder[b.costRange as keyof typeof costOrder] || 0)
      case 'cost-high':
        const costOrderHigh = { 'High': 1, 'Medium-High': 2, 'Medium': 3, 'Low-Medium': 4, 'Low': 5 }
        return (costOrderHigh[a.costRange as keyof typeof costOrderHigh] || 0) - (costOrderHigh[b.costRange as keyof typeof costOrderHigh] || 0)
      default:
        return 0
    }
  })

  // Limit displayed destinations initially
  const displayDestinations = showMore ? sortedDestinations : sortedDestinations.slice(0, 6)

  const handleClearSearch = () => {
    setSearchQuery('')
    if (searchInputRef.current) {
      searchInputRef.current.focus()
    }
  }

  return (
    <section className="py-10 sm:py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
            Explore <span className="text-surepath-blue">Study Abroad</span> Destinations
          </h2>
          <p className="text-base sm:text-lg text-gray-600 px-2">
            Discover 50+ study destinations with expert guidance and comprehensive support
          </p>
        </div>

        {/* Filters Row */}
        <div className="max-w-4xl mx-auto mb-6 sm:mb-8">
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            {/* Region Filter - Mobile Scrollable */}
            <div className="flex-1">
              <div className="flex sm:inline-flex bg-gray-100 rounded-lg p-1 w-full overflow-x-auto sm:overflow-visible scrollbar-hide">
                {regions.map((region) => {
                  const Icon = region.icon
                  return (
                    <button
                      key={region.id}
                      onClick={() => setSelectedRegion(region.id)}
                      className={`flex-shrink-0 flex items-center justify-center px-3 sm:px-4 py-2 sm:py-3 rounded-md text-xs sm:text-sm font-medium transition-all ${
                        selectedRegion === region.id
                          ? 'bg-surepath-blue text-white shadow-md'
                          : 'text-gray-600 hover:text-gray-900 hover:bg-gray-200'
                      }`}
                      title={region.fullName || region.name}
                    >
                      <Icon className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />
                      <span className="hidden sm:inline">{region.name}</span>
                      <span className="sm:hidden">{region.name}</span>
                      <span className={`ml-1.5 sm:ml-2 px-1.5 py-0.5 rounded-full text-xs ${
                        selectedRegion === region.id 
                          ? 'bg-white text-surepath-blue' 
                          : 'bg-gray-300 text-gray-700'
                      }`}>
                        {region.count}
                      </span>
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Sort Dropdown */}
            <div className="w-full sm:w-auto">
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none w-full sm:w-auto bg-white border border-gray-300 rounded-lg px-4 py-2.5 sm:py-3 pr-8 text-sm font-medium text-gray-700 focus:outline-none focus:ring-2 focus:ring-surepath-blue focus:border-transparent"
                >
                  {sortOptions.map((option) => (
                    <option key={option.id} value={option.id}>
                      Sort: {option.name}
                    </option>
                  ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <FaChevronDown className="h-3 w-3 sm:h-4 sm:w-4" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Destinations Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 px-4 sm:px-0">
          {displayDestinations.map((destination) => (
            <div 
              key={destination.id}
              className="group bg-white rounded-xl sm:rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl sm:hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 sm:hover:-translate-y-2"
            >
              {/* Flag Banner */}
              <div className={`h-1.5 sm:h-2 ${destination.imageColor}`}></div>
              
              {/* Destination Card Content */}
              <div className="p-4 sm:p-6">
                {/* Country Header */}
                <div className="flex items-start justify-between mb-3 sm:mb-4">
                  <div className="flex items-center space-x-2 sm:space-x-3">
                    <span className="text-3xl sm:text-4xl">{destination.flag}</span>
                    <div className="min-w-0">
                      <h3 className="text-lg sm:text-xl font-bold text-gray-900 truncate">{destination.country}</h3>
                      <div className="flex items-center space-x-2 mt-0.5 sm:mt-1">
                        <span className="text-xs sm:text-sm text-gray-500 truncate">{destination.region}</span>
                        {destination.featured && (
                          <span className="flex-shrink-0 px-1.5 sm:px-2 py-0.5 sm:py-1 bg-yellow-100 text-yellow-800 text-xs font-medium rounded-full">
                            Featured
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 line-clamp-2 sm:line-clamp-3">
                  {destination.description}
                </p>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-4 sm:mb-6">
                  <div className="bg-gray-50 rounded-lg sm:rounded-xl p-3 sm:p-4">
                    <div className="flex items-center space-x-2 sm:space-x-3">
                      <div className="p-1.5 sm:p-2 bg-blue-100 rounded-lg">
                        <FaUniversity className="w-4 h-4 sm:w-5 sm:h-5 text-surepath-blue" />
                      </div>
                      <div className="min-w-0">
                        <div className="text-base sm:text-lg font-bold text-gray-900 truncate">{destination.universities}+</div>
                        <div className="text-xs text-gray-500 truncate">Universities</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 rounded-lg sm:rounded-xl p-3 sm:p-4">
                    <div className="flex items-center space-x-2 sm:space-x-3">
                      <div className="p-1.5 sm:p-2 bg-green-100 rounded-lg">
                        <FaChartLine className="w-4 h-4 sm:w-5 sm:h-5 text-green-600" />
                      </div>
                      <div className="min-w-0">
                        <div className="text-xs sm:text-sm font-bold text-gray-900 truncate">
                          {destination.popularField}
                        </div>
                        <div className="text-xs text-gray-500 truncate">Popular Field</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Additional Info */}
                <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                  <div className="flex justify-between text-xs sm:text-sm">
                    <span className="text-gray-500">Language:</span>
                    <span className="font-medium text-gray-900 truncate ml-2">{destination.language}</span>
                  </div>
                  <div className="flex justify-between text-xs sm:text-sm">
                    <span className="text-gray-500">Cost Range:</span>
                    <span className={`font-medium truncate ml-2 ${
                      destination.costRange === 'Low' ? 'text-green-600' :
                      destination.costRange === 'High' ? 'text-red-600' :
                      'text-yellow-600'
                    }`}>
                      {destination.costRange}
                    </span>
                  </div>
                </div>

                {/* Popular Field Highlight */}
                <div className="flex items-center space-x-2 sm:space-x-3 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg sm:rounded-xl p-3 sm:p-4">
                  <div className="p-1.5 sm:p-2 bg-white rounded-lg shadow-sm">
                    <FaStar className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-500" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs text-gray-500">Top Field</div>
                    <div className="text-sm sm:text-base font-semibold text-gray-900 truncate">{destination.popularField}</div>
                  </div>
                </div>
              </div>

              {/* Footer Actions */}
              <div className="border-t border-gray-100 p-4 sm:p-6 bg-gray-50">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 sm:gap-0">
                  <button className="text-surepath-blue font-semibold hover:text-surepath-dark-blue transition-colors flex items-center justify-center sm:justify-start space-x-1 text-sm sm:text-base">
                    <span>View Programs</span>
                    <FaChevronDown className="w-3 h-3" />
                  </button>
                  <div className="flex flex-col sm:flex-row gap-2 sm:space-x-2">
                    <button className="px-3 sm:px-4 py-1.5 sm:py-2 bg-surepath-blue text-black rounded-lg text-xs sm:text-sm font-medium hover:bg-surepath-dark-blue transition-colors">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More / View All */}
        <div className="text-center mt-12 sm:mt-16 px-4 sm:px-0">
          {sortedDestinations.length > 6 && (
            <button
              onClick={() => setShowMore(!showMore)}
              className="bg-surepath-blue text-black px-6 sm:px-8 py-3 rounded-xl font-semibold hover:bg-surepath-dark-blue transition-colors flex items-center justify-center mx-auto space-x-2 shadow-lg hover:shadow-xl w-full sm:w-auto"
            >
              <span className="text-sm sm:text-base">
                {showMore ? 'Show Less' : `View All ${sortedDestinations.length} Destinations`}
              </span>
              {showMore ? <FaChevronUp className="w-4 h-4" /> : <FaChevronDown className="w-4 h-4" />}
            </button>
          )}
          
          <div className="mt-6 sm:mt-8 flex flex-wrap justify-center gap-3 sm:gap-4 text-xs sm:text-sm text-gray-500">
            <div className="flex items-center space-x-1.5 sm:space-x-2">
              <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-surepath-blue"></div>
              <span>500+ Partner Universities</span>
            </div>
            <div className="flex items-center space-x-1.5 sm:space-x-2">
              <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-green-500"></div>
              <span>95% Success Rate</span>
            </div>
            <div className="flex items-center space-x-1.5 sm:space-x-2">
              <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-yellow-500"></div>
              <span>Free Consultation</span>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 sm:mt-20 bg-gradient-to-r from-surepath-blue to-surepath-dark-blue rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 text-white mx-4 sm:mx-0">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4 text-black">
              Can't Find Your Preferred Destination?
            </h3>
            <p className="text-sm sm:text-base lg:text-lg text-blue-300 mb-6 sm:mb-8 px-2 sm:px-0">
              We work with 50+ countries worldwide. Contact our experts to explore more options.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <button className="px-6 sm:px-8 py-3 bg-blue-500 hover:text-black text-surepath-blue font-semibold rounded-xl hover:bg-gray-100 transition-colors text-sm sm:text-base">
                Schedule Free Consultation
              </button>
              <button className="px-6 sm:px-8 py-3 bg-transparent border-2 border-white text-black font-semibold rounded-xl hover:bg-white/10 transition-colors text-sm sm:text-base">
                Contact Our Team
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}