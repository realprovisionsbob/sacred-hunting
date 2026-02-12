import WistiaEmbed from '../components/WistiaEmbed'

const BeginnerWomenPage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative py-32 flex items-center justify-center text-center hero-section"
        style={{
          backgroundImage: 'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.5)), url("/images/beginner-women/hero-bg.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-white mb-6">
              Beginner Women's Retreat
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
              Within each of us is a hunter. We welcome women from all walks of life to join the hunt 
              even if they have no experience firing a rifle.
            </p>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 bg-earth-section">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-serif font-bold text-gray-900 mb-8 text-center">
              Reclaim Your Inner Hunter
            </h2>
            
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                For thousands of years, women have been integral to the hunting process - as providers, 
                gatherers, processors of meat, and keepers of ceremonial wisdom. This retreat honors that 
                ancient lineage while empowering modern women to reconnect with their primal strength and intuition.
              </p>
              
              <p>
                Whether you've never held a rifle or are curious about deeper hunting practices, this container 
                is designed specifically for women ready to step into their power. You'll learn alongside other 
                women in a supportive environment that honors both the fierce and nurturing aspects of the feminine.
              </p>
              
              <p>
                Through ceremony, sisterhood, and the sacred act of hunting, you'll discover parts of yourself 
                that modern society often overlooks - your capacity to provide, to take responsibility for life 
                and death, and to connect with the wild wisdom that lives within every woman.
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
                <h3 className="text-xl font-bold text-gray-900 mb-3">Women-Led Instruction</h3>
                <p className="text-gray-600">
                  Learn from experienced female hunters who understand the unique aspects of women's hunting journey.
                </p>
              </div>

              <div className="card">
                <div className="text-3xl mb-4">🌙</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Sacred Feminine Ceremony</h3>
                <p className="text-gray-600">
                  Honor the cycles of life and death through ceremonies that connect you to your feminine wisdom.
                </p>
              </div>

              <div className="card">
                <div className="text-3xl mb-4">🌺</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Plant Medicine Work</h3>
                <p className="text-gray-600">
                  Work with sacred plants in ceremony to deepen your connection to nature and intuition.
                </p>
              </div>

              <div className="card">
                <div className="text-3xl mb-4">👭</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Sisterhood Circle</h3>
                <p className="text-gray-600">
                  Share stories, support each other, and build lasting connections with like-minded women.
                </p>
              </div>

              <div className="card">
                <div className="text-3xl mb-4">🦌</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Ethical Hunting Practices</h3>
                <p className="text-gray-600">
                  Learn to hunt with reverence, understanding the sacred exchange between predator and prey.
                </p>
              </div>

              <div className="card">
                <div className="text-3xl mb-4">🍲</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Sacred Feast</h3>
                <p className="text-gray-600">
                  Honor the life taken by preparing and sharing a ceremonial meal with your sisters.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Feminine Hunter */}
      <section className="py-20 bg-earth-section">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-serif font-bold text-gray-900 mb-8 text-center">
              The Feminine Hunter
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                  <p>
                    The archetype of the female hunter exists in cultures around the world - from Artemis 
                    to the Amazon warriors, from Native American hunting women to modern conservationists. 
                    This retreat helps you embody this powerful archetype in a way that honors both ancient 
                    wisdom and modern understanding.
                  </p>
                  
                  <p>
                    Women often bring a different energy to hunting - more intuitive, more connected to cycles 
                    and seasons, more aware of the emotional and spiritual dimensions of taking life. We honor 
                    these gifts while also teaching practical skills.
                  </p>
                  
                  <p>
                    You'll discover that hunting isn't about aggression or domination, but about relationship, 
                    responsibility, and the profound trust that comes from knowing you can provide for yourself 
                    and those you love.
                  </p>
                </div>
              </div>
              
              <div>
                <div 
                  className="h-96 bg-cover bg-center rounded-lg shadow-lg"
                  style={{ backgroundImage: 'url("/api/placeholder/500/600")' }}
                  aria-label="Women hunting together in nature"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Equipment & Preparation */}
      <section className="py-20 bg-white">
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
                    <strong>No Experience Required:</strong> We welcome complete beginners! However, if you have 
                    the opportunity to practice beforehand, it will enhance your experience significantly.
                  </p>
                  <p>
                    We believe that a rifle becomes an extension of yourself through practice and familiarity. 
                    The more comfortable you are with your weapon, the more ethical and effective your hunting will be.
                  </p>
                  <p>
                    <strong>Rental Option:</strong> If you don't own a rifle or prefer to try different options, 
                    weapon rental with non-lead ammunition is available for $300, including 2 boxes of copper ammunition.
                  </p>
                  <p>
                    Our female instructors will ensure you feel completely comfortable and confident with whatever 
                    weapon you choose to use.
                  </p>
                </div>
              </div>

              <div className="card">
                <h3 className="text-2xl font-bold text-earth-cta mb-4">What to Bring</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Layered clothing for changing weather</li>
                  <li>• Comfortable, supportive hiking boots</li>
                  <li>• Warm, weather-resistant outer layer</li>
                  <li>• Personal water bottle</li>
                  <li>• Journal for reflections</li>
                  <li>• Any meaningful ceremonial objects</li>
                  <li>• Hair ties for long hair</li>
                  <li>• Sunscreen and lip balm</li>
                </ul>
                
                <h4 className="text-lg font-bold text-gray-900 mt-6 mb-3">Technology-Free Zone</h4>
                <p className="text-gray-600 text-sm">
                  This retreat is a complete digital detox. No phones, tablets, or laptops allowed. 
                  Emergency contact information will be provided to your family.
                </p>
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
              What Women Are Saying
            </h2>
            
            <div className="space-y-8">
              <blockquote className="card text-center">
                <p className="text-lg text-gray-600 italic mb-4">
                  "I never thought I had it in me to hunt, but this retreat showed me a strength I didn't know existed. 
                  The sisterhood was incredible, and I feel so much more confident in my ability to take care of myself."
                </p>
                <footer className="text-earth-cta font-semibold">— Sarah L., Marketing Manager</footer>
              </blockquote>

              <blockquote className="card text-center">
                <p className="text-lg text-gray-600 italic mb-4">
                  "The combination of hunting and ceremony was perfect. I finally understood my place in the cycle of life. 
                  The meat we harvested and shared was sacred - it changed how I think about every meal."
                </p>
                <footer className="text-earth-cta font-semibold">— Maria C., Teacher</footer>
              </blockquote>

              <blockquote className="card text-center">
                <p className="text-lg text-gray-600 italic mb-4">
                  "As a vegetarian of 10 years, this was a huge step for me. But I knew I needed to take responsibility 
                  for my food choices. The reverence and respect shown throughout the process made it a healing experience."
                </p>
                <footer className="text-earth-cta font-semibold">— Jennifer R., Yoga Instructor</footer>
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
              Stories from the Hunt
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Watch women share their transformational experiences.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="card">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Finding Inner Strength</h3>
              <WistiaEmbed videoId="t68d45c7mv" playerColor="#8B4513" />
            </div>
            <div className="card">
              <h3 className="text-xl font-bold text-gray-900 mb-4">A Sacred Journey</h3>
              <WistiaEmbed videoId="qwek2tglns" playerColor="#8B4513" />
            </div>
          </div>
        </div>
      </section>

      {/* Next Steps */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
            Step Into Your Power
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join a community of women reclaiming their connection to the wild. 
            Limited spots available for each retreat.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary text-lg">
              Apply for Next Retreat
            </button>
            <button className="btn-secondary text-lg">
              Schedule a Call
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

export default BeginnerWomenPage