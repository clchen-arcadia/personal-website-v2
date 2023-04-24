
export interface IPhoto {
  src: string, // photo
  alt: string
}

export interface IPhotoCarousel {
  photos: Photo[],
  title: string
}
