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
