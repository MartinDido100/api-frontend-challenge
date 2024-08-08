import logo from '../../assets/images/logo.png';
import { Searchbar } from '../Searchbar';

export const Header = () => {
  return (
    <>
      <header className="w-full h-20 shadow-xl py-3 px-10 flex items-center justify-between">
        <picture className="h-full">
          <img src={logo} alt="" className="h-full" />
        </picture>
        <Searchbar />
        <div className='grow-1'></div>
      </header>
    </>
  );
};
