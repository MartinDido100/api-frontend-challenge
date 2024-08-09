import { HeroesResult } from '../../pages/Home/interfaces/heroes.interface';

interface CardProps {
  heroe: HeroesResult;
}

export const HeroeCard = (props: CardProps) => {
  return (
    <div className="flex flex-col items-center gap-3 w-full bg-black">
      <header className="self-start">
        <h3 className="text-3xl text-secondary-color">{props.heroe.name}</h3>
      </header>
      <div>
        <picture className="w-full">
          <img className="h-96 w-96" src={`${props.heroe.thumbnail.path}.${props.heroe.thumbnail.extension}`} alt="" />
        </picture>
      </div>
    </div>
  );
};
