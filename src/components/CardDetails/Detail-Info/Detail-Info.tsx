import { useNavigate } from 'react-router-dom';
import { CardDetail } from '../../../interfaces';
import { GeneralDetails, MarketDetails, StrenghtsDetails } from '../../../components';

interface DetailInfoProps {
  card: CardDetail;
}

export const DetailInfo = ({ card }: DetailInfoProps) => {
  const navigate = useNavigate();

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
      <div className="md:flex-col xl:mt-28 md:mt-60 xl:gap-8 flex px-7 py-8 gap-48 max-w-[83rem] w-11/12 bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-50 items-center relative">
        <img
          src="/svg/cross.svg"
          className="hover:scale-95 transition-transform w-7 h-7 cursor-pointer absolute top-4 right-8"
          alt="cross"
          onClick={() => navigate('/')}
        />
        <picture className="md:w-auto md:h-auto w-[26rem] h-[36rem]">
          <img src={card.images.large} className="md:object-cover xl:object-contain w-full h-full" />
        </picture>
        <div className="flex flex-grow text-secondary-color lg:text-2xl text-3xl font-bold flex-col gap-8">
          <GeneralDetails {...generalInfo} />
          <MarketDetails cardmarket={card.cardmarket} />
          <StrenghtsDetails weaknesses={card.weaknesses} resistances={card.resistances} />
        </div>
      </div>
    </>
  );
};
