import { useState, useEffect } from "react";
import AdviceCard from "./components/AdviceCard";
import Footer from "./components/Footer";

function App() {
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
    <div className="min-h-screen bg-dark-blue flex flex-col items-center justify-center px-4">
     
      <AdviceCard advice={advice} adviceId={adviceId} fetchAdvice={fetchAdvice} loading={loading} />
      
      <Footer />
    </div>
  );
}


export default App;
