import axios from 'axios';
import { CardDetailResponse, CardListResponse, Filter, FilterResponse } from '../interfaces';
import { CardSetResponse } from '../interfaces';

const limit = 20;
const cardSelect = 'id,name,types,attacks,weakness,rarity,images,set';
const setSelect = 'name,series,releaseDate,images'
const detailSelect = 'name,supertype,hp,types,evolvesFrom,weaknesses,resistances,number,images,cardmarket'
const headers = {
  'X-Api-Key': import.meta.env.VITE_API_KEY
}
const baseUrl = import.meta.env.VITE_API_URL;

export const getCard = (id: string) => {
  return axios.get<CardDetailResponse>(`${baseUrl}/cards/${id}`,{
    params: {
      select: detailSelect
    },
    headers
  })
}

const applyFilters = (query: string, filter: Filter): string => {
  if (filter.rarity) {
    query = query.concat(` rarity:"${filter.rarity}"`);
  }

  if (filter.set) {
    query = query.concat(` set.name:"${filter.set}"`);
  }

  if (filter.type) {
    query = query.concat(` types:${filter.type}`);
  }

  return query
}

export const getCards = (page: number,nameQuery: string, filter: Filter) => {
  let query = nameQuery ? `name:"*${nameQuery}*"` : ''

  if(filter){
    query = applyFilters(query,filter)
  }

  return axios.get<CardListResponse>(`${baseUrl}/cards`, {
    params: {
      pageSize: limit,
      page,
      select: cardSelect,
      q: query
    },
    headers
  });
};

export const getSet = (id: number) => {
  return axios.get<CardSetResponse>(`${baseUrl}/sets/${id}`, {
    params: {
      select: setSelect,
    },
    headers
  });
};

export const getSetList = () => {
 return axios.get<FilterResponse>(`${baseUrl}/sets`,{
  params: {
    select: 'name'
  },
  headers
 });
}

export const getRarities = () => {
 return axios.get<FilterResponse>(`${baseUrl}/rarities`, {
   headers,
 });
}

export const getTypes = () => {
 return axios.get<FilterResponse>(`${baseUrl}/types`, {
   headers,
 });
}