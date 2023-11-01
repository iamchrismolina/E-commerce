type BannerProps = {
  bannerPage: string;
};

const Banner = ({ bannerPage }: BannerProps) => {
  let banner: string;

  switch (bannerPage) {
    case "Mens":
      banner = "mens.jpg";
      break;
    case "Women":
      banner = "women.jpg";
      break;
    case "Jewelries":
      banner = "jewelries.jpg";
      break;
    case "Electronics":
      banner = "electronics.jpg";
      break;
    default:
      banner = "home.jpg";
  }

  return (
    <section className="m-auto container">
      <div className="bg-cover">
        <img
          src={`./images/banner/${banner}`}
          className={`h-64 w-full lg:h-80 xl:h-96 object-cover object-center`}
        />
      </div>
    </section>
  );
};

export default Banner;
