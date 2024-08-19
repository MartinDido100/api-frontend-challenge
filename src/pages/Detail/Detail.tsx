import { useParams } from 'react-router-dom';
import background from '../../assets/images/detail-bg.png';
import { useEffect, useState } from 'react';
import { CardDetail } from '../../interfaces';
import { getCard } from '../../services';
import { Loader, DetailInfo } from '../../components';

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
      className="lg:pb-6 pt-20 flex bg-center bg-cover min-h-screen w-full items-center justify-center"
      style={{ backgroundImage: `url(${background})` }}
    >
      {loading && (
        <div className="h-full w-full flex items-center justify-center">
          <Loader />
        </div>
      )}

      {card && <DetailInfo card={card} />}

      {error && <h4>{error.message}</h4>}
    </section>
  );
};
