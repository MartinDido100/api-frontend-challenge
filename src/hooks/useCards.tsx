import { FetchNextPageOptions, InfiniteQueryObserverResult, useInfiniteQuery } from 'react-query';
import { CardInterface } from '../interfaces';
import { getCards } from '../services';

const fetchCards = async ({ pageParam = 1, queryKey }: { pageParam?: number; queryKey: (string | undefined)[] }) => {
  const res = await getCards(pageParam, queryKey[1]);
  return {
    cards: res.data.data,
    page: res.data.page,
  };
};

export const useCards = (
  query: string | undefined,
): {
  cards: CardInterface[] | undefined;
  isLoading: boolean;
  isError: boolean;
  hasNextPage: boolean | undefined;
  isFetchingNextPage: boolean;
  isFetching: boolean,
  fetchNextPage: (options?: FetchNextPageOptions) => Promise<InfiniteQueryObserverResult>;
} => {
  const { data, isError, isFetching, isLoading, hasNextPage, fetchNextPage, isFetchingNextPage } = useInfiniteQuery({
    queryKey: ['cards', query],
    queryFn: fetchCards,
    getNextPageParam: (lastPage) => lastPage.page + 1,
  });

  return {
    cards: data?.pages.flatMap((page) => page.cards),
    isLoading,
    isError,
    hasNextPage,
    fetchNextPage,
    isFetching,
    isFetchingNextPage,
  };
};
