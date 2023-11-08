import { useState, useEffect } from "react";
import Banner from "../components/Banner.tsx";
import Categories from "../components/Categories.tsx";
import All from "../components/All.tsx";
import Mens from "../components/Mens.tsx";
import Women from "../components/Women.tsx";
import Jewelries from "../components/Jewelries.tsx";
import Electronics from "../components/Electronics.tsx";

const Home = () => {
  const cachedData = localStorage.getItem("cachedContentToLoad");
  const [contentToLoad, setContentToLoad] = useState(
    cachedData ? JSON.parse(cachedData) : "All"
  );

  useEffect(() => {
    localStorage.setItem("cachedContentToLoad", JSON.stringify(contentToLoad));
  }, [contentToLoad]);

  let content;
  switch (contentToLoad) {
    case "Mens":
      content = <Mens />;
      break;
    case "Women":
      content = <Women />;
      break;
    case "Jewelries":
      content = <Jewelries />;
      break;
    case "Electronics":
      content = <Electronics />;
      break;
    default:
      content = <All />;
  }

  return (
    <main className="m-auto container">
      <Banner bannerPage={contentToLoad} />
      <Categories
        activeCategory={contentToLoad}
        setContentToLoad={setContentToLoad}
      />
      {content}
    </main>
  );
};

export default Home;
