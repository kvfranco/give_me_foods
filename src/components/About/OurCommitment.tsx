import styles from "./OurCommitment.module.css";

import dishWithPotatoesImgMobileJpg from '../../assets/images/aboutus-dish-with-potatoes-mobile.jpg';
import dishWithPotatoesImgMobileWebp from '../../assets/images/aboutus-dish-with-potatoes-mobile.webp';
import dishWithPotatoesImgJpg from '../../assets/images/aboutus-dish-with-potatoes.jpg';
import dishWithPotatoesImgWebp from '../../assets/images/aboutus-dish-with-potatoes.webp';

export default function OurCommitment() {
  return (
    <div className={styles.containerOurCommitment}>
      <div className={styles.containerText}>
        <h2>Our Commitment</h2>
        <p>
          At Give Me Foods, quality is at the heart of everything we do. From
          selecting premium potatoes to using production methods that ensure the
          perfect texture, we&#x2019;re committed to bringing you products that reflect
          the authentic taste and quality of Brazilian snacks. Our goal is to
          make every bite unforgettable, whether you&#x2019;re a longtime fan of{" "}
          <em>batata palha</em> or discovering it for the first time.
        </p>
        <h2>Our Products</h2>
        <ul>
          <li>
            <span>✔</span>
            <span>
              Traditional Cut: A hearty, classic texture that complements any
              dish. Perfect for adding a crispy touch to your meals or enjoying
              as a snack.
            </span>
          </li>
          <li>
            <span>✔</span>
            <span>
              Extra Thin Cut: A delicate, ultra-crispy bite that offers a light,
              flavorful crunch, ideal for sprinkling on dishes or enjoying
              straight from the pack.
            </span>
          </li>
        </ul>
      </div>
      <div className={styles.containerImage}>
        <picture>
          <source srcSet={dishWithPotatoesImgMobileWebp} type="image/webp" media="(max-width: 500px)" />
          <source srcSet={dishWithPotatoesImgMobileJpg} type="image/jpeg" media="(max-width: 500px)" />
          <source srcSet={dishWithPotatoesImgWebp} type="image/webp" />
          <img
            src={dishWithPotatoesImgJpg}
            alt="Dish served with crispy shoestring potatoes"
            width="600"
            height="600"
          />
        </picture>
      </div>
    </div>
  );
}