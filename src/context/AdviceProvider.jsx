import { useState } from "react";
import { AdviceContext } from "./AdviceContext";

export const AdviceProvider = ({ children }) => {
  const [advice, setAdvice] = useState("");
  const [adviceId, setAdviceId] = useState("");
  const [loading, setLoading] = useState(false);

  const updateAdvice = ({ advice, id }) => {
    setAdvice(advice);
    setAdviceId(id);
  };

  return (
    <AdviceContext.Provider value={{ advice, adviceId, loading, setLoading, updateAdvice }}>
      {children}
    </AdviceContext.Provider>
  );
};
