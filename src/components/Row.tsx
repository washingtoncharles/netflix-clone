import React, { useEffect } from "react";
import { getMovies } from "../services/api";
import { Container } from "./Row.style";

export default function Row({title, path}) {
  const [movies, setMovies] = React.useState([]);
  const fetchMovies = async (_path) => {
    try {
      const data = await getMovies(_path);
      console.log("data: ", data);
      setMovies(data?.results);

    } catch (error) {
      console.log("error fetchMovies: ", error);
    }
  };

  useEffect(() => {
    fetchMovies(path);
  }, [path]);

  return (
    <Container>
      <h2 className="row-header">{title}</h2>
      <div className="row-cards">
        {movies?.map((movie) => (
          <div key={movie.id} className="card">
            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.name} />
            <h3>{movie.title}</h3>
          </div>
        ))}
      </div>
    </Container>
  )  
}