import HeroBanner from '../components/HeroBanner';

const HomePage = () => {
  const features = [
    {
      icon: (
        <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      ),
      title: 'Smart Search',
      desc: 'Find shows instantly with our debounced, real-time search engine.',
      color: 'bg-blue-50 text-blue-600'
    },
    {
      icon: (
        <svg className="w-8 h-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
      title: 'Comprehensive Database',
      desc: 'Access thousands of TV shows and movies with detailed metadata.',
      color: 'bg-purple-50 text-purple-600'
    },
    {
      icon: (
        <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: 'Fast & Reliable',
      desc: 'Lightning-fast results powered by the robust TVMaze API.',
      color: 'bg-green-50 text-green-600'
    },
  ];

  return (
    <main className="flex-grow bg-white">
      <HeroBanner />
      
      {/* Features Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose TV Shows Hub?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We provide the best tools for TV enthusiasts to discover, track, and enjoy their favorite content.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div 
              key={feature.title} 
              className="group relative p-8 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="relative z-10">
                <div className={`w-14 h-14 ${feature.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  {feature.icon}
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-dark py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to start watching?
          </h2>
          <p className="text-gray-400 mb-8 text-lg">
            Join thousands of users who are already discovering their next binge-worthy series.
          </p>
          <a 
            href="/movies" 
            className="inline-block bg-primary hover:bg-red-600 text-white font-bold py-3 px-8 rounded-lg transition-colors shadow-lg shadow-primary/25"
          >
            Browse All Shows
          </a>
        </div>
      </section>
    </main>
  );
};

export default HomePage;