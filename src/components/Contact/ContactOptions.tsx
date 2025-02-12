import styles from "./ContactOptions.module.css";
import ContactItem from "../../components/Contact/ContactItem";
import PhoneCallIcon from "../../components/UI/PhoneCallIcon";
import EnvelopeIcon from "../../components/UI/EnvelopeIcon";
import InstagramIcon from "../../components/UI/InstagramIcon";
import ContactHeroImgJpg from "../../assets/images/contact-hero.jpg";
import ContactHeroImgWebp from "../../assets/images/contact-hero.webp";
import ContactForm from "./ContactForm";

export default function ContactOptions() {
  return (
    <section className={styles.containerContactOptions}>
      <div
        className="containerLimitWidthGlobal"
        id={styles.containerLimitWidth}
      >
        <div className={styles.containerContactItems}>
          <ContactItem contact="+44 7878 111754" link="tel:+447878111754">
            <PhoneCallIcon />
          </ContactItem>
          <ContactItem
            contact="info@givemefoods.co.uk"
            link="mailto:info@givemefoods.co.uk"
          >
            <EnvelopeIcon />
          </ContactItem>
          <ContactItem
            contact="@giveme.foods"
            link="https://www.instagram.com/giveme.foods/"
          >
            <InstagramIcon />
          </ContactItem>
        </div>
        <div className={styles.containerContactFormAndHero}>
          <div className={styles.containerHero}>
            <picture>
              <source srcSet={ContactHeroImgWebp} type="image/webp" />
              <img src={ContactHeroImgJpg} alt="Give Me Foods Brand Banner" />
            </picture>
          </div>
          <div className={styles.containerContactForm}>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}