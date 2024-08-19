import { KeyboardEvent, useContext, useRef } from 'react';
import searchIcon from '../../assets/images/pokeball.png';
import { SearchContext } from '../../pages';
import { useLocation, useNavigate } from 'react-router-dom';

export const Searchbar = () => {
  const searchCtx = useContext(SearchContext);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const enterKey = 'Enter';
  const location = useLocation();
  const navigate = useNavigate();

  const hanldeSearchValue = () => {
    searchCtx!.setValue(inputRef.current?.value || '');
    if (location.pathname !== '/') {
      navigate('/');
    }
  };

  const handleKeyUp = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === enterKey) {
      hanldeSearchValue();
    }
  };

  return (
    <>
      <div className="w-[32rem] md:w-[90%] relative">
        <input
          autoComplete="off"
          type="text"
          id="searchbar"
          placeholder="Search card..."
          className="h-full w-full placeholder:text-black bg-#e8f0fe outline-none text-black text-xl border-gray-400 border-2 rounded-xl p-3"
          onKeyUp={handleKeyUp}
          ref={inputRef}
        />
        <div
          onClick={() => hanldeSearchValue()}
          className=" absolute right-0 h-full cursor-pointer transition-all w-12 p-2 hover:p-[.65rem] flex bg-gray-400 items-center justify-center rounded-tr-xl rounded-br-xl top-0 bottom-0 m-auto"
        >
          <img src={searchIcon} />
        </div>
      </div>
    </>
  );
};
