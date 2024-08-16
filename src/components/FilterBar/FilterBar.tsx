import { useReducer } from 'react';
import { useFilters } from '../../hooks/useFilters';
import { Filter } from '../../interfaces/filter.interface';

interface FilterBarProps {
  OnChangeFilter: (filter: Filter | null) => void;
}

enum FilterEnum {
  SET = 'set',
  TYPE = 'type',
  RARITY = 'rarity',
}

type ReducerAction = {
  value: string;
  field: FilterEnum;
};

const filterReducer = (state: Filter, action: ReducerAction): Filter => {
  if (action.value === 'default') {
    return state;
  }

  switch (action.field) {
    case FilterEnum.RARITY:
      return { ...state, rarity: action.value };
    case FilterEnum.SET:
      return { ...state, set: action.value };
    case FilterEnum.TYPE:
      return { ...state, type: action.value };
    default:
      return state;
  }
};

export const FilterBar = ({ OnChangeFilter }: FilterBarProps) => {
  const { sets, rarities, types } = useFilters();
  const [filter, dispatch] = useReducer(filterReducer, { set: null, type: null, rarity: null });

  return (
    <div className="flex items-center text-lg p-3 px-6 gap-6 w-11/12 rounded-xl mt-24 bg-secondary-color">
      <span>Filter By:</span>
      <select
        name="typeFilter"
        onChange={(change) => dispatch({ value: change.target.value, field: FilterEnum.TYPE })}
        className="w-48 outline-none p-2"
      >
        <option value="default"> --Type-- </option>
        {types?.map((type) => (
          <option key={type} value={type}>
            {type}
          </option>
        ))}
      </select>

      <select
        name="setFilter"
        className="w-48 outline-none p-2"
        onChange={(change) => dispatch({ value: change.target.value, field: FilterEnum.SET })}
      >
        <option value="default"> --Set-- </option>
        {sets?.map((set) => (
          <option key={set} value={set}>
            {set}
          </option>
        ))}
      </select>

      <select
        name="rarityFilter"
        className="w-48 outline-none p-2"
        onChange={(change) => dispatch({ value: change.target.value, field: FilterEnum.RARITY })}
      >
        <option value="default"> --Rarity-- </option>
        {rarities?.map((rarity) => (
          <option key={rarity} value={rarity}>
            {rarity}
          </option>
        ))}
      </select>
      <span className="grow"></span>
      <button onClick={() => OnChangeFilter(filter)} className="text-2xl hover:text-[1.45rem] transition-all">
        <strong>Filter</strong>
      </button>
    </div>
  );
};
