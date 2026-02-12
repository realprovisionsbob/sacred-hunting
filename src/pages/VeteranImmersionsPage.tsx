const VeteranImmersionsPage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative py-32 flex items-center justify-center text-center hero-section"
        style={{
          backgroundImage: 'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.5)), url("/api/placeholder/1920/600")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-white mb-6">
              Veteran Immersions
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
              After military service, re-integration is a necessary tool for healing. 
              Join the veteran-led experiences to reconnect with the healthy inner warrior.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 bg-earth-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-serif font-bold text-white mb-8">
              War and The Soul
            </h2>
            
            <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
              <p>
                Indigenous cultures had war as a rite of passage... but with elaborate rituals for 
                re-integration within the tribe upon their return.
              </p>
              
              <p>
                If your inner warrior desires a nourishing experience, reconnecting you to being in service 
                to your self, family and community...then you're ready for the hunt.
              </p>
              
              <p className="text-xl text-earth-tan font-semibold mt-8">
                Join our exclusive Veterans only Sacred Hunting experiences to source your own wild meat, 
                re-connect with brotherhood & heal the warrior within.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Next Event Details */}
      <section className="py-20 bg-earth-charcoal">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-serif font-bold text-white mb-12 text-center">
              Upcoming Veteran Immersion
            </h2>
            
            <div className="card text-center">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
                <div>
                  <h3 className="text-lg font-bold text-earth-tan mb-2">When</h3>
                  <p className="text-white">March 13-16, 2025</p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-earth-tan mb-2">Where</h3>
                  <p className="text-white">Austin, Texas</p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-earth-tan mb-2">Cost</h3>
                  <p className="text-white">Sliding scale depending on need</p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-earth-tan mb-2">Spots</h3>
                  <p className="text-white">6-8 available</p>
                </div>
              </div>
              
              <div className="bg-earth-brown/20 rounded-lg p-6 mb-8">
                <p className="text-lg font-semibold text-earth-tan mb-2">Important Commitment:</p>
                <p className="text-gray-300">
                  Nobody will be turned down due to financial hardship. We believe every veteran 
                  deserves access to healing and re-integration support.
                </p>
              </div>
              
              <button className="btn-primary text-lg">
                Apply for This Immersion
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20 bg-earth-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-serif font-bold text-white mb-12 text-center">
              Veteran Leadership
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div 
                  className="h-96 bg-cover bg-center rounded-lg shadow-lg"
                  style={{ backgroundImage: 'url("/api/placeholder/500/600")' }}
                  aria-label="Mike Bledsoe, Veteran Leader"
                />
              </div>
              
              <div>
                <h3 className="text-3xl font-serif font-bold text-white mb-4">Mike Bledsoe</h3>
                <h4 className="text-xl text-earth-tan mb-6">Navy Veteran & Sacred Hunting Leader</h4>
                
                <div className="space-y-4 text-lg text-gray-300 leading-relaxed">
                  <p>
                    Mike Bledsoe is a coach, podcaster, and perpetual seeker of truth. He is a Navy veteran 
                    deployed to the Middle East and Africa. He is a space holder and thought leader in the 
                    plant medicine space.
                  </p>
                  
                  <p>
                    Mike understands the unique challenges veterans face in transitioning back to civilian life. 
                    His own journey through combat deployment, healing trauma, and finding purpose guides his 
                    approach to helping other veterans reconnect with their inner warrior in a healthy, 
                    life-affirming way.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 bg-earth-charcoal">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-serif font-bold text-white mb-12 text-center">
              What's Included
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="card">
                <div className="text-3xl mb-4">🎖️</div>
                <h3 className="text-xl font-bold text-white mb-3">Veteran-Led Ceremonies</h3>
                <p className="text-gray-300">
                  Healing rituals specifically designed for military veterans, led by those who understand service.
                </p>
              </div>

              <div className="card">
                <div className="text-3xl mb-4">🔥</div>
                <h3 className="text-xl font-bold text-white mb-3">Warrior Integration</h3>
                <p className="text-gray-300">
                  Rituals to honor your service while channeling warrior energy into life-giving pursuits.
                </p>
              </div>

              <div className="card">
                <div className="text-3xl mb-4">🤝</div>
                <h3 className="text-xl font-bold text-white mb-3">Brotherhood Circle</h3>
                <p className="text-gray-300">
                  Connect with other veterans who understand your experience without need for explanation.
                </p>
              </div>

              <div className="card">
                <div className="text-3xl mb-4">🌿</div>
                <h3 className="text-xl font-bold text-white mb-3">Trauma-Informed Healing</h3>
                <p className="text-gray-300">
                  Work with plant medicines and practices specifically chosen to support veteran healing.
                </p>
              </div>

              <div className="card">
                <div className="text-3xl mb-4">🏹</div>
                <h3 className="text-xl font-bold text-white mb-3">Purpose-Driven Hunting</h3>
                <p className="text-gray-300">
                  Channel your skills and training into providing food and protection for your community.
                </p>
              </div>

              <div className="card">
                <div className="text-3xl mb-4">🎯</div>
                <h3 className="text-xl font-bold text-white mb-3">Skills Translation</h3>
                <p className="text-gray-300">
                  Discover how your military training translates into civilian leadership and provision.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Veteran Testimonials */}
      <section className="py-20 bg-earth-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-serif font-bold text-white mb-12 text-center">
              What Veterans Are Saying
            </h2>
            
            <div className="space-y-8">
              <blockquote className="card">
                <p className="text-lg text-gray-300 italic mb-6">
                  "This was one of the most profound and powerful experiences of my life... This trip allowed me 
                  to be vulnerable with a bunch of like minded men without fear of judgement or ridicule. I have 
                  struggled tremendously, since leaving the military, with trying to find connection, particularly 
                  with men on the healing path and that are committed in doing the work, holding each other 
                  accountable and holding space for each other during the good and bad times. I have finally found my Tribe..."
                </p>
                <footer className="text-earth-tan font-semibold text-right">
                  — Brandon Bryan, Navy Special Boat Teams
                </footer>
              </blockquote>

              <blockquote className="card">
                <p className="text-lg text-gray-300 italic mb-6">
                  "...transformative experience we all lived last weekend during the Sacred Hunting Veteran Ceremony. 
                  The depth, vastness, and profound enlightenment we experienced defy the constraints of language...your 
                  dedication to cultivating a sacred container filled with openness, compassion and understanding was 
                  felt by every soul in our circle. You've opened your hearts and minds to us, and for that, I am 
                  profoundly grateful."
                </p>
                <footer className="text-earth-tan font-semibold text-right">
                  — Ryan Roberts, U.S. Marine Corps & Served in Iraq
                </footer>
              </blockquote>

              <blockquote className="card">
                <p className="text-lg text-gray-300 italic mb-6">
                  "After I shot the whitetail deer and I ran to see her and had my hands on the warm body when it was 
                  shaking and the last heartbeats, there was a moment that our eyes locked and gazed. There was this 
                  surrender...the most graceful experience of my life. This beauty of nature, surrendering to life. 
                  It was so deep. It was such a humble experience."
                </p>
                <footer className="text-earth-tan font-semibold text-right">
                  — Gili Oren, Israeli Defense Force (IDF) & Palestinian War veteran
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20 bg-earth-charcoal">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-serif font-bold text-white mb-8 text-center">
              Find Your Tribe Today
            </h2>
            
            <div className="card text-center">
              <p className="text-lg text-gray-300 mb-6">
                Every Veteran deserves re-integration. Each Sacred Hunting veteran experience has 8 available spots. 
                Those who are not selected will be added to the list for future veteran events.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-lg font-bold text-earth-tan mb-3">Application Requirements</h3>
                  <ul className="text-left text-gray-300 space-y-2">
                    <li>• Verified military service</li>
                    <li>• Commitment to personal growth</li>
                    <li>• Willingness to participate in ceremony</li>
                    <li>• Respect for indigenous practices</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-bold text-earth-tan mb-3">What to Expect</h3>
                  <ul className="text-left text-gray-300 space-y-2">
                    <li>• 4-day immersive experience</li>
                    <li>• Small group (6-8 veterans)</li>
                    <li>• Veteran-led facilitation</li>
                    <li>• Sliding scale pricing</li>
                  </ul>
                </div>
              </div>
              
              <button className="btn-primary text-lg mb-4">
                Apply for Veteran Immersion
              </button>
              
              <p className="text-sm text-gray-400">
                Applications reviewed on a rolling basis. Financial assistance available.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default VeteranImmersionsPage