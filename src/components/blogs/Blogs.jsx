import React from "react";
import { BlogsData } from "./BlogsJson";
import { Link } from "react-router-dom";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";

const Blogs = () => {
  return (
    <div className="bg-white py-8">
      <div className="text-[4rem] pb-12 text-center font-semibold">Blogs</div>
      <div className="w-[95%] 2xl:w-[90%] mx-auto">
        <Carousel autoplay={true}>
          <CarouselContent>
            {BlogsData?.map((item) => (
              <CarouselItem
                key={item.id}
                className="sm:basis-1/2 md:basis-1/3 lg:basis-1/3 p-[1rem] "
              >
                <Link  to={`${item.path}`} className="group inline-block rounded-3xl overflow-hidden md:col-span-6 transition-all cursor-pointer col-span-12 lg:col-span-3 relative">
                  <img
                    src={item.image}
                    alt="img"
                    className="w-full object-cover"
                  />
                  <div className="absolute -bottom-[7%] group-hover:bottom-0 bg-opacity-50 transition-all group-hover:h-[60%] h-[40%] md:h-[50%] lg:h-[50%] 2xl:h-[55%] px-4 w-[100%] rounded-2xl bg-black">
                    <div className="text-white  mt-2 font-semibold text-[2rem] lg:text-[1.5rem] 2xl:text-[2rem]">
                      {item.title}
                    </div>
                    <div className="lg:text-[1rem] text-[1.2rem] 2xl:text-[1.2rem] text-white text-opacity-70">
                      {item.metaDescription}
                    </div>
                    <div className=" pb-[10%] pt-[5%] group-hover:block hidden text-[1.2rem] text-white">
                      <Link
                        to={`${item.path}`}
                        className="bg-blue-500 px-4 py-1.5 rounded-lg"
                      >
                        Read More
                      </Link>
                    </div>
                  </div>
                </Link>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselNext />
          <CarouselPrevious />
        </Carousel>
      </div>
    </div>
  );
};

export default Blogs;
