import styles from "./Presentation.module.css";
import packageImgWebp from "../../assets/images/product-package.webp";
import packageImgPng from "../../assets/images/product-package.png";

export default function Presentation() {
  return (
    <section className={styles.containerPresentation}>
      <div
        className="containerLimitWidthGlobal"
        id={styles.containerLimitWidth}
      >
        <div className={styles.containerText}>
          <h1>Authentic Brazilian Crunch, Anytime!</h1>
          <p>
            Experience the rich, crispy taste of Brazil with Give Me
            Foods&#x2019; <em>batata palha</em>. Perfect for topping dishes or
            enjoying as a snack, each bite brings a satisfying crunch.
          </p>
        </div>
        <div className={styles.containerImage}>
          <picture>
            <source srcSet={packageImgWebp} type="image/webp" />
            <img
              src={packageImgPng}
              alt="Give Me Foods Potato Chips Packaging"
            />
          </picture>
        </div>
      </div>
    </section>
  );
}