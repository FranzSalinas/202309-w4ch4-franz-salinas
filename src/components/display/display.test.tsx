import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Display } from './display';

describe('Given Display component', () => {
  describe('When we instantiate', () => {
    render(<Display></Display>);

    test('Then it should be in the document', () => {
      const title = screen.getByRole('display');
      expect(title).toBeInTheDocument();
    });
  });
});
