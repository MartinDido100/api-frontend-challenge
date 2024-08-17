import { Resistance } from '../../../interfaces/card.interface';

interface StrenghtsDetailsProps {
  weaknesses: Resistance[];
  resistances?: Resistance[];
}

export const StrenghtsDetails = ({ weaknesses, resistances }: StrenghtsDetailsProps) => {
  return (
    <section className="flex gap-20">
      {weaknesses && (
        <div>
          <span className="text-title-color">Weaknesses</span>
          {weaknesses.map((weakness, index) => (
            <div key={index} className="flex mt-4 h-9 items-center gap-4">
              <img src={`/images/${weakness.type}.png`} className="h-full" />
              <span>{weakness.value}</span>
            </div>
          ))}
        </div>
      )}

      {resistances && (
        <div>
          <span className="text-title-color">Resistances</span>
          {resistances.map((resistance, index) => (
            <div key={index} className="flex mt-4 items-center gap-4 h-9">
              <img src={`/images/${resistance.type}.png`} className="h-full" />
              <span>{resistance.value}</span>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};
