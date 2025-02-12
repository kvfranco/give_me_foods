import ShoppingCartIcon from "./ShoppingCartIcon";
import styles from './BuyNowButton.module.css';
import { useNavigate } from "react-router";

export default function BuyNowButton() {
  const navigate = useNavigate();

  function handleBuyButton() {
    navigate('/contact');
    window.scrollTo({top: 0, behavior: 'smooth'});
  }

  return (
    <button className={styles.button} onClick={handleBuyButton}>
      <ShoppingCartIcon />
      <span>Buy Now</span>
    </button>
  );
}