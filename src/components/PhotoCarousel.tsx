import { useState } from "react";
import { IPhotoCarousel } from "./types";
import "./PhotoCarousel.css";
import PhotoCard from "./PhotoCard.tsx";



function PhotoCarousel({ photos, title }: IPhotoCarousel) {
    const [currCardIdx, setCurrCardIdx] = useState(0);

    const currCard = photos[currCardIdx];

    return (
        <div>

        </div>
    );
}

export default PhotoCarousel;
