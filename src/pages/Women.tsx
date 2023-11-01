const Women = () => {
  return (
    <main className="p-4 flex justify-center">
      <article className="flex justify-center items-center flex-col w-9/12 gap-6 bg-pink-200 rounded py-5">
        <div className="w-6/12">
          <div className="border-2 border-black">
            <img src="./images/pagebanner/women.jpg" />
          </div>
          <header>
            <h2 className="text-4xl max-w-prose text-center my-6">
              3 Wardrobe Essentials for Women
            </h2>
            <p>
              When it comes to building a versatile and stylish wardrobe, women
              have a wide range of choices and options. However, it's essential
              to start with the basics. These three wardrobe essentials are the
              foundation of a well-rounded and fashionable closet. Whether
              you're just starting to build your wardrobe or looking to
              streamline your existing collection, these items are must-haves.
            </p>
          </header>
        </div>
        <section className=" flex flex-col gap-6 items-center">
          <h3 className="text-2xl text-center">1. The Little Black Dress</h3>
          <p className="max-w-prose">
            No list of wardrobe essentials for women would be complete without
            mentioning the iconic little black dress (LBD). This versatile piece
            is a true classic and can be dressed up or down for various
            occasions. Whether you're attending a cocktail party, a romantic
            dinner, or a business meeting, the LBD is a reliable choice.
            <br />
            <br />
            Choose a style that suits your body shape and personal style,
            whether it's a sheath dress, an A-line dress, or a fit-and-flare
            design. The key is to find one that flatters your figure and makes
            you feel confident. Accessorize it differently each time to create
            various looks, making it a go-to piece in your wardrobe.
          </p>
          <h3 className="text-2xl text-center">2. Classic Denim Jeans</h3>
          <p className="max-w-prose">
            A pair of well-fitting denim jeans is another essential for women.
            They are incredibly versatile and can be dressed up with a blouse
            and heels or dressed down with a simple tee and sneakers. When
            shopping for jeans, consider factors like fit, rise, and wash to
            find the perfect pair for your body type.
            <br />
            <br />
            Dark wash jeans can be a more formal option, while distressed or
            lighter wash jeans are great for a casual look. Don't forget to pay
            attention to the length and hem to ensure they're the right fit for
            your shoes.
          </p>
          <div className="w-6/12 border-2 border-black">
            <img src="./images/pagebanner/women1.jpg" />
          </div>
          <h3 className="text-2xl text-center">3. Crisp White Blouse</h3>
          <p className="max-w-prose">
            A crisp white blouse is a timeless and versatile piece that every
            woman should have in her wardrobe. This classic top can be paired
            with nearly anything, from jeans and skirts to dressier slacks or a
            blazer. It's suitable for both professional and casual settings.
            <br />
            <br />
            Consider variations such as a button-down shirt, a tailored blouse,
            or a flowy bohemian top, depending on your style. The white blouse
            is a blank canvas for accessorizing, so you can adapt it to various
            looks and occasions.
            <br />
            <br />
            In addition to these three essentials, you can further customize
            your wardrobe with accessories, shoes, and outerwear that complement
            your personal style. Remember that quality and fit are key. Invest
            in well-made, timeless pieces, and have them tailored if necessary
            to ensure they fit you perfectly.
          </p>
          <p className="max-w-prose">
            These wardrobe essentials provide a strong foundation for creating a
            variety of outfits and simplifying your daily styling decisions.
            With these key pieces in your closet, you'll have the versatility to
            adapt to different occasions and express your unique style.
            <br />
            <br />
            So, whether you're revamping your wardrobe or starting from scratch,
            make sure to include the little black dress, classic denim jeans,
            and a crisp white blouse in your collection. They'll be your go-to
            choices for looking chic and put-together every day.
          </p>
        </section>
        <div className="w-6/12 h-40 md:h-60 lg:h-72 xl:h-96">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/klKVm1FALhs?si=g_745wc_kiaO1llH"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </article>
    </main>
  );
};

export default Women;
