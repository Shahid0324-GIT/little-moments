import { v4 as uuid } from "uuid";

import image1 from "./src/assets/denys-nevozhai--F3wMFrZ7z0-unsplash.jpg";
// import image2 from "./src/assets/jezael-melgoza-7H77FWkK_x4-unsplash.jpg";
import image3 from "./src/assets/lily-li-PYmZ1Ggj2ow-unsplash.jpg";
import image4 from "./src/assets/nicholas-doherty-l81GuxMKOHw-unsplash.jpg";
import image5 from "./src/assets/ryo-yoshitake-9cE54xgRDIk-unsplash.jpg";
import image6 from "./src/assets/tianshu-liu-khQY5Eu-aa0-unsplash.jpg";
import map from "/src/assets/shinjiku.jpg";

export default map;

export const images = [
  {
    img: image1,
    name: "tokyo streets",
  },

  {
    img: image3,
    name: "city streets",
  },
  {
    img: image4,
    name: "shrine visit",
  },
  {
    img: image5,
    name: "festival",
  },
  {
    img: image6,
    name: "festival vibes",
  },
];

export const features = [
  {
    name: "Overview",
    id: uuid(),
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae alias consequuntur sequi possimus suscipit cum doloribus facere ratione odio minima officiis sed reiciendis, porro corporis quibusdam, excepturi eaque beatae nemo commodi veritatis accusantium eligendi ipsum! Consequuntur saepe cum velit voluptatem atque facilis unde, aliquam provident pariatur quod recusandae numquam eum!",
  },
  {
    name: "Features",
    id: uuid(),
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae alias consequuntur sequi possimus suscipit cum doloribus facere ratione odio minima officiis sed reiciendis, porro corporis quibusdam, excepturi eaque beatae nemo commodi veritatis accusantium eligendi ipsum! Consequuntur saepe cum velit voluptatem atque facilis unde, aliquam provident pariatur quod recusandae numquam eum!",
  },
  {
    name: "Listing Videos",
    id: uuid(),
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae alias consequuntur sequi possimus suscipit cum doloribus facere ratione odio minima officiis sed reiciendis, porro corporis quibusdam, excepturi eaque beatae nemo commodi veritatis accusantium eligendi ipsum! Consequuntur saepe cum velit voluptatem atque facilis unde, aliquam provident pariatur quod recusandae numquam eum!",
  },
];

export const reviews = [
  {
    id: uuid(),
    name: "Hugh Jackman",
    location: "Australia",
    heading: "The Best Out There",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem aperiam ipsa accusamus soluta molestiae itaque iste tenetur odio debitis vel excepturi, tempora, et molestias cum.",
  },
  {
    id: uuid(),
    name: "Ryan Reynolds",
    location: "Canada",
    heading: "A must have for event-enthusiasts",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem aperiam ipsa accusamus soluta molestiae itaque iste tenetur odio debitis vel excepturi, tempora, et molestias cum.",
  },
  {
    id: uuid(),
    name: "Jake Gyllenhal",
    location: "New York",
    heading: "Local event at your fingertips",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem aperiam ipsa accusamus soluta molestiae itaque iste tenetur odio debitis vel excepturi, tempora, et molestias cum.",
  },
];
