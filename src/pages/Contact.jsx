const Contact = () => {
  return (
    <>
      <div className="flex w-full justify-center items-center absolute top-20">
        <div className=" grid flex-col md:flex-row mt-5 bg-primary-700 mix-blend-multiply w-full max-w-4xl p-8 rounded-xl text-black">
          <h1 className="text-center font-bold text-4xl ">Contact Us</h1>
          <br />

          <div className="flex flex-col md:flex-row bg-white rounded-lg p-10">
            <div className=" ">
              <iframe
                title="map"
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d28266.32840609563!2d85.42446664999999!3d27.67739795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2snp!4v1686559704748!5m2!1sen!2snp"
                className="w-800 h-full "
              ></iframe>
            </div>

            <div className="p-5">
              <form className="flex flex-col">
                <div className="flex flex-wrap  space-y-3">

                  <label>FULL NAME</label>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="ring-1 ring-gray-200 w-full rounded-lg px-4 py-2"
                  />
                  <label>EMAIL ADDRESS</label>
                  <input
                    type="text"
                    placeholder="Your email-address"
                    className="ring-1 ring-gray-200 w-full rounded-md px-4 py-2"
                  />
                  <label>SUBJECT</label>
                  <input
                    type="text"
                    placeholder="subject"
                    className="ring-1 ring-gray-200 w-full rounded-md px-4 py-2"
                  />
                  <label>MESSAGE</label>
                  <input
                    type="text"
                    placeholder="message"
                    className="ring-1 ring-gray-200 w-full rounded-md h-20 px-4 py-2"
                  />
                  <button className="w-20 h-10 bg-emerald-600 hover:bg-emerald-500 rounded-lg">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
