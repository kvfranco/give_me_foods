import styles from "./OurStory.module.css";

import giveMeFoodsPotatoesImgMobileJpg from '../../assets/images/aboutus-potatoes-give-me-foods-mobile.jpg';
import giveMeFoodsPotatoesImgMobileWebp from '../../assets/images/aboutus-potatoes-give-me-foods-mobile.webp';
import giveMeFoodsPotatoesImgJpg from '../../assets/images/aboutus-potatoes-give-me-foods.jpg';
import giveMeFoodsPotatoesImgWebp from '../../assets/images/aboutus-potatoes-give-me-foods.webp';

export default function OurStory() {
  return (
    <div className={styles.containerOurStory}>
      <div className={styles.containerImage}>
        <picture>
          <source srcSet={giveMeFoodsPotatoesImgMobileWebp} type="image/webp" media="(max-width: 500px)" />
          <source srcSet={giveMeFoodsPotatoesImgMobileJpg} type="image/jpeg" media="(max-width: 500px)" />
          <source srcSet={giveMeFoodsPotatoesImgWebp} type="image/webp" />
          <img
            src={giveMeFoodsPotatoesImgJpg}
            alt="Container filled with crispy potato chips"
            width="600"
            height="600"
          />
        </picture>
      </div>
      <div className={styles.containerText}>
        <h2>Our Story</h2>
        <p>
          Give Me Foods began with a simple mission: to introduce the
          unmistakable flavor and texture of Brazil&#x2019;s finest potato sticks to
          the world. Inspired by a love for authentic Brazilian flavors, we
          started our journey with one goal in mind – to bring a taste of home
          to Brazilians living abroad and to introduce these unique snacks to
          new fans in the UK and beyond. Each batch is made with care and
          passion, using high-quality ingredients to deliver the unmistakable
          crunch and taste that <em>batata palha</em> lovers crave.
        </p>
      </div>
    </div>
  );
}