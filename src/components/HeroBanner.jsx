import { Link } from 'react-router-dom';

const HeroBanner = () => {
  return (
    <section className="relative bg-dark overflow-hidden">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[100px] -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/30 rounded-full blur-[100px] translate-y-1/2"></div>
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 flex flex-col items-center text-center">
       
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8 animate-fade-in-up">
          <span className="flex h-2 w-2 rounded-full bg-primary"></span>
          <span className="text-sm font-medium text-gray-300">Powered by TVMaze API</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-6 leading-[1.1]">
          Discover Your Next <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-400">
            Favorite Show
          </span>
        </h1>

        
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          Explore thousands of TV shows and movies. Search, browse, and find 
          exactly what you're looking for with our comprehensive, real-time database.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link 
            to="/movies" 
            className="group relative px-8 py-4 bg-primary text-white font-bold rounded-xl shadow-lg shadow-primary/25 transition-all hover:bg-red-600 hover:shadow-primary/40 hover:-translate-y-1"
          >
            Start Exploring
            <span className="absolute right-4 top-1/2 -translate-y-1/2 transition-transform group-hover:translate-x-1">→</span>
          </Link>
          
          <Link 
            to="/movies" 
            className="px-8 py-4 bg-white/5 text-white font-semibold rounded-xl border border-white/10 backdrop-blur-sm transition-all hover:bg-white/10 hover:border-white/20"
          >
            View Trending
          </Link>
        </div>

       
        <div className="mt-16 pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-8 w-full max-w-3xl">
          {[
            { label: 'Shows', value: '10k+' },
            { label: 'Genres', value: '50+' },
            { label: 'Updates', value: 'Daily' },
            { label: 'Users', value: 'Free' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-2xl font-bold text-white">{stat.value}</p>
              <p className="text-sm text-gray-500 uppercase tracking-wider">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;