import React, { useState, useEffect, memo, useCallback } from "react";
import { Fragment } from "react";
import classes from "./Search.module.css";
import SearchNav from "./SearchNav";
import { Link } from "react-router-dom";
import sadFace from "../../../Images/sad.svg";
import LatestLayer from "../../Slider/LatestLayer";
const Search = (props) => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");
  const [loaded, setLoaded] = useState(true);
  const queryHandler = (e) => {
    setQuery(e);
    console.log(query);
  };
  const fetchMoviesHandler=useCallback(()=> {
    const newLocal = `https://api.themoviedb.org/3/search/movie?api_key=fc7cf63ba4bff0be767922c945d31d04&query=${query}&page=1`;
    fetch(newLocal)
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((data) => {
        if (data.total_pages === 0) {
          setLoaded(false);
        } else setLoaded(true);
        const transformedMovies = data.results.map((movieData) => {
          return {
            id: movieData.id,
            title: movieData.title,
            image: movieData.poster_path,
            detail: movieData.overview,
            genres: movieData.genre_ids[0],
          };
        });
        setMovies(transformedMovies);
      });
    },[query])
    useEffect(() => {
      fetchMoviesHandler();
    }, [fetchMoviesHandler]);
    return (
    <Fragment>
      <SearchNav search={queryHandler} />
      <div className={classes.movieItem}>
        {loaded ? (
          movies.map((movie) => (
            <div key={movie.id} className={classes.movieItem}>
              <Link to={`/Play/${movie.id}`} className={classes.link}>
                <LatestLayer
                  id={movie.id}
                  //  key={movie.id}
                  name={movie.name}
                  title={movie.title}
                  image={movie.image}
                  detail={movie.detail}
                />
              </Link>
            </div>
          ))
        ) : (
          <div className={classes.found}>
            Not Found
            <img src={sadFace} alt="sad face"/>
          </div>
        )}
      </div>
    </Fragment>
  );
};
export default memo(Search);
