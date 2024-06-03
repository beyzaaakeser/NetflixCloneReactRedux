import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from './../utils/api';
import Loader from '../components/Loader';
import { baseImgUrl } from '../constants';
import DetailDisplay from '../components/DetailDisplay';
import millify from 'millify';

const DetailPage = () => {
  const [movie, setMovie] = useState();
  // URL'den film id'si use params methodu ile aldik.
  const { id } = useParams();

  useEffect(() => {
    api
      .get(`movie/${id}`)
      .then((res) => setMovie(res.data))
      .catch((err) => console.log(err));
  }, []);
  console.log(movie);
  return (
    <div>
      {!movie ? (
        <Loader />
      ) : (
        <div>
          <div className="relative mt-10 h-[25vh]">
            <img
              src={baseImgUrl + movie.backdrop_path}
              className="w-full h-full object-cover rounded"
              alt=""
            />
            <div className="absolute bg-black inset-0 bg-opacity-50 grid place-items-center">
              <h2 className="text-4xl font-semibold ">{movie.title}</h2>
            </div>
          </div>
          <div className="my-10 grid grid-cols-1 md:grid-cols-2">
            <div>
              <DetailDisplay title={'Kategoriler'} data={movie?.genres} />
              <DetailDisplay
                title={'Konusulan Diller'}
                data={movie?.spoken_languages}
              />
              <DetailDisplay
                title={'Yapimci Ulkeler'}
                data={movie?.production_countries}
              />
              <DetailDisplay
                title={'Yapim Sirketleri'}
                data={movie?.production_companies}
              />
            </div>
            <div className="mt-2 flex flex-col gap-2">
              <p className='my-2'>{movie.overview}</p>
              <p>
                <span>Butce:</span>
                <span className="text-green-500 ms-2">
                  ${millify(movie.budget)}
                </span>
              </p>
              <p>
                <span>Hasilat</span>
                <span className="text-green-500 ms-2">
                  ${millify(movie.revenue)}
                </span>
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DetailPage;
