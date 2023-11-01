const ContactSection = () => {
  return (
    <section className="flex justify-center items-center text-center py-5">
      <div className="container max-w-prose flex flex-col gap-6">
        <div>
          <img src="./images/pagebanner/contact.jpg" />
        </div>
        <h2>Contact Us</h2>

        <p className="">
          If you have any questions or need assistance, please feel free to get
          in touch with us. We'd be happy to help.
        </p>

        <div className="contact-info">
          <div className="contact-item">
            <i className="fa fa-envelope"></i>
            <p>Email: chris@dkstore.com</p>
          </div>
          <div className="contact-item">
            <i className="fa fa-phone"></i>
            <p>Phone: +1 (234) 567-89</p>
          </div>
          <div className="contact-item">
            <i className="fa fa-map-marker"></i>
            <p>Address: 123 Albany Main Street, New York City, USA</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
