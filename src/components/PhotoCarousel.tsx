import { useState } from "react";
import { IPhotoCarousel } from "../types";
import "./PhotoCarousel.css";
import PhotoCard from "./PhotoCard";



function PhotoCarousel({ photos, title }: IPhotoCarousel) {
    const [currCardIdx, setCurrCardIdx] = useState(0);

    const currCard = photos[currCardIdx];

    function goBack(): void {
        if (photos.length === 0) return;
        if (currCardIdx === 0) setCurrCardIdx(photos.length - 1);
        else setCurrCardIdx(currCardIdx - 1);
    }

    function goForward(): void {
        if (photos.length === 0) return;
        if (currCardIdx === photos.length - 1) setCurrCardIdx(0);
        else setCurrCardIdx(currCardIdx + 1);
    }

    return (
        <div>
            <i
                className={`bi bi-arrow-left-circle`}
                onClick={goBack}
            />
            <PhotoCard
                src={currCard.src}
                alt={currCard.alt}
            />
            <i
                className={`bi bi-arrow-right-circle`}
                onClick={goForward}
            />
        </div>
    );
}

export default PhotoCarousel;
