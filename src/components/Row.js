import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import React, { useEffect, useState, useRef } from "react";
import axios from "../API/axios";
import MovieModal from "./MovieModal";
import "./Row.css";

const Row = ({ title, fetchUrl, id, addRating }) => {
  const base_url = "https://image.tmdb.org/t/p/original/";
  const [movies, setMovies] = useState([]);
  const [modalVisibility, setModalVisibility] = useState(false);
  const [movieSelected, setMovieSelection] = useState({});
  const rowRef = useRef(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const request = await axios.get(fetchUrl, {
          headers: {
            "Access-Control-Allow-Origin": "*",
          },
        });
        setMovies(request.data.result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, [fetchUrl]);

  const handleClick = (movie) => {
    setModalVisibility(true);
    setMovieSelection(movie);
  };

  const scrollLeft = () => {
    if (rowRef.current) {
      rowRef.current.scrollLeft -= window.innerWidth - 80;
    }
  };

  const scrollRight = () => {
    if (rowRef.current) {
      rowRef.current.scrollLeft += window.innerWidth - 80;
    }
  };

  return (
    <section className="row">
      <h2>{title}</h2>
      <div className="slider">
        <div className="slider__arrow-left">
          <span className="arrow" onClick={scrollLeft}>
            <ArrowBackIosIcon />
          </span>
        </div>
        <div ref={rowRef} className="row__posters">
          {movies.map((movie, idx) => (
            <img
              key={idx}
              onClick={() => handleClick(movie)}
              className={`row__poster row__posterLarge`}
              src={`${base_url}${movie.poster_path}`}
              loading="lazy"
              alt={movie.title}
            />
          ))}
        </div>
        <div className="slider__arrow-right">
          <span className="arrow" onClick={scrollRight}>
            <ArrowForwardIosIcon />
          </span>
        </div>
      </div>
      {modalVisibility && (
        <MovieModal
          {...movieSelected}
          setModalVisibility={setModalVisibility}
          addRating={addRating}
        />
      )}
    </section>
  );
};

export default Row;
