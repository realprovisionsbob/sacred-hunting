const AlumniPage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative py-32 flex items-center justify-center text-center hero-section"
        style={{
          backgroundImage: 'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.5)), url("/images/alumni/hero-bg.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-white mb-6">
              Sacred Hunting Alumni
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
              After completing your first experience with us, you get exclusive access to transformational 
              outdoor experiences with special discount pricing.
            </p>
          </div>
        </div>
      </section>

      {/* Welcome Message */}
      <section className="py-20 bg-earth-section">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-serif font-bold text-gray-900 mb-8">
              Welcome to the Sacred Hunting Family
            </h2>
            
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                Once you've completed your first Sacred Hunting experience, you become part of a lifelong 
                community of hunters who understand the sacred nature of taking life to sustain life. 
                Our alumni network spans the globe, united by shared values and transformative experiences.
              </p>
              
              <p>
                As an alumni, you have access to exclusive events, continued learning opportunities, 
                and a brotherhood/sisterhood that extends far beyond the hunt. This is where your 
                Sacred Hunting journey truly begins.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Alumni Benefits */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-serif font-bold text-gray-900 mb-12 text-center">
              Alumni Benefits & Opportunities
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="card">
                <div className="text-4xl mb-4">⛰️</div>
                <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4">Annual Summit: Find Your Tribe</h3>
                <p className="text-gray-600 mb-4">
                  Our Alumni are invited to return to the mountains each year to celebrate shared values and connections.
                </p>
                <div className="space-y-4 text-gray-600">
                  <p>
                    Consider the men and women that you met on your first Sacred Hunting experience. Some of them may have 
                    become lifelong friends. In order to cross-pollinate our people with shared values who attend each hunt, 
                    we all come together in the mountains each year.
                  </p>
                  <p>
                    Our 4-day summit includes nature-connection practices, such as medicinal and edible plant walks, 
                    interpersonal connection exercises, and eating meat that we as a collective killed and processed together.
                  </p>
                  <p>
                    The Annual Summit includes dozens of like-minded men, women and their families. This allows our loved 
                    ones to be a part of this transformational work.
                  </p>
                </div>
              </div>

              <div className="card">
                <div className="text-4xl mb-4">🏹</div>
                <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4">Return to the Hunt: At Cost Experiences</h3>
                <p className="text-gray-600 mb-4">
                  Join Beginner Immersion experiences in Texas to reconnect with your tribe and engage hunting skills 
                  at a fraction of the cost.
                </p>
                <div className="space-y-4 text-gray-600">
                  <p>
                    After the first Beginner Immersion, subsequent Sacred Hunting experiences are reduced in cost to 
                    make the experiences a more accessible part of your life.
                  </p>
                  <p>
                    After 3 fresh beginners have signed up, we will open each hunt to our alumni via email invitation.
                  </p>
                  <p>
                    This allows you to continue your practice while supporting new hunters on their journey.
                  </p>
                </div>
              </div>

              <div className="card">
                <div className="text-4xl mb-4">🤝</div>
                <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4">Online Brotherhood: Keep Connection Alive</h3>
                <p className="text-gray-600 mb-4">
                  Our cohort-based Men's Brotherhood keeps the connection alive no matter where you are.
                </p>
                <div className="space-y-4 text-gray-600">
                  <p>
                    Finding likeminded men is not always easy, depending on one's geography. The Men's Brotherhood is an 
                    online men's group created for Sacred Hunting alumni to stay engaged and connected with likeminded men.
                  </p>
                  <p>
                    Each cohort is a 2-4 month commitment that includes weekly video calls, shared challenges, and 
                    accountability partnerships.
                  </p>
                </div>
              </div>

              <div className="card">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4">Exclusive Skills Workshops</h3>
                <p className="text-gray-600 mb-4">
                  Our Exclusive Skills Workshops provide bite-sized opportunities to practice and hone hunting, 
                  tracking, and nature-skills.
                </p>
                <div className="space-y-4 text-gray-600">
                  <p>
                    These include Range Days designated to offer day-long, rifle practice sessions focused on improving 
                    accuracy and confidence with your weapon.
                  </p>
                  <p>
                    Workshop topics include: advanced tracking, meat processing, hide tanning, bow making, primitive 
                    fire starting, medicinal plant identification, and more.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Values */}
      <section className="py-20 bg-earth-section">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-serif font-bold text-gray-900 mb-8 text-center">
              Alumni Community Values
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl mb-4">🌱</div>
                <h3 className="text-xl font-bold text-earth-cta mb-3">Continuous Growth</h3>
                <p className="text-gray-600">
                  We commit to ongoing personal development and supporting each other's journey of transformation.
                </p>
              </div>

              <div className="text-center">
                <div className="text-4xl mb-4">🤲</div>
                <h3 className="text-xl font-bold text-earth-cta mb-3">Service to Others</h3>
                <p className="text-gray-600">
                  We use our skills and resources to support our families, communities, and new hunters joining the practice.
                </p>
              </div>

              <div className="text-center">
                <div className="text-4xl mb-4">🌍</div>
                <h3 className="text-xl font-bold text-earth-cta mb-3">Earth Stewardship</h3>
                <p className="text-gray-600">
                  We are protectors and caretakers of the land, animals, and indigenous wisdom that makes Sacred Hunting possible.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Alumni Events */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-serif font-bold text-gray-900 mb-12 text-center">
              Upcoming Alumni Events
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="card">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Annual Summit 2025</h3>
                <div className="text-earth-cta font-semibold mb-3">July 15-18, 2025 • Colorado Rockies</div>
                <p className="text-gray-600 mb-4">
                  Join 50+ alumni and their families for our biggest gathering of the year. Include plant walks, 
                  ceremony, feast, and celebration of our community.
                </p>
                <button className="btn-primary">Register Now</button>
              </div>

              <div className="card">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Skills Workshop Series</h3>
                <div className="text-earth-cta font-semibold mb-3">Monthly • Various Locations</div>
                <p className="text-gray-600 mb-4">
                  Monthly workshops covering advanced hunting skills, traditional crafts, and bushcraft techniques. 
                  Different location each month.
                </p>
                <button className="btn-secondary">View Schedule</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Alumni Stories */}
      <section className="py-20 bg-earth-section">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-serif font-bold text-gray-900 mb-12 text-center">
              Alumni Stories
            </h2>
            
            <div className="space-y-8">
              <blockquote className="card">
                <p className="text-lg text-gray-600 italic mb-6">
                  "Three years ago, I completed my first Sacred Hunting experience as a nervous beginner. Today, I've 
                  been on six hunts, helped facilitate two beginner immersions, and found a brotherhood that has 
                  supported me through major life transitions. This community saved my life."
                </p>
                <footer className="text-earth-cta font-semibold text-right">
                  — Marcus J., Sacred Hunting Alumni Since 2021
                </footer>
              </blockquote>

              <blockquote className="card">
                <p className="text-lg text-gray-600 italic mb-6">
                  "The Annual Summit has become the highlight of my family's year. My kids look forward to it more 
                  than Christmas. They're growing up understanding where their food comes from and the responsibility 
                  that comes with taking life. It's the greatest gift I could give them."
                </p>
                <footer className="text-earth-cta font-semibold text-right">
                  — Sarah M., Sacred Hunting Alumni & Mother
                </footer>
              </blockquote>

              <blockquote className="card">
                <p className="text-lg text-gray-600 italic mb-6">
                  "Being part of the Men's Brotherhood has kept me connected to my purpose during difficult times. 
                  Having brothers who understand the deeper meaning of hunting and can call me on my BS when I need 
                  it has been invaluable for my growth as a man."
                </p>
                <footer className="text-earth-cta font-semibold text-right">
                  — David L., Sacred Hunting Alumni & Brotherhood Member
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Access Alumni Benefits */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
            Ready to Deepen Your Connection?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            If you've completed a Sacred Hunting experience, you have access to our alumni community. 
            If you haven't yet joined us, it's time to take the first step.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-8">
            <div className="card">
              <h3 className="text-xl font-bold text-earth-cta mb-3">Current Alumni</h3>
              <p className="text-gray-600 mb-4">
                Access your alumni portal, register for events, and connect with your community.
              </p>
              <button className="btn-primary w-full">Alumni Portal</button>
            </div>
            
            <div className="card">
              <h3 className="text-xl font-bold text-earth-cta mb-3">Future Alumni</h3>
              <p className="text-gray-600 mb-4">
                Ready to begin your Sacred Hunting journey? Start with a beginner immersion.
              </p>
              <button className="btn-secondary w-full">View Retreats</button>
            </div>
          </div>
          
          <div className="text-sm text-gray-500">
            <p>Questions? Email our alumni coordinator at <a href="mailto:alumni@sacredhunting.com" className="text-earth-cta hover:underline">alumni@sacredhunting.com</a></p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AlumniPage