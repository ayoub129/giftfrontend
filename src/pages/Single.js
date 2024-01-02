// scroll top component
import ScrollToTop from "../components/ScrollToTop";

import React from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

// images
import Arrow from "../assets/arrow-white-right.svg";
import Leaves from "../assets/leaves.png";
import Gift from "../assets/gift-single.png";
import Calendar from "../assets/calendar.svg";
import Hand from "../assets/hand-drag.svg";
import Arrowred from "../assets/arrow-red-right.svg";

// import Swiper from "swiper";
import { register } from "swiper/element/bundle";

function Single() {
  const { id } = useParams();

  const [article, setArticle] = useState([]);
  const [products, setProduct] = useState([]);

  const [grid, setGrid] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://31.220.31.150/api/Articles/${id}/`
        );
        const result = await response.json();
        setArticle(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [id]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          `https://31.220.31.150/api/Articles/${id}/products/`
        );
        const result = await response.json();
        setProduct(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchProducts();
  }, [id]);

  useEffect(() => {
    const fetchRecomended = async () => {
      try {
        const response = await fetch(
          `https://31.220.31.150/api/Articles/${id}/recommended/`
        );
        const result = await response.json();
        setGrid(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchRecomended();
  }, [id]);

  const swiperRef = useRef(null);

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

  // console.log(grid);

  const convertDate = (dateString) => {
    const dateObject = new Date(dateString);
    const options = { month: "long", day: "numeric", year: "numeric" };
    return dateObject.toLocaleDateString("en-US", options);
  };

  return (
    <div>
      <ScrollToTop />
      <div className="cover-single pt-[193px] pb-[60px] xl:pt-[150px]">
        <div className="container mx-auto my-0 xl:px-[48px] md:px-[24px] flex gap-[100px] xl:gap-[60px] justify-center items-center lg:grid lg:gap-0 lg:justify-center lg:justify-items-center lg:text-center">
          <div>
            <span className="uppercase text-[#FF4BF8] text-[16px] font-semibold tracking-wider pb-[15px] block">
              {article.category && article.category.name}
            </span>
            <h1 className="text-white font-medium text-[36px] lg:text-[33px] md:text-[27px] sm:text-[24px] max-w-[450px] w-full pb-[30px] text-shadow-h">
              {article.title}
            </h1>
            <div className="flex gap-[15px] p-[15px] box-border bg-[#00000047] border-[2px] border-[#2B8F9F] w-fit items-center rounded-[12px] lg:mx-auto lg:my-0">
              <img
                src={Calendar}
                alt="calendar"
                className="w-[24px] h-auto block"
              />
              <p className="text-white text-[16px] font-medium">
                {convertDate(article.created_at) || "Date not available"}
              </p>
            </div>
          </div>
          <div className="relative translate-y-[120px]">
            <div className="box-border p-[15px] sm:p-[10px] bg-white rounded-[15px] z-10 relative shadow-xl">
              <img
                src={article.image}
                alt={article.title}
                className="max-w-[540px] w-full object-contain h-auto rounded-[5px] sm:rounded-[7px]"
              />
            </div>
            <img
              src={Gift}
              alt="gift"
              className="absolute max-w-[110px] w-full h-auto block top-[-83px] right-[-47px] xl:right-[66px] lg:z-[12] lg:top-[-77px] sm:max-w-[100px]"
            />
            <img
              src={Leaves}
              alt="leaves"
              className="max-w-[270px] w-full h-auto block absolute bottom-[-73px] right-[45px] lg:right-auto lg:left-[48px] sm:max-w-[200px] sm:bottom-[-48px]"
            />
          </div>
        </div>
      </div>
      <div className="mt-[180px] sm:mt-[150px]">
        <div className="container mx-auto my-0 xl:px-[48px] md:px-[24px] pb-[70px] lg:grid lg:justify-center lg:justify-items-center sm:pb-[60px]">
          <p className="max-w-[800px] w-full block text-[18px] text-[#747D84] pb-[60px] lg:text-center sm:text-[16px]">
            {article.content}
          </p>
          <div className="border-b border-[#747D84] w-full h-[1px]"></div>
        </div>
      </div>
      <div className="container mx-auto my-0 xl:px-[48px] md:px-[24px] gap-[80px] grid pb-[100px] sm:gap-[70px] sm:pb-[80px]">
        {products.map((item, index) => (
          <div
            key={index}
            className="lg:grid lg:justify-center lg:justify-items-center lg:text-center"
          >
            <img
              src={item.image}
              alt={item.name}
              className="max-w-[420px] w-full block h-auto border-[10px] border-white rounded-[12px] shadow-lg mb-[27px]"
            />
            <h1 className="text-[#020202] font-bold text-[24px] lg:text-[21px] sm:text-[18px] mb-[18px] max-w-[500px] w-full">
              {item.name}
            </h1>
            <p className="text-[#747D84] mb-[30px] text-[18px] max-w-[800px] w-full sm:text-[16px]">
              {item.description}
            </p>
            <a
              href={item.link}
              className="px-[24px] h-[50px] uppercase text-white text-[14px] font-semibold flex items-center rounded-full bg-orange-400 w-fit og-btn transition-all"
            >
              <p className="uppercase">VIEW ON AMAZON</p>
              <img src={Arrow} alt="arrow" className="pl-[18px]" />
            </a>
          </div>
        ))}
      </div>
      <div className="container mx-auto my-0 xl:px-[48px] md:px-[24px] pb-[42px] sm:pb-[30px]">
        <h1 className="text-[#020202] text-[42px] lg:text-[36px] md:text-[33px] sm:text-[30px] font-semibold max-w-[700px] pb-[21px] md:text-center md:pb-[15px]">
          Recommended articles
        </h1>
        <div className="flex gap-[12px] items-center md:grid md:items-center md:justify-center md:justify-items-center md:gap-[9px]">
          <img
            src={Hand}
            alt="hand"
            className="w-[18px] h-auto block md:hidden"
          />
          <p className="text-[#919CB0] text-[16px] font-medium md:text-center">
            Swipe right, or click on arrows to see more recommended articles.
          </p>
        </div>
      </div>

      <div className="container mx-auto my-0 xl:px-[48px] md:px-[24px]">
        <swiper-container
          class="mySwiper"
          init="false"
          ref={swiperRef}
          autoplay="true"
          // navigation="true"
        >
          {grid.map((item, index) => (
            <swiper-slide key={index} class="pb-[51px]">
              <Link className="transition-all" to={`/single/${item.id}`}>
                <div className="card transition-all p-[15px] sm:p-[12px] rounded-[15px] box-border bg-white shadow-sm">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full  h-273  block object-contain mb-[15px] rounded-[6px] h-160 sm:rounded-[5px]"
                  />
                  <span className="text-[#7A34A4] text-[12px] block font-bold uppercase pb-[6px] tracking-wide">
                    {item.category.name}
                  </span>
                  <h2 className="text-[#020202] text-[18px] font-bold sm:text-[16px]">
                    {item.title}
                  </h2>
                  <div className="flex justify-between gap-[33px] items-center pt-[18px]">
                    <p className="text-[#919CB0] text-[12px] font-medium">
                      {item.date}
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
      </div>
    </div>
  );
}

export default Single;
