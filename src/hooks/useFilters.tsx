import { useQueries } from 'react-query';
import { getRarities, getSetList, getTypes } from '../services';

const fetchSets = async () => {
  const res = await getSetList();
  return res.data;
};

const fetchRarities = async () => {
  const res = await getRarities();
  return res.data;
};

const fetchTypes = async () => {
  const res = await getTypes();
  return res.data;
};

export const useFilters = (): {
  sets: string[];
  types: string[];
  rarities: string[];
} => {
  const results = useQueries([
    {
      queryKey: 'sets',
      queryFn: fetchSets,
    },
    {
      queryKey: 'rarities',
      queryFn: fetchRarities,
    },
    {
      queryKey: 'types',
      queryFn: fetchTypes
    },
  ]);

  return {
    sets: [],
    types: [],
    rarities: [],
  };
};
