import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';

import { Key } from './key';

describe('Given the Key component', () => {
  describe('When we instantiate it', () => {
    render(<Key></Key>);

    test('It should be in the document', () => {
      const element = screen.getByText('1');
      expect(element).toBeInTheDocument();
    });
  });
});
