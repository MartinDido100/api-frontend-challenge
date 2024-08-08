export const Searchbar = () => {
  return (
    <>
      <div className="w-[32rem] py-6">
        <input
          type="text"
          placeholder="SEARCH HERO..."
          className="h-full w-full bg-transparent outline-none text-secondary-color border-secondary-color border-2 rounded-xl p-3"
        />
        {/* Search icon */}
      </div>
    </>
  );
};
