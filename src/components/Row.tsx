import React from "react";
import { getMovies } from "../services/api";

export default function Row({title, path}) {
  const [movies, setMovies] = React.useState([]);
  const fetchMovies = async (_path) => {
    try {
      const data = await getMovies(_path);
      setMovies(data?.results);

    } catch (error) {
      console.log("error fetchMovies: ", error);
    }
  };

  return (
    <div>Row</div>
  )  
}