import styles from './Footer.module.css';
import { Link } from 'react-router';
import footerSiteLogoImgPng from '../assets/images/footer-site-logo.png';
import EnvelopeIcon from './UI/EnvelopeIcon';
import PhoneCallIcon from './UI/PhoneCallIcon';
import FacebookIcon from './UI/FacebookIcon';
import InstagramIcon from './UI/InstagramIcon';

const year = new Date().getFullYear();

function scrollToTop() {
  window.scrollTo({top: 0, behavior: 'smooth'});
}

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div
        className="containerLimitWidthGlobal"
        id={styles.containerLimitWidth}
      >
        <section className={styles.linksContainer}>
          <div>
            <Link to="." onClick={scrollToTop}>
              <img src={footerSiteLogoImgPng} alt="Give Me Foods Footer Logo" />
            </Link>
            <p>Bringing Brazil's crunch to every bite!</p>
          </div>
          <div>
            <h2>About</h2>
            <nav>
              <ul>
                <li><Link to="." onClick={scrollToTop}>Product</Link></li>
                <li><Link to="faq" onClick={scrollToTop}>Store Locations</Link></li>
                <li><Link to="contact" onClick={scrollToTop}>Join Distributor</Link></li>
                <li><Link to="contact" onClick={scrollToTop}>Contact Page</Link></li>
                <li><Link to="about" onClick={scrollToTop}>About Us</Link></li>
              </ul>
            </nav>
          </div>
          <div>
            <h2>Link</h2>
            <nav>
              <ul>
                <li><a href="https://www.instagram.com/giveme.foods/" target='_blank'>Follow Us</a></li>
                <li><Link to="faq" onClick={scrollToTop}>FAQ</Link></li>
                <li><a href="https://www.instagram.com/giveme.foods/" target='_blank'>Gallery</a></li>
                <li><a href="https://www.instagram.com/stories/highlights/18017861977635331/" target='_blank'>Customer Reviews</a></li>
              </ul>
            </nav>
          </div>
          <div>
            <h2>Let's Talk</h2>
            <a href="tel:+447878111754" className={styles.phoneAndEmail}><PhoneCallIcon />+44 7878 111754</a>
            <a href="mailto:info@givemefoods.co.uk" className={styles.phoneAndEmail}><EnvelopeIcon />info@givemefoods.co.uk</a>
          </div>
        </section>
        <div className={styles.containerCopyAndSocialMedia}>
          <p>&copy; {year} - Give Me Foods</p>
          <ul>
            <li><a href="https://www.facebook.com/profile.php?id=100094377206544" target='_blank' aria-label="Give Me Foods Facebook"><FacebookIcon /></a></li>
            <li><a href="https://www.instagram.com/giveme.foods/" target='_blank' aria-label="Give Me Foods Instagram"><InstagramIcon /></a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}