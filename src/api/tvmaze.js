const BASE_URL = 'https://api.tvmaze.com';

function getRank(showName, query) {
  if (!showName) return 3;
  
  const name = showName.toLowerCase();
  const search = query.toLowerCase();

  if (name === search) return 0;       // Exact match
  if (name.startsWith(search)) return 1; // Starts with query
  if (name.includes(search)) return 2;   // Contains query
  return 3;                            // No match (or very weak match)
}

export async function getAllShows() {
  try {
    const response = await fetch(`${BASE_URL}/shows`);
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    return await response.json();
  } catch (error) {
    console.error('Error fetching all shows:', error);
    throw error;
  }
}

export async function searchShows(query) {
  if (!query || query.trim() === '') return [];
  
  try {
    const encodedQuery = encodeURIComponent(query.trim());
    const response = await fetch(`${BASE_URL}/search/shows?q=${encodedQuery}`);
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    
    const data = await response.json();
    
    // 1. Map to show objects AND attach a 'rank' property
    const rankedShows = data.map(item => {
      const show = item.show;
      return {
        ...show,
        rank: getRank(show.name, query)
      };
    });

    // 2. Sort using the rank numbers
    rankedShows.sort((a, b) => {
      // Primary sort: by Rank (0 is best)
      if (a.rank !== b.rank) {
        return a.rank - b.rank;
      }
      
      // Secondary sort: If ranks are equal, sort alphabetically by name
      return a.name.localeCompare(b.name);
    });

    return rankedShows; 
  } catch (error) {
    console.error('Error searching shows:', error);
    throw error;
  }
}