import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const navItems = [
    { path: '/about-us', label: 'About Us' },
    { path: '/beginner-men', label: 'Our Programs', isDropdown: true },
    { path: '/beginner-men', label: 'Beginner Men' },
    { path: '/beginner-women', label: 'Beginner Women' },
    { path: '/experienced-hunters', label: 'Experienced' },
    { path: '/veteran-immersions', label: 'Veterans' },
    { path: '/alumni', label: 'Alumni' },
  ]

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src="/images/logo.jpg" 
              alt="Sacred Hunting" 
              className="h-12 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.path + item.label}
                to={item.path}
                className={`text-sm font-medium transition-colors hover:text-gray-900 ${
                  location.pathname === item.path 
                    ? 'text-gray-900' 
                    : 'text-gray-500'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/beginner-men"
              className="ml-2 px-5 py-2 bg-earth-cta hover:bg-earth-cta-hover text-white text-sm font-semibold rounded transition-colors"
            >
              Apply Now
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden flex flex-col justify-center items-center w-8 h-8 text-gray-500 hover:text-gray-900 transition-colors"
          >
            <span className={`block w-6 h-0.5 bg-current transition-transform ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
            <span className={`block w-6 h-0.5 bg-current my-1 transition-opacity ${isMenuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-0.5 bg-current transition-transform ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="py-4 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.path + item.label}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-4 py-2 text-base font-medium transition-colors hover:text-gray-900 hover:bg-gray-50 ${
                    location.pathname === item.path 
                      ? 'text-gray-900 bg-gray-50' 
                      : 'text-gray-500'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                to="/beginner-men"
                onClick={() => setIsMenuOpen(false)}
                className="block mx-4 mt-3 px-5 py-2 bg-earth-cta hover:bg-earth-cta-hover text-white text-center font-semibold rounded transition-colors"
              >
                Apply Now
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navigation
