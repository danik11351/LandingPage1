import "./App.css";
import { HeroSection } from "./HeroSection";
import { NavBar } from "./NavBar";
import { Story } from "./OurStory";
import { Services, ServicesReviewSection } from "./Services";

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
        <ServicesReviewSection />
      </div>
      <hr className="w-1/2 ms-auto me-auto mt-32"></hr>
      <div>
        <Story />
      </div>
    </div>
  );
}

export default App;
