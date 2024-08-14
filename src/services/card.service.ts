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

export const getCard = (id: string) => {
  return axios.get<CardDetailResponse>(`${import.meta.env.VITE_API_URL}/cards/${id}`,{
    params: {
      select: detailSelect
    },
    headers
  })
}

export const getCards = (page: number) => {
  return axios.get<CardListResponse>(`${import.meta.env.VITE_API_URL}/cards`, {
    params: {
      pageSize: limit,
      page,
      select: cardSelect,
    },
    headers
  });
};

export const getSet = (id: number) => {
  return axios.get<CardSetResponse>(`${import.meta.env.VITE_API_URL}/sets/${id}`, {
    params: {
      select: setSelect,
    },
    headers
  });
};