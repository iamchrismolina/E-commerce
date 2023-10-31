import Header from "./components/Header.tsx";
import Home from "./pages/Home.tsx";
import Men from "./pages/Men.tsx";
import Women from "./pages/Women.tsx";
import Jewelry from "./pages/Jewelry.tsx";
import Electronic from "./pages/Electronic.tsx";
import Footer from "./components/Footer.tsx";
import "./modern-normalize.css";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/men",
        element: <Men />,
      },
      {
        path: "/women",
        element: <Women />,
      },
      {
        path: "/jewelry",
        element: <Jewelry />,
      },
      {
        path: "/electronic",
        element: <Electronic />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <Header />
      <RouterProvider router={router} />
      <Footer />
    </>
  );
}

export default App;
