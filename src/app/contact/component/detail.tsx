function ContactUs() {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-[#111111]">
            Get In Touch With Us
          </h2>
          <p className="text-sm md:text-base text-[#888888] mt-4">
            For More Information About Our Products & Services, Please Feel Free
            To Drop Us An Email. Our Staff Always Be There To Help You Out. Do
            Not Hesitate!
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Contact Info */}
          <div className="space-y-6">
            {/* Address */}
            <div className="flex items-start space-x-4">
              <span className="text-xl text-[#111111]">📍</span>
              <div>
                <h4 className="text-base font-semibold text-[#111111]">
                  Address
                </h4>
                <p className="text-sm text-[#555555]">
                  268 5th Avenue, New York NY10000, United States
                </p>
              </div>
            </div>
            {/* Phone */}
            <div className="flex items-start space-x-4">
              <span className="text-xl text-[#111111]">📞</span>
              <div>
                <h4 className="text-base font-semibold text-[#111111]">
                  Phone
                </h4>
                <p className="text-sm text-[#555555]">
                  Mobile: (+84) 546-6789 <br />
                  Hotline: (+84) 456-6789
                </p>
              </div>
            </div>
            {/* Working Time */}
            <div className="flex items-start space-x-4">
              <span className="text-xl text-[#111111]">⏰</span>
              <div>
                <h4 className="text-base font-semibold text-[#111111]">
                  Working Time
                </h4>
                <p className="text-sm text-[#555555]">
                  Monday-Friday: 9:00 – 22:00 <br />
                  Saturday-Sunday: 9:00 – 21:00
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="mt-8 md:mt-0">
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-[#111111]"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Abc"
                  className="mt-2 block w-full rounded-md border border-[#CCCCCC] p-4 text-sm focus:outline-none focus:ring-2 focus:ring-[#C8A165] transition-all"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-[#111111]"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="abc@def.com"
                  className="mt-2 block w-full rounded-md border border-[#CCCCCC] p-4 text-sm focus:outline-none focus:ring-2 focus:ring-[#C8A165] transition-all"
                />
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-[#111111]"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  placeholder="This is optional"
                  className="mt-2 block w-full rounded-md border border-[#CCCCCC] p-4 text-sm focus:outline-none focus:ring-2 focus:ring-[#C8A165] transition-all"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-[#111111]"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  placeholder="We'd like to talk about"
                  className="mt-2 block w-full rounded-md border border-[#CCCCCC] p-4 text-sm focus:outline-none focus:ring-2 focus:ring-[#C8A165] transition-all h-32 resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#C8A165] text-white py-3 rounded-md font-medium text-sm hover:bg-[#a57f4d] focus:outline-none focus:ring-2 focus:ring-[#C8A165] transition duration-200"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
