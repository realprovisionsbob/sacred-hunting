import { Link } from 'react-router-dom'

const NotFoundPage = () => {
  return (
    <div className="min-h-screen bg-earth-dark flex items-center justify-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-2xl mx-auto">
          {/* Large 404 */}
          <div className="text-8xl md:text-9xl font-serif font-bold text-earth-stone/30 mb-8">
            404
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
            Lost in the Wilderness
          </h1>

          {/* Description */}
          <p className="text-xl text-gray-300 mb-8 max-w-lg mx-auto">
            Even the most experienced hunters sometimes lose the trail. 
            The page you're looking for seems to have wandered off.
          </p>

          {/* Quote */}
          <blockquote className="text-lg italic text-earth-tan mb-8 border-l-4 border-earth-tan pl-6 max-w-md mx-auto">
            "Not all who wander are lost... but this page definitely is."
          </blockquote>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link to="/" className="btn-primary text-lg">
              Return to Base Camp
            </Link>
            <Link to="/about-us" className="btn-secondary text-lg">
              Learn Our Story
            </Link>
          </div>

          {/* Helpful Links */}
          <div className="card max-w-md mx-auto">
            <h3 className="text-lg font-bold text-white mb-4">Popular Trails</h3>
            <div className="grid grid-cols-1 gap-2 text-left">
              <Link 
                to="/beginner-men" 
                className="text-gray-300 hover:text-earth-tan transition-colors"
              >
                → Beginner Men's Retreat
              </Link>
              <Link 
                to="/beginner-women" 
                className="text-gray-300 hover:text-earth-tan transition-colors"
              >
                → Beginner Women's Retreat
              </Link>
              <Link 
                to="/veteran-immersions" 
                className="text-gray-300 hover:text-earth-tan transition-colors"
              >
                → Veteran Immersions
              </Link>
              <Link 
                to="/alumni" 
                className="text-gray-300 hover:text-earth-tan transition-colors"
              >
                → Alumni Community
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NotFoundPage