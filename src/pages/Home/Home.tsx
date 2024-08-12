import { useEffect, useState } from 'react';
import { List } from '../../components/List/List';
import axios from 'axios';
import { CardInterface, CardListResponse } from '../../interfaces/card.interface';

export const Home = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [cards, setCards] = useState<CardInterface[]>([]);
  const [page, setPage] = useState<number>(1);
  const limit = 10;
  const select = 'id,name,types,attacks,weakness,rarity,images';

  useEffect(() => {
    setLoading(true);
    const getHeroesList = async () => {
      try {
        const res = await axios.get<CardListResponse>(`${import.meta.env.VITE_API_URL}/cards`, {
          params: {
            pageSize: limit,
            page,
            select,
          },
        });
        setCards((prev) => prev.concat(res.data.data));
      } catch (e) {
        console.log(e);
      } finally {
        setLoading(false);
      }
    };

    getHeroesList();
  }, [page]);

  return (
    <>
      <main className="w-full pb-4 flex-col items-center justify-center flex pt-24 min-h-screen bg-primary-color">
        {cards.length > 0 && (
          <>
            <List cards={cards}></List>
            {!loading && <button onClick={() => setPage((prev) => prev + 1)}>Load more..</button>}
          </>
        )}
        {loading && <h4>Loading...</h4>}
      </main>
    </>
  );
};
