import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

function Latest() {
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
          "https://31.220.31.150/api/LatestArticles/"
        );
        const result = await response.json();
        const newArr = result.slice(-6);
        setGrid(newArr);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container mx-auto my-0 xl:px-[48px] md:px-[24px]">
      <h1 className="text-[#020202] text-[42px] lg:text-[36px] md:text-[33px] sm:text-[30px] font-semibold max-w-[700px] pb-[21px]">
        Latest articles
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
                    {convertDate(item.created_at)}
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
    </div>
  );
}

export default Latest;
