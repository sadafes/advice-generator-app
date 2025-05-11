import { useState, useEffect } from "react";
import Divider from "./Divider";
import DiceButton from "./DiceButton";
import Skeleton from "./Skeleton";

const AdviceCard = () => {
  const [advice, setAdvice] = useState("");
  const [adviceId, setAdviceId] = useState("");
  const [loading, setLoading] = useState(true);

  const fetchAdvice = async () => {
    setLoading(true);
    const res = await fetch("https://api.adviceslip.com/advice", { cache: "no-cache" });
    const data = await res.json();
    setAdvice(data.slip.advice);
    setAdviceId(data.slip.id);
    setLoading(false);
  };

  useEffect(() => {
    fetchAdvice();
  }, []);

  return (
    <div className="bg-dark-grayish-blue text-light-cyan font-manrope p-[48px] md:p-10 rounded-2xl max-w-md w-full relative shadow-xl text-center">
      {loading ? (
        <Skeleton />
      ) : (
        <>
          <p className="text-neon-green text-[13px] mb-[24px] tracking-[4.086px]">
            ADVICE #{adviceId}
          </p>
          <h1 className="text-[28px] mb-[48px] tracking-[-0.3px] font-extrabold">&ldquo;{advice}&rdquo;</h1>
          <Divider />
        </>
      )}
      <DiceButton onClick={fetchAdvice} loading={loading} />
    </div>
  );
};

export default AdviceCard;
