import { render, screen } from '@testing-library/react';
import PostDetail from '../../src/components/PostDetail';
import { server } from '../mocks/server';
import { HttpResponse, http } from 'msw';

describe('PostDetail', () => {
  it('should display loading state', () => {
    render(<PostDetail postId={5} />);
    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });

  it('should display error message when postId is invalid', async () => {
    render(<PostDetail postId={9999} />);

    const message = await screen.findByText(/not found/i);
    const loadingMessage = screen.queryByText(/loading/i);
    expect(loadingMessage).not.toBeInTheDocument();
    expect(message).toBeInTheDocument();
  });

  it('should display error message when fetching data fails', async () => {
    server.use(
      http.get('https://jsonplaceholder.typicode.com/posts/1', () => {
        return HttpResponse.json(
          {},
          {
            status: 500,
            statusText: 'Internal server error',
          }
        );
      })
    );
    render(<PostDetail postId={1} />);

    const message = await screen.findByText(/error/i);
    const loadingMessage = screen.queryByText(/loading/i);

    expect(loadingMessage).not.toBeInTheDocument();
    expect(message).toBeInTheDocument();
  });

  it('should display post details', async () => {
    render(<PostDetail postId={1} />);

    const title = await screen.findByRole('heading', { name: /post detail/i });

    const body = await screen.findByText(/body/i);
    const postBody = await screen.findByText(/lorem ipsum/i);

    const loadingMessage = screen.queryByText(/loading/i);
    expect(loadingMessage).not.toBeInTheDocument();

    expect(postBody).toBeInTheDocument();
    expect(title).toBeInTheDocument();
    expect(body).toBeInTheDocument();
  });
});
