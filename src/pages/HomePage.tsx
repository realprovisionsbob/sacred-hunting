import { Link } from 'react-router-dom'

const HomePage = () => {
  const retreatCategories = [
    {
      title: 'Beginner - Men',
      description: 'Hunting is a universal rite of passage from boyhood into manhood. Join this container if you want a curated, intimate experience for your first hunt.',
      path: '/beginner-men',
      image: '/api/placeholder/400/300'
    },
    {
      title: 'Beginner - Women',
      description: 'Within each of us is a hunter. We welcome women from all walks of life to join the hunt even if they have no experience firing a rifle.',
      path: '/beginner-women',
      image: '/api/placeholder/400/300'
    },
    {
      title: 'Experienced Hunters',
      description: 'We invite you to experience hunting like never before, layered with indigenous practices. Learn to hunt as a spiritual practice in exotic places.',
      path: '/experienced-hunters',
      image: '/api/placeholder/400/300'
    },
    {
      title: 'Veteran Immersions',
      description: 'After military service, re-integration is a necessary tool for healing. Join the veteran-led experiences to reconnect with the healthy inner warrior.',
      path: '/veteran-immersions',
      image: '/api/placeholder/400/300'
    },
    {
      title: 'Sacred Hunting Alumni',
      description: 'After completing your first experience with us, you get exclusive access to transformational outdoor experiences with special discount pricing.',
      path: '/alumni',
      image: '/api/placeholder/400/300'
    }
  ]

  const practiceCards = [
    {
      title: 'Sacred Ceremony with Power Plants',
      description: 'Power plants, taken in sacred ceremony, have allowed men to expand their consciousness for tens of thousands of years. Examples of power plants include cacao, reishi, and others.',
      icon: '🌿'
    },
    {
      title: 'Indigenous Practices, Prayers & Intentions',
      description: 'Indigenous hunter-gatherers had an intimate relationship with nature and the mysteries of the universe. Reclaiming these practices boosts our sense of gratitude and presence.',
      icon: '🏹'
    },
    {
      title: 'Hunting Ethically with a Tribe',
      description: 'Hunting is older than humanity itself. Tribes of men would bond around the fire, share laughs, and provide meat for their loved ones and community.',
      icon: '🔥'
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative h-screen flex items-center justify-center text-center hero-section"
        style={{
          backgroundImage: 'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.4)), url("/api/placeholder/1920/1080")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6">
              Sacred Hunting is a Rite of Passage
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
              Join our transformational retreats which use indigenous practices to teach the hunting skills of our ancestors.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary text-lg">
                Apply Today
              </button>
              <Link to="/about-us" className="btn-secondary text-lg">
                Learn Our Story
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-16 bg-earth-charcoal">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <blockquote className="text-2xl md:text-3xl font-serif italic text-earth-tan max-w-4xl mx-auto">
            "Man's first religion was to kill god and eat him."
            <footer className="text-lg text-gray-400 mt-4 not-italic">— Weston LeBarre</footer>
          </blockquote>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 bg-earth-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
              <p>
                Hunting is humanity's original spiritual practice. Our ancestors hunted together as a brotherhood, 
                shared their stories, and revered having a direct relationship to the food they ate.
              </p>
              <p>
                Sacred Hunting facilitates personal growth and transformation through the time-tested practice of hunting 
                combined with indigenous rites and rituals.
              </p>
              <p>
                We utilize the Lakota sweat lodge, or "inipi" – "sacred place," and incorporate power plant ceremonies 
                for a deeper connection to ourselves and nature. By removing technology (no cell phones or laptops), 
                we teleport ourselves to an old way of being in a brotherhood, connected to the land, and with a shared 
                purpose of providing food for our friends and family.
              </p>
              <p>
                Each man and woman who attends a Sacred Hunting experience understands what it means to have a direct 
                connection with their food and to take responsibility for the sacrifices required to consume it.
              </p>
              <p>
                Since 2018, the Sacred Hunting leaders have brought hundreds of men and women into the practice of 
                hunting with reverence. After nearly 100 in-person experiences, we are eager to introduce you to this 
                way of life and welcome you into the community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What is Sacred Hunting */}
      <section className="py-20 bg-earth-charcoal">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
              What is Sacred Hunting?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Sacred Hunting is an organization that facilitates transformation, self-growth, and eco-spiritual 
              connection to nature. Here's how:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {practiceCards.map((card, index) => (
              <div key={index} className="card text-center">
                <div className="text-4xl mb-4">{card.icon}</div>
                <h3 className="text-xl font-serif font-bold text-white mb-4">{card.title}</h3>
                <p className="text-gray-300 leading-relaxed">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who Will You Become */}
      <section className="py-20 bg-earth-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
              Who Will You Become?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-12">
              This is for you if...
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="card">
              <h3 className="text-xl font-bold text-earth-tan mb-4">I'm struggling with...</h3>
              <ul className="space-y-3 text-gray-300">
                <li>"Feeling fulfilled even though I'm professionally successful."</li>
                <li>"Confidence that I can survive in nature and provide food on my own."</li>
                <li>"Relating at an intimate level with my girlfriend / wife."</li>
                <li>"Feeling deep friendship and community of brotherhood."</li>
              </ul>
            </div>

            <div className="card">
              <h3 className="text-xl font-bold text-earth-tan mb-4">If I could just...</h3>
              <ul className="space-y-3 text-gray-300">
                <li>"Learn how to hunt, I'd feel more secure."</li>
                <li>"Take responsibility for the meat I eat, I'd feel proud."</li>
                <li>"Find a connection to something bigger than myself, I'd feel a sense of purpose."</li>
                <li>"Relate with a group of brothers, I'd realize I'm not alone."</li>
              </ul>
            </div>

            <div className="card">
              <h3 className="text-xl font-bold text-earth-tan mb-4">Because I want to...</h3>
              <ul className="space-y-3 text-gray-300">
                <li>"Experience the rite of passage of taking life to sustain life."</li>
                <li>"Eat meat I'm proud to share with my family and friends."</li>
                <li>"Find and share my greatest gifts for the betterment of all."</li>
                <li>"Feel confident in my hunting abilities."</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Retreat Categories */}
      <section className="py-20 bg-earth-charcoal">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
              Choose Your Journey
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Find the perfect Sacred Hunting experience for your level and calling.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {retreatCategories.map((category, index) => (
              <div key={index} className="card group hover:scale-105 transition-transform duration-200">
                <div 
                  className="h-48 bg-cover bg-center rounded-lg mb-6"
                  style={{ backgroundImage: `url(${category.image})` }}
                />
                <h3 className="text-xl font-serif font-bold text-white mb-3">{category.title}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">{category.description}</p>
                <Link 
                  to={category.path}
                  className="btn-primary w-full text-center block group-hover:bg-earth-brown/80"
                >
                  Learn More
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-earth-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
            Already know you want to join us?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Submit your application today, we can't wait to meet you.
          </p>
          <button className="btn-primary text-lg">
            Submit Application
          </button>
        </div>
      </section>
    </div>
  )
}

export default HomePage