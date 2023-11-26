import { FaStar, FaPhone, FaLocationPin } from "react-icons/fa6";

import snow from "../src/assets/snow.jpg";
import mountain from "../src/assets/mountain.jpg";
import tokyo from "../src/assets/tokyo-night.jpg";

const localeData = [
  {
    id: 1,
    name: "place",
    popular: true,
    rating: 4.9,
    date: "November 2, 2023",
    price: "$22.00",
    location: "New York, United States",
    phone: "+216 1234 5655",
    img: tokyo,
    heading: "Tsukishima Monja Street",
  },
  {
    id: 2,
    name: "outdoor activities",
    popular: false,
    rating: 5,
    date: "November 2, 2022",
    price: "$121.00",
    location: "Texas, United States",
    img: mountain,
    phone: "+216 1234 5655",
    heading: "Sea Monkeys",
  },
  {
    id: 3,
    name: "outdoor activities",
    popular: false,
    rating: 4.2,
    date: "November 2, 2023",
    price: "$22.00",
    location: "Dallas, United States",
    img: snow,
    phone: "+216 1234 5655",
    heading: "Big Bottom Boarders",
  },
];

const Activities = () => {
  return (
    <section className="activities__section">
      <h1 className="activities__heading">related activities</h1>
      <div className="activities__card-wrapper">
        {localeData.map((data) => {
          const {
            id,
            name,
            popular,
            rating,
            date,
            price,
            location,
            phone,
            heading,
            img,
          } = data;
          return (
            <div key={id} className="activity__card">
              <div className="activity__img-container">
                <img src={img} alt={name} className="activity__img" />
                {popular && <p className="activity__popular">Popular</p>}
                <p className="activity__name">{name}</p>
              </div>
              <div className="activity__details">
                <div className="activity__rating-date">
                  <p className="activity__rating">
                    <FaStar className="star" /> {rating} stars
                  </p>
                  <p className="activity__date">{date}</p>
                </div>
              </div>
              <h2 className="activity__heading">{heading}</h2>
              <p className="activity__price">{price}</p>
              <p className="activity__location">
                <FaLocationPin className="activity__icon" />
                {location}
              </p>
              <p className="activity__phone">
                <FaPhone className="activity__icon" /> {phone}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Activities;
