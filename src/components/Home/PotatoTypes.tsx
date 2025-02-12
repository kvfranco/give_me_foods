import styles from "./PotatoTypes.module.css";
import MountainShape from "../UI/MountainShape";
import PotatoTypesItem from "./PotatoTypesItems";

export default function PotatoTypes() {
  return (
    <section className={styles.containerPotatoTypes}>
      <MountainShape fillColor="rgb(223, 223, 223)" />
      <div
        className="containerLimitWidthGlobal"
        id={styles.containerLimitWidth}
      >
        <h2>Discover Our Crunchy Delights</h2>
        <div className={styles.containerBuyPotatoTypes}>
          <PotatoTypesItem />
        </div>
      </div>
    </section>
  );
}