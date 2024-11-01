interface Order {
  id: number;
  name: string;
}

export interface Client {
  id: number;
  name: string;
  orders: Order[];
}
