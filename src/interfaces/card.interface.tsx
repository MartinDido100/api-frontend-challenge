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
  types: Type[];
  attacks: Attack[];
  rarity?: string;
  images: Images;
  set: {
    id: number;
  };
}

export interface Attack {
  name: string;
  cost: Type[];
  convertedEnergyCost: number;
  damage: string;
  text: string;
}

export enum Type {
  Colorless = 'Colorless',
  Darkness = 'Darkness',
  Dragon = 'Dragon',
  Grass = 'Grass',
  Lightning = 'Lightning',
  Metal = 'Metal',
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
  number: string;
  cardmarket: Cardmarket;
}

export interface Cardmarket {
  url: string;
  updatedAt: string;
  prices: { [key: string]: number };
}

export interface Resistance {
  type: string;
  value: string;
}
