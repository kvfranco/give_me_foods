import backgroundImgWebp from "../../assets/images/buy-now-background.webp";
import backgroundImgPng from "../../assets/images/buy-now-background.png";
import BuyNowButton from "../UI/BuyNowButton";
import styles from "./PotatoTypesItems.module.css";

interface potatoTypesInterface {
  name: string;
  description: string;
}

const potatoTypes: potatoTypesInterface[] = [
  {
    name: "Traditional",
    description:
      "The classic Brazilian potato sticks with a satisfying crunch, perfect for topping any dish.",
  },
  {
    name: "Extra Thin",
    description:
      "Ultra-thin and even crispier – ideal for those who love a light, delicate crunch in every bite.",
  },
];

export default function PotatoTypesItem() {
  return (
    <>
      {potatoTypes.map((potatoType) => {
        return (
          <div
            className={styles.containerPotatoType}
            style={{ backgroundImage: `image-set(url(${backgroundImgWebp}) type("image/webp"), url(${backgroundImgPng}) type("image/png"))` }}
            key={potatoType.name}
          >
            <div className={styles.containerPotatoInfo}>
              <h3>{potatoType.name}</h3>
              <p>{potatoType.description}</p>
            </div>
            <div className={styles.containerPotatoBuy}>
              <BuyNowButton />
            </div>
          </div>
        );
      })}
    </>
  );
}