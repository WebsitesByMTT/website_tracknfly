import { FlightCard } from "../ui/FlightCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const PopularBeach = () => {
  const data = [
    {
      date: "Thu, 23 May",
      from: "Honolulu (HNL)",
      to: "Kahului (OGG)",
      discount: "upto 15%",
      url: "",
    },
    {
      date: "Sun, 26 May",
      from: "Atlanta (ATL)  ",
      to: "Orlando (MCO)",
      discount: "upto 10%",
      url: "",
    },
    {
      date: "Sun, 26 May",
      from: "Las Vegas (LAS) ",
      to: "Los Angeles (LAX)",
      discount: "upto 20%",
      url: "",
    },
    {
      date: "Sun, 26 May",
      from: "New York (JFK) ",
      to: "Los Angeles (LAX)",
      discount: "upto 30%",
      url: "",
    },
    {
      date: "Sun, 26 May",
      from: "Denver (DEN)",
      to: "Las Vegas (LAS)",
      discount: "upto 25%",
      url: "",
    },
    {
      date: "Sun, 26 May",
      from: "Atlanta (ATL) ",
      to: "Fort Lauderdale (FLL)",
      discount: "upto 26%",
      url: "",
    },
    {
      date: "Sun, 26 May",
      from: "Denver (DEN) ",
      to: "Las Vegas (LAS)",
      discount: "upto 22%",
      url: "",
    },
    {
      date: "Sun, 26 May",
      from: "Denver (DEN) ",
      to: "Phoenix (PHX)",
      discount: "upto 35%",
      url: "",
    },
    {
      date: "Sun, 26 May",
      from: "San Francisco (SFO) ",
      to: "Los Angeles (LAX)",
      discount: "upto 40%",
      url: "",
    },
    {
      date: "Sun, 26 May",
      from: "New York (LGA) ",
      to: "Chicago (ORD)",
      discount: "upto 35%",
      url: "",
    },
    {
      date: "Sun, 26 May",
      from: "Los Angeles (LAX) ",
      to: "Chicago (ORD)",
      discount: "upto 25%",
      url: "",
    },
  ];

  return (
    <div className="bg-[#F5F5F5]">
      <div className="py-24 px-[4rem] mx-auto flex flex-col gap-[4rem]">
        <h2 className="text-black text-center tracking-wide font-semibold  text-[4rem]">
          Finding the best deals <br />
          <span className=" text-[#0EB77A]">
            on flights, hotels, and car rentals?
          </span>
        </h2>
        <div className=" ">
          <Carousel
            opts={{
              align: "start",
            }}
            plugins={[
              Autoplay({
                delay: 2000,
              }),
            ]}
            className="w-full "
          >
            <CarouselContent>
              {data.map((item, idx) => (
                <CarouselItem
                  key={idx}
                  className="sm:basis-1/2 md:basis-1/3 lg:basis-1/4 p-[1rem] "
                >
                  <FlightCard data={item} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default PopularBeach;
