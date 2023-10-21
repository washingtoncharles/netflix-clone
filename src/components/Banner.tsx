import React, { useEffect } from "react";
import { Container } from "./Banner.style";
import categories, { getMovies } from "../services/api";

export default function Banner(){
  const [movie, setMovie] = React.useState([]);
  const fetchRandomMovie = async () => {
    try {
      const netflixOriginalsCategory = categories.find(
        (category) => category.name === "netflixOriginals"
      );
      const data = await getMovies(netflixOriginalsCategory.path);
      const randomIndex = Math.floor(Math.random() * data.results.length);
      setMovie(data?.results[randomIndex]);

    } catch (error) {
      console.log("error fetchRandomMovie: ", error);
    }
  }

  useEffect(() => {
    fetchRandomMovie();
  }, []);

  return(
    <Container>
      <header className="banner-container"
        style={{
          backgroundSize: "cover",
          backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
          backgroundPosition: "center center",
        }}
      >
        <div className="banner-content">
          <div className="banner-title">
            {movie?.title || movie?.name || movie?.original_name}
          </div>

          <div className="banner-button-container">
            <div className="banner-button">Assistir</div>
            <div className="banner-button">Minha Lista</div>
          </div>

          <div className="banner-description">
            {movie?.overview}
          </div>
        </div>

      </header>
    </Container>
  )
}