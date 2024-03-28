import "./App.css";
import { CaseStudyHero } from "./CaseStudy";
import { HeroSection } from "./HeroSection";
import { NavBar } from "./NavBar";
import { OurStoryStats, Story } from "./OurStory";
import { Services, ServicesReviewSection } from "./Services";
import { WhyUsFun, WhyUsStartProject } from "./WhyUs";
import { Testimonial } from "./Testimonial";
import { FooterSection1, FooterSection2, FooterSection3 } from "./Footer";

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
        <OurStoryStats />
      </div>
      <div>
        <WhyUsFun />
      </div>
      <hr className="w-1/2 ms-auto me-auto mt-16"></hr>
      <div>
        <WhyUsStartProject />
      </div>
      <div>
        <CaseStudyHero />
        <Testimonial />
      </div>
      <footer>
        <FooterSection1 />
        <FooterSection2 />
        <FooterSection3 />
      </footer>
    </div>
  );
}

export default App;
