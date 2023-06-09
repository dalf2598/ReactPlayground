import Gif from "../models/Gif";

interface GifGridItemProps {
    img: Gif;
}

const GifGridItem: React.FC<GifGridItemProps> = ( { img }) => {
    return ( 
        <div className="card">
            <img src={img.url} alt={img.title} />
            <p>{img.title}</p>
        </div>
     );
}

export default GifGridItem;