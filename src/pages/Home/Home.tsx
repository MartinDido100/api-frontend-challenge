import { useContext, useEffect, useState } from 'react';
import { List, Loader, FilterBar } from '../../components';
import bg from '../../assets/images/background.webp';
import { SearchContext } from '../Layout';
import { useCards } from '../../hooks';
import { useNavigate } from 'react-router-dom';
import { Filter } from '../../interfaces';

export const Home = () => {
  const searchCtx = useContext(SearchContext);
  const navigate = useNavigate();
  const [filter, setFilter] = useState<Filter | null>(null);

  const { cards, isFetchingNextPage, error, isLoading, fetchNextPage, hasNextPage } = useCards(
    searchCtx!.value,
    filter as Filter,
  );

  const handleFilterChange = (filter: Filter | null) => {
    setFilter(filter);
  };

  useEffect(() => {
    if ((cards !== undefined && cards?.length === 0) || error !== null) {
      searchCtx?.setValue('');
      navigate('/not-found');
    }
  }, [cards, error]);

  return (
    <>
      <main
        className="w-full bg-cover bg-fixed flex-col items-center flex min-h-screen pb-6"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="w-full px-10">
          <FilterBar OnChangeFilter={handleFilterChange} />
        </div>
        {/* <div className="flex flex-col w-full items-center pl-10">
          <div className="flex w-32 rounded-xl items-center p-3 justify-center mt-4 gap-4 bg-secondary-color">
            <button>
              <img src="/images/grid.png" alt="grid icon" className="h-7 hover:scale-90 transition-transform" />
            </button>
            <button>
              <img src="/images/list.png" alt="list icon" className="h-7 hover:scale-90 transition-transform" />
            </button>
          </div>
        </div> */}
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

        {(isLoading || isFetchingNextPage) && (
          <div className="w-full grow flex items-center justify-center">
            <Loader />
          </div>
        )}
      </main>
    </>
  );
};
