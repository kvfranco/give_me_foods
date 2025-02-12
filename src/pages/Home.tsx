import Presentation from "../components/Home/Presentation";
import Product from "../components/Home/Product";
import PotatoTypes from "../components/Home/PotatoTypes";
import PotatoIngredients from "../components/Home/PotatoIngredients";
import BuyPotatoFooter from "../components/BuyPotatoFooter";


export default function Home() {
  return (
    <>
      <Presentation />
      <Product />
      <PotatoTypes />
      <PotatoIngredients />
      <BuyPotatoFooter />
    </>
  );
}