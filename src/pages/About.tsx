import Hero from "../components/About/Hero";
import BuyPotatoFooter from "../components/BuyPotatoFooter";
import CompanyNumbers from "../components/About/CompanyNumbers";
import OurStory from "../components/About/OurStory";
import OurCommitment from "../components/About/OurCommitment";

export default function About() {
  return <>
    <Hero />
    <section style={{backgroundColor: 'var(--primary-color)'}}>
      <CompanyNumbers />
      <OurStory />
      <OurCommitment />
    </section>
    <BuyPotatoFooter />
  </>;
}