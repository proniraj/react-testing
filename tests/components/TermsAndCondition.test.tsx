import { render, screen } from '@testing-library/react';
import TermsAndCondition from '../../src/components/TermsAndCondition';
import userEvent from '@testing-library/user-event';

describe('TermsAndCondition', () => {
  const renderComponent = () => {
    render(<TermsAndCondition />);

    return {
      heading: screen.getByRole('heading'),
      paragraph: screen.getByRole('paragraph'),
      checkbox: screen.getByRole('checkbox'),
      button: screen.getByRole('button'),
    };
  };

  it('should render the component with correct and initial state', () => {
    const { heading, paragraph, checkbox, button } = renderComponent();

    expect(heading).toBeInTheDocument();
    expect(paragraph).toBeInTheDocument();
    expect(checkbox).toBeInTheDocument();
    expect(button).toBeInTheDocument();

    expect(button).toBeDisabled();
  });

  it('should enable the button when the checkbox is checked', async () => {
    const { checkbox, button } = renderComponent();

    expect(button).toBeDisabled();

    const user = userEvent.setup();

    await user.click(checkbox);

    expect(button).toBeEnabled();
  });
});
