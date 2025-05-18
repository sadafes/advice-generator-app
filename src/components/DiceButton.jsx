import { useContext } from "react";
import { AdviceContext } from "../context/AdviceContext";
import diceIcon from "../assets/icon-dice.svg";


const DiceButton = () => {
  const { setLoading, updateAdvice, loading } = useContext(AdviceContext);

  const fetchAdvice = async () => {
    if (loading) return;
    setLoading(true);
    const res = await fetch("https://api.adviceslip.com/advice", { cache: "no-cache" });
    const data = await res.json();
    updateAdvice({ advice: data.slip.advice, id: data.slip.id });
    setLoading(false);
  };

  return (
    <button
      onClick={fetchAdvice}
      className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 bg-neon-green w-16 h-16 rounded-full flex items-center justify-center transition hover:shadow-[0_0_20px_theme(colors.neon-green)] ${
        loading ? "opacity-50 cursor-not-allowed" : ""
      }`}
      disabled={loading}
    >
      <span
        className={`block w-8 h-8 bg-no-repeat bg-center bg-contain ${loading ? "animate-spin" : ""}`}
        style={{ backgroundImage: `url("${diceIcon}")` }}
      />
    </button>
  );
};

export default DiceButton;

