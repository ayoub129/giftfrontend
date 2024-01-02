// scroll top component
import ScrollToTop from "../components/ScrollToTop";
import { Link } from "react-router-dom";
import Arrow from "../assets/arrow-red-right.svg";

import NoData from "../components/NoData";
import { useLocation } from "react-router-dom";

function Search() {
  const location = useLocation();

  const convertDate = (dateString) => {
    const dateObject = new Date(dateString);
    const options = { month: "long", day: "numeric", year: "numeric" };
    return dateObject.toLocaleDateString("en-US", options);
  };
  return (
    <div>
      <ScrollToTop />

      <div className="category-cover pt-[224px] pb-[150px] xl:pt-[160px]">
        <div className="container mx-auto my-0 xl:px-[48px] md:px-[24px] text-center">
          <h1 className="h-strong text-white text-[42px] lg:text-[36px] md:text-[33px] sm:text-[30px] pb-[15px] text-shadow-h">
            Search <strong>Results</strong>.
          </h1>
          <p className="text-[#919CB0] text-[15px] font-medium text-shadow-footer-links">
            Check all search result articles below.
          </p>
        </div>
      </div>
      <div className="translate-y-[-80px] box-border">
        <div className="container mx-auto my-0 xl:px-[48px] md:px-[24px]">
          {/* Results Render */}

          <div className="container mx-auto my-0">
            {location.state.length > 0 ? (
              <div>
                <div className="grid grid-cols-4 lg:grid-cols-3 md:grid-cols-2 smm:grid-cols-1 gap-[12px] pt-[33px]">
                  {location.state.map((item, index) => (
                    <Link
                      key={index}
                      className="transition-all"
                      to={`/single/${item.id}`}
                    >
                      <div className="card transition-all p-[15px] sm:p-[12px] rounded-[15px] box-border bg-white shadow-md">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-auto block object-contain mb-[15px] rounded-[6px] sm:rounded-[5px]"
                        />
                        <span className="text-[#7A34A4] text-[12px] font-bold uppercase pb-[12px] tracking-wide">
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
                            src={Arrow}
                            className="max-w-[24px] w-full h-auto block"
                            alt="arrow"
                          />
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
                <div className="grid gap-[18px] text-center pt-[60px] sm:pt-[42px]">
                  <p className="text-[#919CB0] text-[15px] font-medium">
                    That’s it! End of results.
                  </p>
                  <Link
                    to="/"
                    className="px-[24px] h-[50px] uppercase text-white text-[14px] font-semibold flex items-center mx-auto my-0 rounded-full bg-orange-400 w-fit og-btn transition-all"
                  >
                    BACK TO HOME
                  </Link>
                </div>
              </div>
            ) : (
              <NoData />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Search;
