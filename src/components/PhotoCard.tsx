import { IPhoto } from "../types";
require("./PhotoCard.css");

function PhotoCarousel({src, alt}: IPhoto) {
    return (
    <div className="Card">
        <img className="Card-image" src={src} alt={alt} />
    </div>
    )
}

export default PhotoCarousel;
