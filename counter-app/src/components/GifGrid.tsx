import { useEffect, useState } from "react";
import Gif from "../models/Gif";
import GifGridItem from "./GifGridItem";
import getGifs from "../utils/GetGifs";

interface GifGridProps {
    category: string;
}

const GifGrid: React.FC<GifGridProps> = ( {category}) => {

    const [images, setImages] = useState<Gif[]>([]);

    useEffect( () => { 
        getGifs(category).then(setImages)
    }, [category])

    return (
      <>
        <h3>{category}</h3>
        <div className="card-grip">
          {images.map((img: Gif) => (
            <GifGridItem key={img.id} img={img} />
          ))}
        </div>
      </>
    );
}

export default GifGrid;