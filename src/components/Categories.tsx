import { useSearch } from "../context/SearchContext.tsx";
import { useCachedProducts } from "../context/CachedProductsContext.tsx";

type AllProps = {
  activeCategory: string;
  setContentToLoad: React.Dispatch<React.SetStateAction<string>>;
};

const Main = ({ activeCategory, setContentToLoad }: AllProps) => {
  const { setSearch } = useSearch();
  const { setCachedProductsCategory } = useCachedProducts();

  return (
    <main className="m-auto container p-5">
      <div className="flex justify-center items-center flex-col p-5 gap-5">
        <nav>
          <ul className="flex gap-8 md:gap-14 lg:gap-20 xl:gap-28">
            <li>
              <span
                onClick={() => {
                  setContentToLoad("All");
                  setCachedProductsCategory("All");
                }}
                className={`cursor-pointer relative ${
                  activeCategory === "All" ? "activeHighlight" : ""
                }`}
              >
                All
              </span>
            </li>
            <li>
              <span
                onClick={() => {
                  setContentToLoad("Mens");
                  setCachedProductsCategory("Mens");
                }}
                className={`cursor-pointer relative ${
                  activeCategory === "Mens" ? "activeHighlight" : ""
                }`}
              >
                Mens
              </span>
            </li>
            <li>
              <span
                onClick={() => {
                  setContentToLoad("Women");
                  setCachedProductsCategory("Women");
                }}
                className={`cursor-pointer relative ${
                  activeCategory === "Women" ? "activeHighlight" : ""
                }`}
              >
                Women
              </span>
            </li>
            <li>
              <span
                onClick={() => {
                  setContentToLoad("Jewelries");
                  setCachedProductsCategory("Jewelries");
                }}
                className={`cursor-pointer relative ${
                  activeCategory === "Jewelries" ? "activeHighlight" : ""
                }`}
              >
                Jewelries
              </span>
            </li>
            <li>
              <span
                onClick={() => {
                  setContentToLoad("Electronics");
                  setCachedProductsCategory("Electronics");
                }}
                className={`cursor-pointer relative ${
                  activeCategory === "Electronics" ? "activeHighlight" : ""
                }`}
              >
                Electronics
              </span>
            </li>
          </ul>
        </nav>
        <div>
          <div className="container-input">
            <input
              type="text"
              placeholder="Search"
              name="search"
              className="input"
              onChange={(e) => setSearch(e.target.value)}
            />
            <svg
              fill="#000000"
              width="20px"
              height="20px"
              viewBox="0 0 1920 1920"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M790.588 1468.235c-373.722 0-677.647-303.924-677.647-677.647 0-373.722 303.925-677.647 677.647-677.647 373.723 0 677.647 303.925 677.647 677.647 0 373.723-303.924 677.647-677.647 677.647Zm596.781-160.715c120.396-138.692 193.807-319.285 193.807-516.932C1581.176 354.748 1226.428 0 790.588 0S0 354.748 0 790.588s354.748 790.588 790.588 790.588c197.647 0 378.24-73.411 516.932-193.807l516.028 516.142 79.963-79.963-516.142-516.028Z"
                fillRule="evenodd"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
