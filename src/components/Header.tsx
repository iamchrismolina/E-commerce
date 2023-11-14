import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext.tsx";

const Header = () => {
  const [cartCount, setCartCount] = useState(0);
  const { cart, toggleCart, setToggleCart } = useCart();

  useEffect(() => {
    const cartLength = cart.reduce((total, item) => total + item.quantity, 0);
    setCartCount(cartLength);
  }, [cart]);
  const [displayHamburger, setDisplayHamburger] = useState(true);

  return (
    <header className="bg-banner-clr border-b-2 border-black px-2 sticky left-0 top-0 z-10 w-full relative">
      <div className="flex items-center xl:pr-0 xl:pl-14 h-24 min-w-max m-auto container">
        <div className="self-center hidden sm:block">
          <img src="/images/dk1.jpg" className="w-20 h-18" />
          <h1 className="hidden">DK Store</h1>
        </div>
        <nav className="flex w-full items-center xl:pl-14 xl:pr-14 justify-center xl:justify-between">
          <ul className="flex text-sm sm:text-base gap-2 sm:gap-4 md:gap-6 xl:gap-8 2xl:gap-10">
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/men"}>Men</Link>
            </li>
            <li>
              <Link to={"/women"}>Women</Link>
            </li>
            <li>
              <Link to={"/jewelry"}>Jewelry</Link>
            </li>
            <li>
              <Link to={"/electronic"}>Electronic</Link>
            </li>
          </ul>
        </nav>

        <div className="flex items-center relative">
          <ul
            className={`gap-2 underline h-auto max-w-fit bg-orange-200 p-6 rounded flex flex-col border-2 border-orange-400 absolute top-12 right-12 z-30 xl:flex-row xl:static xl:bg-inherit xl:border-none xl:no-underline xl:gap-6 xl:flex  ${
              displayHamburger ? "hidden" : ""
            }`}
          >
            <li>
              <Link to={"/help"}>Help</Link>
            </li>
            <li className="whitespace-nowrap">
              <Link to={"/contact"}>Contact-us</Link>
            </li>
          </ul>
          <div onClick={() => setDisplayHamburger(!displayHamburger)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6 sm:w-10 sm:h-10 flex self-center m-2 xl:hidden cursor-pointer"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </div>
        </div>

        <div
          className="relative mr-4 sm:mr-0"
          onClick={() => setToggleCart(!toggleCart)}
        >
          <svg
            width="30px"
            height="30px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="cursor-pointer"
          >
            <path
              d="M6.29977 5H21L19 12H7.37671M20 16H8L6 3H3M9 20C9 20.5523 8.55228 21 8 21C7.44772 21 7 20.5523 7 20C7 19.4477 7.44772 19 8 19C8.55228 19 9 19.4477 9 20ZM20 20C20 20.5523 19.5523 21 19 21C18.4477 21 18 20.5523 18 20C18 19.4477 18.4477 19 19 19C19.5523 19 20 19.4477 20 20Z"
              stroke="#000000"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="purchase">{isNaN(cartCount) ? 0 : cartCount}</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
