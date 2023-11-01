const Jewelry = () => {
  return (
    <main className="p-4 flex justify-center">
      <article className="flex justify-center items-center flex-col w-9/12 gap-6 bg-amber-100 rounded py-5">
        <div className="w-6/12">
          <div className="border-2 border-black">
            <img src="./images/pagebanner/jewelry.jpg" />
          </div>
          <header>
            <h2 className="text-4xl max-w-prose text-center my-6">
              How To Pick The Perfect Piece Of Jewelry To Go With Your Outfit
            </h2>
            <p>
              Jewelry can be the finishing touch that transforms an ordinary
              outfit into an extraordinary one. But selecting the right piece of
              jewelry to complement your attire isn't always as straightforward
              as it seems. The good news is that with a few key principles in
              mind, you can master the art of choosing the perfect jewelry to go
              with any outfit. Here's how to do it:
            </p>
          </header>
        </div>
        <section className=" flex flex-col gap-6 items-center">
          <h3 className="text-2xl text-center">1. Consider the Occasion</h3>
          <p className="max-w-prose">
            The first step in selecting the right jewelry is to consider the
            occasion. Different events and settings call for different levels of
            formality and style. For formal events, such as weddings or galas,
            opt for elegant and timeless pieces like diamond studs or a delicate
            pearl necklace. For casual outings, feel free to experiment with
            more fun and trendy pieces.
          </p>
          <h3 className="text-2xl text-center">2. Match the Metals</h3>
          <p className="max-w-prose">
            Matching the metal of your jewelry with the metal accents on your
            clothing or accessories can create a cohesive and harmonious look.
            If you're wearing an outfit with gold hardware, consider gold
            jewelry. The same applies to silver, rose gold, or any other metal.
            Mixing metals can work, but it's usually best left to the experts or
            those with a more eclectic fashion sense.
          </p>
          <h3 className="text-2xl text-center">3. Coordinate with Colors</h3>
          <p className="max-w-prose">
            Take into account the colors in your outfit when choosing jewelry.
            Complementary colors can enhance your look. For example, if you're
            wearing a cool-toned blue dress, silver or white gold jewelry may be
            a great choice. If your outfit features warm tones like red or
            orange, consider gold or rose gold pieces. Neutral-colored clothing
            allows for more flexibility with your jewelry choices.
          </p>
          <div className="w-6/12 border-2 border-black">
            <img src="./images/pagebanner/jewelry1.jpg" />
          </div>
          <h3 className="text-2xl text-center">4. Balance the Pieces</h3>
          <p className="max-w-prose">
            Don't overload your look with too many statement pieces. Instead,
            aim for a balanced and harmonious ensemble. If you're wearing bold,
            eye-catching jewelry, keep the rest of your accessories and outfit
            relatively simple. Conversely, if your outfit is already quite
            intricate, opt for more understated jewelry that complements rather
            than competes with your clothing.
          </p>
          <h3 className="text-2xl text-center">
            5. Pay Attention to Necklines
          </h3>
          <p className="max-w-prose">
            The neckline of your outfit can influence the type of necklace you
            choose. For a scoop neck or V-neck, a pendant necklace can be a
            great choice. High necklines pair well with choker-style necklaces.
            Strapless or off-the-shoulder tops create a fantastic canvas for
            statement necklaces. Consider your neckline as a frame for your
            jewelry.
          </p>
          <h3 className="text-2xl text-center">
            6. Don't Forget Your Personal Style
          </h3>
          <p className="max-w-prose">
            Ultimately, the most important factor in choosing the perfect piece
            of jewelry is your personal style. Consider what makes you feel
            comfortable, confident, and beautiful. If you're more of a
            minimalist, stick to simple and elegant pieces. If you love bold and
            unique designs, go for statement jewelry that reflects your
            individuality.
          </p>
          <h3 className="text-2xl text-center">7. Trust Your Instincts</h3>
          <p className="max-w-prose">
            Sometimes, fashion rules are meant to be broken. Trust your
            instincts and go with what feels right for you. Jewelry is a form of
            self-expression, so don't be afraid to take risks and have fun with
            your choices.
          </p>
          <p className="max-w-prose">
            In conclusion, selecting the perfect piece of jewelry to go with
            your outfit is all about understanding the occasion, coordinating
            with colors and metals, maintaining balance, and staying true to
            your personal style. With these principles in mind, you'll be able
            to curate stunning jewelry looks that enhance your overall
            appearance and leave a lasting impression.
            <br />
            <br />
            So, the next time you're getting dressed, remember these tips to
            ensure that your jewelry complements your outfit flawlessly, and
            you'll be ready to step out with style and confidence.
          </p>
        </section>
        <div className="w-6/12 h-40 md:h-60 lg:h-72 xl:h-96">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/zQET8Td7Pk0?si=oCMOKudPUNlcGxjj"
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

export default Jewelry;
