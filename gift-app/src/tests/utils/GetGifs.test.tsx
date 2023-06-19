import getGifs from '../../utils/GetGifs';
import gifts from '../mocks/gifts.json';

jest.mock("../../utils/GetGifs", () =>
  jest.fn().mockImplementation(() => gifts)
);

test("Verify api call", async () => {
  const fetchedGifts = await getGifs('One Punch');
  expect(fetchedGifts).toHaveLength(3);
});


