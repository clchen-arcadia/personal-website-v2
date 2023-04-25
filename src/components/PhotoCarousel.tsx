import { useState } from "react";
import { IPhotoCarousel } from "../types";
import "./PhotoCarousel.css";
import PhotoCard from "./PhotoCard";
// require("./PhotoCarousel.css");



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
        <div className="d-flex justify-content-center">
        <div className="row d-flex align-items-center" style={{width: "650px"}}>
            <i
                className={`bi bi-arrow-left-circle col-sm`}
                onClick={goBack}
            />
            <div className={"col-sm"}>
                <PhotoCard
                    src={currCard.src}
                    alt={currCard.alt}
                />
            </div>
            <i
                className={`bi bi-arrow-right-circle col-sm`}
                onClick={goForward}
            />
        </div>
        </div>
    );
}

export default PhotoCarousel;
