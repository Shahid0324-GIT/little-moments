import {
  FaStar,
  FaArrowRight,
  FaChevronRight,
  FaChevronLeft,
} from "react-icons/fa6";
import { reviews } from "../data";

const Reviews = () => {
  return (
    <section className="reviews__section">
      <div className="reviews__top-container">
        <div className="reviews__rating-wrapper">
          <h1 className="reviews__main-head">reviews</h1>
          <div className="reviews__rating">
            <h2 className="review__review">5.0</h2>
            <div className="review__rating-stars-review">
              <div className="review__rating-stars">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <p className="review__reviews">1,289 reviews</p>
            </div>
          </div>
        </div>
        <div className="review__top-btn-container">
          <button type="button" className="review__top-container-btn">
            Write a review <FaArrowRight />
          </button>
        </div>
      </div>
      <div className="reviews__bottom-container">
        <ul className="reviews__bottom-reviews">
          {reviews.map((item) => {
            const { id, name, location, heading, review } = item;
            return (
              <li key={id} className="review__list-item">
                <div className="review__name-location">
                  <h4>{name}</h4>
                  <p>{location}</p>
                </div>
                <div className="review__para">
                  <div className="review__bottom-stars">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <h2 className="review__head">{heading}</h2>
                  </div>
                  <p className="review__description">{review}</p>
                </div>
                <div className="review__date">
                  <p>Nov 25, 2023</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="review__next-prev-btn-wrapper">
        <div className="prev-next-btn">
          <FaChevronLeft />
        </div>
        <div className="prev-next-btn selected">
          <FaChevronRight />
        </div>
      </div>
    </section>
  );
};

export default Reviews;
