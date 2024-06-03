import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="mb-10">
      <Link to={'/'}>
        <img
          src="/public/netflix_logo.svg"
          className="max-w-[150px] inline "
          alt="netflix"
        />
      </Link>
    </header>
  );
};

export default Header;
