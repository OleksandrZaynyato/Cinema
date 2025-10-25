import { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import axios from "axios";

interface Film {
  title: string;
  imageUrl?: string;
  trailerUrl?: string;
}

export const MainPage: React.FC = () => {
  const [films, setFilms] = useState<Film[]>([]);

  useEffect(() => {
    const fetchFilms = async () => {
      try {
        const response = await axios.get<Film[]>("http://localhost:5000/api/films/shown");
        setFilms(response.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchFilms();
  }, []);
  console.log(films);
  

  return (
    <div>
      {films.map((film) => (
        <div key={film.title}>
          <h3>{film.title}</h3>
          {film.imageUrl && <img src={film.imageUrl} alt={film.title} />}
          {film.trailerUrl && <ReactPlayer url={film.trailerUrl} controls width="560px" height="315px" />}
        </div>
      ))}
    </div>
  );
};
