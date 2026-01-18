"use client"

import { useState, useEffect } from 'react'
import { FaPlay, FaArrowRight, FaCheckCircle, FaUniversity, FaGlobeAmericas, FaUserGraduate } from 'react-icons/fa'
import { FiChevronDown } from 'react-icons/fi'
import { MdOutlineTravelExplore } from "react-icons/md";
import { FaWarehouse } from "react-icons/fa";
import { LiaUserGraduateSolid } from "react-icons/lia";
import { GiGraduateCap } from "react-icons/gi";

export default function Hero() {
  const [hoveredElement, setHoveredElement] = useState<string | null>(null)
  const [typedText, setTypedText] = useState('')
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  
  const words = ['Global Education', 'Study Abroad', 'Career Growth']
  const services = [ 'Visa Application', 'PTE Test Preparation', 'IELTS Training',  'Study Abroad Acommodation']

  useEffect(() => {
    const currentWord = words[currentWordIndex]
    let i = 0
    const typing = setInterval(() => {
      if (i <= currentWord.length) {
        setTypedText(currentWord.substring(0, i))
        i++
      } else {
        clearInterval(typing)
        setTimeout(() => {
          setCurrentWordIndex((prev) => (prev + 1) % words.length)
        }, 2000)
      }
    }, 100)
    
    return () => clearInterval(typing)
  }, [currentWordIndex])

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-white via-surepath-light to-blue-50">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Blobs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-surepath-accent/10 to-surepath-light-blue/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-surepath-blue/10 to-surepath-accent/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `linear-gradient(to right, #0052A5 1px, transparent 1px),
                            linear-gradient(to bottom, #0052A5 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="relative container mx-auto px-4 py-20 md:py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="relative z-10">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-surepath-blue/10 to-surepath-accent/10 px-4 py-2 rounded-full mb-8 border border-surepath-blue/20">
              <div className="w-2 h-2 bg-surepath-blue rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-surepath-blue">Trusted by 2,500+ Students Worldwide</span>
            </div>

            {/* Main Headline with Typing Animation */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="block text-surepath-dark-blue">Your Path to</span>
              <div className="relative inline-block mt-2">
                <span className="text-surepath-blue bg-clip-text bg-gradient-to-r from-surepath-blue to-surepath-light-blue">
                  {typedText}
                </span>
                <span className="ml-2 inline-block w-1 h-12 bg-surepath-blue animate-blink"></span>
                <div className="absolute -bottom-2 left-0 w-full h-2 bg-gradient-to-r from-surepath-accent/40 to-transparent rounded-full"></div>
              </div>
            </h1>
            
            {/* Subtitle */}
            <p className="text-xl text-gray-600 mb-10 max-w-2xl leading-relaxed">
              We guide ambitious students to prestigious international universities with 
              personalized support, expert visa assistance, and comprehensive services for 
              a seamless study abroad experience.
            </p>

            {/* Program Selection */}
            <div className="mb-10">
              <p className="text-gray-700 font-medium mb-4">I want to:</p>
              <div className="flex flex-wrap gap-3">
                {services.map((service) => (
                  <button
                    key={service}
                    onMouseEnter={() => setHoveredElement(service)}
                    onMouseLeave={() => setHoveredElement(null)}
                    className={`group px-6 py-3 rounded-xl border-2 transition-all duration-300 ${
                      hoveredElement === service
                        ? 'border-surepath-blue bg-surepath-blue text-gray-500 shadow-lg transform -translate-y-1'
                        : 'border-gray-200 hover:border-surepath-blue/50 hover:text-gray-600'
                    }`}
                  >
                    <span className="flex items-center space-x-2">
                      <span>{service}</span>
                      <FaArrowRight className={`w-4 h-4 transition-transform ${
                        hoveredElement === service ? 'translate-x-1' : 'group-hover:translate-x-1'
                      }`} />
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* CTA Buttons with Icons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-16">
              <button className="group relative px-8 py-4 bg-gradient-to-r from-surepath-blue to-surepath-light-blue text-white rounded-xl font-semibold hover:shadow-2xl hover:shadow-surepath-blue/30 transition-all duration-300 transform hover:-translate-y-1">
                <div className="absolute inset-0 bg-white/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <span className="relative flex items-center justify-center space-x-3">
                  <span>Get Consultation</span>
                  <FaPlay className="w-5 h-5" />
                </span>
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-3 gap-8">
              <div className="text-center group cursor-pointer">
                <div className="relative mb-2">
                  <div className="text-4xl font-bold text-surepath-blue group-hover:scale-110 transition-transform">2,500+</div>
                  <div className="absolute -top-2 -right-2 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
                </div>
                <div className="flex items-center justify-center space-x-2 text-gray-600">
                  <FaUserGraduate className="w-4 h-4" />
                  <span className="text-sm">Students Helped</span>
                </div>
              </div>
              
              <div className="text-center group cursor-pointer">
                <div className="relative mb-2">
                  <div className="text-4xl font-bold text-surepath-blue group-hover:scale-110 transition-transform">98%</div>
                  <div className="absolute -top-2 -right-2 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
                </div>
                <div className="flex items-center justify-center space-x-2 text-gray-600">
                  <FaCheckCircle className="w-4 h-4" />
                  <span className="text-sm">Visa Success</span>
                </div>
              </div>
              
              <div className="text-center group cursor-pointer">
                <div className="relative mb-2">
                  <div className="text-4xl font-bold text-surepath-blue group-hover:scale-110 transition-transform">50+</div>
                  <div className="absolute -top-2 -right-2 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
                </div>
                <div className="flex items-center justify-center space-x-2 text-gray-600">
                  <FaGlobeAmericas className="w-4 h-4" />
                  <span className="text-sm">Countries</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Visual - Enhanced Globe Animation */}
          <div className="relative h-[500px] lg:h-[600px]">
            {/* Animated Orbit Rings */}
            <div className="absolute inset-0 flex items-center justify-center">
              {/* Outer Ring */}
              <div className="absolute w-[500px] h-[500px] border-2 border-surepath-blue/10 rounded-full animate-spin-slow"></div>
              {/* Middle Ring */}
              <div className="absolute w-[400px] h-[400px] border-2 border-surepath-accent/20 rounded-full animate-spin-slow" style={{ animationDuration: '15s' }}></div>
            </div>

            {/* Main Globe */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-80 h-80 lg:w-96 lg:h-96">
                {/* Glowing Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-surepath-blue/20 to-surepath-accent/20 rounded-full blur-xl animate-pulse"></div>
                
                {/* Globe */}
                <div className="absolute inset-0 bg-gradient-to-br from-surepath-blue via-surepath-light-blue to-surepath-accent rounded-full animate-spin-slow shadow-2xl shadow-surepath-blue/30">
                  {/* Globe Details */}
                  <div className="absolute top-1/4 left-1/4 w-16 h-16 bg-white/10 rounded-full"></div>
                  <div className="absolute bottom-1/4 right-1/4 w-20 h-20 bg-white/10 rounded-full"></div>
                  <div className="absolute top-1/2 left-1/3 w-12 h-12 bg-white/10 rounded-full"></div>
                </div>
                
                {/* Inner White Circle */}
                <div className="absolute inset-8 bg-white rounded-full shadow-inner">
                  {/* University Building Silhouette */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="flex items-end justify-center space-x-1">
                      {[40, 60, 80, 60, 40].map((height, i) => (
                        <div 
                          key={i}
                          className="w-4 bg-gradient-to-t from-surepath-blue to-surepath-light-blue rounded-t"
                          style={{ height: `${height}px` }}
                        ></div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Floating Service Cards */}
                {[
                  { icon: <FaUniversity size={27}/>, title: 'University Admissions', delay: '0s', position: 'top-4 left-4' },
                  { icon: <MdOutlineTravelExplore size={27}/>, title: 'Visa Processing', delay: '0.5s', position: 'top-4 right-4' },
                  { icon: <FaWarehouse size={27}/>, title: 'Accommodation', delay: '1s', position: 'bottom-4 left-10' },
                  { icon: '🌐', title: 'Global Network', delay: '2.5s', position: 'top-1/2 -right-8' },
                ].map((item, index) => (
                  <div
                    key={index}
                    className={`absolute ${item.position} group`}
                    style={{ animationDelay: item.delay }}
                  >
                    <div className="relative animate-float">
                      {/* Connecting Line */}
                      <div className="absolute top-1/2 left-1/2 w-24 h-0.5 bg-gradient-to-r from-surepath-accent/30 to-transparent transform -translate-y-1/2 group-hover:w-32 transition-all duration-300"></div>
                      
                      {/* Card */}
                      <div className="relative bg-white/95 backdrop-blur-sm p-4 rounded-2xl shadow-xl border border-gray-100 group-hover:shadow-2xl group-hover:scale-110 transition-all duration-300">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-surepath-blue to-surepath-accent flex items-center justify-center mb-2 group-hover:rotate-12 transition-transform">
                          <span className="text-xl">{item.icon}</span>
                        </div>
                        <div className="text-sm font-semibold text-gray-800 whitespace-nowrap">
                          {item.title}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Animated Students */}
                <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2">
                  <div className="flex items-center space-x-2">
                    {[<FaUserGraduate size={27}/>, <LiaUserGraduateSolid size={27}/>, '👩‍🎓', <GiGraduateCap size={27}/>].map((emoji, i) => (
                      <div
                        key={i}
                        className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg animate-bounce"
                        style={{ animationDelay: `${i * 0.2}s` }}
                      >
                        <span className="text-lg">{emoji}</span>
                      </div>
                    ))}
                    <div className="text-sm text-gray-600 font-medium">
                      Join 2,500+ successful students
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating University Logos */}
            <div className="absolute bottom-0 left-0 right-0">
              <div className="flex items-center justify-center space-x-8 opacity-70">
                {['Harvard', 'Stanford', 'MIT', 'Oxford', 'Cambridge'].map((uni, i) => (
                  <div
                    key={i}
                    className="text-xs font-bold text-gray-400 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-lg border border-gray-200 animate-float"
                    style={{ animationDelay: `${i * 0.3}s` }}
                  >
                    {uni}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Add CSS animations */}
      <style jsx>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-spin-slow {
          animation: spin-slow 30s linear infinite;
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-blink {
          animation: blink 1s infinite;
        }
        .animate-bounce {
          animation: bounce 2s infinite;
        }
      `}</style>
    </section>
  )
}