export interface CardSetResponse{
  data: CardSet
}

export interface CardSet {
  name: string;
  series: string;
  releaseDate: string;
  images: SetImage;
}

interface SetImage {
  symbol: string;
  logo: string;
}
