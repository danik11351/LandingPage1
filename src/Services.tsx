import Card1 from "./assets/card-green.svg";
import Card2 from "./assets/card-blue.svg";
import Card3 from "./assets/card-red.svg";
function Services() {
  return (
    <div className="lg:mt-32">
      <div id="services-text" className="text-center">
        <div>
          <p className="text-rose-500">Our Services</p>
        </div>
        <div>
          <h1 className="font-bold text-5xl">
            We provide great services for our customers based
            <br /> on needs
          </h1>
        </div>
      </div>
      <div
        id="services-cards"
        className=" sm:flex-row lg:gap-0 lg:flex lg:justify-around mt-16"
      >
        <div className="card-1 bg-green-400 rounded flex-col justify-center text-center p-10 mx-10 mb-10 lg:mb-0 lg:mx-0">
          <div className="ms-12 me-12 mb-5">
            <img src={Card1} alt="" />
          </div>
          <div>
            <h3 className="font-bold mb-5 mt-3 text-2xl text-white">
              Graphic Design
            </h3>
          </div>
          <div>
            <p className="text-white">
              With lots of unique blocks, you can easily
              <br /> build a page without coding. Build your
              <br />
              next landing page.
            </p>
          </div>
          <div className="mt-7">
            <button
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Get started
            </button>
          </div>
        </div>
        <div className="card-2 bg-blue-600 rounded flex-col justify-center text-center p-10 mx-10 mb-10 lg:mb-0 lg:mx-0">
          <div className="ms-12 me-12 mb-5">
            <img src={Card2} alt="" />
          </div>
          <div>
            <h3 className="font-bold mb-5 mt-3 text-2xl text-white">
              Graphic Design
            </h3>
          </div>
          <div>
            <p className="text-white">
              With lots of unique blocks, you can easily
              <br /> build a page without coding. Build your
              <br />
              next landing page.
            </p>
          </div>
          <div className="mt-7">
            <button
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Get started
            </button>
          </div>
        </div>
        <div className="card-3 bg-red-600 rounded flex-col justify-center text-center p-10 mx-10 mb-10 lg:mb-0 lg:mx-0">
          <div className="ms-12 me-12 mb-5">
            <img src={Card3} alt="" />
          </div>
          <div>
            <h3 className="font-bold mb-5 mt-3 text-2xl text-white">
              Graphic Design
            </h3>
          </div>
          <div>
            <p className="text-white">
              With lots of unique blocks, you can easily
              <br /> build a page without coding. Build your
              <br />
              next landing page.
            </p>
          </div>
          <div className="mt-7">
            <button
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Get started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export { Services };
