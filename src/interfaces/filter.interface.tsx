export interface FilterResponse {
  data: SetFilter[] | string[];
}

export interface SetFilter {
  name: string;
}

export interface Filter {
  set: string | null;
  type: string | null;
  rarity: string | null;
}
