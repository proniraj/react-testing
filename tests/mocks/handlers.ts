import { http, HttpResponse } from 'msw';
import { faker } from '@faker-js/faker';

const category = {
  id: faker.number.int(),
  name: faker.commerce.department(),
};

const post = {
  id: faker.number.int(),
  name: faker.commerce.productName(),
  price: faker.number.int({
    min: 100,
    max: 10000,
  }),
  categoryId: faker.number.int(),
};

const handlers = [
  http.get('/categories', () => {
    return HttpResponse.json(
      Array.from({ length: 3 }, () => {
        return category;
      })
    );
  }),

  http.get('https://jsonplaceholder.typicode.com/posts', () => {
    return HttpResponse.json(
      Array.from({ length: 10 }, () => {
        return post;
      })
    );
  }),

  http.get('https://jsonplaceholder.typicode.com/posts/:id', ({ params }) => {
    const { id } = params;

    if (id.toString() === '0' || Number(id.toString()) > 500) {
      return HttpResponse.json(
        {},
        {
          status: 404,
          statusText: 'Not Found',
        }
      );
    }

    return HttpResponse.json({
      ...post,
      id,
    });
  }),
];

export { handlers };
