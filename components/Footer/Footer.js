import React from "react";
import Image from "next/image";
const Footer = () => {
  return (
    <div className="  relative z-10 text-[#FFFFFF] bg-[#161E2E] mt-10  pl-12 pr-20 pb-6">
      <div className=" md:mb-4q gap-y-4 grid lg:grid-cols-4 md:grid-cols-3 pt-20 md:pb-4 lg:pb-6">
        <div>
          <Image src="/logo2.png" height={123} width={185} />
        </div>
        <div className="">
          <h1 className="font-bold text-[18px] pb-1">Features</h1>
          <ul>
            <li>Pricing</li>
            <li>Testimonials</li>
            <li>Special Requests</li>
            <li>FAQs</li>
          </ul>
        </div>
        <div className=" ">
          <h1 className="font-bold text-[18px]  pb-1">Legal</h1>
          <ul>
            <li>Terms</li>
            <li>Privacy</li>
            <li>Refunds</li>
            <li>Contact Us</li>
          </ul>{" "}
        </div>
        <div>
          <h1 className="font-bold text-[18px] pb-1">
            Subscribe to our news letter
          </h1>
          <p>
            The latest news, articles and resources, sent to your email weekly.
          </p>
          <input
            placeholder="Enter Your email"
            className="w-full px-3 py-2 rounded-md border my-3"
          />
          <button className=" bg-gradient-24 from-[#DC2B7A] via-[#525BD2] to-[#F4842B] py-1 px-10 rounded-md m-auto ">
            Subscribe
          </button>
        </div>
      </div>
      <div className="h-0.5 w-full border-t-2 border-white-900 mt-4 "></div>
      <div className=" flex justify-between w-full mt-6 ">
        <span> © 2022 Clout Jump. All rights reserved.</span>
        <span>London • New York</span>
      </div>
    </div>
  );
};

export default Footer;
