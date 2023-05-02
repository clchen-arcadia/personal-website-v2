import { IPhoto } from "../types";
require("./PhotoCard.css");

function PhotoCarousel({src, alt}: IPhoto) {
    return (
    <div className="Card shadow border d-flex justify-content-center align-items-center">
        <img className="Card-image" src={src} alt={alt} />
    </div>
    )
}

export default PhotoCarousel;
