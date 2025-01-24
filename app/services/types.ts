type TBaseProduct = {
  countOfPrices: number;
  imageUrl: string;
  price: number;
};

export type TProductListItem = TBaseProduct & {
  code: number;
  dropRatio: number;
  followCount: number;
  name: string;
  url: string;
};

export type TProductDetail = TBaseProduct & {
  badge: string;
  freeShipping: boolean;
  lastUpdate: string;
  mkName: string;
  productName: string;
  rating: number;
  storageOptions: string[];
};
