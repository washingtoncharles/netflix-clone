const API_KEY_TEST = '33c85cb3e53108d9f8e1c207f2fed140';

const categories = [
  {
    name:'trending',
    title:'Em alta',
    path:`/trending/all/week?api_key=${API_KEY_TEST}&language=pt-BR`,
    isLarge:true,
  },
  {
    name:'netflixOriginals',
    title:'Originais Netflix',
    path:`/discover/tv?api_key=${API_KEY_TEST}&with_networks=213`,
    isLarge:false,
  },
  {
    name:'topRated',
    title:'Populares',
    path:`/movie/top_rated?api_key=${API_KEY_TEST}&language=pt-BR`,
    isLarge:false,
  },
  {
    name:'action',
    title:'Ação',
    path:`/discover/movie?api_key=${API_KEY_TEST}&with_genres=28`,
    isLarge:false,
  },
  {
    name:'comedy',
    title:'Comédia',
    path:`/discover/tv?api_key=${API_KEY_TEST}&with_genres=35`,
    isLarge:false,
  }
];

export const getMovies = async (path: string) => {
  
  try {
    const url = `https://api.themoviedb.org/3${path}`;
    const response = await fetch(url);
    return await response.json();

  } catch (error) {
    console.log("error getMovies: ", error);
  } 
}

export default categories;