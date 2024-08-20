import { CardInterface } from '../../interfaces';
import { Card } from '..';
import { useEffect, useState } from 'react';

interface ListProps {
  cards: CardInterface[];
}

export enum ViewOption {
  GRID = 'grid',
  LIST = 'list',
}

export const List = ({ cards }: ListProps) => {
  const [view, setView] = useState<ViewOption>(ViewOption.GRID);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 750) {
        setView(ViewOption.GRID);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <div className="flex w-32 self-start md:hidden lg:self-center rounded-xl ml-10 items-center p-3 justify-center mt-4 gap-4 bg-secondary-color">
        <button onClick={() => setView(ViewOption.GRID)}>
          <img src="/images/grid.png" alt="grid icon" className="h-7 hover:scale-90 transition-transform" />
        </button>
        <button onClick={() => setView(ViewOption.LIST)}>
          <img src="/images/list.png" alt="list icon" className="h-7 hover:scale-90 transition-transform" />
        </button>
      </div>
      <div
        className={`sm:px-6 sm:gap-y-10 grid ${view === ViewOption.GRID ? 'grid-cols-[repeat(auto-fill,minmax(10rem,30rem))] gap-y-36' : 'grid-cols-1 gap-y-10'} pt-8 place-content-center lg:w-full w-full pb-10 gap-x-32`}
      >
        {cards.map((card) => (
          <Card card={card} view={view} key={card.id} />
        ))}
      </div>
    </>
  );
};
