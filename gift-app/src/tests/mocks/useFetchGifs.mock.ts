import useFetchGifs from "../../hooks/useFetchGifs";
import GifRequest from "../../models/GifRequest";

const setUpUseFetchGifsMock = (mockValue : GifRequest) => {
  (useFetchGifs as jest.Mock).mockReturnValue({
    data: mockValue.data,
    loading: mockValue.loading,
  });
};

export default setUpUseFetchGifsMock;