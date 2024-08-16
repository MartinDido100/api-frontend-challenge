import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import { Searchbar } from '..';
import { useContext } from 'react';
import { SearchContext } from '../../pages';

export const Header = () => {
  const searchCtx = useContext(SearchContext);

  return (
    <>
      <header className="w-full h-20 shadow-md shadow-primary-color py-3 px-10 flex items-center justify-between fixed z-50 bg-primary-color">
        <picture className="h-full cursor-pointer" onClick={() => searchCtx?.setValue('')}>
          <Link to="/">
            <img src={logo} alt="" className="h-full" />
          </Link>
        </picture>
        <Searchbar />
        <span className="grow-1"></span>
      </header>
    </>
  );
};
