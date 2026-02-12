import WistiaEmbed from '../components/WistiaEmbed'

const BeginnerMenPage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative py-32 flex items-center justify-center text-center hero-section"
        style={{
          backgroundImage: 'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.5)), url("/images/beginner-men/hero-bg.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-white mb-6">
              Beginner Men's Retreat
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
              Hunting is a universal rite of passage from boyhood into manhood. 
              Join this container if you want a curated, intimate experience for your first hunt.
            </p>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 bg-earth-section">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-serif font-bold text-gray-900 mb-8 text-center">
              Your First Sacred Hunt
            </h2>
            
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                This retreat is specifically designed for men who have never hunted before or are new to the practice. 
                We understand that taking the life of an animal can be a profound and potentially overwhelming experience, 
                which is why we've created a safe, supportive container with experienced guides and fellow seekers.
              </p>
              
              <p>
                Over the course of several days, you'll learn not just the technical skills of hunting, but the spiritual 
                and emotional preparation that our ancestors understood was essential to this sacred practice. You'll form 
                bonds with other men on the same journey and experience the deep satisfaction of providing food for yourself 
                and your community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-serif font-bold text-gray-900 mb-12 text-center">
              What's Included
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="card">
                <div className="text-3xl mb-4">🏹</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Hunting Instruction</h3>
                <p className="text-gray-600">
                  Learn rifle safety, tracking, field dressing, and ethical hunting practices from experienced guides.
                </p>
              </div>

              <div className="card">
                <div className="text-3xl mb-4">🔥</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Sweat Lodge Ceremony</h3>
                <p className="text-gray-600">
                  Participate in traditional Lakota "inipi" ceremonies to purify mind, body, and spirit before the hunt.
                </p>
              </div>

              <div className="card">
                <div className="text-3xl mb-4">🌿</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Power Plant Ceremony</h3>
                <p className="text-gray-600">
                  Sacred ceremonies with traditional plants like cacao to expand consciousness and connection.
                </p>
              </div>

              <div className="card">
                <div className="text-3xl mb-4">🤝</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Men's Council</h3>
                <p className="text-gray-600">
                  Share stories, fears, and insights with fellow hunters in a safe, judgment-free environment.
                </p>
              </div>

              <div className="card">
                <div className="text-3xl mb-4">🍖</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Field to Table</h3>
                <p className="text-gray-600">
                  Learn to process, prepare, and share the meat you harvest in a sacred feast with your brothers.
                </p>
              </div>

              <div className="card">
                <div className="text-3xl mb-4">📱</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Digital Detox</h3>
                <p className="text-gray-600">
                  No phones or laptops - reconnect with nature and your authentic self without modern distractions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Equipment & Preparation */}
      <section className="py-20 bg-earth-section">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-serif font-bold text-gray-900 mb-8 text-center">
              Preparation & Equipment
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="card">
                <h3 className="text-2xl font-bold text-earth-cta mb-4">Rifle Preparation</h3>
                <div className="space-y-4 text-gray-600">
                  <p>
                    <strong>Important:</strong> While it is certainly possible to arrive for Sacred Hunting and learn how to 
                    fire a rifle, we strongly recommend against it.
                  </p>
                  <p>
                    A rifle is an extension of you. By practicing with it, by knowing it, you are practicing the ethical 
                    pursuit of wild animals.
                  </p>
                  <p>
                    We understand it may seem like a big commitment to buy a rifle and practice, but commit to getting a 
                    rifle from a friend if you have to so that you can practice and feel comfortable with YOUR gun.
                  </p>
                  <p>
                    You are seeking to kill an animal. This starts with being in alignment with the tool that you are using.
                  </p>
                  <p>
                    <strong>Rental Option:</strong> If for some reason you cannot buy a gun and come prepared with it, 
                    renting a weapon and non-lead ammunition will cost $300 and you will have 2 boxes of copper ammo awaiting you.
                  </p>
                </div>
              </div>

              <div className="card">
                <h3 className="text-2xl font-bold text-earth-cta mb-4">What to Bring</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Weather-appropriate outdoor clothing</li>
                  <li>• Sturdy hiking boots</li>
                  <li>• Warm sleeping gear</li>
                  <li>• Personal water bottle</li>
                  <li>• Journal and pen</li>
                  <li>• Any personal ceremonial items</li>
                  <li>• Open mind and heart</li>
                </ul>
                
                <h4 className="text-lg font-bold text-gray-900 mt-6 mb-3">Not Allowed</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• Cell phones or smart devices</li>
                  <li>• Laptops or tablets</li>
                  <li>• Alcohol or recreational substances</li>
                  <li>• Processed foods</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-serif font-bold text-gray-900 mb-12 text-center">
              What Men Are Saying
            </h2>
            
            <div className="space-y-8">
              <blockquote className="card text-center">
                <p className="text-lg text-gray-600 italic mb-4">
                  "This experience fundamentally changed how I see myself as a man. The combination of hunting, ceremony, 
                  and brotherhood gave me tools I never knew I needed. I finally understand what it means to provide."
                </p>
                <footer className="text-earth-cta font-semibold">— James M., First-time Hunter</footer>
              </blockquote>

              <blockquote className="card text-center">
                <p className="text-lg text-gray-600 italic mb-4">
                  "I came feeling lost and disconnected from my masculinity. I left with a clear sense of purpose 
                  and a group of brothers I'll have for life. The meat we shared was the most meaningful meal I've ever eaten."
                </p>
                <footer className="text-earth-cta font-semibold">— Michael T., Software Developer</footer>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Video Testimonials */}
      <section className="py-20 bg-earth-section">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
              Hear From Past Participants
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Listen to the transformational stories from men who've walked this path.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="card">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Michael's Journey</h3>
              <WistiaEmbed videoId="wy42zzlszf" playerColor="#8B4513" />
            </div>
            <div className="card">
              <h3 className="text-xl font-bold text-gray-900 mb-4">First Hunt Experience</h3>
              <WistiaEmbed videoId="hdbozoytl1" playerColor="#8B4513" />
            </div>
          </div>
        </div>
      </section>

      {/* Next Steps */}
      <section className="py-20 bg-earth-section">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
            Ready to Take the Next Step?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join us for an experience that will reconnect you with your deepest purpose as a man. 
            Limited spots available.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary text-lg">
              Apply for Next Retreat
            </button>
            <button className="btn-secondary text-lg">
              Ask Questions
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

export default BeginnerMenPage