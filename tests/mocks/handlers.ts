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
];

export { handlers };
