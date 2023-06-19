import { render, screen } from '@testing-library/react';
import GiftExpertApp from '../GiftExpertApp';
import gifs from './mocks/gifts.json';
import setUpUseFetchGifsMock from './mocks/useFetchGifs.mock';

const setup = () => {
    render(<GiftExpertApp />);
};

jest.mock('../hooks/useFetchGifs');

describe('Component GiftExpertApp UI Testing', () => {
    test('Verify component is rendered', () => {
      const dataLoadedState = {
        data: gifs,
        loading: false,
      };
      setUpUseFetchGifsMock(dataLoadedState);
      setup();
      const headerElement = screen.getByText('Fetching Gifts');
      expect(headerElement).toBeInTheDocument();
    });
});
  