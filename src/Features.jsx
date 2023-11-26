import { FaPlus, FaMinus } from "react-icons/fa6";
import map from "../data";
import { features } from "../data";
import { useState } from "react";

const Features = () => {
  const [active, setActive] = useState(features[0].id);

  return (
    <section className="feature__section">
      <ul className="features__list">
        {features.map((feature) => {
          return (
            <li key={feature.id} className="feature__list-item">
              <div className="feature__name-icon-wrapper">
                <h2 className="feature__head">{feature.name}</h2>
                {active === feature.id ? (
                  <FaMinus
                    className="feature-icon"
                    onClick={() => setActive(features[0].id)}
                  />
                ) : (
                  <FaPlus
                    className="feature-icon"
                    onClick={() => setActive(feature.id)}
                  />
                )}
              </div>

              <p
                className={
                  active === feature.id
                    ? "feature__review active"
                    : "feature__review hide"
                }
              >
                {feature.review}
              </p>
            </li>
          );
        })}
      </ul>
      <div>
        <h2 className="feature__location-head">locattion</h2>
        <div className="feature__location">
          <img src={map} alt="shinjiku" className="feature__location-img" />
        </div>
      </div>
    </section>
  );
};

export default Features;
