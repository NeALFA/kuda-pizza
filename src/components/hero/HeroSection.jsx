import "./HeroUI.scss";
import { categories } from "../../data/categories";
const HeroSection = () => {
  return (
    <section>
      <div className="category container">
        {categories.map((el) => (
          <button key={el} className="category__card">
            <img src={el.image} alt="" />
            <p>{el.name}</p>
          </button>
        ))}
      </div>
      <div className="hero__discount container">
        <div className="hero__discount--card">
          <img src="/dicount-pizza.png" alt="Rasm" />
          <p>3 средние пиццы от 999 рублей</p>
        </div>
        <div className="hero__discount--card two">
          <img src="/pizza-box.png" alt="Rasm" />
          <p>3 средние пиццы от 999 рублей</p>
        </div>
        <div className="hero__discount--card ">
          <img src="/dicount-pizza.png" alt="Rasm" />
          <p>3 средние пиццы от 999 рублей</p>
        </div>
        <div className="hero__discount--card two">
          <img src="/pizza-box.png" alt="Rasm" />
          <p>3 средние пиццы от 999 рублей</p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
