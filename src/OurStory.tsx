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
          <h1 className="font-bold text-3xl text-center lg:text-left mx-4">
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
          <div className="lg:mt-24 text-center lg:text-left my-5 text-slate-500 mx-3 lg:mx-0">
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
function OurStoryStats() {
  return (
    <div
      id="our-story-stats-container"
      className="flex flex-col lg:flex-row mt-16 justify-around"
    >
      <div>
        <div className="flex-col text-center">
          <h1 className="font-bold text-3xl mb-2">1M+</h1>
          <div>
            <p className="text-slate-400">
              Customers visit Omega every month to
              <br /> get their service done.
            </p>
          </div>
        </div>
      </div>
      <div className="flex-col text-center mt-10 lg:mt-0">
        <div>
          <h1 className="font-bold text-3xl mb-2">92%</h1>
        </div>
        <div>
          <p className="text-slate-400 mb-2">
            Satisfaction rate comes from our
            <br /> awesome customers.
          </p>
        </div>
      </div>
      <div className="flex-col text-center mt-10 lg:mt-0">
        <div>
          <h1 className="font-bold text-3xl mb-2">4.9/5.0</h1>
        </div>
        <div>
          <p className="text-slate-400">
            Average customer ratings we have got
            <br /> all over internet.
          </p>
        </div>
      </div>
    </div>
  );
}
export { Story, OurStoryStats };
