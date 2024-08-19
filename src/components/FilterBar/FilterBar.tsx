import { useRef, useState } from 'react';
import { useFilters } from '../../hooks';
import { Filter } from '../../interfaces';

interface FilterBarProps {
  OnChangeFilter: (filter: Filter | null) => void;
}

export const FilterBar = ({ OnChangeFilter }: FilterBarProps) => {
  const { sets, rarities, types } = useFilters();
  const [activeFilter, setActiveFilter] = useState(false);

  const typeRef = useRef<HTMLSelectElement | null>(null);
  const setRef = useRef<HTMLSelectElement | null>(null);
  const rarityRef = useRef<HTMLSelectElement | null>(null);

  const emptyFilter = () => {
    return !typeRef.current?.value && !setRef.current?.value && !rarityRef.current?.value;
  };

  const handleFilterClick = () => {
    if (!emptyFilter()) {
      setActiveFilter(true);
      OnChangeFilter({
        set: setRef.current!.value,
        type: typeRef.current!.value,
        rarity: rarityRef.current!.value,
      });
    }
  };

  const removeFilter = () => {
    setRef.current!.selectedIndex = 0;
    typeRef.current!.selectedIndex = 0;
    rarityRef.current!.selectedIndex = 0;
    setActiveFilter(false);
    OnChangeFilter(null);
  };

  return (
    <div className="flex items-center lg:items-start lg:flex-col text-lg p-3 px-6 gap-6 w-full rounded-xl mt-24 md:mt-60 bg-secondary-color">
      <span>Filter By:</span>
      <select disabled={activeFilter} name="typeFilter" ref={typeRef} className="w-48 lg:w-full outline-none p-2">
        <option value=""> --Type-- </option>
        {types?.map((type) => (
          <option key={type} value={type}>
            {type}
          </option>
        ))}
      </select>

      <select disabled={activeFilter} name="setFilter" className="w-48 lg:w-full outline-none p-2" ref={setRef}>
        <option value=""> --Set-- </option>
        {sets?.map((set) => (
          <option key={set} value={set}>
            {set}
          </option>
        ))}
      </select>

      <select disabled={activeFilter} name="rarityFilter" className="w-48 lg:w-full outline-none p-2" ref={rarityRef}>
        <option value=""> --Rarity-- </option>
        {rarities?.map((rarity) => (
          <option key={rarity} value={rarity}>
            {rarity}
          </option>
        ))}
      </select>
      <span className="grow"></span>
      {!activeFilter && (
        <button onClick={handleFilterClick} className="text-2xl hover:text-[1.45rem] transition-all">
          <strong>Filter</strong>
        </button>
      )}

      {activeFilter && (
        <button onClick={removeFilter} className="text-2xl text-primary-color hover:text-[1.45rem] transition-all">
          <strong>Remove filter</strong>
        </button>
      )}
    </div>
  );
};
