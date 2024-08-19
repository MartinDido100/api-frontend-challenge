import { FetchNextPageOptions, InfiniteQueryObserverResult, useInfiniteQuery } from 'react-query';
import { CardInterface } from '../interfaces';
import { getCards } from '../services';
import { Filter } from '../interfaces/filter.interface';

type FetchCardsResponse = {
  cards: CardInterface[];
  page: number;
  totalCount: number;
  pageSize: number;
};

const fetchCards = async ({
  pageParam = 1,
  queryKey,
}: {
  pageParam?: number;
  queryKey: (string | Filter)[];
}): Promise<FetchCardsResponse> => {
  const res = await getCards(pageParam, queryKey[0] as string, queryKey[1] as Filter);
  return {
    cards: res.data.data,
    page: res.data.page,
    totalCount: res.data.totalCount,
    pageSize: res.data.pageSize,
  };
};

const checkNextPage = (lastPage: number, totalCount: number, pageSize: number): boolean => {
  return totalCount / pageSize > lastPage;
};

export const useCards = (
  query: string,
  filter: Filter,
): {
  cards: CardInterface[] | undefined;
  hasNextPage: boolean | undefined;
  isLoading: boolean;
  isFetchingNextPage: boolean;
  error: unknown;
  fetchNextPage: (options?: FetchNextPageOptions) => Promise<InfiniteQueryObserverResult>;
} => {
  const { data, hasNextPage, isLoading, error, fetchNextPage, isFetchingNextPage } = useInfiniteQuery({
    queryKey: [query, filter],
    queryFn: fetchCards,
    getNextPageParam: (lastPage) => {
      return checkNextPage(lastPage.page, lastPage.totalCount, lastPage.pageSize) ? lastPage.page + 1 : undefined;
    },
    refetchOnWindowFocus: false,
    retry: false,
  });

  return {
    cards: data?.pages.flatMap((page) => page.cards),
    error,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage,
    isLoading,
  };
};
