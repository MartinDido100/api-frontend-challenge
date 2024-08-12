import { useNavigate } from 'react-router-dom';
import { CardInterface } from '../../interfaces/card.interface';

interface CardProps {
  card: CardInterface;
}

export const Card = ({ card }: CardProps) => {
  const navigate = useNavigate();

  return (
    <div
      className="flex cursor-pointer flex-col items-center gap-3 w-full"
      onClick={() => navigate(`/card/${card.id}`)}
    >
      <header className="self-start w-full">
        <h3 className="text-3xl text-center text-secondary-color">
          <strong>{card.name}</strong>
        </h3>
      </header>
      <div>
        <picture className="w-full">
          <img src={card.images.large} alt={`${card.name} image`} />
        </picture>
      </div>
    </div>
  );
};
