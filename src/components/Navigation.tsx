import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about-us', label: 'About' },
    { path: '/beginner-men', label: 'Beginner Men' },
    { path: '/beginner-women', label: 'Beginner Women' },
    { path: '/experienced-hunters', label: 'Experienced' },
    { path: '/veteran-immersions', label: 'Veterans' },
    { path: '/alumni', label: 'Alumni' },
  ]

  return (
    <nav className="sticky top-0 z-50 bg-earth-charcoal/95 backdrop-blur-sm border-b border-earth-stone/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="text-2xl font-serif font-bold text-earth-tan hover:text-white transition-colors">
            Sacred Hunting
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-colors hover:text-earth-tan ${
                  location.pathname === item.path 
                    ? 'text-earth-tan' 
                    : 'text-gray-300'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden flex flex-col justify-center items-center w-8 h-8 text-gray-300 hover:text-white transition-colors"
          >
            <span className={`block w-6 h-0.5 bg-current transition-transform ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
            <span className={`block w-6 h-0.5 bg-current my-1 transition-opacity ${isMenuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-0.5 bg-current transition-transform ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-earth-charcoal border-t border-earth-stone/20">
            <div className="py-4 space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-4 py-2 text-base font-medium transition-colors hover:text-earth-tan ${
                    location.pathname === item.path 
                      ? 'text-earth-tan bg-earth-stone/10' 
                      : 'text-gray-300'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navigation