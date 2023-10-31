import { createBrowserRouter, RouterProvider } from "react-router-dom";

const Main = () => {
  return (
    <main className="m-auto container">
      <div className="flex justify-center p-5">
        <nav>
          <ul className="flex gap-8">
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
