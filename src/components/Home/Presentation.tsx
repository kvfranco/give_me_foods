import styles from "./Presentation.module.css";
import packageImgMobilePng from "../../assets/images/product-package-mobile.png";
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
            <source srcSet="./product-package-mobile.webp" type="image/webp" media="(max-width: 500px)" />
            <source srcSet={packageImgMobilePng} type="image/png" media="(max-width: 500px)" />
            <source srcSet={packageImgWebp} type="image/webp" />
            <img
              src={packageImgPng}
              alt="Give Me Foods Potato Chips Packaging"
              width="737"
              height="737"
            />
          </picture>
        </div>
      </div>
    </section>
  );
}