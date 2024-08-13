import searchIcon from '../../assets/images/pokeball.png';

export const Searchbar = () => {
  return (
    <>
      <div className="w-[32rem] py-6 relative">
        <input
          type="text"
          placeholder="Search card..."
          className="h-full w-full placeholder:text-secondary-color bg-transparent outline-none text-gray-400 border-gray-400 border-2 rounded-xl p-3"
        />
        <div className="absolute right-0 h-[47px] cursor-pointer w-12 flex bg-gray-400 items-center justify-center rounded-tr-xl rounded-br-xl top-0 bottom-0 m-auto">
          <img src={searchIcon} className="w-6 h-6 hover:scale-[.89] transition-transform" />
        </div>
      </div>
    </>
  );
};
