import { useContext, useEffect } from 'react';
import { List, Loader } from '../../components';
import bg from '../../assets/images/background.webp';
import { SearchContext } from '../Layout';
import { useCards } from '../../hooks';
import { useNavigate } from 'react-router-dom';

export const Home = () => {
  const searchCtx = useContext(SearchContext);
  const navigate = useNavigate();

  const { cards, isFetchingNextPage, error, isLoading, fetchNextPage, hasNextPage } = useCards(searchCtx?.value);

  useEffect(() => {
    if ((searchCtx?.value !== '' && cards !== undefined && cards?.length === 0) || error !== null) {
      searchCtx?.setValue('');
      navigate('/not-found');
    }
  }, [cards, error]);

  return (
    <>
      <main
        className="w-full bg-cover bg-fixed flex-col items-center justify-center flex min-h-screen pb-6"
        style={{ backgroundImage: `url(${bg})` }}
      >
        {cards && cards.length > 0 && (
          <>
            <List cards={cards!}></List>
            {!isLoading && !isFetchingNextPage && hasNextPage && (
              <button
                onClick={() => fetchNextPage()}
                className="bg-secondary-color rounded-xl hover:scale-95 transition-transform text-black text-lg py-2 px-10"
              >
                <strong>Load more...</strong>
              </button>
            )}
            {!isLoading && !hasNextPage && (
              <span className="text-secondary-color text-3xl">
                <strong>No more cards...</strong>
              </span>
            )}
          </>
        )}

        {(isLoading || isFetchingNextPage) && <Loader />}
      </main>
    </>
  );
};
