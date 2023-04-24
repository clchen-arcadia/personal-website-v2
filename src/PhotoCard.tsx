import "./PhotoCarousel.css";
import { IPhoto } from "./types";

function PhotoCarousel({src, alt}: IPhoto) {
    return (
    <div className="Card">
        <img className="Card-image" src={src} alt={alt} />
    </div>
    )
}

export default PhotoCarousel;
