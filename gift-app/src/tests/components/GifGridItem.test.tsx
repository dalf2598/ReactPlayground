import { render, screen } from '@testing-library/react';
import GifGridItem from '../../components/GifGridItem';
import gifs from '../mocks/gifts.json';

const mockGift = gifs[0];

const setup = () => {
  render(
    <GifGridItem key={mockGift.id} img={mockGift} />
  );
}

test("Verify component is rendered", () => {
  setup();
});

test("Verify GIF title is displayed", async () => {
  setup();
  expect(await screen.findByText("One Punch Man GIF")).toBeInTheDocument();
});