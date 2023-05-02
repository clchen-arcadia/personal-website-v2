
export interface IPhoto {
  src: string,
  alt: string
}

export interface IPhotoCarousel {
  photos: IPhoto[],
  title: string
}

export interface ILink {
  text: string,
  link: string
}
