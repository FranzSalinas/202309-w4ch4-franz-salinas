import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Action } from './action';

describe('Given Action component', () => {
  describe('We instantiate', () => {
    render(<Action></Action>);

    test('Then it should be in the document', () => {
      const title = screen.getByText('Call');
      expect(title).toBeInTheDocument();
    });
  });
});
