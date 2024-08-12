import searchIcon from '../../assets/svg/search.svg';

export const Searchbar = () => {
  return (
    <>
      <div className="w-[32rem] py-6 relative">
        <input
          type="text"
          placeholder="Search card..."
          className="h-full w-full placeholder:text-secondary-color bg-transparent outline-none text-secondary-color border-secondary-color border-2 rounded-xl p-3"
        />
        <div className="absolute right-0 h-[47px] cursor-pointer w-12 flex bg-secondary-color items-center justify-center rounded-tr-xl rounded-br-xl top-0 bottom-0 m-auto">
          <img src={searchIcon} className="w-6 h-6" />
        </div>
      </div>
    </>
  );
};
