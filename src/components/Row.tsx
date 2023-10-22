import React, { useEffect } from "react";
import { getMovies } from "../services/api";
import { Container } from "./Row.style";
import ReactPlayer from "react-player";
import movieTrailer from "movie-trailer";

export default function Row({title, path, isLarge}) {
  const [movies, setMovies] = React.useState([]);
  const [trailerUrl, setTrailerUrl] = React.useState("");

  //PEGAR URL DO TRAILER COM ACAO DE CLICK
  const handleOnClick = (movie) => {
    if (trailerUrl) { //CONDIÇÃO PARA FECHAR O VIDEO
      setTrailerUrl("");
    } else { //CONDIÇÃO PARA ABRE O VIDEO
      movieTrailer(movie.title || movie.name || movie.original_name || "")
        .then((url) => {
          setTrailerUrl(url);
          //setTrailerUrl("https://www.youtube.com/watch?v=ZnZqB5Z75zI"); 

        })
        .catch((error) => {
          console.log("Error fetching movie trailer: ", error);
        });
    }
  }

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
        {movies?.map((movie) => {
          return (
            <img 
              className={isLarge ? "movie-card-large" : "movie-card"}
              //FUNCTION OPEN VIDEO
              onClick={() => handleOnClick(movie)}

              key={movie.id}
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} 
              alt={movie.name} 
            ></img>
          )
        })}
      </div>
      {trailerUrl && <ReactPlayer playing={true} url={trailerUrl} />}
    </Container>
  )  
}
