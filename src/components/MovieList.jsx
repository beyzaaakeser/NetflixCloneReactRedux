import React, { useEffect, useState } from 'react';
import api from '../utils/api';

const MovieList = ({ genre }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const params = {
      with_genres: genre.id,
    };
    api
      .get('discover/movie', { params })
      .then((res) => setMovies(res.data.results)).catch((err)=> console.error(err));
  }, []);
  console.log(movies)
  return <div>MovieList</div>;
};

export default MovieList;
