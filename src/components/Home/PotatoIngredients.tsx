import styles from "./PotatoIngredients.module.css";
import MountainShape from "../UI/MountainShape";
import ingredientImgJpg from "../../assets/images/ingredients-image.jpg";
import ingredientImgWebp from "../../assets/images/ingredients-image.webp";

export default function PotatoIngredients() {
  return (
    <section className={styles.containerPotatoIngredients}>
      <MountainShape fillColor="#FFAD00" />
      <div className={styles.containerForPadding}>
        <div
          className="containerLimitWidthGlobal"
          id={styles.containerLimitWidth}
        >
          <div className={styles.containerText}>
            <h2>Made From High Quality Ingredients</h2>
            <p>
              At Give Me Foods, we believe that quality starts with the
              ingredients. That's why we use only the finest potatoes, ensuring
              that each batch of our <em>batata palha</em> is made with care and
              attention to detail. Our commitment to quality guarantees a
              crunchy, flavorful experience with every bite
            </p>
            <ul>
              <li>100% Fresh Potatoes</li>
              <li>Natural Sea Salt</li>
              <li>Premium Vegetable Oil</li>
              <li>No Artificial Additives</li>
            </ul>
          </div>
          <div className={styles.containerImage}>
            <picture>
              <source srcSet={ingredientImgWebp} type="image/webp" />
              <img
                src={ingredientImgJpg}
                alt="Image containing some cooking ingredients."
                loading='lazy'
              />
            </picture>
          </div>
        </div>
      </div>
      <span className={styles.bottomMountainShape}>
        <MountainShape fillColor="#FFAD00" />
      </span>
    </section>
  );
}