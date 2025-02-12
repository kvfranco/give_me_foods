import styles from "./Questions.module.css";
import QuestionItem from "./QuestionItem";
import { Link } from "react-router";

export default function Questions() {
  return (
    <section className={styles.containerQuestions}>
      <div
        className="containerLimitWidthGlobal"
        id={styles.containerLimitWidth}
      >
        <div className={styles.containerLeftColumn}>
          <QuestionItem
            questionNumber={1}
            question="Where can I buy Give Me Foods potato sticks?"
          >
            Our <em>batata palha</em> is available in select stores across the
            UK, including London, Liverpool, Manchester, Birmingham,
            Bournemouth, and Leeds. For the full list of locations and updates,
            check our Instagram (
            <a href="https://www.instagram.com/giveme.foods/" target="_blank">
              @giveme.foods
            </a>
            ). We&#x2019;re also expanding to other regions, so stay tuned for more
            information!
          </QuestionItem>

          <QuestionItem
            questionNumber={2}
            question="Are there online ordering options for Give Me Foods products?"
          >
            Currently, we do not offer direct online ordering, but we&#x2019;re working
            on making our products available to you online soon. Stay tuned on
            our website or Instagram for updates!
          </QuestionItem>

          <QuestionItem
            questionNumber={3}
            question="Are Give Me Foods products gluten-free?"
          >
            Yes, our <em>batata palha</em> is naturally gluten-free, making it a
            perfect snack for those with gluten sensitivities or looking for a
            gluten-free snack option.
          </QuestionItem>
        </div>

        <div className={styles.containerRightColumn}>
          <QuestionItem
            questionNumber={4}
            question="How can I get Give Me Foods potato sticks to sell in my store?"
          >
            If you're interested in becoming a distributor or would like to
            offer our products in your store, please reach out to us through our{" "}
            <Link to="/contact">Contact Page</Link>. We&#x2019;ll be happy to discuss
            supply options!
          </QuestionItem>
          <QuestionItem
            questionNumber={5}
            question="What types of batata palha does Give Me Foods offer?"
          >
            We offer two types of <em>batata palha:</em> the traditional cut,
            perfect for adding crunch to your meals, and the extra thin cut,
            ideal for those who prefer a delicate, light crunch. Both are made
            with high-quality ingredients for the best taste.
          </QuestionItem>
          <QuestionItem
            questionNumber={6}
            question="How do I store Give Me Foods products to keep them fresh?"
          >
            To keep your <em>batata palha</em> fresh and crispy, store it in a
            cool, dry place. Once opened, it&#x2019;s best to seal the package tightly
            to maintain freshness.
          </QuestionItem>
        </div>
      </div>
    </section>
  );
}