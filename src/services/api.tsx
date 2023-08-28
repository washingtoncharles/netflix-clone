const API_KEY_TEST = '33c85cb3e53108d9f8e1c207f2fed140';

const categories = [
  {
    name:'trending',
    title:'Em alta',
    path:`/trending/all/week?api_key=${API_KEY_TEST}&language=pt-BR`,
  },
  {
    name:'netflixOriginals',
    title:'Originais Netflix',
    path:`/discover/tv?api_key=${API_KEY_TEST}&with_networks=213`,
  },
  {
    name:'topRated',
    title:'Populares',
    path:`/movie/top_rated?api_key=${API_KEY_TEST}&language=pt-BR`,
  },
  {
    name:'action',
    title:'Ação',
    path:`/discover/tv?api_key=${API_KEY_TEST}&with_genres=28`,
  },
  {
    name:'comedy',
    title:'Comedia',
    path:`/discover/tv?api_key=${API_KEY_TEST}&with_genres=35`,
  }
];

export const getMovies = async (path) => {
  
  try {
    const url = `https://api.themoviedb.org/3${path}`;
    const response = await fetch(url);
    return await response.json();

  } catch (error) {
    console.log("error getMovies: ", error);
  } 
}