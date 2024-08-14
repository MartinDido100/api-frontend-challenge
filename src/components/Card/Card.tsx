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

  useEffect(() => {
    const getCardSet = async () => {
      const res = await getSet(card.set.id);
      setCardSet(res.data.data);
    };

    getCardSet();
  }, [card.set.id]);

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
      <div
        className="flex cursor-pointer flex-col relative items-center gap-3 w-full"
        onClick={() => navigate(`/card/${card.id}`)}
      >
        <div>
          <section className="text-secondary-color text-xl gap-2 absolute flex items-start flex-col p-8 w-full h-full rounded-2xl opacity-0 hover:opacity-100 transition-all hover:backdrop-blur-sm hover:bg-[#000c] bg-transparent top-0">
            <h4 className="text-4xl self-center">
              <strong>{card.name}</strong>
            </h4>
            <h6 className="text-2xl text-title-color">-Rarity: {card.rarity ? card.rarity : 'Common'}</h6>
            <span className="text-2xl text-title-color">- Attacks:</span>
            <ul>{cardList || 'No atacks'}</ul>
            <span className="text-2xl text-title-color">- Card set:</span>
            <div className="flex w-full items-center justify-between text-secondary-color">
              <div className="flex flex-col">
                <span>Set name: {cardSet?.name}</span>
                <span>Set series: {cardSet?.series}</span>
                <span>Set released in: {cardSet?.releaseDate}</span>
              </div>
              <picture className="w-40">
                <img src={cardSet?.images.logo} alt="" className="h-full w-full" />
              </picture>
            </div>
          </section>
          <picture className="w-full">
            <img className="rounded-2xl" src={card.images.large} alt={`${card.name} image`} />
          </picture>
        </div>
      </div>
    </>
  );
};
