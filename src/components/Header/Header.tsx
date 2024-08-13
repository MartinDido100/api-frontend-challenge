import { useNavigate } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import { Searchbar } from '..';

export const Header = () => {
  const navigate = useNavigate();
  const detailPath = '/card/';

  return (
    <>
      <header className="w-full h-20 shadow-2xl shadow-slate-600 py-3 px-10 flex items-center justify-between fixed z-50 bg-primary-color">
        <picture className="h-full cursor-pointer" onClick={() => navigate('/')}>
          <img src={logo} alt="" className="h-full" />
        </picture>
        {!window.location.pathname.includes(detailPath) && <Searchbar />}
        <span className="grow-1"></span>
      </header>
    </>
  );
};
