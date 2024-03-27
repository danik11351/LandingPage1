import Card1 from "./assets/why-us-blue-icon.svg";
import Card2 from "./assets/why-us-red-icon.svg";
import Card3 from "./assets/why-us-green-icon.svg";
import Card4 from "./assets/why-us-black-icon.svg";

function WhyUsFun() {
  return (
    <div>
      <div id="why-us-text" className="mt-16">
        <div>
          <p className="text-rose-500 italic text-center">WHY CHOOSE US</p>
        </div>
        <div>
          <p className="font-bold text-3xl text-center mx-3 lg:mx-0">
            People choose us because we serve the best for
            <br /> everyone
          </p>
        </div>
      </div>
      <div
        id="why-us-cards"
        className="flex flex-col lg:flex-row justify-center gap-20 lg:gap-52 mt-16"
      >
        <div id="cards-1-2">
          <div
            id="card-1"
            className="flex flex-col lg:flex-row gap-5 align-baseline mb-10"
          >
            <div className="ms-auto me-auto">
              <img src={Card1} alt="" />
            </div>
            <div id="card-1-text" className="text-center lg:text-left">
              <div>
                <h2 className="font-bold mb-3">Dedicated project manager</h2>
              </div>
              <div>
                <p>
                  With lots of unique blocks, you can easily
                  <br /> build a page without coding. Build your
                  <br /> next landing page.
                </p>
              </div>
            </div>
          </div>
          <div
            id="card-2"
            className="flex flex-col lg:flex-row gap-5 align-baseline"
          >
            <div className="ms-auto me-auto">
              {" "}
              <img src={Card3} alt="" />
            </div>
            <div id="card-2-text" className="text-center lg:text-left">
              <div>
                <h2 className="font-bold mb-3">Organized tasks</h2>
              </div>
              <div>
                <p>
                  With lots of unique blocks, you can easily
                  <br /> build a page without coding. Build your
                  <br /> next landing page.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div id="cards-3-4">
          <div
            id="card-3"
            className="flex flex-col lg:flex-row gap-5 align-baseline mb-10"
          >
            <div className="ms-auto me-auto">
              <img src={Card2} alt="" />
            </div>
            <div id="card-1-text" className="text-center lg:text-left">
              <div>
                <h2 className="font-bold mb-3">Easy feedback sharing</h2>
              </div>
              <div>
                <p>
                  With lots of unique blocks, you can easily
                  <br /> build a page without coding. Build your
                  <br /> next landing page.
                </p>
              </div>
            </div>
          </div>
          <div
            id="card-4"
            className="flex flex-col lg:flex-row gap-5 align-baseline sm:mb-10"
          >
            <div className="ms-auto me-auto">
              <img src={Card4} alt="" />
            </div>
            <div id="card-2-text" className="text-center lg:text-left">
              <div>
                <h2 className="font-bold mb-3">Never miss deadline</h2>
              </div>
              <div>
                <p>
                  With lots of unique blocks, you can easily
                  <br /> build a page without coding. Build your
                  <br /> next landing page.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
function WhyUsStartProject() {
  return (
    <div className="flex flex-col lg:flex-row mt-16 lg:justify-around align-baseline">
      <div id="start-project-text" className="text-center lg:text-left">
        <div>
          <div>
            <h1 className="font-bold text-xl">
              Ready to launch your next project?
            </h1>
          </div>
          <div className="mt-3">
            <p>
              With lots of unique blocks, you can easily build a page without
              coding.
              <br /> Build your next landing page.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-5 lg:mt-3 ms-auto me-auto lg:me-0 lg:ms-0">
        <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-10 py-3 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Get Started
        </button>
      </div>
    </div>
  );
}
export { WhyUsFun, WhyUsStartProject };
