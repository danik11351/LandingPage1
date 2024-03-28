import Card1 from "./assets/case-study-img1.svg";
import Card2 from "./assets/case-study-img2.svg";
import Card3 from "./assets/case-study-img3.svg";
import Card4 from "./assets/case-study-img4.svg";
import { Button } from "flowbite-react";
import { FaArrowRight } from "react-icons/fa";

function CaseStudyHero() {
  return (
    <div className="mt-16 mx-5 lg:mx-0">
      <div id="case-study-text">
        <div>
          <p className="text-rose-500 italic text-center">Case Studies</p>
        </div>
        <div>
          <h1 className="font-bold text-3xl text-center mx-4">
            Our works describe why we are the best in the
            <br /> business
          </h1>
        </div>
      </div>
      <div
        id="case-study-cards"
        className="flex justify-center lg:gap-64 mt-16 gap-5"
      >
        <div id="cards-1-2">
          <div id="card-1" className="flex-col align-baseline">
            <div>
              <img src={Card1} alt="" />
            </div>
            <div className="lg:ms-5">
              <div className="mt-5 mb-3">
                <p className="text-slate-400">Graphic Design</p>
              </div>
              <div>
                <h1 className="font-bold">Aura Branding Design</h1>
              </div>
            </div>
          </div>
          <div id="card-2">
            <div>
              <img src={Card2} alt="" />
            </div>
            <div className="">
              <div className="mt-5 mb-3">
                <p className="text-slate-400">Web Development</p>
              </div>
              <div>
                <h1 className="font-bold">Gradient Website Development</h1>
              </div>
            </div>
          </div>
        </div>
        <div id="cards-3-2">
          <div id="card-3">
            <div>
              <img src={Card3} alt="" />
            </div>
            <div className="mb-12 ms-3">
              <div className="mb-3">
                <p className="text-slate-400">Graphic Design</p>
              </div>
              <div>
                <h1 className="font-bold">AB.S Snack Packaging</h1>
              </div>
            </div>
          </div>
          <div id="card-4">
            <div>
              <img src={Card4} alt="" />
            </div>
            <div className="ms-3 mt-5">
              <div className="mb-3">
                <p className="text-slate-400">Content Writing</p>
              </div>
              <div>
                <h1 className="font-bold">Magazine Content Writing</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-12 flex">
        <Button
          className="ms-auto me-auto"
          outline
          gradientDuoTone="purpleToBlue"
        >
          See All Works
          <FaArrowRight className="ms-1" />
        </Button>
      </div>
    </div>
  );
}

export { CaseStudyHero };
