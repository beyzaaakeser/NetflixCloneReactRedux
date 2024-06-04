import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from './../utils/api';
import Loader from '../components/Loader';
import { baseImgUrl } from '../constants';
import DetailDisplay from '../components/DetailDisplay';
import millify from 'millify';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import '@splidejs/react-splide/css/skyblue';
import '@splidejs/react-splide/css/sea-green';
import '@splidejs/react-splide/css/core';
import ActorCard from '../components/ActorCard';
const DetailPage = () => {
  const [movie, setMovie] = useState();
  // URL'den film id'si use params methodu ile aldik.
  const { id } = useParams();

  useEffect(() => {
    const params = {
      append_to_response: 'credits,videos',
    };
    api
      .get(`movie/${id}`, { params })
      .then((res) => setMovie(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className='p-3 md:p-0'>
      {!movie ? (
        <Loader />
      ) : (
        <div>
          <div className="relative mt-5 h-[35vh] rounded-md overflow-hidden shadow-lg">
            <img
              src={baseImgUrl + movie.backdrop_path}
              className="w-full h-full object-cover rounded-md"
              alt=""
            />
            <div className="absolute bg-black inset-0 bg-opacity-50 grid place-items-center">
              <h2 className="text-4xl font-semibold ">{movie.title}</h2>
            </div>
          </div>

          {/*orta alan*/}

          <div className="my-3 md:my-10 flex flex-col-reverse  md:flex-row gap-2 md:gap-5  ">
            <div className="flex flex-col md:flex-[40%]   ">
              <DetailDisplay title={'Kategoriler'} data={movie?.genres} />
              <DetailDisplay
                title={'Konusulan Diller'}
                data={movie?.spoken_languages}
              />
              <DetailDisplay
                title={'Yapim Sirketleri'}
                data={movie?.production_companies}
              />
              <DetailDisplay
                title={'Yapimci Ulkeler'}
                data={movie?.production_countries}
              />
            </div>

            <div className="flex md:flex-[60%]  flex-col gap-2 mt-3">
              <p className="text-xl mb-4 text-gray-300">{movie.overview}</p>
              <p className="flex gap-3">
                <span>Butce :</span>
                <span className=" text-green-600  font-semibold">
                  ${millify(movie.budget)}
                </span>
              </p>
              <p>
                <span className="me-3">Hasilat :</span>
                <span className="  text-green-600  font-semibold">
                  ${millify(movie.revenue)}
                </span>
              </p>
            </div>
          </div>

          {/* slider alani */}
          <div>
            <Splide
              options={{
                pagination: false,
                autoWidth: true,
                gap: '15px',
              }}
            >
              {movie.credits.cast.map((actor, i) => (
                <SplideSlide>
                  <ActorCard key={i} actor={actor} />
                </SplideSlide>
              ))}
            </Splide>
          </div>
        </div>
      )}
    </div>
  );
};

export default DetailPage;
