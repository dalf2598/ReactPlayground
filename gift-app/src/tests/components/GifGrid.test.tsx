import { render, screen } from "@testing-library/react";
import GifGrid from "../../components/GifGrid";
import gifs from '../mocks/gifts.json';
import setUpUseFetchGifsMock from "../mocks/useFetchGifs.mock";

jest.mock('../../hooks/useFetchGifs');

const setup = () => {
  render(<GifGrid category="One Punch" />);
};

describe("Component gifgrid Testing", () => {
  test("Verify loading data state", () => {
    const initialState = {
      data: [],
      loading: true,
    };
    setUpUseFetchGifsMock(initialState);
    setup();

    const loadingElement = screen.getByText("Loading");
    expect(loadingElement).toBeInTheDocument();
  });

  test("Verify data loaded state", () => {
    const initialState = {
      data: gifs,
      loading: false,
    };
    setUpUseFetchGifsMock(initialState);
    setup();
    
    const loadingElement = screen.queryByText('Loading');
    expect(loadingElement).not.toBeInTheDocument();
    
    const imageElements = screen.getAllByRole('img');
    expect(imageElements).toHaveLength(3);
  });
});