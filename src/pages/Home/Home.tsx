import { useEffect, useState } from 'react';
import { List } from '../../components/List/List';
import axios from 'axios';
import { HeroesData, HeroesResult } from './interfaces/heroes.interface';

export const Home = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [heroesList, setList] = useState<HeroesResult[]>([]);
  const [offset, setOffset] = useState<number>(0);
  const limit = 30;

  useEffect(() => {
    const getHeroesList = async () => {
      try {
        const res = await axios.get<HeroesData>(`${import.meta.env.VITE_API_URL}/v1/public/characters`, {
          params: {
            apikey: import.meta.env.VITE_API_KEY,
            hash: import.meta.env.VITE_API_HASHED,
            ts: import.meta.env.VITE_API_TS,
            limit,
            offset,
          },
        });
        setLoading(false);
        setList(res.data.data.results);
      } catch (e) {
        console.log(e);
      }
    };

    getHeroesList();
  }, []);

  return (
    <>
      <section className="w-full flex pt-24 min-h-screen bg-primary-color">
        {loading ? (
          <span>Loading</span>
        ) : (
          <>
            <List heroes={heroesList}></List>
            <div></div>
          </>
        )}
      </section>
    </>
  );
};
