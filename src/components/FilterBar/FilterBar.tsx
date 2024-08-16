export const FilterBar = () => {

  return (
    <div className="flex items-center text-lg p-3 gap-6 w-11/12 rounded-xl mt-24 bg-secondary-color">
      <span>Filter By:</span>
      <select name="typeFilter" className="w-48 p-2">
        <option value="null"> --Type-- </option>
      </select>

      <select name="setFilter" className="w-48 p-2">
        <option value="null"> --Set-- </option>
      </select>

      <select name="rarityFilter" className="w-48 p-2">
        <option value="null"> --Rarity-- </option>
      </select>
    </div>
  );
};
