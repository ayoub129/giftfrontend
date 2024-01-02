import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Arrow from "../assets/arrow-white-right.svg";
import ArrowWhite from "../assets/arrow-white-mini.svg";
import PinterestIcon from "../assets/pinterest-ic.svg";

function ForHimTwo() {
  const [grid, setGrid] = useState([]);

  const convertDate = (dateString) => {
    const dateObject = new Date(dateString);
    const options = { month: "long", day: "numeric", year: "numeric" };
    return dateObject.toLocaleDateString("en-US", options);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://31.220.31.150/api/Articles/category/4/?page=1"
        );
        const result = await response.json();

        const filtered = result.filter((article, index) => {
          return article.category.name === "Gifts For Him";
        });

        const newArr = filtered.slice(-6);
        setGrid(newArr);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex gap-[45px] xl:gap-[15px] items-start container xl:px-[48px] md:px-[24px] mx-auto my-0 pt-[70px] lg:gap-[80px] lg:grid sm:gap-[60px] lg:pt-[80px] sm:pt-[60px]">
      <div>
        <h1 className="text-[#020202] text-[42px] lg:text-[36px] md:text-[33px] sm:text-[30px] font-semibold max-w-[700px] pb-[21px]">
          Gifts For Him
        </h1>
        <div className="grid max-w-[726px] w-full box-border gap-[12px] md:grid md:gap-[18px] md:grid-cols-2 sm:grid-cols-1">
          {grid.map((item, index) => (
            <Link
              key={index}
              className="transition-all"
              to={`/single/${item.id}`}
            >
              <div className="card transition-all p-[10px] sm:p-[12px] rounded-[12px] box-border bg-white shadow-md flex gap-[15px] items-center md:grid">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full  h-273 max-w-[170px] h-[137px] block object-cover rounded-[6px] sm:rounded-[5px] md:object-contain md:max-w-[100%] md:w-full md:h-auto"
                />

                <div className="grid gap-[9px] items-center">
                  <h2 className="text-[#020202] text-[18px] font-bold sm:text-[16px]">
                    {item.title.length >= 70
                      ? item.title.substring(0, 70) + "..."
                      : item.title}
                  </h2>
                  <div className="flex gap-[6px] items-center">
                    <span className="text-[#7A34A4] bg-[#F8F2FC] py-[1px] px-[5px] rounded-[3px] text-[12px] font-semibold">
                      {item.category.name}
                    </span>
                    <p className="text-[#336997] bg-[#F0F5F9] py-[1px] px-[5px] rounded-[3px] text-[12px] font-semibold">
                      {convertDate(item.date)}
                    </p>
                  </div>

                  <p className="text-[12px] text-[#747D84] font-medium">
                    {item.content.length >= 100
                      ? item.content.substring(0, 100) + "..."
                      : null}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <Link
          to="/categories/3"
          className="px-[24px] h-[50px] uppercase text-white text-[14px] font-semibold flex items-center rounded-full bg-orange-400 w-fit og-btn transition-all mt-[30px]"
        >
          <p className="uppercase">SEE MORE</p>
          <img src={Arrow} alt="arrow" className="pl-[18px]" />
        </Link>
      </div>
      <div className="max-w-[340px] w-full lg:max-w-[726px]">
        <h1 className="text-[#020202] text-[42px] lg:text-[36px] md:text-[33px] sm:text-[30px] font-semibold max-w-[700px] pb-[21px]">
          Social Media
        </h1>
        <div className="grid p-[6px] gap-[6px] rounded-[9px] shadow-md bg-white  w-full">
          <a
            href="https://www.pinterest.com/giftandcelebrate/"
            className="transition-all cursor-pointer  pl-[12px] pr-[16px] h-[42px] border-[1px] border-[#DF0022] hover:border-[#A40019] bg-[#DF0022] hover:bg-[#A40019] rounded-[6px] flex justify-between items-center"
          >
            <div className="flex items-center gap-[9px]">
              <img src={PinterestIcon} alt="" />
              <span className="text-[16px] text-white font-medium">
                Pinterest
              </span>
            </div>
            <img
              src={ArrowWhite}
              alt="arrow white"
              className="w-[9px] h-auto block"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default ForHimTwo;
