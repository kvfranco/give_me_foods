import { createContext } from "react";

interface FAQContextType {
  activeQuestionNumber: number;
  handleActiveQuestionNumber: (event: React.MouseEvent, question: number) => void;
  height: number;
}

const FAQContext = createContext<FAQContextType>({
  activeQuestionNumber: 0,
  handleActiveQuestionNumber: (_event, _question) => {},
  height: 0
});

export default FAQContext;