import { useNavigate } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import { Searchbar } from '../Searchbar';

export const Header = () => {
  const navigate = useNavigate()

  return (
    <>
      <header className="w-full h-20 shadow-xl py-3 px-10 flex items-center justify-between fixed bg-primary-color">
        <picture className="h-full cursor-pointer" onClick={() => navigate('/')}>
          <img src={logo} alt="" className="h-full" />
        </picture>
        <Searchbar />
        <span className="grow-1"></span>
      </header>
    </>
  );
};
