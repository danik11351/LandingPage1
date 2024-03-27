import Card1 from "./assets/card-green.svg";
import Card2 from "./assets/card-blue.svg";
import Card3 from "./assets/card-red.svg";
import ReviewPFP from "./assets/ReviewSectionPFP.svg";
function Services() {
  return (
    <div className="lg:mt-32">
      <div id="services-text" className="text-center sm:my-10">
        <div>
          <p className="text-rose-500">Our Services</p>
        </div>
        <div>
          <h1 className="font-bold text-5xl sm:mx-1">
            We provide great services for our customers based
            <br /> on needs
          </h1>
        </div>
      </div>
      <div
        id="services-cards"
        className=" sm:flex-row lg:gap-0 lg:flex lg:justify-around mt-16"
      >
        <div className="card-1 bg-green-400 rounded flex-col justify-center text-center p-10 mx-10 mb-10 lg:mb-0 lg:mx-0 transition duration-500 hover:scale-110">
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
        <div className="card-2 transition duration-500 hover:scale-110 bg-blue-600 rounded flex-col justify-center text-center p-10 mx-10 mb-10 lg:mb-0 lg:mx-0">
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
        <div className="card-3 transition duration-500 hover:scale-110 bg-red-600 rounded flex-col justify-center text-center p-10 mx-10 mb-10 lg:mb-0 lg:mx-0">
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
function ServicesReviewSection() {
  return (
    <div
      id="review-container"
      className="mt-16 flex-col flex lg:flex-row text-center lg:text-left  lg:justify-center"
    >
      <div>
        <img
          className="ms-auto me-auto lg:me-0 lg:ms-0"
          src={ReviewPFP}
          alt=""
        />
      </div>
      <div className="mt-auto mb-auto lg:ms-10 sm:mx-3">
        <div
          id="rating-star-container"
          className="flex justify-center mt-3 lg:justify-start"
        >
          <span className="flex lg:justify-end mb-3 flex-row-reverse">
            {[...Array(5)].map((_, index) => (
              <svg
                key={index}
                className="text-gray-600 cursor-pointer peer peer-hover:text-yellow-400 hover:text-yellow-400 duration-100"
                width="23"
                height="23"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-label={`Star ${index + 1}`}
              >
                {
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                  ></path>
                }
              </svg>
            ))}
          </span>
        </div>
        <div id="review-section-text" className="mx-2 lg:mx-0">
          <div>
            <h1>
              “OMG! I cannot believe that I have got a brand new landing page
              after getting Albino. It was super easy to
              <br /> edit and publish.”
            </h1>
          </div>
          <div className="flex-col gap-3 mt-1">
            <p className="font-bold">Franklin Hicks</p>
            <p className="italic">- Web Developer</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export { Services, ServicesReviewSection };
