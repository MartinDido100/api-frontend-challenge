import { CardDetail } from '../../../interfaces';
import { GeneralDetails } from '../GeneralDetails/GeneralDetails';
import { MarketDetails } from '../MarketDetails/MarketDetail';
import { StrenghtsDetails } from '../StrenghtsDetails/StrenghtsDetails';

interface DetailInfoProps {
  card: CardDetail;
}

export const DetailInfo = ({ card }: DetailInfoProps) => {
  const generalInfo = {
    name: card.name,
    supertype: card.supertype,
    hp: card.hp,
    types: card.types,
    number: card.number,
    evolvesFrom: card.evolvesFrom,
  };

  return (
    <>
      <div className="flex px-7 py-8 gap-48 max-w-[83rem] w-11/12 bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-50 items-start">
        <picture className="w-[26rem] h-[36rem]">
          <img src={card.images.large} className="w-full h-full" />
        </picture>
        <div className="flex flex-grow text-secondary-color text-3xl font-bold flex-col gap-8">
          <GeneralDetails {...generalInfo} />
          <MarketDetails cardmarket={card.cardmarket} />
          <StrenghtsDetails weaknesses={card.weaknesses} resistances={card.resistances} />
        </div>
      </div>
    </>
  );
};
