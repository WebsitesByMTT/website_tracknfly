import exploreHidden1IMG from "../../assets/images/exploreHidden-1.png";
import exploreHidden2IMG from "../../assets/images/exploreHidden-2.png";
import exploreHidden3IMG from "../../assets/images/exploreHidden-3.png";
import exploreHidden4IMG from "../../assets/images/exploreHidden-4.png";
import exploreHidden5IMG from "../../assets/images/exploreHidden-5.png";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import HotelCard from "../ui/HotelCard";

const data = [
  {
    id: 1,
    name: "Singapore",
    discount: "",
    img: exploreHidden1IMG,
    url: "",
  },
  {
    id: 2,
    name: "Japan",
    discount: "",
    img: exploreHidden2IMG,
    url: "",
  },
  {
    id: 3,
    name: "Bangkok",
    discount: "",
    img: exploreHidden3IMG,
    url: "",
  },
  {
    id: 4,
    name: "Dubai",
    discount: "",
    img: exploreHidden4IMG,
    url: "",
  },
  {
    id: 5,
    name: "Mexico",
    discount: "",
    img: exploreHidden5IMG,
    url: "",
  },
];
const ExploreHidden = () => {
  return (
    <div className="">
      <div className="py-24 px-[4rem] mx-auto flex flex-col gap-[4rem]">
        <h2 className="text-black text-center tracking-wide font-semibold  text-[4rem]">
          Explore The Hidden Places Around The World
        </h2>
        <div className="">
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
                  className="sm:basis-1/2 md:basis-1/3 lg:basis-1/4 p-[1rem] bg-[white]"
                >
                  <HotelCard
                    data={item}
                    color="#0EB77A"
                    button={"Check more"}
                  />
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

export default ExploreHidden;
