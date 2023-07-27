import express from 'express';
import { randomUUID } from 'crypto';
import fs from 'fs';

interface Product {
  id: string;
  name: string;
  price: number;
}

const app = express();

app.use(express.json());

let products: Product[] = [];

fs.readFile('products.json', 'utf-8', (err, data) => {
  if (err) {
    console.log(err);
  } else {
    products = JSON.parse(data); 
  }
});

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.post('/products', (req, res) => {
  const { name, price } = req.body;

  const product: Product = {
    name,
    price,
    id: randomUUID()
  };

  products.push(product);
  
  productFile();

  console.log(product);

  return res.json(product);
});

app.get('/products', (req, res) => {
  return res.json(products);
});

app.get('/products/:id', (req, res) => {
  const { id } = req.params;

  const product = products.find(product => product.id === id);
});

app.put('/products/:id', (req, res) => {
  const { id } = req.params;
  const { name, price } = req.body;

  const productIndex = products.findIndex(product => product.id === id);

  products[productIndex] = {
    ...products[productIndex],
    name, 
    price
  };

  productFile();

  return res.json({ message: 'Produto alterado com sucesso!' });  
});

app.delete('/products/:id', (req, res) => {
  const { id } = req.params;

  const productIndex = products.findIndex(product => product.id === id);
  
  products.splice(productIndex, 1);

  productFile();
  
  console.log('Produto removido!');
});

function productFile() {
  fs.writeFile('products.json', JSON.stringify(products), (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log('Produto inserido');
    }
  });
}

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});