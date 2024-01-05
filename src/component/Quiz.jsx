import { useState } from "react";

export default function Quiz() {
  const [activeQuestionIndex, setactiveQuestionIndex] = useState(0);
  const [userAnswers, setuserAnswers] = useState([]);
  return <p>Currently Activ question</p>;
}
