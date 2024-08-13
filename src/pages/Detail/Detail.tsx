import { useParams } from 'react-router-dom';
import background from '../../assets/images/detail-bg.png';
import { useEffect, useState } from 'react';
import { CardDetail } from '../../interfaces';
import { getCard } from '../../services';
import { Loader } from '../../components';

export const Detail = () => {
  const { cardId } = useParams();
  const [loading, setLoading] = useState(false);
  const [card, setCard] = useState<CardDetail | null>(null);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const getCardData = async () => {
      try {
        const res = await getCard(cardId!);
        setCard(res.data.data);
      } catch (e) {
        setError(e as Error);
      } finally {
        setLoading(false);
      }
    };

    setLoading(true);
    getCardData();
  }, [cardId]);

  return (
    <section
      className="flex bg-center pt-24 bg-cover h-screen w-full"
      style={{ backgroundImage: `url(${background})` }}
    >
      {loading && (
        <div className="h-full w-full flex items-center justify-center">
          <Loader />
        </div>
      )}

      {card && (
        <>
          <h2>{card.name}</h2>
        </>
      )}
    </section>
  );
};
