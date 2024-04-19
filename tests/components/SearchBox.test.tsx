import { render, screen } from '@testing-library/react';
import SearchBox from '../../src/components/SearchBox';
import userEvent from '@testing-library/user-event';

describe('SearchBox', () => {
  const renderComponent = () => {
    const onChange = vi.fn();
    render(<SearchBox onChange={onChange} />);

    return {
      input: screen.getByPlaceholderText(/search/i),
      user: userEvent.setup(),
      onChange,
    };
  };

  it('should render an input field', () => {
    const { input } = renderComponent();
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute('type', 'text');
  });

  it('should call onChange when the input value changes', async () => {
    const { input, onChange, user } = renderComponent();

    const searchTerm = 'hello';
    await user.type(input, `${searchTerm}{enter}`);

    expect(onChange).toHaveBeenCalledWith(searchTerm);
  });

  it('should not call onChange when the input value is empty', async () => {
    const { input, onChange, user } = renderComponent();

    const searchTerm = '';
    await user.type(input, `${searchTerm}{enter}`);

    expect(onChange).not.toHaveBeenCalled();
  });
});
