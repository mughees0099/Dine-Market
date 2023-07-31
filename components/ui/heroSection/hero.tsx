import { ShoppingCart } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  return (
    <section>
      <div className="flex">
        {/* Right Side */}
        <div className="">
          <div className="flex flex-col xl:gap-10 sm:gap-5 content-between ">
            <span className="flex bg-[#e1edff] h-10 w-28 rounded-full items-center justify-center text-blue-900 font-bold cursor-default hover:bg-blue-300 ">
              Sale 70%
            </span>
            <h1 className="font-bold sm:text-2xl xl:text-6xl xl:leading-[55px] sm:leading-9 tracking-wide  text-[#212121]">
              An Industrial Take On Streetwear
            </h1>
            <p className="xl:font-bold  sm:font-normal text-base text-[#666] xl:w-3/4 sm:w-full text-justify">
              Anyone can beat you but no one can beat your outfit as long as you
              wear Dine outfits.
            </p>
            <Link
              href="/allProducts"
              className="xl:p-4 sm:p-2 text-base bg-gray-700 xl:w-2/4 
              sm:w-2/4 sm:grid sm:justify-items-center sm:items-center rounded-xl hover:shadow-md hover:shadow-gray-700
              sm:mt-2 xl:mt-7 hover:scale-105 duration-100"
            >
              <button className="flex font-sans font-semibold  leading-5 items-center  gap-2 text-white  ">
                <ShoppingCart />
                Start Shopping
              </button>
            </Link>
            <div className=" grid base:grid-cols-4 sm:grid-cols-2 gap-10  sm:mt-5 xl:mt-60">
              <Image
                width={"100"}
                height={"100"}
                src="/images/Featured1.webp"
                alt="1"
              />
              <Image
                width={"100"}
                height={"100"}
                src="/images/Featured2.webp"
                alt="2"
              />
              <Image
                width={"100"}
                height={"100"}
                src="/images/Featured4.webp"
                alt="3"
              />
              <Image
                width={"100"}
                height={"100"}
                src="/images/Featured3.webp"
                alt="4"
              />
            </div>
          </div>
        </div>
        {/* left side  */}
        <div className="flex  ">
          <div className=" sm:hidden xl:flex xl:w-[600px] xl:h-[600px] rounded-[50%] bg-pink-100   ">
            <Image
              src="/images/header.webp"
              alt=""
              width={300}
              height={200}
              style={{ width: "650px", height: "650px" }}
              className="mt-[-5%] place-content-center "
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
