// scroll top component
import ScrollToTop from "../components/ScrollToTop";
import { Link } from "react-router-dom";
import Arrow from "../assets/arrow-red-right.svg";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

function Categories() {
  const { category } = useParams();
  const { sub } = useParams();
  const [articles, setArticles] = useState([]);
  const [categories, setCategories] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMoreArticles, setHasMoreArticles] = useState(true);

  const convertDate = (dateString) => {
    const dateObject = new Date(dateString);
    const options = { month: "long", day: "numeric", year: "numeric" };
    return dateObject.toLocaleDateString("en-US", options);
  };

  const fetchCategories = async () => {
    try {
      const response = await fetch("https://31.220.31.150/api/Categories/");
      const result = await response.json();
      setCategories(result);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const fetchArticles = async () => {
    try {
      if (category === 0) {
        const response = await fetch(
          `https://31.220.31.150/api/Articles/staffpick/?page=${page}`
        );
        const newArticles = await response.json();

        if (newArticles.length === 0) {
          setHasMoreArticles(false);
        } else {
          // Filter out duplicates before updating the state
          const uniqueNewArticles = newArticles.filter(
            (newArticle) =>
              !articles.some(
                (existingArticle) => existingArticle.id === newArticle.id
              )
          );

          // Use a callback function for setArticles to ensure the correct state update
          setArticles([...articles, ...uniqueNewArticles]);
          setPage((prevPage) => prevPage + 1);
        }
      } else {
        const response = await fetch(
          sub
            ? `https://31.220.31.150/api/Articles/category/${category}/${sub}/?page=${page}`
            : `https://31.220.31.150/api/Articles/category/${category}/?page=${page}`
        );
        const newArticles = await response.json();

        if (newArticles.length === 0) {
          setHasMoreArticles(false);
        } else {
          // Filter out duplicates before updating the state
          const uniqueNewArticles = newArticles.filter(
            (newArticle) =>
              !articles.some(
                (existingArticle) => existingArticle.id === newArticle.id
              )
          );

          // Use a callback function for setArticles to ensure the correct state update
          setArticles([...articles, ...uniqueNewArticles]);
          setPage((prevPage) => prevPage + 1);
        }
      }
    } catch (error) {
      console.error("Error fetching articles:", error);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const [selectedCategory, setSelectedCat] = useState("");
  const [SubCategories, setSubCategories] = useState([]);

  useEffect(() => {
    if (sub) {
      const fetchsub = async () => {
        const response = await fetch(
          `https://31.220.31.150/api/Categories/${category}/subcategories/`
        );
        const subCat = await response.json();
        return subCat;
      };

      const subcat = fetchsub();
      setSelectedCat(subcat.find((sc) => sc.id.toString() === sub));
    } else if (categories.length > 0) {
      // Filter the selected category and check for parent categories
      setSelectedCat(categories.find((cat) => cat.id.toString() === category));
      const fetchsub = async () => {
        const response = await fetch(
          `https://31.220.31.150/api/Categories/${category}/subcategories/`
        );
        const subCat = await response.json();
        return subCat;
      };

      const subcat = fetchsub();
      setSubCategories(subcat);

      // Now you can use selectedCategory and parentCategories as needed

      // Fetch initial set of articles when the component mounts
      fetchArticles();
    }
  }, [categories, category, sub]);

  const handleSeeMore = () => {
    fetchArticles();
  };

  return (
    <div>
      <ScrollToTop />

      <div className="category-cover pt-[224px] pb-[150px] xl:pt-[160px]">
        <div className="container mx-auto my-0 xl:px-[48px] md:px-[24px] text-center">
          <h1 className="h-strong text-white text-[42px] lg:text-[36px] md:text-[33px] sm:text-[30px] pb-[15px] text-shadow-h">
            { selectedCategory ? selectedCategory.name : "Staff Pick"}
          </h1>
          {SubCategories && SubCategories.length > 1 && (
            <div className="container mx-auto my-0 xl:px-[48px] md:px-[24px]">
              <div className="bg-white rounded-[9px] shadow-md flex gap-[9px] flex-wrap container mx-auto my-0 p-[33px]  justify-center xl:px-[48px] md:px-[24px] ">
                {SubCategories.map((sub) => (
                  <Link
                    to={`/categories/${category}/${sub.id}`}
                    className="text-[16px] transition-all text-center cursor-pointer px-[18px]  p-[6px] border-[2px] border-[#cbcfd1] hover:border-[#4EC9D4] rounded-[6px] text-[#020202] font-medium"
                  >
                    {sub.name}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
      <div>
        <div className="grid grid-cols-4 lg:grid-cols-3 md:grid-cols-2 smm:grid-cols-1 gap-[12px] container mx-auto my-0 xl:px-[48px] md:px-[24px] translate-y-[-80px]">
          {articles.map((item, index) => (
            <Link
              key={index}
              className="transition-all"
              to={`/single/${item.id}`}
            >
              <div className="card transition-all p-[15px] sm:p-[12px] rounded-[15px] box-border bg-white shadow-md">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full  h-273 block object-contain mb-[15px] rounded-[6px] sm:rounded-[5px]"
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

        <div className="grid gap-[18px] text-center">
          {hasMoreArticles ? (
            <button
              onClick={handleSeeMore}
              className="px-[24px] h-[50px] uppercase text-white text-[14px] font-semibold flex items-center mx-auto my-0 rounded-full bg-orange-400 w-fit og-btn transition-all"
            >
              See More
            </button>
          ) : (
            <div>
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
          )}
        </div>
      </div>
    </div>
  );
}

export default Categories;
