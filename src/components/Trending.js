import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import Hand from "../assets/hand-drag.svg";
import Arrowred from "../assets/arrow-red-right.svg";
import { useRef } from "react";
import Gift from "../assets/gift-single.png";
import { register } from "swiper/element/bundle";

function Trending() {
  const [grid, setGrid] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://31.220.31.150/api/Articles/");
        const result = await response.json();

        const filtered = result.filter((article, index) => {
          return article.trending === true;
        });

        setGrid(filtered);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const swiperRef = useRef(null);

  const convertDate = (dateString) => {
    const dateObject = new Date(dateString);
    const options = { month: "long", day: "numeric", year: "numeric" };
    return dateObject.toLocaleDateString("en-US", options);
  };

  useEffect(() => {
    // Register Swiper web component
    register();

    // Object with parameters
    const params = {
      pagination: {
        clickable: true,
      },
      autoplay: {
        delay: 2000,
      },
      spaceBetween: 12,
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        599: {
          slidesPerView: 2,
        },
        800: {
          slidesPerView: 3,
        },
        1150: {
          slidesPerView: 4,
        },
      },
    };

    // Assign it to swiper element
    Object.assign(swiperRef.current, params);

    // initialize swiper
    swiperRef.current.initialize();
  }, []);

  return (
    <div className="pt-[170px] bg-trending relative md:pt-[140px]">
      <div className="container mx-auto my-0 xl:px-[48px] md:px-[24px] pb-[42px] sm:pb-[30px]">
        <h1 className="h-strong text-white text-[42px] lg:text-[36px] md:text-[33px] md:text-center sm:text-[30px] pb-[18px] text-shadow-h">
          Trending <strong>now</strong>.
        </h1>
        <div className="flex gap-[12px] items-center md:grid md:items-center md:justify-center md:justify-items-center md:gap-[9px]">
          <img src={Hand} alt="hand" className="w-[18px] h-auto block md:hidden" />
          <p className="text-[#919CB0] text-[16px] font-medium md:text-center">
            Slide right to see more articles.
          </p>
        </div>
      </div>

      <div className="container mx-auto my-0 xl:px-[48px] md:px-[24px] relative">
        <swiper-container
          class="mySwiper"
          init="false"
          ref={swiperRef}
          autoplay="true"
        >
          {grid.map((item, index) => (
            <swiper-slide key={index} class="pb-[60px]">
              <Link className="transition-all" to={`/single/${item.id}`}>
                <div className="card transition-all p-[15px] sm:p-[12px] rounded-[15px] box-border bg-white shadow-md">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full  h-273  block object-contain mb-[15px] rounded-[6px] sm:rounded-[5px]"
                  />
                  <span className="text-[#7A34A4] text-[12px] font-bold block uppercase pb-[6px] tracking-wide">
                    {item.category.name}
                  </span>
                  <h2 className="text-[#020202] text-[18px] font-bold sm:text-[16px]">
                    {item.title}
                  </h2>
                  <div className="flex justify-between gap-[33px] items-center pt-[18px]">
                    <p className="text-[#919CB0] text-[12px] font-medium">
                      {convertDate(item.created_at)}
                    </p>
                    <img
                      src={Arrowred}
                      className="max-w-[24px] w-full h-auto block"
                      alt="arrow"
                    />
                  </div>
                </div>
              </Link>
            </swiper-slide>
          ))}
        </swiper-container>
        <img
          src={Gift}
          alt="gift"
          className="max-w-[126px] w-full h-auto block absolute top-[-100px] right-[220px] md:hidden"
        />
      </div>

      <div className="absolute bottom-0 h-[180px] w-full bg-[#EEF2F5] block border-topic"></div>
    </div>
  );
}

export default Trending;
