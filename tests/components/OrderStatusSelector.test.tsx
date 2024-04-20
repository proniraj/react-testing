import { Theme } from '@radix-ui/themes';
import { render, screen } from '@testing-library/react';
import OrderStatusSelector from '../../src/components/OrderStatusSelector';
import userEvent from '@testing-library/user-event';

describe('OrderStatusSelector', () => {
  const renderComponent = () => {
    const onChange = vi.fn();

    render(
      <Theme>
        <OrderStatusSelector onChange={onChange} />
      </Theme>
    );

    return {
      onChange,
      tigger: screen.getByRole('combobox'),
      getOptions: () => screen.getAllByRole('option'),
      user: userEvent.setup(),
    };
  };

  it('should render the component with correct status', async () => {
    const { tigger, user, getOptions } = renderComponent();

    await user.click(tigger);

    const options = getOptions();
    expect(tigger).toHaveTextContent(/new/i);
    expect(options).toHaveLength(3);
    const labels = options.map(option => option.textContent);
    expect(labels).toEqual(['New', 'Processed', 'Fulfilled']);
  });

  it('should call onChange when selecting an option', async () => {
    const { onChange, tigger, user, getOptions } = renderComponent();

    await user.click(tigger);

    const options = getOptions();
    await user.click(options[1]);

    expect(onChange).toHaveBeenCalledWith('processed');
  });

  it("should not display options when it's closed", async () => {
    const { tigger, user, getOptions } = renderComponent();

    const initialOptions = screen.queryAllByRole('option');

    expect(initialOptions).toHaveLength(0);

    await user.click(tigger);

    expect(getOptions()).toHaveLength(3);
  });

  it('should call onChange WithCorrect value', async () => {
    const { onChange, tigger, user } = renderComponent();

    await user.click(tigger);

    const processedButton = screen.getByRole('option', {
      name: /processed/i,
    });

    await user.click(processedButton);

    expect(onChange).toHaveBeenCalledWith('processed');
  });

  it.each([
    {
      option: 'processed',
    },
    {
      option: 'fulfilled',
    },
  ])('should call onChange with correct value when selecting %s', async ({ option }) => {
    const { onChange, tigger, user } = renderComponent();

    await user.click(tigger);

    const optionButton = screen.getByRole('option', {
      name: new RegExp(option, 'i'),
      selected: false,
    });

    await user.click(optionButton);

    expect(onChange).toHaveBeenCalledWith(option);

    expect(tigger).toHaveTextContent(new RegExp(option, 'i'));
  });
});
