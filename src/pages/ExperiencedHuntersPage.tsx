import WistiaEmbed from '../components/WistiaEmbed'

const ExperiencedHuntersPage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative py-32 flex items-center justify-center text-center hero-section"
        style={{
          backgroundImage: 'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.5)), url("/images/experienced-hunters/hero-bg.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-white mb-6">
              Experienced Hunters
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
              We invite you to experience hunting like never before, layered with indigenous practices. 
              Learn to hunt as a spiritual practice in exotic places.
            </p>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 bg-earth-section">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-serif font-bold text-gray-900 mb-8 text-center">
              Deepen Your Practice
            </h2>
            
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                You know how to hunt. You understand the basics of tracking, shooting, and field dressing. 
                But there's something more you're seeking - a deeper connection to the practice that has 
                sustained humanity for millennia.
              </p>
              
              <p>
                Our experienced hunter retreats are for those ready to explore hunting as a spiritual discipline. 
                We combine your existing skills with ancient indigenous wisdom, sacred ceremony, and brotherhood 
                to create transformative experiences that will forever change how you approach the hunt.
              </p>
              
              <p>
                From the remote wilderness of Alaska to the sacred hunting grounds of Africa, these expeditions 
                take experienced hunters to exotic locations where the veil between the physical and spiritual 
                worlds is thin. You'll hunt not just for meat, but for meaning, connection, and spiritual awakening.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Expeditions */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-serif font-bold text-gray-900 mb-12 text-center">
              Upcoming Sacred Expeditions
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="card">
                <div 
                  className="h-48 bg-cover bg-center rounded-lg mb-6"
                  style={{ backgroundImage: 'url("/images/experienced-hunters/hawaii.jpg")' }}
                />
                <h3 className="text-2xl font-serif font-bold text-gray-900 mb-3">Alaska Wilderness Hunt</h3>
                <p className="text-gray-600 mb-4">
                  Join us in the Last Frontier for a 10-day caribou and moose hunt combined with Inuit ceremony 
                  and connection to the land that time forgot.
                </p>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-earth-cta font-semibold">September 2025</span>
                  <span className="text-gray-500">8 spots available</span>
                </div>
                <button className="btn-primary w-full">Learn More</button>
              </div>

              <div className="card">
                <div 
                  className="h-48 bg-cover bg-center rounded-lg mb-6"
                  style={{ backgroundImage: 'url("/images/experienced-hunters/tribe.jpg")' }}
                />
                <h3 className="text-2xl font-serif font-bold text-gray-900 mb-3">African Safari Experience</h3>
                <p className="text-gray-600 mb-4">
                  Hunt plains game in South Africa while learning from indigenous trackers and participating 
                  in traditional ceremonies honoring the animals we take.
                </p>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-earth-cta font-semibold">November 2025</span>
                  <span className="text-gray-500">6 spots available</span>
                </div>
                <button className="btn-primary w-full">Learn More</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes It Different */}
      <section className="py-20 bg-earth-section">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-serif font-bold text-gray-900 mb-12 text-center">
              What Makes Sacred Hunting Different
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="card text-center">
                <div className="text-4xl mb-4">🧿</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Indigenous Wisdom</h3>
                <p className="text-gray-600">
                  Learn tracking and hunting techniques passed down through generations of indigenous hunters, 
                  combined with their spiritual understanding of the hunt.
                </p>
              </div>

              <div className="card text-center">
                <div className="text-4xl mb-4">🌍</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Exotic Locations</h3>
                <p className="text-gray-600">
                  Hunt in remote, sacred places around the world where indigenous hunting traditions are still alive 
                  and the connection to nature is unbroken.
                </p>
              </div>

              <div className="card text-center">
                <div className="text-4xl mb-4">🔮</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Ceremonial Practice</h3>
                <p className="text-gray-600">
                  Every hunt begins and ends with ceremony, honoring the animals, the land, and the sacred act 
                  of taking life to sustain life.
                </p>
              </div>

              <div className="card text-center">
                <div className="text-4xl mb-4">👥</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Elite Brotherhood</h3>
                <p className="text-gray-600">
                  Hunt alongside other experienced hunters who share your desire for deeper meaning and 
                  spiritual connection in their hunting practice.
                </p>
              </div>

              <div className="card text-center">
                <div className="text-4xl mb-4">🌿</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Plant Medicine</h3>
                <p className="text-gray-600">
                  Work with traditional plant medicines in ceremony to deepen your connection to nature 
                  and expand your consciousness as a hunter.
                </p>
              </div>

              <div className="card text-center">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Advanced Skills</h3>
                <p className="text-gray-600">
                  Learn advanced hunting techniques, tracking methods, and survival skills that few modern 
                  hunters ever have the chance to master.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Prerequisites */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-serif font-bold text-gray-900 mb-8 text-center">
              Prerequisites & Requirements
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="card">
                <h3 className="text-2xl font-bold text-earth-cta mb-4">Experience Required</h3>
                <ul className="space-y-3 text-gray-600">
                  <li>• At least 3 years of regular hunting experience</li>
                  <li>• Comfortable with rifle, bow, or traditional weapons</li>
                  <li>• Experience with field dressing and meat processing</li>
                  <li>• Physical fitness for demanding terrain</li>
                  <li>• Previous wilderness camping experience</li>
                  <li>• Valid hunting licenses for expedition locations</li>
                </ul>
              </div>

              <div className="card">
                <h3 className="text-2xl font-bold text-earth-cta mb-4">Spiritual Readiness</h3>
                <ul className="space-y-3 text-gray-600">
                  <li>• Openness to indigenous spiritual practices</li>
                  <li>• Willingness to participate in ceremony</li>
                  <li>• Respect for plant medicine work (optional participation)</li>
                  <li>• Commitment to personal growth and reflection</li>
                  <li>• Understanding that hunting is sacred, not sport</li>
                  <li>• Ready to challenge your existing beliefs about hunting</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-earth-section">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-serif font-bold text-gray-900 mb-12 text-center">
              What Experienced Hunters Are Saying
            </h2>
            
            <div className="space-y-8">
              <blockquote className="card text-center">
                <p className="text-lg text-gray-600 italic mb-4">
                  "I've been hunting for 20 years, but this expedition to Alaska changed everything. Learning from 
                  the Inuit elders about the spiritual dimension of hunting opened up a completely new understanding 
                  of why I hunt. It's not about the trophy anymore."
                </p>
                <footer className="text-earth-cta font-semibold">— David R., Experienced Hunter</footer>
              </blockquote>

              <blockquote className="card text-center">
                <p className="text-lg text-gray-600 italic mb-4">
                  "The African expedition was life-changing. The combination of world-class hunting with indigenous 
                  ceremony and plant medicine work created the most profound experience of my life. I finally understand 
                  what hunting was meant to be."
                </p>
                <footer className="text-earth-cta font-semibold">— Mark T., Professional Guide</footer>
              </blockquote>

              <blockquote className="card text-center">
                <p className="text-lg text-gray-600 italic mb-4">
                  "I thought I knew everything about hunting until I joined Sacred Hunting. The indigenous tracking 
                  techniques and spiritual practices I learned have made me not just a better hunter, but a better man. 
                  This is how hunting should be taught."
                </p>
                <footer className="text-earth-cta font-semibold">— Robert L., Hunting Outfitter</footer>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Video Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
              Expedition Stories
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Hear from hunters who've taken their practice to the next level.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="card">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Alaska Expedition</h3>
              <WistiaEmbed videoId="92ds6qbc3r" playerColor="#8B4513" />
            </div>
            <div className="card">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Transformational Hunt</h3>
              <WistiaEmbed videoId="m6f299gvtk" playerColor="#8B4513" />
            </div>
          </div>
        </div>
      </section>

      {/* Investment & Application */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
            Ready to Deepen Your Practice?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            These expeditions are significant investments in your growth as a hunter and as a human being. 
            Are you ready for transformation?
          </p>
          
          <div className="card max-w-2xl mx-auto mb-8">
            <h3 className="text-2xl font-bold text-earth-cta mb-4">Investment Range</h3>
            <p className="text-lg text-gray-600 mb-4">
              Expeditions range from $8,000 - $25,000 depending on location, duration, and exclusivity. 
              All expeditions include accommodation, meals, guides, ceremony, and meat processing.
            </p>
            <p className="text-sm text-gray-500">
              Payment plans available. Some expeditions may have additional trophy fees or travel costs.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary text-lg">
              Apply for Expeditions
            </button>
            <button className="btn-secondary text-lg">
              Schedule Consultation
            </button>
          </div>
          
          <div className="mt-8 text-sm text-gray-500">
            <p>Questions? Email us at <a href="mailto:info@sacredhunting.com" className="text-earth-cta hover:underline">info@sacredhunting.com</a></p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ExperiencedHuntersPage