const Men = () => {
  return (
    <main className="p-4 flex justify-center">
      <article className="flex justify-center items-center flex-col w-9/12 gap-6 bg-gray-200 rounded py-5">
        <div className="w-6/12">
          <div className="border-2 border-black">
            <img src="./images/pagebanner/men.jpg" />
          </div>
          <header>
            <h2 className="text-4xl max-w-prose text-center my-6">
              A Beginner's Guide: Essential Style Tips For Guys Who Want to
              Dress Better
            </h2>
            <p>
              Are you a guy looking to up your fashion game? Do you want to feel
              more confident and put-together in your everyday style? You've
              come to the right place! In this beginner's guide, we'll explore
              essential style tips that can help you elevate your fashion sense
              and make dressing well a breeze.
            </p>
          </header>
        </div>
        <section className=" flex flex-col gap-6 items-center">
          <h3 className="text-2xl text-center">1. Understand the Basics</h3>
          <p className="max-w-prose">
            Before diving into specific style tips, it's crucial to understand
            the basics of men's fashion. Familiarize yourself with terms like
            "fit," "fabric," and "color coordination." The more you know about
            the fundamentals, the easier it is to build a stylish wardrobe.
          </p>
          <h3 className="text-2xl text-center">2. Build a Solid Foundation</h3>
          <p className="max-w-prose">
            Start with the essentials – a well-fitting white dress shirt, a
            versatile pair of dark denim jeans, and classic leather shoes. These
            timeless pieces can form the foundation of your wardrobe and be
            easily mixed and matched.
          </p>
          <h3 className="text-2xl text-center">3. Invest in Quality</h3>
          <p className="max-w-prose">
            Quality over quantity should be your mantra. High-quality items
            might cost more initially, but they last longer and often look
            better. You'll thank yourself for investing in timeless pieces.
          </p>
          <div className="w-6/12 border-2 border-black">
            <img src="./images/pagebanner/men1.jpg" />
          </div>
          <h3 className="text-2xl text-center">4. Experiment with Colors</h3>
          <p className="max-w-prose">
            Don't be afraid to experiment with colors, but do so mindfully.
            Learn which colors complement your skin tone and which ones clash. A
            well-chosen color palette can make a world of difference.
          </p>
          <h3 className="text-2xl text-center">5. Confidence Is Key</h3>
          <p className="max-w-prose">
            No matter how well you dress, confidence is the ultimate accessory.
            Believe in your style choices, and you'll exude a natural sense of
            confidence that's attractive and appealing.
          </p>
          <h3 className="text-2xl text-center">6. Tailor Your Style to You</h3>
          <p className="max-w-prose">
            Lastly, remember that fashion is a form of self-expression. Your
            style should reflect your personality and make you feel comfortable.
            Don't be afraid to tailor your style to what makes you feel like the
            best version of yourself.
          </p>
          <p className="max-w-prose">
            In conclusion, dressing better as a guy doesn't have to be daunting.
            By following these essential style tips, you'll be well on your way
            to becoming a more fashionable and confident version of yourself.
            So, go ahead and embrace the world of men's fashion with enthusiasm
            and enjoy the transformation it brings to your life.
          </p>
          <p className="max-w-prose">
            Remember, fashion is an art, and you are the canvas – paint it with
            your unique style!
          </p>
        </section>
        <div className="w-6/12 h-40 md:h-60 lg:h-72 xl:h-96">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/-nTfrtzsup8?si=GRy-lDX7P71PXasV"
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

export default Men;
