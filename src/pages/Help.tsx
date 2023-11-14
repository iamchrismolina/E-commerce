const HelpSection = () => {
  return (
    <section className="flex items-center justify-center h-screen sm:h-full">
      <div className="container flex items-center justify-center flex-col gap-6 px-2 sm:px-0">
        <div className="relative">
          <h2 className="hidden sm:flex absolute items-center justify-center right-28 w-full h-full text-9xl tracking-widest">
            HELP!
          </h2>
          <img src="./images/pagebanner/help.jpg" />
        </div>
        <h2>How Can We Help You?</h2>
        <p className="max-w-prose">
          Our dedicated support team is here to assist you with any questions or
          issues you may encounter. Your satisfaction is our priority, and we're
          committed to providing the help you need.
        </p>

        <div className="help-info">
          <div className="help-item">
            <i className="fa fa-envelope"></i>
            <p>Email our Support Team: chrishelp@dkstore.com</p>
          </div>
          <div className="help-item">
            <i className="fa fa-phone"></i>
            <p>Contact Support: +1 (234) 567-89</p>
          </div>
          <div className="help-item">
            <i className="fa fa-comments"></i>
            <p>Visit our Community Forum for discussions and solutions.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HelpSection;
