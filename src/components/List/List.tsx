import { CardInterface } from '../../interfaces';
import { Card } from '..';

interface ListProps {
  cards: CardInterface[];
}

export const List = ({ cards }: ListProps) => {
  return (
    <>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(10rem,30rem))] pt-40 place-content-center w-full pb-14 gap-x-32 gap-y-36">
        {cards.map((card) => {
          return <Card card={card} key={card.id} />;
        })}
      </div>
    </>
  );
};
