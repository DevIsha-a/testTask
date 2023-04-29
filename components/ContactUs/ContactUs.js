import React from "react";
import Image from "next/image";

const ContactUs = () => {
  return (
    <section className="z-0 relative w-2000 overflowX-hidden pb-6  ">
      <div className="lg:w-2/5  m-auto mt-5 text-center">
        <div>
          <span className="font-extrabold text-5xl leading-10">SPECIAL</span>
          <span className="font-extrabold text-5xl leading-10 bg-white py-1  text-transparent  bg-clip-text bg-gradient-2  from-[#525BD2]  via-[#525BD2]  to-[#FDD978] ml-3">
            REQUEST
            <span className="font-extrabold text-5xl leading-10 text-black">
              .
            </span>
          </span>
        </div>
        <p className="mt-10 ">
          Our team is dedicated to providing the highest customer service and
          support. If you have any special requests, we're here to listen and do
          everything we can to help you succeed on Instagram.
        </p>

        <div className="mt-5">
          {/* Rockets in the background */}

          <div className="absolute   left-20 top-55">
            <Image
              className="invisible lg:visible"
              src="/rocket.png"
              height={54}
              width={54}
            ></Image>
          </div>
          <div className="absolute right-60 bottom-4  ">
            <Image
              src="/rocket.png"
              className="rotate-82 invisible lg:visible"
              height={54}
              width={54}
            ></Image>
          </div>

          {/* Hearts in the background */}

          <div className="rotate-82 absolute right-56 top-40">
            <Image width={14} height={11} alt="heart" src="/heart1.png"></Image>
          </div>
          <div className="absolute left-56 bottom-20">
            <Image width={14} height={11} alt="heart" src="/heart1.png"></Image>
          </div>
          <div className="rotate-180 absolute right-80 bottom-6">
            <Image width={14} height={11} alt="heart" src="/heart1.png"></Image>
          </div>

          {/* Contact Us form */}
          <form className="grid gap-y-7">
            <input
              type="text"
              className="w-full h-22 px-5 py-3 border rounded-3xl placeholder-gray-600"
              placeholder="Email"
            ></input>
            <input
              type="text"
              className="w-full h-22  px-5 py-3 border rounded-3xl placeholder-gray-600"
              placeholder="Phone No."
            ></input>
            {/* <input type='text-area'  className='w-full  px-5 h-63 border rounded-3xl p-2 h-64 bg-pink ' placeholder='Message'></input> */}
            <textarea
              className="h-63 border rounded-3xl p-2 py-3 px-5 resize-none placeholder-gray-600"
              placeholder="Message"
            ></textarea>
            <button className="rounded-xl text-white bg-gradient-1 from-[#DC2B7A] via-[#525BD2] to-[#FDD978] w-max m-auto px-12 py-2">
              Contact Us
            </button>
          </form>
        </div>
        {/* Background shapes */}
        <div className="z-0 ">
          <Image
            src="/vright.png"
            style={{ color: "transparent", position: "absolute", top: "291px" }}
            width={391}
            height={410}
            className="absolute invisible lg:visible right-0 -bottom-30 "
          ></Image>
          <Image
            src="/vleft.png"
            width={391}
            height={410}
            className="absolute left-0"
          ></Image>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
