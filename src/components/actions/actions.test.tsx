import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Actions } from './actions';

describe('Given Display component', () => {
  describe('When we instantiate', () => {
    render(<Actions></Actions>);

    test('Then it should be in the document', () => {
      const title = screen.getByRole('actions');
      expect(title).toBeInTheDocument();
    });
  });
});
