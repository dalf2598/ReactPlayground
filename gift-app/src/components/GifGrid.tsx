import Gif from "../models/Gif";
import GifGridItem from "./GifGridItem";
import useFetchGifts from "../hooks/useFetchGifs";

interface GifGridProps {
    category: string;
}

const GifGrid: React.FC<GifGridProps> = ({ category }) => {

    const { data:images, loading } = useFetchGifts(category);

    return (
      <>
        <h3>{category}</h3>
        {loading && <p>Loading</p>}
        <div className="card-grip animate__animated animate__fadeIn animate__delay-1s">
          {images.map((img: Gif) => (
            <GifGridItem key={img.id} img={img} />
          ))}
        </div>
      </>
    );
}

export default GifGrid;