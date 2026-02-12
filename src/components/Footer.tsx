import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-earth-charcoal border-t border-earth-stone/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Column */}
          <div>
            <h3 className="text-xl font-serif font-bold text-earth-tan mb-4">Sacred Hunting</h3>
            <p className="text-gray-400 text-sm mb-4">
              Transformational retreats using indigenous practices to teach the hunting skills of our ancestors.
            </p>
            <p className="text-gray-500 text-xs">
              "Man's first religion was to kill god and eat him." – Weston LeBarre
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <div className="space-y-2">
              <Link to="/about-us" className="block text-gray-400 hover:text-earth-tan transition-colors text-sm">
                About Us
              </Link>
              <Link to="/beginner-men" className="block text-gray-400 hover:text-earth-tan transition-colors text-sm">
                Beginner Men
              </Link>
              <Link to="/beginner-women" className="block text-gray-400 hover:text-earth-tan transition-colors text-sm">
                Beginner Women
              </Link>
              <Link to="/veteran-immersions" className="block text-gray-400 hover:text-earth-tan transition-colors text-sm">
                Veteran Immersions
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
            <div className="space-y-2 text-sm text-gray-400">
              <p>Ready to begin your journey?</p>
              <a 
                href="mailto:info@sacredhunting.com" 
                className="block hover:text-earth-tan transition-colors"
              >
                info@sacredhunting.com
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-earth-stone/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-xs mb-4 md:mb-0">
              © 2024 Sacred Hunting. All rights reserved.
            </p>
            <div className="flex space-x-6 text-xs">
              <a href="#" className="text-gray-500 hover:text-earth-tan transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-500 hover:text-earth-tan transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer