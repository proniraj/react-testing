import { render, screen } from '@testing-library/react';
import ExpandableText from '../../src/components/ExpandableText';
import userEvent from '@testing-library/user-event';

describe('ExpandableText', () => {
  const largeText = 'a'.repeat(256);
  const smallText = 'a'.repeat(100);
  const truncatedText = `${smallText.substring(0, 255)}...`;

  const renderComopnent = (str: string) => {
    render(<ExpandableText text={str} />);

    return {
      article: screen.getByRole('article'),
      button: screen.queryByRole('button'),
    };
  };

  it('should render the component with correct and initial state', () => {
    const { button, article } = renderComopnent(largeText);

    expect(button).toBeInTheDocument();
    expect(article).toHaveTextContent(truncatedText);
  });

  it("should not truncate text if it's less than 255 characters", () => {
    const { article, button } = renderComopnent(smallText);

    expect(article).toHaveTextContent(smallText);
    expect(button).not.toBeInTheDocument();
  });

  it("should show the full text when 'Show More' button is clicked", async () => {
    const { article } = renderComopnent(largeText);

    const button = screen.getByRole('button');

    expect(article).toHaveTextContent(truncatedText);
    expect(button).toHaveTextContent(/more/i);

    const user = userEvent.setup();
    await user.click(button);

    expect(article).toHaveTextContent(largeText);
    expect(button).toHaveTextContent(/less/i);
  });
});

/**
 * queryByRole: Returns the first element that matches the given role, or null if no elements match it.
 * getByRole: Returns the first element that matches the given role, or throws an error if no elements match it.
 * toHaveTextContent: Asserts that the given element has the specified text content.
 * not.toBeInTheDocument: Asserts that the given element is not present in the document.
 * */
