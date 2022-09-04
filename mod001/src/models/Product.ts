type Product = {
  name: string;
  price: number;
};

const data: Product[] = [
  { name: "Notebook", price: 1000 },
  { name: "Smartphone", price: 500 },
  { name: "Tablet", price: 700 },
  { name: "Smartwatch", price: 300 },
  { name: "Headphone", price: 200 },
];

export const Product = {
  getAll: (): Product[] => {
    return data;
  },
  getFromPriceAfter: (price: number): Product[] => {
    return data.filter((item) => {
      item.price >= price;
    });
  },
};
