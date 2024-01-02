// image
import Glass from "../assets/search-icon.svg";
import Box1 from "../assets/gift-search-home-1.png";
import Box2 from "../assets/gift-search-home-2.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Searchhome() {
  const [search, setSearch] = useState("");

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
    <div className="mt-[90px] md:mt-[130px] mb-[80px] md:mb-[60px] bg-green-search relative">
      <div className="container mx-auto my-0 py-[80px] xl:px-[48px] md:px-[24px] relative md:pt-[60px] md:pb-[60px] md:grid md:justify-items-center	">
        <h1 className="h-strong text-white text-[42px] lg:text-[36px] md:text-[33px] sm:text-[30px] pb-[30px] text-shadow-h">
          Search by <strong>anything</strong>.
        </h1>
        <form className="flex gap-[12px] md:grid md:gap-[24px] md:w-full md:max-w-[600px]">
          <div className="relative">
            <img
              className="absolute top-[14px] left-[12px]"
              src={Glass}
              alt="glass"
            />
            <input
              type="search"
              className="bg-[#0000005c] w-[412px] border rounded-[12px] px-5 pl-[43px] border-[#2B8F9F] placeholder-[#3ADE1D] font-medium text-white outline-none h-[50px] md:w-full"
              placeholder="Search by anything..."
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <button
            className="h-[50px] px-[24px] bg-green cursor-pointer text-white font-bold text-[14px] uppercase rounded-full bg-green-shadow hover:shadow-none transition-all"
            type="submit"
            onSubmit={() => searchArticles(search)}
          >
            <span className="tracking-wider">Search</span>
          </button>
        </form>

        <img
          src={Box1}
          alt="box 1"
          className="absolute top-[-51px] left-[-120px] max-w-[120px] w-full h-auto 2xl:right-[333px] 2xl:left-auto md:top-[-21px] md:left-[50%] translate-800"
        />
        <img
          src={Box2}
          alt="box 2"
          className="absolute max-w-[150px] w-full h-auto right-[100px] bottom-[-42px] lg:max-w-[130px] lg:right-[66px] md:hidden"
        />
      </div>
    </div>
  );
}

export default Searchhome;
