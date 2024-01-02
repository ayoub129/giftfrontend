// scroll top component
import ScrollToTop from "../components/ScrollToTop";

// images
import Errorimg from "../assets/error-img.png";
import Vector from "../assets/error-vector.svg";

// link
import { Link } from "react-router-dom";

function Error404() {
  return (
    <>
      <ScrollToTop />
      <div className="bg-404 relative">
        <div className="container mx-auto my-0 pt-[250px] lg:pt-[200px] xl:px-[48px] md:px-[24px] sm:pt-[120px]">
          <img
            src={Errorimg}
            alt="error"
            className="max-w-[670px] w-full h-auto block relative z-10 mx-auto my-0 img-404 md:translate-y-[24px]"
          />
        </div>
        <img src={Vector} alt="vector" className="absolute bottom-0 w-full h-auto" />
      </div>
      <div className="container mx-auto my-0 pt-[120px] xl:px-[48px] md:px-[24px] sm:pt-[80px]">
        <h1 className="text-[#020202] text-[42px] lg:text-[36px] md:text-[33px] sm:text-[30px] font-semibold text-center max-w-[700px] pb-[21px] mx-auto my-0">
          Oops! Why you’re here?
        </h1>
        <p className="text-center max-w-[700px] font-medium text-[#919CB0] text-[15px] pb-[33px] mx-auto my-0">
          We are very sorry for inconvenience. It looks like you’re trying to
          access a page that either has been deleted or never even existed.
        </p>
        <Link
          to="/"
          className="px-[24px] h-[50px] uppercase text-white text-[14px] font-semibold flex items-center mx-auto my-0 rounded-full bg-orange-400 w-fit og-btn transition-all"
        >
          BACK TO HOME
        </Link>
      </div>
    </>
  );
}

export default Error404;
