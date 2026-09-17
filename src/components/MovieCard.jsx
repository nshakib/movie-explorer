const MovieCard = ({ show, onSelect }) => {
  const { id, name, image, premiered, rating } = show || {};
  const posterUrl = image?.medium || 'https://placehold.co/300x450?text=No+Poster';
  const year = premiered ? premiered.split('-')[0] : 'N/A';
  const ratingValue = rating?.average ? rating.average.toFixed(1) : 'N/A';

  return (
    <div className="group bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden flex flex-col h-full border border-gray-100">
      
      <div className="relative aspect-[2/3] bg-gray-200 overflow-hidden cursor-pointer" onClick={() => onSelect(show)}>
        <img 
          src={posterUrl} 
          alt={name} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
        
        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
        
        {/* Rating Badge - Bottom Left for better visibility */}
        <div className="absolute bottom-3 left-3 bg-dark/90 backdrop-blur-md text-white text-xs font-bold px-2.5 py-1.5 rounded-lg border border-white/10 flex items-center gap-1">
          <svg className="w-3 h-3 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          {ratingValue}
        </div>
      </div>

      {/* Content */}
      <div className="p-4 flex-grow flex flex-col">
        <div className="mb-3">
          <h3 className="text-lg font-bold text-gray-900 line-clamp-1 group-hover:text-primary transition-colors" title={name}>
            {name}
          </h3>
          <p className="text-sm text-gray-500 mt-1">
            {year !== 'N/A' ? year : 'Year Unknown'}
          </p>
        </div>
        
        <button 
          onClick={() => onSelect(show)}
          className="mt-auto w-full flex items-center justify-center gap-2 bg-gray-50 hover:bg-dark text-gray-700 hover:text-white border border-gray-200 hover:border-dark py-2.5 px-4 rounded-lg transition-all font-medium text-sm group/btn"
        >
          See Details
          <svg className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default MovieCard;