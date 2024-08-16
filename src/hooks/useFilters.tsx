import { useQueries } from 'react-query';
import { getRarities, getSetList, getTypes } from '../services';
import { SetFilter } from '../interfaces/filter.interface';

const fetchSets = async (): Promise<SetFilter[]> => {
  const res = await getSetList();
  return res.data.data as SetFilter[];
};

const fetchRarities = async (): Promise<string[]> => {
  const res = await getRarities();
  return res.data.data as string[];
};

const fetchTypes = async (): Promise<string[]> => {
  const res = await getTypes();
  return res.data.data as string[];
};

export const useFilters = (): {
  sets: string[] | undefined;
  types: string[] | undefined;
  rarities: string[] | undefined;
} => {
  const results = useQueries([
    {
      queryKey: 'sets',
      queryFn: fetchSets,
      refetchOnWindowFocus: false,
    },
    {
      queryKey: 'rarities',
      queryFn: fetchRarities,
      refetchOnWindowFocus: false,
    },
    {
      queryKey: 'types',
      queryFn: fetchTypes,
      refetchOnWindowFocus: false,
    },
  ]);

  return {
    sets: results[0].data?.map((set) => set.name),
    rarities: results[1].data,
    types: results[2].data,
  };
};
