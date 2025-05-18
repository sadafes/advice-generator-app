import AdviceCard from "./components/AdviceCard";
import Footer from "./components/Footer";
import { AdviceProvider } from "./context/AdviceProvider";


function App() {
  return (
    <AdviceProvider>
        <div className="min-h-screen bg-dark-blue flex flex-col items-center justify-center px-4">
      <AdviceCard />
      <Footer />
    </div>
    </AdviceProvider>
  );
}

export default App;

