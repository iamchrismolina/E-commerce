const Electronic = () => {
  return (
    <main className="p-4 flex justify-center m-auto container">
      <article className="flex justify-center items-center flex-col w-9/12 gap-6 bg-blue-200 rounded py-5">
        <div className="w-6/12">
          <div className="border-2 border-black">
            <img src="./images/pagebanner/electronic.jpg" />
          </div>
          <header>
            <h2 className="text-4xl max-w-prose text-center my-6">
              How to Build a Gaming PC
            </h2>
            <p>
              Building your own gaming PC can be a rewarding and cost-effective
              way to get the gaming experience you desire. Not only do you have
              the freedom to choose the components that match your preferences,
              but you also gain a deeper understanding of the technology that
              powers your gaming adventures. In this guide, we'll take you
              through the steps to build a gaming PC from scratch.
            </p>
          </header>
        </div>
        <section className=" flex flex-col gap-6 items-center">
          <h3 className="text-2xl text-center">1. Define Your Budget</h3>
          <p className="max-w-prose">
            Before you begin, it's essential to establish a budget for your
            gaming PC. The budget will help you determine the quality and
            performance of the components you can afford. Gaming PCs can range
            from budget-friendly to high-end, so knowing your budget is the
            first step in the process.
          </p>
          <h3 className="text-2xl text-center">2. Choose Your Components</h3>
          <p className="max-w-prose">
            Selecting the right components is crucial. You'll need a:
          </p>

          <div className="w-6/12">
            <ul>
              <li>
                <strong>Central Processing Unit (CPU):</strong> This is the
                brain of your PC. Choose a CPU that matches your gaming and
                multitasking needs.
              </li>
              <li>
                <strong>Graphics Processing Unit (GPU):</strong> The GPU is
                responsible for rendering graphics. For gaming, invest in a
                powerful GPU for smooth gameplay.
              </li>
              <li>
                <strong>Motherboard:</strong> Ensure it's compatible with your
                CPU and has enough expansion slots for your needs.
              </li>
              <li>
                <strong>Memory (RAM):</strong> 8GB is a minimum, but 16GB or
                more is recommended for gaming.
              </li>
              <li>
                <strong>Storage:</strong> Opt for a solid-state drive (SSD) for
                fast load times and a larger hard drive for storage.
              </li>
              <li>
                <strong>Power Supply Unit (PSU):</strong> Choose a PSU with
                enough wattage to support your components.
              </li>
              <li>
                <strong>Cooling System:</strong> Depending on your CPU and GPU,
                you may need additional cooling.
              </li>
              <li>
                <strong>Computer Case:</strong> Select a case that can
                accommodate your components.
              </li>
              <li>
                <strong>Monitor, Keyboard, and Mouse:</strong> Don't forget
                peripherals.
              </li>
            </ul>
          </div>

          <div className="w-6/12 border-2 border-black">
            <img src="./images/pagebanner/electronic1.jpg" />
          </div>

          <h3 className="text-2xl text-center">3. Crisp White Blouse</h3>
          <p className="max-w-prose">
            Assembling your PC involves the following steps:
          </p>

          <div>
            <ol>
              <li>Install the CPU and CPU cooler.</li>
              <li>Insert the RAM into the motherboard.</li>
              <li>Attach the motherboard to the case.</li>
              <li>
                Connect the power supply to the motherboard, GPU, and drives.
              </li>
              <li>Mount the storage drives.</li>
              <li>Install the GPU.</li>
              <li>
                Cable management: Organize and secure the cables inside the
                case.
              </li>
              <li>
                <strong>Close the case and connect peripherals.</strong>
              </li>
            </ol>
          </div>

          <h3 className="text-2xl text-center">
            4. Install the Operating System
          </h3>
          <p className="max-w-prose">
            After assembling your PC, you'll need to install an operating system
            (OS). Most gamers prefer Windows, but Linux and other OS options are
            available. Follow the installation process, and make sure to install
            graphics drivers for optimal gaming performance.
          </p>

          <h3 className="text-2xl text-center">5. Download Games and Enjoy</h3>
          <p className="max-w-prose">
            With your gaming PC up and running, you're ready to download and
            play your favorite games. Adjust graphics settings to match your
            hardware capabilities, and enjoy a gaming experience tailored to
            your preferences.
          </p>

          <h3 className="text-2xl text-center">6. Upgrade as Needed</h3>
          <p className="max-w-prose">
            As technology advances, you may want to upgrade your gaming PC to
            keep up with the latest games and hardware innovations. This could
            involve swapping out components like the GPU, adding more RAM, or
            upgrading your storage.
          </p>

          <p className="max-w-prose">
            Remember that building a gaming PC is a hands-on and educational
            experience. It may take some time, but the result is a custom gaming
            rig that perfectly suits your needs and preferences. Additionally,
            building your PC can be a fun and fulfilling hobby for tech
            enthusiasts. So, roll up your sleeves, gather your components, and
            embark on the journey to build your gaming PC from scratch.
            <br />
            <br />
            Enjoy your gaming adventures on a machine that you've built with
            care and precision!
          </p>
        </section>
        <div className="w-6/12 h-40 md:h-60 lg:h-72 xl:h-96">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/tar9g1qKrDM?si=wZpVMGzjntTkQ0l0"
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

export default Electronic;
