import { Outlet } from 'react-router-dom';
import { Header } from '../../components';
import { createContext, useState } from 'react';

type SearchContextType = {
  value: string;
  setValue: (value: string) => void;
};

export const SearchContext = createContext<SearchContextType | undefined>(undefined);

export const Layout = () => {
  const [value, setValue] = useState('');

  const changeSearchValue = (value: string) => {
    setValue(value);
  };

  const ctxValue: SearchContextType = {
    value,
    setValue: changeSearchValue,
  };

  return (
    <SearchContext.Provider value={ctxValue}>
      <Header />
      <Outlet />
    </SearchContext.Provider>
  );
};
