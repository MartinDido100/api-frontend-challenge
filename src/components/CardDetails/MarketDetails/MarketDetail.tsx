import { Cardmarket } from '../../../interfaces';

interface MarketProps {
  cardmarket: Cardmarket;
}

interface Price {
  text: string;
  price: number;
}

export const MarketDetails = ({ cardmarket }: MarketProps) => {
  const prices: Price[] = [
    { text: 'Trend price', price: cardmarket.prices.trendPrice },
    { text: '1 day average', price: cardmarket.prices.avg1 },
    { text: '7 day average', price: cardmarket.prices.avg7 },
    { text: '30 day average', price: cardmarket.prices.avg30 },
  ];

  return (
    <>
      <section className="flex flex-col gap-2 text-secondary-color">
        <h4 className="text-title-color">Cardmarket:</h4>
        <span>Last market update: {cardmarket.updatedAt}</span>
        <span>Prices: </span>
        <ul className="flex text-xl xl:text-base md:flex-col justify-between">
          {prices.map((price, index) => (
            <li key={index} className="flex flex-col md:flex-row md:gap-1">
              <span>{price.text} :</span>
              <span className="text-[#40ff32]">{price.price} €</span>
            </li>
          ))}
        </ul>
        <button className="flex">
          <a
            className="text-black text-xl p-2 rounded-lg bg-[#485fc7] hover:scale-95 transition-transform"
            href={cardmarket.url}
            target="BLANK_"
          >
            <strong>Buy now!</strong>
          </a>
        </button>
      </section>
    </>
  );
};
