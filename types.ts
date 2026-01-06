
export interface Service {
  title: string;
  description: string;
}

export interface Product {
  name: string;
  description: string;
}

export interface ProductGroup {
  category: string;
  items: Product[];
}
