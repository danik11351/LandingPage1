import Img1 from "./assets/ourstory-img-1.svg";
import Img2 from "./assets/our-story-img2.svg";
import Img3 from "./assets/our-story-img-3.svg";

function Story() {
  return (
    <div>
      <div id="our-story-headers" className="lg:ms-10 mt-32 mx-5">
        <div>
          <p className="text-rose-500 italic text-center lg:text-left">
            OUR STORY
          </p>
        </div>
        <div>
          <h1 className="font-bold text-3xl text-center lg:text-left">
            We know how everything works and why your <br />
            business is failing over and over again.
          </h1>
        </div>
      </div>
      <div
        id="our-story-image-container"
        className="flex flex-col lg:flex-row lg:justify-center mt-16 gap-5"
      >
        <div>
          <img className="lg:mt-16" src={Img1} alt="" />
        </div>
        <div className="flex-col" id="image-2-plus-text-container">
          <div>
            <img className="" src={Img2} alt="" />
          </div>
          <div className="lg:mt-24 text-center lg:text-left my-5 text-slate-500">
            <p>
              We share common trends and strategies for improving your rental
              <br /> income and making sure you stay in high demand. With lots
              of unique
              <br /> blocks, you can easily build a page without coding. Build
              your next
              <br /> landing page.
            </p>
          </div>
        </div>
        <div className="lg:mt-16 ms-auto me-auto lg:ms-0 lg:me-0 mt-0">
          <img src={Img3} alt="" />
        </div>
      </div>
    </div>
  );
}

export { Story };
