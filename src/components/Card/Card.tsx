import { useNavigate } from 'react-router-dom';
import { CardInterface, CardSet } from '../../interfaces';
import { useEffect, useState } from 'react';
import { getSet } from '../../services';

interface CardProps {
  card: CardInterface;
}

export const Card = ({ card }: CardProps) => {
  const navigate = useNavigate();
  const [cardSet, setCardSet] = useState<CardSet | null>(null);

  const getCardSet = async () => {
    const res = await getSet(card.set.id);
    setCardSet(res.data.data);
  };

  useEffect(() => {
    getCardSet();
  }, []);

  const cardList = card.attacks?.map((attack, index) => (
    <li key={index} className="flex flex-col">
      <span className="text-title-color">
        {index + 1}) {attack.name}
      </span>
      <span>{attack.text ? `Description: ${attack.text}` : 'No description'} </span>
      <span>Damage: {attack.damage ? attack.damage : 'No damage'} </span>
      <br />
    </li>
  ));

  return (
    <>
      <div className="flex cursor-pointer flex-col relative items-center gap-3 w-full h-full">
        <div className="w-full h-full group">
          <section
            onClick={() => navigate(`/card/${card.id}`)}
            className="text-secondary-color overflow-y-auto text-xl gap-2 absolute invisible group-hover:visible opacity-0 ease-in-out duration-300 group-hover:opacity-100 transition-all items-start flex-col sm:p-4 p-8 w-full h-full rounded-2xl backdrop-blur-sm bg-[#000c] top-0"
          >
            <div className="absolute flex gap-3 h-6 top-3 right-6">
              {card.types &&
                card.types.map((type) => (
                  <img src={`/images/${type}.png`} key={type} alt={type} className="w-full h-full" />
                ))}
            </div>
            <h4 className="text-4xl self-center">
              <strong>{card.name}</strong>
            </h4>
            <h6 className="text-2xl sm:text-xl text-title-color">-Rarity: {card.rarity ? card.rarity : 'Common'}</h6>
            <span className="text-2xl text-title-color">- Attacks:</span>
            <ul>{cardList || 'No atacks'}</ul>
            <span className="text-2xl sm:text-xl text-title-color">- Card set:</span>
            <div className="sm:flex-col sm:items-start sm:gap-5 flex w-full items-center justify-between text-secondary-color">
              <div className="flex flex-col">
                <span>Set name: {cardSet?.name}</span>
                <span>Set series: {cardSet?.series}</span>
                <span>Set released in: {cardSet?.releaseDate}</span>
              </div>
              <picture className="w-40 sm:self-center">
                <img src={cardSet?.images.logo} alt="" className="h-full w-full" />
              </picture>
            </div>
          </section>
          <picture className="w-full">
            <img className="rounded-2xl w-full h-full" src={card.images.large} alt={`${card.name} image`} />
          </picture>
        </div>
      </div>
    </>
  );
};
