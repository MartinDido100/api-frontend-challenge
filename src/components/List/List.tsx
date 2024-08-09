import { HeroesResult } from '../../pages/Home/interfaces/heroes.interface';
import { HeroeCard } from '../HeroeCard/HeroeCard';

interface ListProps {
  heroes: HeroesResult[];
}

export const List = (props: ListProps) => {
  const notAvailable = 'image_not_available';
  return (
    <>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(10rem,30rem))] place-content-center w-full pb-14 gap-x-36 gap-y-32">
        {props.heroes.map((heroe) => {
          if (!heroe.thumbnail.path.includes(notAvailable)) {
            return <HeroeCard heroe={heroe} key={heroe.id} />;
          }
        })}
      </div>
    </>
  );
};
