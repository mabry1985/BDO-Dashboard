export type BarterItem = {
  name: string;
  img: string;
  count: number;
  tier: number;
};

export type Storage = {
  name: string;
  items: BarterItem[];
};