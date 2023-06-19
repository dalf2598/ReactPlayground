import { renderHook } from "@testing-library/react-hooks";
import useFetchGifs from "../../hooks/useFetchGifs";
import setUpUseFetchGifsMock from "../mocks/useFetchGifs.mock";
import gifs from '../mocks/gifts.json';

jest.mock('../../hooks/useFetchGifs');

describe("Hook useFetchGifs Testing", () => {
    test("Verify hook initial state", async () => {
        const initialState = {
            data: [],
            loading: true,
        };
        setUpUseFetchGifsMock(initialState);
      
        const {result} = renderHook(() => useFetchGifs('One Punch'));
        const {data, loading} = result.current;
        expect(data).toHaveLength(0);
        expect(loading).toBe(true);
    });

    test("Verify hook loaded state", async () => {
        const initialState = {
            data: gifs,
            loading: false,
        };
        setUpUseFetchGifsMock(initialState);
      
        const {result} = renderHook(() => useFetchGifs('One Punch'));
     
        const {data, loading} = result.current;
        expect(data).toHaveLength(gifs.length);
        expect(loading).toBe(false);
    });
})


