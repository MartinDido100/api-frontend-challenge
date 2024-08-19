import { Link } from 'react-router-dom';
import bg from '../../assets/images/background.webp';

export const NotFound = () => {
  return (
    <section style={{ backgroundImage: `url(${bg})` }} className="min-h-screen">
      <div className="pt-20 md:pt-52 bg-gray-400 w-full min-h-screen items-center flex-col rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-50 flex justify-center">
        <img className="md:h-80" src="/images/notFound.png" alt="" />
        <p className="text-black text-4xl md:text-center md:p-3">
          <strong>
            Cards not found. Please search again or
            <span>
              {' '}
              <Link to="/" className="text-title-color hover:underline">
                Go back...
              </Link>
            </span>
          </strong>
        </p>
      </div>
    </section>
  );
};
