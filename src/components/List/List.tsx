import { CardInterface } from '../../interfaces';
import { Card } from '..';
import { useState } from 'react';

interface ListProps {
  cards: CardInterface[];
}

enum ViewOption {
  GRID = 'grid',
  LIST = 'list',
}

export const List = ({ cards }: ListProps) => {
  const [view, setView] = useState<ViewOption>(ViewOption.GRID);

  return (
    <>
      <div className="flex w-32 rounded-xl self-start ml-10 items-center p-3 justify-center mt-4 gap-4 bg-secondary-color">
        <button onClick={() => setView(ViewOption.GRID)}>
          <img src="/images/grid.png" alt="grid icon" className="h-7 hover:scale-90 transition-transform" />
        </button>
        <button onClick={() => setView(ViewOption.LIST)}>
          <img src="/images/list.png" alt="list icon" className="h-7 hover:scale-90 transition-transform" />
        </button>
      </div>
      <div
        className={`sm:px-6 sm:gap-y-10 grid ${view === ViewOption.GRID ? 'grid-cols-[repeat(auto-fill,minmax(10rem,30rem))]' : 'grid-cols-1'} pt-8 place-content-center md:w-full ${view === ViewOption.GRID ? 'w-full' : 'w-[50%]'} pb-10 gap-x-32 gap-y-36`}
      >
        {cards.map((card) => (
          <Card card={card} key={card.id} />
        ))}
      </div>
    </>
  );
};
