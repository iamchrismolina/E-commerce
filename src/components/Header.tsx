const Header = () => {
  return (
    <header className="flex border-b-2 border-black px-2 bg-banner-clr min-w-max m-auto container">
      <div className="self-center ">
        <img src="/public/images/dk1.jpg" className="w-14 h-12" />
      </div>
      <nav className="flex w-full items-center p-2 justify-center">
        <ul className="flex gap-10">
          <li><a href="">Men</a></li>
          <li><a href="">Women</a></li>
          <li><a href="">Jewelry</a></li>
          <li><a href="">Electronics</a></li>
        </ul>

        <ul className="gap-5 max-w-full h-auto hidden">
          {/* <li>Login</li> */}
          <li><a href="">Help</a></li>
          <li><a href="">Contact us</a></li>
          <li><a href="">Cart image</a></li>
        </ul>
      </nav>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        className="w-10 h-10 flex self-center m-2"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
        />
      </svg>
    </header>
  );
};

export default Header;
