import { Link } from 'react-router-dom';
import bg from '../../assets/images/background.webp';
import { useContext } from 'react';
import { SearchContext } from '../../pages';

export const NotFound = () => {
  const searchCtx = useContext(SearchContext);

  return (
    <section style={{ backgroundImage: `url(${bg})` }}>
      <div className="pt-20 bg-gray-400 w-full h-[calc(100vh-0.01rem)] flex-col rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-50 flex items-center justify-center">
        <img src="/images/notFound.png" alt="" />
        <p className="text-black text-4xl">
          <strong>
            Cards not found. Please search again or
            <Link to="/" onClick={() => searchCtx?.setValue('')} className="text-title-color hover:underline">
              Go back...
            </Link>
          </strong>
        </p>
      </div>
    </section>
  );
};
