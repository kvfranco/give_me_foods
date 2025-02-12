import styles from './Product.module.css';
import productImg1Jpg from '../../assets/images/product-image-1.jpg';
import productImg1Webp from '../../assets/images/product-image-1.webp';
import productImg2Jpg from '../../assets/images/product-image-2.jpg';
import productImg2Webp from '../../assets/images/product-image-2.webp';

export default function Product() {
  return (
    <section className={styles.containerProject}>
      <div
        className="containerLimitWidthGlobal"
        id={styles.containerLimitWidth}
      >
        <div className={styles.containerLeftColumn}>
          <picture>
            <source srcSet={productImg2Webp} type="image/webp" />
            <img src={productImg2Jpg} alt="A hot dog topped with crispy Give Me Foods potato sticks." loading='lazy' />
          </picture>
          <h2>Handpicked Potatoes, Crispy and Full of Flavor</h2>
          <p>
            Crafted with care, Give Me Foods brings you authentic Brazilian
            potato sticks with the perfect crunch. Made from selected potatoes,
            our <em>batata palha</em> adds a deliciously crispy touch to any
            dish or can be enjoyed on its own. Taste the quality and enjoy a
            true Brazilian favorite!
          </p>
        </div>
        <div className={styles.containerRightColumn}>
          <picture>
            <source srcSet={productImg1Webp} type="image/webp" />
            <img src={productImg1Jpg} alt="A bowl filled with Give Me Foods potato sticks, with two different product packages displayed beside it." loading='lazy' />
          </picture>
        </div>
      </div>
    </section>
  );
}