import { FaTwitter } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function FooterSection1() {
  return (
    <div
      style={{
        backgroundColor: "#161C2D",
      }}
      className="p-10 flex flex-col lg:flex-row justify-around text-center lg:text-left"
    >
      <div>
        <div>
          <h1 className="text-white font-bold text-2xl mb-2 lg:mb-0">
            Ready to launch your next project?
          </h1>
        </div>
        <div>
          <p className="text-slate-400 mb-2 lg:mb-0">
            With lots of unique blocks, you can easily build a page without
            coding.
            <br /> Build your next landing page.
          </p>
        </div>
      </div>
      <div>
        <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-14 py-4 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Get Started
        </button>
      </div>
    </div>
  );
}
function FooterSection2() {
  return (
    <div
      style={{
        backgroundColor: "#161C2D",
      }}
      className="p-10 flex flex-col lg:flex-row justify-around text-center lg:text-left"
    >
      <div id="footer-header+socials" className="gap-64">
        <div>
          <div>
            <h1 className="bold text-3xl text-white">Brainwave.io</h1>
          </div>
          <div>
            <p className="text-slate-400">
              With lots of unique blocks, you can easily
              <br /> build a page without coding. Build your
              <br /> next landing page.
            </p>
          </div>
        </div>
        <div id="socials" className="mt-3 flex gap-5 justify-center mb-6 mt-6 ">
          <div id="twitter">
            <FaTwitter className="text-slate-400 transform transition duration-500 hover:scale-150 hover:text-blue-400" />
          </div>
          <div id="facebook">
            <FaSquareFacebook className="text-slate-400 transform transition duration-500 hover:scale-150 hover:text-blue-500" />
          </div>
          <div id="instagram">
            <FaInstagram className="text-slate-400 transform transition duration-500 hover:scale-150 hover:text-purple-600" />
          </div>
          <div id="linkedin">
            <FaLinkedin className="text-slate-400 transform transition duration-500 hover:scale-150 hover:text-blue-600" />
          </div>
        </div>
      </div>
      <div>
        <h2 className="mb-6 text-sm font-semibold text-gray-400 uppercase dark:text-white">
          Company
        </h2>
        <ul className="text-white dark:text-gray-400 font-medium">
          <li className="mb-4">
            <a href="#" className=" hover:underline">
              About
            </a>
          </li>
          <li className="mb-4">
            <a href="#" className="hover:underline">
              Careers
            </a>
          </li>
          <li className="mb-4">
            <a href="#" className="hover:underline">
              Brand Center
            </a>
          </li>
          <li className="mb-4">
            <a href="#" className="hover:underline">
              Blog
            </a>
          </li>
        </ul>
      </div>
      <div>
        <h2 className="mb-6 text-sm font-semibold text-gray-400 uppercase dark:text-white">
          Company
        </h2>
        <ul className="text-white dark:text-gray-400 font-medium">
          <li className="mb-4">
            <a href="#" className=" hover:underline">
              About
            </a>
          </li>
          <li className="mb-4">
            <a href="#" className="hover:underline">
              Careers
            </a>
          </li>
          <li className="mb-4">
            <a href="#" className="hover:underline">
              Brand Center
            </a>
          </li>
          <li className="mb-4">
            <a href="#" className="hover:underline">
              Blog
            </a>
          </li>
        </ul>
      </div>
      <div>
        <h2 className="mb-6 text-sm font-semibold text-gray-400 uppercase dark:text-white">
          Company
        </h2>
        <ul className="text-white dark:text-gray-400 font-medium">
          <li className="mb-4">
            <a href="#" className=" hover:underline">
              About
            </a>
          </li>
          <li className="mb-4">
            <a href="#" className="hover:underline">
              Careers
            </a>
          </li>
          <li className="mb-4">
            <a href="#" className="hover:underline">
              Brand Center
            </a>
          </li>
          <li className="mb-4">
            <a href="#" className="hover:underline">
              Blog
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
function FooterSection3() {
  return (
    <div
      style={{
        backgroundColor: "#161C2D",
      }}
    >
      <div className="flex justify-center">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023{" "}
          <a href="#" className="hover:underline">
            Brainwave.io™
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </div>
  );
}
export { FooterSection1, FooterSection2, FooterSection3 };
