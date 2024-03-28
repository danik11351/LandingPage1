import BackGround from "./assets/TestimonialBG.svg";
import PFP from "./assets/TestimonialsPFP.svg";
function Testimonial() {
  return (
    <div
      style={{
        backgroundImage: `url(${BackGround})`,
        backgroundRepeat: `no-repeat`,
        backgroundSize: `cover`,
      }}
      className="bg-blue-700 mt-16 flex-col p-12"
    >
      <div className="p-12">
        <div>
          <p className="text-green-400 italic text-center">TESTIMONIAL</p>
        </div>
        <div>
          <h1 className="font-bold text-3xl text-center text-slate-50">
            “Simply the best. Better than all the rest. I'd recommend this
            product to
            <br /> beginners and advanced users.”
          </h1>
        </div>
      </div>
      <div>
        <div>
          <img className="ms-auto me-auto mt-12" src={PFP} alt="" />
          <div className="text-center">
            <div>
              <p className="text-white">Ian Klein</p>
            </div>
            <div>
              <p className="text-slate-400">Digital Marketer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Testimonial };
