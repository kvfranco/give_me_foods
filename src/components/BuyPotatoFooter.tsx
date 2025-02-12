import styles from "./BuyPotatoFooter.module.css";
import BuyNowButton from "./UI/BuyNowButton";
import containerBackgroundImgPng from "../assets/images/container-background.png";
import containerBackgroundImgWebP from "../assets/images/container-background.webp";

export default function BuyPotatoFooter() {
  return (
    <section
      className={styles.containerFooterBuyPotato}
      style={{
        backgroundImage: `image-set(url(${containerBackgroundImgWebP}) type("image/webp"), url(${containerBackgroundImgPng}) type("image/png"))`,
      }}
    >
      <div
        className="containerLimitWidthGlobal"
        id={styles.containerLimitWidth}
      >
        <div className={styles.containerText}>
          <h2>Taste the Crunch Right Now!</h2>
          <BuyNowButton />
        </div>
      </div>
    </section>
  );
}