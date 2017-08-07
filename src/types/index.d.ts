export interface Item {
  objectID: number;
  title: string;
  author: string;
  url: string;
  num_comments: number;
  points: number;
}

export interface Results {
  hits: Array<Item>;
  page: number;
}