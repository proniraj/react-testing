import Greet from '../../src/components/Greet';
import { render, screen } from '@testing-library/react';

describe('Greet', () => {
  it('should render Hello with name when name is provided', () => {
    render(<Greet name="John" />);

    const heading = screen.getByRole('heading');

    expect(heading).toBeInTheDocument();

    expect(heading).toHaveTextContent(/john/i);
  });

  it('should render login button when name is not provided', () => {
    render(<Greet />);

    const button = screen.getByRole('button');

    expect(button).toBeInTheDocument();

    expect(button).toHaveTextContent(/login/i);
  });
});
