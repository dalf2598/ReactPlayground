import { render, screen } from '@testing-library/react';
import GifGridItem from '../../components/GifGridItem';

const mockImage = {
  id: "VXJWhaO7afRe",
  title: "One Punch Man GIF",
  url: "https://media2.giphy.com/media/VXJWhaO7afRe/20…da603vilb&ep=v1_gifs_search&rid=200_d.gif&ct=g",
};

const setup = () => {
  render(
    <GifGridItem key={mockImage.id} img={mockImage} />
  );
}
  
test("Should render component", () => {
  setup();
});

test("Should assign title", async () => {
  setup();
  expect(await screen.findByText('One Punch Man GIF')).toBeInTheDocument();
});