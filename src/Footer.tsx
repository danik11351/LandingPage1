import { FiTwitter } from "react-icons/fi";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function FooterSection1() {
  return (
    <div
      style={{
        backgroundColor: "#161C2D",
      }}
      className="p-10 flex flex-col lg:flex-row justify-around"
    >
      <div>
        <div>
          <h1 className="text-white font-bold text-2xl">
            Ready to launch your next project?
          </h1>
        </div>
        <div>
          <p className="text-slate-400">
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
      className="p-10 flex flex-col lg:flex-row"
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
        <div id="socials" className="mt-3 flex gap-5">
          <div id="twitter">
            <FiTwitter className="text-slate-400" />
          </div>
          <div id="facebook">
            <FaSquareFacebook className="text-slate-400" />
          </div>
          <div id="instagram">
            <FaInstagram className="text-slate-400" />
          </div>
          <div id="linkedin">
            <FaLinkedin className="text-slate-400" />
          </div>
        </div>
      </div>
    </div>
  );
}
export { FooterSection1, FooterSection2 };
