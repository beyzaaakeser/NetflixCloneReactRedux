import React from 'react';

const Hero = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 md:max-h-[400px] gap-5 mb-10">
      <div className="flex flex-col gap-6 items-center justify-center">
        <h1 className="text-3xl font-bold">Çıkış Yok</h1>
        <p className="text-start">
          Film, düşen bir uçağın içerisinde yaşam mücadelesi veren bir grup
          insanın yaşadıklarını konu ediyor.
        </p>
        <p>
          <span>IMDB:</span>
          <span className="text-yellow-400 ms-2 font-semibold ">6.4</span>
        </p>

        <div
          className="flex gap-5 items-center justify-center
        "
        >
          <button className="p-2 px-4 bg-red-600 rounded hover:bg-red-700">
            Filmi Izle
          </button>
          <button className="p-2 px-4 bg-blue-600 rounded hover:bg-blue-700">
            Listeye Ekle
          </button>
        </div>
      </div>
      <div>
        <img
          className="my-4 object-contain rounded max-h-[300px] hero-img"
          src="https://image.tmdb.org/t/p/original/xRd1eJIDe7JHO5u4gtEYwGn5wtf.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Hero;
