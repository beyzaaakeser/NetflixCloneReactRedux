import React from 'react';
import { baseImgUrl } from '../constants';

const ActorCard = ({ actor }) => {
  return (
    <div className="max-w-[160px] overflow-hidden line-clamp-2">
      <img
        src={
          actor.profile_path == null
            ? '/public/noimage2.png'
            : baseImgUrl + actor.profile_path
        }
        className="h-[175px] max-w-[125px]"
        alt={actor.name}
      />
      <h2 className="max-w-[125px] line-clamp-1 text-ellipsis">
        {actor.original_name}
      </h2>
      <h2 className="max-w-[125px] line-clamp-1 text-ellipsis">
        {actor.character}
      </h2>
    </div>
  );
};

export default ActorCard;
