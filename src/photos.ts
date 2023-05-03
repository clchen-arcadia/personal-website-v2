import { IPhoto } from "./types";

import warbler1 from "./images/warbler1.png";
import warbler2 from "./images/warbler2.png";
import warbler3 from "./images/warbler3.png";
import warbler4 from "./images/warbler4.png";
import warbler5 from "./images/warbler5.png";

import jobly1 from "./images/jobly1.png";
import jobly2 from "./images/jobly2.png";
import jobly3 from "./images/jobly3.png";
import jobly4 from "./images/jobly4.png";
import jobly5 from "./images/jobly5.png";

const photos: IPhoto[] = [
  {
    src: warbler1,
    alt: `Warbler homepage`
  },
  {
    src: warbler2,
    alt: `Warbler homepage`
  },
  {
    src: warbler3,
    alt: `Warbler homepage`
  },
  {
    src: warbler4,
    alt: `Warbler homepage`
  },
  {
    src: warbler5,
    alt: `Warbler homepage`
  },
]

const photos2: IPhoto[] = [
  {
    src: jobly1,
    alt: `Jobly homepage`
  },
  {
    src: jobly2,
    alt: `Jobly homepage`
  },
  {
    src: jobly3,
    alt: `Jobly homepage`
  },
  {
    src: jobly4,
    alt: `Jobly homepage`
  },
  {
    src: jobly5,
    alt: `Jobly homepage`
  },
]

export {photos, photos2};
