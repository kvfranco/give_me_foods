import HeroTop from "../components/HeroTop";
import Questions from "../components/FAQ/Questions";
import FAQContextProvider from "../components/FAQquestionsProvider";
import LetsTalk from "../components/FAQ/LetsTalk";

export default function FAQ() {
  return <>
    <HeroTop title="Frequently Asked Questions" />
    <FAQContextProvider>
      <Questions />
    </FAQContextProvider>
    <LetsTalk />
  </>;
}