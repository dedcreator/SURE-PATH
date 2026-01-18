"use client"

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FiMenu, FiX, FiChevronDown } from 'react-icons/fi'
import Image from 'next/image'

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services', submenu: [
    { name: 'Visa Application', href: '/services/semester' },
    { name: 'PTE Test Preparation', href: '/service/degree' },
    { name: 'IELTS Training', href: '/services/' },
    { name: 'Study Abroad Acommodation', href: '/services/' },
    { name: 'Student Health Insurance', href: '/services/' },
  ]},
  { name: 'Destinations', href: '/destinations', submenu: [
    { name: 'Study in United States', href: '/destinations/usa' },
    { name: 'Study in United Kingdom', href: '/destinations/uk' },
    { name: 'Study in Canada', href: '/destinations/canada' },
    { name: 'Study in Australia', href: '/destinations/australia' },
    { name: 'Study in Thailand', href: '/destinations/thailand' },
    { name: 'Study in New Zeland', href: '/destinations/newzeland' },
    { name: 'Study in Germany', href: '/destinations/germany' },
  ]},
  { name: 'About', href: '/about' },
  { name: 'Contact Us', href: '/contact' },
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null)
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-surepath-blue to-surepath-light-blue">
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white">
                <div className="w-4 h-4 rounded-full bg-surepath-accent"></div>
              </div>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-surepath-blue">
              <Image 
                src="/images/logo-nobg.png" 
                alt="SurePath Travel Abroad Logo"
                width={270}  // Actual width in pixels
                height={270}   // Actual height in pixels
                />
              </h1>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                <Link
                  href={item.href}
                  className={`flex items-center space-x-1 text-sm font-medium transition-colors hover:text-surepath-blue ${
                    pathname === item.href 
                      ? 'text-surepath-blue font-semibold' 
                      : 'text-gray-700'
                  }`}
                >
                  <span>{item.name}</span>
                  {item.submenu && <FiChevronDown className="w-4 h-4" />}
                </Link>
                
                {/* Submenu Dropdown */}
                {item.submenu && (
                  <div className="absolute left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    {item.submenu.map((subItem) => (
                      <Link
                        key={subItem.name}
                        href={subItem.href}
                        className="block px-4 py-3 text-sm text-gray-700 hover:bg-surepath-light hover:text-surepath-blue transition-colors first:rounded-t-lg last:rounded-b-lg"
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center">
            <button className="bg-surepath-blue text-black px-6 py-3 rounded-lg font-semibold hover:bg-surepath-dark-blue transition-colors shadow-md hover:shadow-lg">
              Send A Message
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden transition-all duration-300 ${isMenuOpen ? 'max-h-screen py-4' : 'max-h-0 overflow-hidden'}`}>
          <div className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <div key={item.name}>
                <Link
                  href={item.href}
                  className={`flex items-center justify-between text-base font-medium px-4 py-3 rounded-lg transition-colors ${
                    pathname === item.href 
                      ? 'bg-surepath-blue text-white' 
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                  onClick={() => !item.submenu && setIsMenuOpen(false)}
                >
                  <span>{item.name}</span>
                  {item.submenu && (
                    <button
                      onClick={(e) => {
                        e.preventDefault()
                        setOpenSubmenu(openSubmenu === item.name ? null : item.name)
                      }}
                    >
                      <FiChevronDown className={`w-5 h-5 transition-transform ${openSubmenu === item.name ? 'rotate-180' : ''}`} />
                    </button>
                  )}
                </Link>
                
                {/* Mobile Submenu */}
                {item.submenu && openSubmenu === item.name && (
                  <div className="ml-4 mt-2 space-y-2 border-l-2 border-surepath-light pl-4">
                    {item.submenu.map((subItem) => (
                      <Link
                        key={subItem.name}
                        href={subItem.href}
                        className="block py-2 text-sm text-gray-600 hover:text-surepath-blue transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            
            <button className="mt-4 bg-surepath-blue text-white px-6 py-3 rounded-lg font-semibold hover:bg-surepath-dark-blue transition-colors">
              Send A Message
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}