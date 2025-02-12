import styles from "./HeroTop.module.css";
import HeroTopImgJpg from "../assets/images/contact.jpg";
import HeroTopImgWebp from "../assets/images/contact.webp";

export default function HeroTop({ title }: { title: string }) {
  return (
    <section className={styles.containerHeroTop}>
      <div
        className={styles.backgroundImage}
        style={{ backgroundImage: `image-set(url(${HeroTopImgWebp}) type("image/webp"), url(${HeroTopImgJpg}) type("image/jpeg"))` }}
      ></div>
      <h1>{title}</h1>
    </section>
  );
}