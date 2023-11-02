import { Info } from './info';
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('Given Header component', () => {
  describe('When we instantiate', () => {
    render(<Info></Info>);

    test('Then it should be in the document', () => {
      const title = screen.getByText(/Call/i);
      expect(title).toBeInTheDocument();
    });
  });
});
