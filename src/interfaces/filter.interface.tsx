export interface FilterResponse {
  data: SetFilter[] | string[];
}

export interface SetFilter {
  name: string;
}

export interface Filter {
  set: string;
  type: string;
  rarity: string;
}
