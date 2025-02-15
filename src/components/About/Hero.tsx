import styles from './Hero.module.css';

import HeroImgMobilePng from '../../assets/images/aboutus-hero-mobile.png';
import HeroImgMobileWebp from '../../assets/images/aboutus-hero-mobile.webp';

import HeroImgPng from '../../assets/images/aboutus-hero.png';
import HeroImgWebp from '../../assets/images/aboutus-hero.webp';

export default function Hero() {
  return <section className={styles.containerHero}>
    <div
        className="containerLimitWidthGlobal"
        id={styles.containerLimitWidth}
      >
        <h1>From Brazil&#x2019;s Heart to Your Table – Authentic Crunch, Every Bite!</h1>
        <picture>
          <source srcSet={HeroImgMobileWebp} type="image/webp" media="(max-width: 500px)" />
          <source srcSet={HeroImgMobilePng} type="image/png" media="(max-width: 500px)" />
          <source srcSet={HeroImgWebp} type='image/webp' />
          <img src={HeroImgPng} alt="A pack of Give Me Foods potato sticks on a wooden surface" width="513" height="691" />
        </picture>
      </div>
  </section>;
}