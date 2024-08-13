import { useEffect, useState } from 'react';
import { CardInterface } from '../../interfaces';
import { getCards } from '../../services';
import { List, Loader } from '../../components';
import bg from '../../assets/images/background.webp';

export const Home = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [cards, setCards] = useState<CardInterface[]>([]);
  const [page, setPage] = useState<number>(1);
  const [error, setError] = useState<Error | null>(null);

  const getHeroesList = async (page: number) => {
    try {
      const res = await getCards(page);
      setCards((prev) => prev.concat(res.data.data));
    } catch (e) {
      setError(e as Error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setLoading(true);
    getHeroesList(page);
  }, [page]);

  return (
    <>
      <main
        className="w-full bg-cover bg-fixed pb-4 flex-col items-center justify-center flex pt-40 min-h-screen"
        style={{ backgroundImage: `url(${bg})` }}
      >
        {cards.length > 0 && (
          <>
            <List cards={cards}></List>
            {!loading && <button onClick={() => setPage((prev) => prev + 1)}>Load more..</button>}
          </>
        )}

        {loading && <Loader />}
        {error && <h4 className="text-secondary-color">{error.message}</h4>}
      </main>
    </>
  );
};
