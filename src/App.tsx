import "./App.css";
import { HeroSection } from "./HeroSection";
import { NavBar } from "./NavBar";
import { Services } from "./Services";

function App() {
  return (
    <div>
      <div>
        <NavBar />
      </div>
      <div>
        <HeroSection />
      </div>
      <div>
        <Services />
      </div>
    </div>
  );
}

export default App;
