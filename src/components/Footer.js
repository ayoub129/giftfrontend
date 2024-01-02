import { Link } from "react-router-dom";

// Images
import Box1 from "../assets/gift-1-foot.png";
import Box2 from "../assets/gift-2-foot.png";
import Bgtop from "../assets/foot-top.svg";
import Pinterest from "../assets/pinterest-foot.svg";
import Logo from "../assets/logo-foot.png";
import Email from "../assets/email-icon.svg";

function Footer() {
  return (
    <div className="relative">
      <img
        src={Bgtop}
        alt="bg top"
        className="mt-[120px] lg:mt-[140px] sm:mt-[120px] w-full ft"
      />

      <footer className="bg-[#013B47] background-footer w-full relative">
        <div className="container mx-auto pt-[100px] pb-[60px] sm:pb-[42px] my-0 xl:px-[48px] md:px-[24px] relative lg:pb-[48px] md:pb-[24px]">
          <img
            src={Box1}
            alt="box 1"
            className="w-[170px] sm:w-[140px] h-auto top-[-107px] left-0 absolute z-10 xl:left-[48px] lg:top-[-42px] sm:top-[-9px] lg:left-[50%] translate"
          />

          <img
            src={Box2}
            alt="box 2"
            className="w-[115px] h-auto top-[-110px] left-[420px] absolute z-10 xl:top-[-93px] lg:hidden"
          />

          <div className="flex justify-between gap-[60px] lg:grid lg:items-center lg:justify-center lg:justify-items-center lg:gap-[48px]">
            <div className="grid content-start items-start">
              <img
                className="max-w-[328px] h-auto w-full block mb-[12px] logo-foot-shadow lg:my-0 lg:mx-auto lg:mb-[24px]"
                src={Logo}
                alt="logo-footer"
              />
              <p className="text-[#A8B7BA] font-medium text-[14px] mb-[62px] lg:text-center lg:mb-[33px]">
                ©2024 - GIFTANDCELEBRATE ALL RIGHTS RESERVED
              </p>
              <form className="flex gap-[12px] sm:grid">
                <div className="relative">
                  <img
                    className="absolute top-[12px] left-[15px]"
                    src={Email}
                    alt="email-footer"
                  />
                  <input
                    className="bg-[#0000005c] w-[300px] border rounded-[12px] px-5 pl-[54px] border-[#2B8F9F] placeholder-[#3ADE1D] font-medium text-white outline-none h-[50px] sm:w-full"
                    type="email"
                    placeholder="Subscribe for newsletter"
                  />
                </div>
                <button
                  className="h-[50px] px-[24px] bg-green cursor-pointer text-white font-bold text-[14px] uppercase rounded-full bg-green-shadow hover:shadow-none transition-all"
                  type="submit"
                >
                  <span className="tracking-wider">Subscribe</span>
                </button>
              </form>
            </div>

            <div className="flex gap-[60px] x:gap-[48px] lg:text-center sm:grid sm:gap-[36px]">
              <div className="grid gap-[12px]">
                <Link
                  to="/categories/0"
                  className="text-[#4EC9D4] text-[18px] transition-all hover:text-[#fff] font-normal uppercase x:text-[16px] sm:text-[15px] cursor-pointer text-shadow-footer-links"
                >
                  Staff Picks
                </Link>
                <Link
                  to="/categories/2"
                  className="text-[#4EC9D4] text-[18px] transition-all hover:text-[#fff] font-normal uppercase x:text-[16px] sm:text-[15px] cursor-pointer text-shadow-footer-links"
                >
                  Thank You Gifts
                </Link>
                <Link
                  to="/categories/3"
                  className="text-[#4EC9D4] text-[18px] transition-all hover:text-[#fff] font-normal uppercase x:text-[16px] sm:text-[15px] cursor-pointer text-shadow-footer-links"
                >
                  Gifts For Her
                </Link>
                <Link
                  to="/categories/4"
                  className="text-[#4EC9D4] text-[18px] transition-all hover:text-[#fff] font-normal uppercase x:text-[16px] sm:text-[15px] cursor-pointer text-shadow-footer-links"
                >
                  Gifts For Him
                </Link>
              </div>

              <div className="grid gap-[12px] ">
                <Link
                  to="/categories/5"
                  className="text-[#4EC9D4] text-[18px] transition-all hover:text-[#fff] font-normal uppercase x:text-[16px] sm:text-[15px] cursor-pointer text-shadow-footer-links"
                >
                  Gifts For Animal Lovers
                </Link>
                <Link
                  to="/categories/6"
                  className="text-[#4EC9D4] text-[18px] transition-all hover:text-[#fff] font-normal uppercase x:text-[16px] sm:text-[15px] cursor-pointer text-shadow-footer-links"
                >
                  Outdoor Enthusiasts
                </Link>
                <Link
                  to="/categories/7"
                  className="text-[#4EC9D4] text-[18px] transition-all hover:text-[#fff] font-normal uppercase x:text-[16px] sm:text-[15px] cursor-pointer text-shadow-footer-links"
                >
                  Gifts For Hobbyist
                </Link>
                <Link
                  to="/categories/8"
                  className="text-[#4EC9D4] text-[18px] transition-all hover:text-[#fff] font-normal uppercase x:text-[16px] sm:text-[15px] cursor-pointer text-shadow-footer-links"
                >
                  Sports Enthusiasts
                </Link>
                <Link
                  to="/categories/9"
                  className="text-[#4EC9D4] text-[18px] transition-all hover:text-[#fff] font-normal uppercase x:text-[16px] sm:text-[15px] cursor-pointer text-shadow-footer-links"
                >
                  Miscellanous
                </Link>
              </div>
            </div>
          </div>

          <div className="gradient-foot p-[2px] box-border rounded-full inline-block w-full mt-[74px] shadow-foot md:mt-[54px] sm:rounded-[16px] ">
            <div className="bg-[#FEBC46] rounded-full w-full flex justify-between p-[16px] sm:rounded-[15px] sm:items-center smx:grid smx:gap-[27px] smx:text-center smx:justify-items-center smx:justify-center">
              <div className="flex gap-[21px] items-center pl-[26px] md:pl-[6px] md:gap-[12px] sm:grid sm:gap-[12px] sm:pl-[0]">
                <Link
                  to={"/terms"}
                  className="text-[#845400] text-[15px] font-bold cursor-pointer transition-all hover:text-[#633F00] md:text-[14px]"
                >
                  TERMS & CONDITION
                </Link>
                <div className="h-[6px] w-[6px] rounded-full bg-[#BC8420] md:hidden "></div>
                <Link
                  to={"/privacy"}
                  className="text-[#845400] text-[15px] font-bold cursor-pointer transition-all hover:text-[#633F00] md:text-[14px]"
                >
                  PRIVACY POLICY
                </Link>
              </div>
              <div className="pint-shadow-light cursor-pointer transition-all">
                <img
                  className="max-w-[66px] h-auto w-full block 2xl:max-w-[66px] lg:max-w-[66px] pint-shadow-dark"
                  src={Pinterest}
                  alt="pinterest"
                />
              </div>
            </div>
          </div>
          <div className="text-white text-center mt-[50px]">
            We may earn a commission for purchases made through our links.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
