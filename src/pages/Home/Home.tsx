import { useContext, useEffect } from 'react';
import { List, Loader } from '../../components';
import bg from '../../assets/images/background.webp';
import { SearchContext } from '../Layout';
import { useCards } from '../../hooks';
import { NotFound } from '../../components/NotFound/NotFound';
import { useNavigate } from 'react-router-dom';

export const Home = () => {
  const searchCtx = useContext(SearchContext);
  const navigate = useNavigate();

  const { cards, isFetching, isError, fetchNextPage } = useCards(searchCtx?.value);

  useEffect(() => {
    if (cards !== undefined && cards?.length === 0) {
      navigate('/not-found');
    }
  }, [cards]);

  return (
    <>
      <main
        className="w-full bg-cover bg-fixed flex-col items-center justify-center flex min-h-screen"
        style={{ backgroundImage: `url(${bg})` }}
      >
        {cards && cards.length > 0 && (
          <>
            <List cards={cards!}></List>
            {!isFetching && cards.length > 0 && <button onClick={() => fetchNextPage()}>Load more...</button>}
          </>
        )}

        {cards?.length === 0 && searchCtx?.value !== '' && <NotFound />}
        {isFetching && <Loader />}
        {isError && <h4 className="text-secondary-color">Error fetching cards.</h4>}
      </main>
    </>
  );
};
