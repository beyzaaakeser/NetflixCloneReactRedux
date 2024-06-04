import React from 'react';
import { useSelector } from 'react-redux';
import Loader from '../components/Loader';
import Error from '../components/Error';
import millify from 'millify';
import { baseImgUrl } from '../constants';
import { Link } from 'react-router-dom';

const Hero = () => {
  const { isLoading, error, movies } = useSelector((store) => store.movies);
  const i = Math.floor(Math.random() * (movies.length + 1));
  const movie = movies[i];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 md:max-h-[400px] gap-5 mb-10">
      {!movie || isLoading ? (
        <Loader />
      ) : error ? (
        <Error />
      ) : (
        <>
          <div className="flex flex-col gap-6 items-center justify-center">
            <h1 className="text-3xl font-bold mt-5">{movie?.title}</h1>
            <p className="text-start ps-6">{movie?.overview}</p>
            <p>
              <span>IMDB:</span>
              <span className="text-yellow-400 ms-2 font-semibold ">
                {movie?.vote_average.toFixed(1)}
              </span>
            </p>

            <div
              className="flex gap-5 items-center justify-center
            "
            >
              <Link to={`/movie/${movie.id}`}>
                <button className="p-2 px-4 bg-red-600 rounded hover:bg-red-700">
                  Filmi Izle
                </button>
              </Link>
              <button className="p-2 px-4 bg-blue-600 rounded hover:bg-blue-700">
                Listeye Ekle
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-6 items-center justify-center">
            <img
              className="my-4 object-contain rounded max-h-[300px] hero-img md:max-h-[400px]"
              src={baseImgUrl + movie.backdrop_path}
              alt=""
            />
          </div>
        </>
      )}
    </div>
  );
};

export default Hero;
