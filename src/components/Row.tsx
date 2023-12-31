import React, { useEffect } from "react";
import ReactPlayer from "react-player";
import movieTrailer from "movie-trailer";
import { getMovies } from "../services/api";
import { Container } from "./Row.style";

interface MovieProps {
  title: string;
  path: string;
  isLarge: boolean;
  name: string;
  original_name: string;
  poster_path: string;
  id: number;
  key: string;
}

export default function Row({title, path, isLarge}:MovieProps) {
  const [movies, setMovies] = React.useState<MovieProps[]>([]);
  const [trailerUrl, setTrailerUrl] = React.useState<string | null>("");

  //PEGAR URL DO TRAILER COM ACAO DE CLICK
  const handleOnClick = (movie: MovieProps) => {
    if (trailerUrl) { //CONDIÇÃO PARA FECHAR O VIDEO
      setTrailerUrl("");
    } else { //CONDIÇÃO PARA ABRE O VIDEO
      movieTrailer(movie.title || movie.name || movie.original_name || "")
        .then((url: string) => {
          setTrailerUrl(url);
          //setTrailerUrl("https://www.youtube.com/watch?v=ZnZqB5Z75zI"); 

        })
        .catch((error: Error) => {
          console.log("Error fetching movie trailer: ", error);
        });
    }
  }

  const fetchMovies = async (_path: string) => {
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
        {movies?.map((movie: MovieProps) => {
          return (
            <img 
              className={isLarge ? "movie-card-large" : "movie-card"}
              //FUNCTION OPEN VIDEO
              onClick={() => handleOnClick(movie)}

              key={movie.id}
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} 
              alt={movie.name} 
            ></img>
          );
        })}
      </div>
      {trailerUrl && <ReactPlayer playing={true} url={trailerUrl} />}
    </Container>
  )  
}
