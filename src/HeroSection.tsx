import ProfilePicture from "./assets/womanprofilepicture.svg";
export default function HeroSection() {
  return (
    <div className="lg:text-left lg:flex lg:justify-around text-center mt-32">
      <div id="hero-section-text" className="lg:mt-32 sm:mt-0">
        <div className="mb-3">
          <p className="text-rose-500">LET'S SHIFT YOUR BUSINESS</p>
        </div>
        <div className="font-bold text-5xl">
          Shift your business fast with
          <br />
          Shade Pro.
        </div>
        <div className="lg:mt-3 mt-5 sm:mx-auto">
          <p>
            With lots of unique blocks, you can easily build a page without
            <br />
            coding. Build your next consultancy website within
            <br /> few minutes.
          </p>
        </div>
        <div id="hero-section-lets-start-button" className="mt-4">
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Get started
          </button>
        </div>
      </div>
      <div id="hero-section-img">
        <img
          className="ms-auto me-auto mt-10 lg:mt-4 lg:w-96 xs:w-60 sm:mb-5"
          src={ProfilePicture}
          alt=""
        />
      </div>
    </div>
  );
}
export { HeroSection };
