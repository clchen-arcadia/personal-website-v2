// import { IPhoto } from "../types";
import "./PhotoCard.css";

function PhotoCard({src, alt}) {
    return (
    <div className="Card shadow border d-flex justify-content-center align-items-center">
        <img className="Card-image" src={src} alt={alt} />
    </div>
    )
}

export default PhotoCard;
