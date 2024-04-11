import { render, screen } from '@testing-library/react';
import UserAccount from '../../src/components/UserAccount';

describe('UserAccount', () => {
  it('should render edit button if user is admin', () => {
    const user = { name: 'John', isAdmin: true, id: 1 };
    render(<UserAccount user={user} />);

    const button = screen.getByRole('button');

    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent(/edit/i);
  });

  it('should not render edit button if user is not admin', () => {
    const user = { name: 'John', isAdmin: false, id: 1 };
    render(<UserAccount user={user} />);

    const button = screen.queryByRole('button');

    expect(button).not.toBeInTheDocument();
  });

  it("should render user's name", () => {
    const user = { name: 'John', isAdmin: false, id: 1 };
    render(<UserAccount user={user} />);

    const name = screen.getByText(/john/i);

    expect(name).toBeInTheDocument();
  });
});
