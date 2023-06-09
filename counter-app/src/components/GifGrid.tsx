import { useEffect, useState } from "react";

interface GifGridProps {
    category: string;
}

interface gif{
    id: string;
    title: string;
    url: string;
}

const GifGrid: React.FC<GifGridProps> = ( {category}) => {

    const [images, setImages] = useState<gif[]>([]);

    useEffect( () => {
        getGifs();
    }, [])

    const getGifs = async() => {
        const url = "https://api.giphy.com/v1/gifs/search?q=one+punch+man&offset=0&limit=5&bundle=messaging_non_clips&api_key=S0yH4iwyi7wLvLnHHl1f6m0M30K40AJ5";
        const resp = await fetch(url);
        const { data } = await resp.json();

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const gifs : gif[] = data.map( (img: any) => {
                return{
                    id: img.id,
                    title: img.slug,
                    url: img.images.fixed_height_downsampled.url
                }
            }
        )

        setImages(gifs);
    }
    
    return (
      <div>
        <h3>{category}</h3>
        <ol>
          {images.map(({id, title}) => (
            <li key={id}> {title} </li>
          ))}
        </ol>
      </div>
    );
}

export default GifGrid;