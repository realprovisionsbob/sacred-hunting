const AboutPage = () => {
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
              About Sacred Hunting
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
              Learn more about who we are, our methods and why we believe this profound 
              and timeless practice is so important for everybody.
            </p>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <blockquote className="text-3xl md:text-4xl font-serif italic text-earth-cta max-w-4xl mx-auto">
            "Every wound is a womb."
            <footer className="text-lg text-gray-500 mt-4 not-italic">— Robert Bly</footer>
          </blockquote>
        </div>
      </section>

      {/* Mansal's Story */}
      <section className="py-20 bg-earth-section">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Image Placeholder */}
              <div className="order-2 lg:order-1">
                <div 
                  className="h-96 bg-cover bg-center rounded-lg shadow-lg"
                  style={{ backgroundImage: 'url("/api/placeholder/500/600")' }}
                  aria-label="Mansal Denton, founder of Sacred Hunting"
                />
              </div>

              {/* Content */}
              <div className="order-1 lg:order-2">
                <h2 className="text-4xl font-serif font-bold text-white mb-6">
                  Meet Mansal Denton
                </h2>
                <h3 className="text-xl text-earth-cta mb-6 font-semibold">
                  Founder of Sacred Hunting
                </h3>
                
                <div className="space-y-6 text-lg text-gray-200 leading-relaxed">
                  <p>
                    Mansal Denton is the founder of Sacred Hunting. Feeling wounded and insecure in early life, 
                    Mansal chased a woman to Europe, which led him to prison. Struggling with shame and confusion 
                    about being a man, he found his calling in the sacred art of hunting.
                  </p>
                  
                  <p>
                    His passion was fostered and encouraged by his spiritual teacher, an elder named Will Taegel 
                    "Star Heart". Over nine years of sweat lodges and council walks, Mansal grew wiser as a man 
                    and attracted friends who desired to hunt like him. From here, Sacred Hunting was born.
                  </p>
                  
                  <p>
                    After five years and nearly 70 in-person experiences, Mansal has transitioned to a supportive 
                    role for the organization as other Leaders step up. He can be found joining sweat lodges during 
                    Beginner Immersions and leading adventure trips to places around the world.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-8">
              Our Mission
            </h2>
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                Sacred Hunting was born from a deep understanding that modern men and women have lost touch 
                with one of humanity's most fundamental practices. Hunting isn't just about procuring food—it's 
                about understanding our place in the natural world, taking responsibility for the life we consume, 
                and connecting with ancient wisdom that our ancestors carried for millennia.
              </p>
              
              <p>
                We believe that through the combination of ethical hunting, indigenous ceremonies, and 
                brotherhood/sisterhood, we can help individuals reclaim a sense of purpose, connection, 
                and spiritual grounding that is often missing in our modern world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-earth-section">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-12 text-center">
              Our Values
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="card text-center">
                <div className="text-4xl mb-4">🌿</div>
                <h3 className="text-xl font-serif font-bold text-gray-900 mb-4">Sacred Connection</h3>
                <p className="text-gray-600">
                  We honor the sacred relationship between hunter and hunted, understanding that 
                  taking life to sustain life is one of nature's most profound teachings.
                </p>
              </div>

              <div className="card text-center">
                <div className="text-4xl mb-4">🤝</div>
                <h3 className="text-xl font-serif font-bold text-gray-900 mb-4">Community & Brotherhood</h3>
                <p className="text-gray-600">
                  We believe in the power of authentic connection and support among like-minded 
                  individuals on the path of personal growth and spiritual development.
                </p>
              </div>

              <div className="card text-center">
                <div className="text-4xl mb-4">🏹</div>
                <h3 className="text-xl font-serif font-bold text-gray-900 mb-4">Ancient Wisdom</h3>
                <p className="text-gray-600">
                  We integrate time-tested indigenous practices, ceremonies, and teachings that 
                  have guided humans for thousands of years.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
            Ready to Begin Your Journey?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Whether you're a complete beginner or an experienced hunter looking to deepen your practice, 
            we have a path for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary text-lg">
              View Our Retreats
            </button>
            <button className="btn-secondary text-lg">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutPage