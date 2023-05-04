import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
function Navbar() {
  const [navbar, setNavbar] = useState(false);
  return (
    <section>
      <nav className=" justify-between md:items-center pl-[11%] pr-[7%] w-[93%] m-auto justify-between">
        <div className="md:flex space-x-14 md:items-center ">
          <div className=" md:py-5  ">
            <Image
              className="inline"
              src="/logo.png"
              width={129.29}
              height={82.19}
              alt="logo"
            />{" "}
          </div>
          <div
            className={`flex-1   justify-self-center pb-3  md:block md:pb-0 md:mt-0  ${
              navbar ? "p-12 md:p-0 block" : "hidden"
            }`}
          >
             {/* lg:ml-16  */}
            <ul className="md:flex  lg:ml-[25%]  md:items-center  space-x-5">
              <li className="  text-left hover:text-purple-900 pb-6 text-xl   text-center     border-purple-900 ">
                <Link href="#home" onClick={() => setNavbar(!navbar)}>
                  Home
                </Link>
              </li>
              <li className="lg:pl-4 hover:text-purple-900 pb-6 text-xl  text-center     border-purple-900 ">
                <Link href="#testimonials" onClick={() => setNavbar(!navbar)}>
                  Testimonials
                </Link>
              </li>
              <li className="lg:pl-4 hover:text-purple-900 pb-6 text-xl  text-center     border-purple-900 ">
                <Link href="#special" onClick={() => setNavbar(!navbar)}>
                  Special Requests
                </Link>
              </li>
              <li className="lg:pl-4 hover:text-purple-900 pb-6 text-xl   text-center     border-purple-900 ">
                <Link href="#faqs" onClick={() => setNavbar(!navbar)}>
                  FAQs
                </Link>
              </li>
            </ul>
          </div>

          <div className="pb-6  rounded-xl invisible lg:visible bg-gradient-24 from-[#DC2B7A]   via-[#525BD2]  to-[#FDD978] font-bold  p-0.5 h-9 ">
            <div className="bg-white w-100 px-7 rounded-xl">
              <button className="bg-white py-1  text-transparent  bg-clip-text bg-gradient-1  from-[#DC2B7A]  via-[#525BD2]  to-[#FDD978]">
                SignUp
              </button>
            </div>
          </div>
          <div className="md:hidden absolute top-10 right-10 ">
            <button onClick={() => setNavbar(!navbar)}>
              {!navbar ? (
                <Image src="/menu.png" width={30} height={30} alt="logo" />
              ) : (
                <Image src="/close.png" width={30} height={30} alt="close" />
              )}
            </button>
          </div>
        </div>
      </nav>
    </section>
  );
}

export default Navbar;
