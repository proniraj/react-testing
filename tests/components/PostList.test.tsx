import { render, screen } from '@testing-library/react';
import PostList from '../../src/components/PostList';
import { server } from '../mocks/server';
import { HttpResponse, http } from 'msw';

describe('PostList', () => {
  it('should render loading state', () => {
    render(<PostList />);
    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });

  it('should render error state', async () => {
    server.use(
      ...[
        http.get('https://jsonplaceholder.typicode.com/posts', () => {
          return HttpResponse.json(
            {
              status: 500,
              body: 'Internal server error',
            },
            {
              status: 500,
              statusText: 'Internal server error',
            }
          );
        }),
      ]
    );

    render(<PostList />);

    const message = await screen.findByText(/error/i);
    const loadingMessage = screen.queryByText(/loading/i);
    expect(loadingMessage).not.toBeInTheDocument();
    expect(message).toBeInTheDocument();
  });

  it('should render no posts available', async () => {
    server.use(
      ...[
        http.get('https://jsonplaceholder.typicode.com/posts', () => {
          return HttpResponse.json([]);
        }),
      ]
    );

    render(<PostList />);

    const message = await screen.findByText(/no posts/i);
    const loadingMessage = screen.queryByText(/loading/i);
    expect(loadingMessage).not.toBeInTheDocument();
    expect(message).toBeInTheDocument();
  });

  it('should render posts', async () => {
    render(<PostList />);

    const posts = await screen.findAllByRole('listitem');
    const loadingMessage = screen.queryByText(/loading/i);

    expect(loadingMessage).not.toBeInTheDocument();
    expect(posts).toHaveLength(9);
  });
});
