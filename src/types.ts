
export interface IPhoto {
  src: string,
  alt: string
}

export interface IPhotoCarousel {
  photos: IPhoto[],
  title: string
}
