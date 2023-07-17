import About from "./components/Abount";
import Footer from "./components/Footer";
import Home from "./components/Home";
import HowToBuySection from "./components/HowToBuySection";
import Info from "./components/Info";
import MeetTeam from "./components/MeetTeam";
import Roadmap from "./components/Roadmap";
import TokenInfo from "./components/TokenInfo";
import Tokenomics from "./components/Tokenomics";
import WalletConnection from "./components/WalletConnection";

function App() {
  return (
    <div className="max-w-full h-full overflow-hidden bg-[rgba(80,194,120,0.15)]">
      <Home />
      <WalletConnection />
      <About />
      <Info />
      <Tokenomics />
      <TokenInfo />
      <Roadmap />
      <MeetTeam />
      <HowToBuySection />
      <Footer />
    </div>
  );
}

export default App;
