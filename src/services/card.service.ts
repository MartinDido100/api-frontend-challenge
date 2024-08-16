import axios from 'axios';
import { CardDetailResponse, CardListResponse } from '../interfaces/card.interface';
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

export const getCards = (page: number,nameQuery: string | undefined) => {
  return axios.get<CardListResponse>(`${baseUrl}/cards`, {
    params: {
      pageSize: limit,
      page,
      select: cardSelect,
      q: nameQuery !== undefined ? `name:*${nameQuery}*` : null
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
 return axios.get(`${baseUrl}/sets`,{
  params: {
    select: 'name'
  },
  headers
 });
}

export const getRarities = () => {
 return axios.get(`${baseUrl}/rarities`, {
   headers,
 });
}

export const getTypes = () => {
 return axios.get(`${baseUrl}/types`, {
   headers,
 });
}