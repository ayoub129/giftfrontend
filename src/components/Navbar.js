import { Link } from "react-router-dom";

// Images
import Arrow from "../assets/arrow-nav.svg";
import Logo from "../assets/logo-foot.png";
import Boxnav from "../assets/gift-nav.png";
import Glass from "../assets/search-icon.svg";
import Menu from "../assets/menu-vertical.svg";
import Logomob from "../assets/logo-mob.png";

import { useEffect } from "react";
import { useState } from "react";

// navigate
import { useNavigate } from "react-router-dom";

function Navbar() {
  const [header, setHeader] = useState(false);
  const [search, setSearch] = useState("");

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setHeader(true) : setHeader(false);
    });
  });

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://31.220.31.150/api/Categories/");
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []); // The empty dependency array means this effect runs once when the component mounts

  const navigate = useNavigate();

  const searchArticles = async (query) => {
    try {
      const response = await fetch(
        `https://31.220.31.150/api/Articles/search/?q=${query}`
      );
      const searchResults = await response.json();
      console.log(searchResults);
      navigate("/search", { state: { searchResults } });
      // Process and display searchResults
    } catch (error) {
      console.error("Error searching articles:", error);
    }
  };

  return (
    <nav className="bg-[#02333E] border-b-[1px] border-b-[#1B5E69] box-border fixed top-0 z-40 w-full flex-none lg:z-50 h-[80px] shadow xl:px-[48px] md:px-[24px] ">
      <div className="container flex justify-between items-center relative">
        <img
          src={Boxnav}
          alt="Box Gift"
          className={`${
            header ? "opacity-0" : "opacity-1"
          } absolute bottom-0 w-[110px] h-auto block top-[45px] left-[370px] transition-all duration-500 xl:hidden`}
        />

        <Link to="/">
          <img
            className="max-w-[249px] h-auto block md:hidden"
            src={Logo}
            alt="logo"
          />
          <img
            src={Logomob}
            alt="mobile logo"
            className="hidden md:block w-[38px] h-auto logomob"
          />
        </Link>

        <div className="flex gap-[15px] items-center md:gap-[10px] md:flex-row-reverse">
          <div className="h-[80px] p-0 m-0 items-center relative flex category-nav">
            <div className=" bg-[#304B5D] border-[1px] border-[#718498] flex gap-[15px] text-white text-[15px] h-[50px] px-[15px] items-center rounded-[12px] box-shadow-nav cursor-pointer md:w-[50px] md:justify-center md:rounded-[9px]">
              <div>
                <span className="font-medium md:hidden">Categories</span>
                <img src={Menu} alt="Menu" className="hidden md:block" />
              </div>
              <img src={Arrow} alt="category arrow" className="md:hidden" />
            </div>
            <div className="absolute top-[77px] right-[0] bg-[#304B5D] border-[1px] border-[#718498] rounded-[12px] p-[12px] gap-[6px] overflow-x-hidden overflow-y-scroll h-[270px] w-[240px] scroll-change hidden opacity-0 dropdown">
              {data
                .filter((d) => !d.parentCategory)
                .map((d) => (
                  <Link
                    to={`categories/${d.id}`}
                    key={d.id}
                    className="text-[15px] transition-all hover:text-[#fff] text-center cursor-pointer  p-[6px] border-[1px] border-[#718498] hover:border-white rounded-[6px] text-white font-medium"
                  >
                    {d.name}
                  </Link>
                ))}
            </div>
          </div>

          <form className="relative" onSubmit={() => searchArticles(search)}>
            <img
              className="absolute cursor-pointer top-[14px] left-[12px]"
              src={Glass}
              alt="search"
              onClick={() => searchArticles(search)}
            />
            <input
              type="search"
              className="bg-[#0000005c] w-[300px] border rounded-[12px] px-5 pl-[43px] border-[#2B8F9F] placeholder-[#3ADE1D] font-medium text-white outline-none h-[50px] md:w-[240px] sm:max-w-[125px] sm:w-full"
              placeholder="Search here..."
              onChange={(e) => setSearch(e.target.value)}
            />
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
