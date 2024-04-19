import { render, screen } from '@testing-library/react';
import TagList from '../../src/components/TagList';

describe('TagList', () => {
  it('should render a list of tags', async () => {
    render(<TagList />);

    // waitFor(() => {
    //   const listItems = screen.getAllByRole('listitem');
    //   expect(listItems.length).toHaveLength(3);
    // });

    const listItems = await screen.findAllByRole('listitem');
    expect(listItems).toHaveLength(3);
  });
});

/**
 *
 * The above component is asynchronous, so we need to wait for the tags to be fetched before we can check if they are rendered.
 *
 * The test uses the waitFor function to wait for the list items to be rendered. The waitFor function takes a callback function that should return a promise. The test will wait for the promise to resolve before continuing.
 * The waitFor function is not necessary in this case. We can use the findAllByRole function to wait for the list items to be rendered. The findAllByRole function returns a promise that resolves when the elements are found. We can then use the await keyword to wait for the promise to resolve.
 *
 *
 */
