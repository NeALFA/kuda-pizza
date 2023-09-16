import { categories } from "../../data/categories";
import CardComponent from "../card/CardComponent";
import "./LayoutCardsUI.scss";
import { products } from "../../data/products";
import { Fragment } from "react";

const LayoutCards = () => {
  return (
    <section>
      <div className="container">
        {categories.map((cat) => (
          <Fragment key={cat.name}>
            <div className="layout__cards__header">
              <h2>{cat.name}</h2>
              {cat.filter ? (
                <button>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="Group 93">
                      <path
                        id="Vector"
                        d="M6.33333 16C6.27667 16 6.22 15.986 6.16933 15.9567C6.06467 15.8973 6 15.7867 6 15.6667V8.932C6 8.646 5.87733 8.374 5.664 8.18467L0.558667 3.64933C0.204 3.33533 0 2.87933 0 2.4V1C0 0.448667 0.448667 0 1 0H15C15.5513 0 16 0.448667 16 1V2.4C16 2.87933 15.796 3.33533 15.4407 3.65L10.336 8.18533C10.1227 8.37467 10 8.64667 10 8.932V13.2887C10 13.6373 9.81467 13.966 9.51467 14.146L6.504 15.952C6.452 15.984 6.39267 16 6.33333 16ZM1 0.666667C0.816667 0.666667 0.666667 0.816 0.666667 1V2.4C0.666667 2.68867 0.788667 2.96267 1.00067 3.15L6.10667 7.686C6.462 8.002 6.66667 8.456 6.66667 8.932V15.078L9.172 13.5753C9.27133 13.5153 9.33333 13.4053 9.33333 13.2893V8.93267C9.33333 8.45667 9.538 8.002 9.89333 7.68667L14.9987 3.15133C15.2113 2.96267 15.3333 2.68867 15.3333 2.4V1C15.3333 0.816 15.1833 0.666667 15 0.666667H1Z"
                        fill="#FF7010"
                      />
                    </g>
                  </svg>
                  Фильтры
                </button>
              ) : (
                " "
              )}
            </div>
            <div className="layout__cards__body">
              {products.filter((prod) => prod.category === cat.name).length ? (
                products
                  .filter((prod) => prod.category === cat.name)
                  .map((prod) => <CardComponent key={prod} prod={prod} />)
              ) : (
                <img  src="/not-found.png" alt="" />
              )}
            </div>
          </Fragment>
        ))}
      </div>
    </section>
  );
};

export default LayoutCards;
