import { useState } from "react";
import FAQContext from '../stores/FAQContext';

let height: number;

export default function FAQContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [activeQuestionNumber, setActiveQuestionNumber] = useState<number>(0);

  function handleActiveQuestionNumber(
    event: React.MouseEvent,
    questionNumber: number
  ): void {
    if (activeQuestionNumber === questionNumber) {
      height = 0;
      return setActiveQuestionNumber(0);
    }
    height = (event.target as HTMLButtonElement).nextElementSibling!.scrollHeight;
    return setActiveQuestionNumber(questionNumber);
  }

  const value = {
    activeQuestionNumber,
    handleActiveQuestionNumber,
    height,
  }

  return <FAQContext value={value}>{children}</FAQContext>;
}