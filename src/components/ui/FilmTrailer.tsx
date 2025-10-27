import React from "react";
import ReactPlayer from "react-player";

interface FilmTrailerProps {
  trailerUrl?: string;
}

const FilmTrailer: React.FC<FilmTrailerProps> = ({ trailerUrl }) => {
  console.log(trailerUrl);
  
  if (!trailerUrl) return null;
  return trailerUrl.replace("watch?v=", "embed/");

  return <ReactPlayer url={trailerUrl as any} controls width="560px" height="315px" />;
};

export default FilmTrailer;
