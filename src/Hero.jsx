import { FaStar, FaHeart, FaShare } from "react-icons/fa";

import { images } from "../data";

const Hero = () => {
  return (
    <main className="hero__main">
      <div className="hero__image-container">
        <div className="hero__main-img">
          <p className="hero__popular">popular</p>
          <h1 className="hero__place">place</h1>
        </div>
        {images.map((img, i) => (
          <img
            key={img.name}
            src={img.img}
            alt={img.name}
            className={`image image-${i + 1}`}
          />
        ))}
      </div>

      <div className="hero__reviews-container">
        <div className="hero__review-container">
          <div className="hero__review">
            <FaStar className="hero__review-star" />
            <p className="hero__review-paragraph">
              4.9 stars <span className="hero__review-span">(231 reviews)</span>
            </p>
          </div>
          <div className="hero__share-like-btn">
            <button type="button" className="hero__btn">
              <FaHeart />
            </button>
            <button type="button" className="hero__btn">
              <FaShare />
            </button>
          </div>
        </div>
        <div className="hero__review-city-container">
          <div className="hero__review-city">
            <h1 className="hero__review-city-head">tsukishima monja street</h1>
            <p className="hero__review-city-para">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
              labore dolore eaque expedita tenetur aut? Reiciendis vitae sequi
              tempore quod? Molestias earum dolores provident sit officiis,
              dolorem fuga dolor fugiat voluptas corporis, quis nisi est
              molestiae nobis quibusdam, eligendi sequi a tempore velit veniam?
              Alias repellendus asperiores vitae dicta maxime labore, unde quo
              eaque ipsa obcaecati iste recusandae eos sunt quos odio atque.
              Dolor quas, iusto officiis praesentium sit quasi.
            </p>
          </div>
          <p className="hero__review-city-date">25-11-2023</p>
        </div>
      </div>
    </main>
  );
};

export default Hero;
