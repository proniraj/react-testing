import { http, HttpResponse } from 'msw';

const handlers = [
  http.get('/categories', () => {
    return HttpResponse.json([
      {
        id: 1,
        name: 'Electronics',
      },
      {
        id: 2,
        name: 'Beauty & Personal Care',
      },
      {
        id: 3,
        name: 'Books',
      },
    ]);
  }),

  http.get('https://jsonplaceholder.typicode.com/posts', () => {
    return HttpResponse.json([
      {
        id: 1,
        name: 'iPhone 13',
        price: 999,
        categoryId: 1,
      },
      {
        id: 2,
        name: 'Samsung Galaxy S21',
        price: 799,
        categoryId: 1,
      },
      {
        id: 3,
        name: 'Laptop',
        price: 1299,
        categoryId: 1,
      },
      {
        id: 4,
        name: 'Lipstick',
        price: 19,
        categoryId: 2,
      },
      {
        id: 5,
        name: 'Shampoo',
        price: 9,
        categoryId: 2,
      },
      {
        id: 6,
        name: 'Foundation',
        price: 29,
        categoryId: 2,
      },
      {
        id: 7,
        name: 'Book 1',
        price: 9,
        categoryId: 3,
      },
      {
        id: 8,
        name: 'Book 2',
        price: 19,
        categoryId: 3,
      },
      {
        id: 9,
        name: 'Book 3',
        price: 29,
        categoryId: 3,
      },
    ]);
  }),
];

export { handlers };
