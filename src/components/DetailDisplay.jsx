import React from 'react';
import { baseImgUrl } from '../constants';

const DetailDisplay = ({ title, data }) => {
  return (
    <div className="mb-6">
      <h2 className="text-xl font-semibold my-3 ">{title}</h2>
      <div className="flex flex-wrap gap-5">
        {data?.map((item) =>
          item.logo_path ? (
            <div
              key={item.id}
              className="bg-white py-1 px-2 rounded-md flex items-center justify-center "
            >
              <img
                className="min-w-[100px] max-h-[40px]  object-contain "
                src={baseImgUrl + item.logo_path}
                alt=""
              />
            </div>
          ) : (
            <span
              className="border border-red-200 hover:bg-red-600 transition duration-500 rounded py-1 px-2 my-2 cursor-pointer "
              key={item.id}
            >
              {item.name}
            </span>
          )
        )}
      </div>
    </div>
  );
};

export default DetailDisplay;
