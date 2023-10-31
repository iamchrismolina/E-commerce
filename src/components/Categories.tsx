import { createBrowserRouter, RouterProvider } from "react-router-dom";

const Main = () => {
  return (
    <main className="m-auto container p-5">
      <div className="flex justify-center p-5">
        <nav>
          <ul className="flex gap-8 md:gap-14 lg:gap-20 xl:gap-28">
            <li>
              <a href="">All</a>
            </li>
            <li>
              <a href="">Mens</a>
            </li>
            <li>
              <a href="">Women</a>
            </li>
            <li>
              <a href="">Jewelries</a>
            </li>
            <li>
              <a href="">Electronics</a>
            </li>
          </ul>
        </nav>
      </div>
    </main>
  );
};

export default Main;
