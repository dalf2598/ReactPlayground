import Gif from "../models/Gif";

const getGifs = async (category: string): Promise<Gif[]> => {

    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&offset=0&limit=3&bundle=messaging_non_clips&api_key=S0yH4iwyi7wLvLnHHl1f6m0M30K40AJ5`;
    const resp = await fetch(url);
    const { data } = await resp.json();

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const gifs: Gif[] = data.map((img: any) => {
        return {
            id: img.id,
            title: img.title,
            url: img.images.fixed_height_downsampled.url
        }
    }
    )

    return gifs;
}

export default getGifs;