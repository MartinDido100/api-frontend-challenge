export interface CardListResponse {
  data: CardInterface[];
  page: number;
  pageSize: number;
  count: number;
  totalCount: number;
}

export interface CardInterface {
  id: string;
  name: string;
  types: string[];
  attacks?: Attack[];
  rarity?: string;
  images: Images;
  set: {
    id: number;
  };
}

export interface Attack {
  name: string;
  cost: string[];
  convertedEnergyCost: number;
  damage: string;
  text: string;
}

export interface Images {
  small: string;
  large: string;
}

export interface CardDetailResponse {
  data: CardDetail;
}

export interface CardDetail {
  name: string;
  supertype: string;
  hp: string;
  types: string[];
  evolvesFrom: string;
  weaknesses: Resistance[];
  resistances: Resistance[];
  number: number;
  cardmarket: Cardmarket;
  images: Images;
}

export interface Cardmarket {
  url: string;
  updatedAt: string;
  prices: MarketPrices;
}

interface MarketPrices {
  trendPrice: number;
  avg1: number;
  avg7: number;
  avg30: number;
}

export interface Resistance {
  type: string;
  value: string;
}
