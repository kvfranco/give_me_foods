import styles from './Hero.module.css';
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
          <source srcSet={HeroImgWebp} type='image/webp' />
          <img src={HeroImgPng} alt="A pack of Give Me Foods potato sticks on a wooden surface" />
        </picture>
      </div>
  </section>;
}