import React from "react";
import Glass from "../assets/search-icon.svg";
// navigate
import { useNavigate } from "react-router-dom";

function SearchInput({ setSearch }) {
  const navigate = useNavigate();

  const onSubmitHandler = (e) => {
    e.preventDefault();
    navigate("/search");
  };

  return (
    <form className="relative" onSubmit={onSubmitHandler}>
      <img className="absolute top-[14px] left-[12px]" src={Glass} alt="" />
      <input
        type="search"
        className="bg-[#0000005c] border rounded-[12px] px-5 pl-[43px] border-[#2B8F9F] placeholder-[#3ADE1D] font-medium text-white outline-none h-[50px] sm:w-full"
        placeholder="Search here..."
        onChange={(e) => setSearch(e.target.value)}
      />
    </form>
  );
}

export default SearchInput;
