import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import { Searchbar } from '..';
import { useContext } from 'react';
import { SearchContext } from '../../pages';

export const Header = () => {
  const searchCtx = useContext(SearchContext);

  return (
    <>
      <header className="md:h-auto md:flex-col md:gap-7 md:py-4 md:px-0 w-full h-20 shadow-md shadow-primary-color py-3 px-10 flex items-center justify-between fixed z-50 bg-primary-color">
        <picture className="md:h-20 md:w-[9rem] h-full cursor-pointer" onClick={() => searchCtx?.setValue('')}>
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
