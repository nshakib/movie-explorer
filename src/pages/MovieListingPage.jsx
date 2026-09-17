import { useState, useEffect } from 'react';
import { getAllShows, searchShows } from '../api/tvmaze';
import { useDebounce } from '../hooks/useDebounce';
import MovieCard from '../components/MovieCard';
import Modal from '../components/Modal';

const MovieListingPage = () => {
  const [allShows, setAllShows] = useState([]);
  const [displayedShows, setDisplayedShows] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedShow, setSelectedShow] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const debouncedSearchQuery = useDebounce(searchQuery, 500);

  useEffect(() => {
    const fetchInitialData = async () => {
      try {
        setLoading(true);
        const data = await getAllShows();
        setAllShows(data);
        setDisplayedShows(data);
      } catch (err) {
        setError('Failed to load shows.');
      } finally {
        setLoading(false);
      }
    };
    fetchInitialData();
  }, []);

  useEffect(() => {
    const performSearch = async () => {
      if (!debouncedSearchQuery) {
        setDisplayedShows(allShows);
        return;
      }
      try {
        setLoading(true);
        const results = await searchShows(debouncedSearchQuery);
        setDisplayedShows(results);
      } catch (err) {
        setError('Failed to search shows.');
      } finally {
        setLoading(false);
      }
    };
    performSearch();
  }, [debouncedSearchQuery, allShows]);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setError(null);
  };

  return (
    <main className="grow py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="mb-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 text-center md:text-left">
          {searchQuery ? `Results for "${searchQuery}"` : 'All Shows'}
        </h1>
        
        <div className="relative w-full md:w-96">
          <input
            type="text"
            placeholder="Search shows..."
            value={searchQuery}
            onChange={handleSearchChange}
            className="w-full px-4 py-3 pl-10 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent shadow-sm"
          />
          <svg className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
      </div>

      
      {loading && (
        <div className="flex justify-center py-20">
          <div className="animate-spin rounded-full h-12 w-12 sm:h-16 sm:w-16 border-t-4 border-b-4 border-primary"></div>
        </div>
      )}

      {/* Empty State */}
      {!loading && displayedShows.length === 0 && (
        <div className="text-center py-20 text-gray-500">
          <p className="text-xl">No shows found matching "{searchQuery}"</p>
          <button onClick={() => setSearchQuery('')} className="mt-4 text-primary hover:underline">
            Clear search
          </button>
        </div>
      )}

      
      {!loading && displayedShows.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {displayedShows.map((show) => (
            <MovieCard key={show.id} show={show} onSelect={setSelectedShow} />
          ))}
        </div>
      )}

      
      <Modal isOpen={!!selectedShow} onClose={() => setSelectedShow(null)}>
        {selectedShow && (
          <div className="flex flex-col md:flex-row">
            {/* Image Section */}
            <div className="md:w-2/5 h-64 md:h-auto relative shrink-0">
              <img 
                src={selectedShow.image?.original || selectedShow.image?.medium || 'https://placehold.co/400x600?text=No+Image'} 
                alt={selectedShow.name}
                className="w-full h-full object-cover md:rounded-l-2xl"
              />
            </div>

            {/* Content Section */}
            <div className="p-6 md:p-8 md:w-3/5">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-3">{selectedShow.name}</h2>
              
              {/* Genres */}
              <div className="flex flex-wrap gap-2 mb-4">
                {selectedShow.genres?.map(genre => (
                  <span key={genre} className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full font-medium uppercase tracking-wide">
                    {genre}
                  </span>
                ))}
              </div>

              {/* Key Stats Grid */}
              <div className="grid grid-cols-2 gap-y-4 gap-x-2 mb-6 text-sm border-b border-gray-100 pb-6">
                <div>
                  <p className="text-gray-500 text-xs uppercase">Premiere</p>
                  <p className="font-semibold text-gray-800">{selectedShow.premiered || 'N/A'}</p>
                </div>
                <div>
                  <p className="text-gray-500 text-xs uppercase">Rating</p>
                  <p className="font-semibold text-gray-800">⭐ {selectedShow.rating?.average || 'N/A'}/10</p>
                </div>
                <div>
                  <p className="text-gray-500 text-xs uppercase">Status</p>
                  <p className="font-semibold text-gray-800">{selectedShow.status || 'N/A'}</p>
                </div>
                <div>
                  <p className="text-gray-500 text-xs uppercase">Network</p>
                  <p className="font-semibold text-gray-800">{selectedShow.network?.name || 'N/A'}</p>
                </div>
              </div>

              {/* Summary */}
              <div className="text-gray-600 leading-relaxed">
                <h3 className="text-lg font-bold text-gray-800 mb-2">Summary</h3>
                <div dangerouslySetInnerHTML={{ __html: selectedShow.summary || 'No summary available.' }} />
              </div>
            </div>
          </div>
        )}
      </Modal>
    </main>
  );
};

export default MovieListingPage;