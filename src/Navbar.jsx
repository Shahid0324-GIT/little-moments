import { FaArrowRight } from "react-icons/fa";

const options = ["categories", "activities near me", "add a place"];

const Navbar = () => {
  return (
    <nav id="sectionTop">
      <ul className="nav__options">
        {options.map((opt) => {
          return (
            <li key={opt} className="nav__list-item">
              <a
                target="_blank"
                referrerPolicy="no-referrer"
                href={`#${opt}`}
                rel="noreferrer"
                className="nav__links"
              >
                {opt}
              </a>
            </li>
          );
        })}
      </ul>
      <div className="nav__btn-container">
        <button className="nav__btn" type="button">
          Start Exploring <FaArrowRight />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
