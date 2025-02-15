import { useContext } from "react";
import FAQContext from "../../stores/FAQContext";
import DownArrowIcon from "../UI/DownArrowIcon";
import styles from "./QuestionItem.module.css";

interface QuestionItemPropsType {
  questionNumber: number;
  question: string;
  children: React.ReactNode;
}

export default function QuestionItem({
  questionNumber,
  question,
  children,
}: QuestionItemPropsType) {
  const { activeQuestionNumber, handleActiveQuestionNumber, height } =
    useContext(FAQContext);

  return (
    <div className={styles.containerQuestionItem}>
      <button
        onClick={(event) => handleActiveQuestionNumber(event, questionNumber)}
        className={
          activeQuestionNumber === questionNumber ? styles.activeButton : ""
        }
      >
        {question}
        <DownArrowIcon />
      </button>
      <p
        style={
          activeQuestionNumber === questionNumber
            ? { maxHeight: `${height + 3}px` }
            : { maxHeight: '0' }
        }
        id={
          activeQuestionNumber === questionNumber ? styles.activeParagraph : ""
        }
      >
        {children}
      </p>
    </div>
  );
}