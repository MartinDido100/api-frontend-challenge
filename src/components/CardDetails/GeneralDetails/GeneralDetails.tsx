interface GeneralDetailsProps {
  name: string;
  supertype: string;
  hp: string;
  types: string[];
  number: number;
  evolvesFrom: string;
}

export const GeneralDetails = ({ name, supertype, hp, types, evolvesFrom, number }: GeneralDetailsProps) => {
  return (
    <>
      <section className="flex grow-1 justify-between md:flex-col md:gap-4">
        <div className="flex flex-col">
          <h4 className="text-title-color">{name}</h4>
          <span>Supertype: {supertype}</span>
          <span>Evolves from: {evolvesFrom ? evolvesFrom : 'None'}</span>
        </div>
        <div className="flex flex-col gap-2 self-center md:self-start">
          <div className="flex h-9 gap-4 items-center">
            <span>HP {hp}</span>
            <ul className="flex h-full gap-3">
              {types.map((type) => (
                <img className="h-full w-full" key={type} src={`/images/${type}.png`} alt={type}></img>
              ))}
            </ul>
          </div>
          <span>Card number: {number}</span>
        </div>
      </section>
    </>
  );
};
