import { useSearch } from "../context/SearchContext";

type AllProps = {
  activeCategory: string;
  setContentToLoad: React.Dispatch<React.SetStateAction<string>>;
};

const Main = ({ activeCategory, setContentToLoad }: AllProps) => {
  const { setSearch } = useSearch();

  return (
    <main className="m-auto container p-5">
      <div className="flex justify-center items-center flex-col p-5 gap-5">
        <nav>
          <ul className="flex gap-8 md:gap-14 lg:gap-20 xl:gap-28">
            <li>
              <span
                onClick={() => setContentToLoad("All")}
                className={`cursor-pointer relative ${
                  activeCategory === "All" ? "activeHighlight" : ""
                }`}
              >
                All
              </span>
            </li>
            <li>
              <span
                onClick={() => setContentToLoad("Mens")}
                className={`cursor-pointer relative ${
                  activeCategory === "Mens" ? "activeHighlight" : ""
                }`}
              >
                Mens
              </span>
            </li>
            <li>
              <span
                onClick={() => setContentToLoad("Women")}
                className={`cursor-pointer relative ${
                  activeCategory === "Women" ? "activeHighlight" : ""
                }`}
              >
                Women
              </span>
            </li>
            <li>
              <span
                onClick={() => setContentToLoad("Jewelries")}
                className={`cursor-pointer relative ${
                  activeCategory === "Jewelries" ? "activeHighlight" : ""
                }`}
              >
                Jewelries
              </span>
            </li>
            <li>
              <span
                onClick={() => setContentToLoad("Electronics")}
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
          <input
            type="text"
            name="search"
            placeholder="Search..."
            className="text-center border-black border-2 rounded"
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>
    </main>
  );
};

export default Main;
