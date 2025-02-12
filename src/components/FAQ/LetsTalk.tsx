import styles from './LetsTalk.module.css';
import { Link } from 'react-router';
import RightArrowIcon from '../UI/RightArrowIcon';
import containerBackgroundImgPng from '../../assets/images/container-background.png';
import containerBackgroundImgWebP from '../../assets/images/container-background.webp';

export default function LetsTalk() {
  function handleContactButton() {
    window.scrollTo({top: 0, behavior: 'smooth'});
  }

  return (
    <section className={styles.containerLetsTalk}>
      <div
        className="containerLimitWidthGlobal"
        id={styles.containerLimitWidth}
        style={{ backgroundImage: `image-set(url(${containerBackgroundImgWebP}) type("image/webp"), url(${containerBackgroundImgPng}) type("image/png"))` }}
      >
        <h3>Let's Talk</h3>
        <p>Have other questions or want to join us?</p>
        <Link to="/contact" onClick={handleContactButton}>Contact Us <RightArrowIcon /></Link>
      </div>
    </section>
  );
}