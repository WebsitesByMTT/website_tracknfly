import EasyStepsIMG from "../../assets/images/easy-steps.png";
import BestPriceIMG from "../../assets/images/best-price.png";
import Support from "../../assets/images/24*7Support.png";
import "./benefits.scss";

const Benefits = () => {
  const data = [
    {
      image: Support,
      title: "24/7 Customer Support",
      subtitle:
        "Get in touch with us:  we are always here to help -  reach us 24 hours a day, 7 Days  a Week.",
    },
    {
      image: EasyStepsIMG,
      title: "Book effortlessly",
      subtitle:
        "We at Trackn Fly give you the best opportunity to find the perfect flight and hotel for your next adventure.",
    },
    {
      image: BestPriceIMG,
      title: "Exclusive deals on Trackn Fly",
      subtitle:
        "By simply downloading the Trackn Fly, you can have access to all the exclusive deals and discounts while.",
    },
  ];
  return (
    <div className=" bg-[#ececec] py-[6rem] px-[4rem]">
      <div className=" flex  flex-col gap-[4rem] items-center justify-center">
        <h2 className=" text-black text-center tracking-wide font-semibold  text-[4rem] lg:w-[50%]">
          Explore and Save your money on Flights and Hotels Discover.
          Book.Travel
        </h2>
        <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[4rem] lg:w-[70%]">
          {data?.map((item, ind) => (
            <div
              className=" bg-[#d9d9d9] flex flex-col items-center justify-start gap-[1rem] py-[4rem] px-[3rem] rounded-[1.3rem] cursor-pointer"
              key={ind}
            >
              <div className=" bg-[#bebebe] p-[1rem] rounded-[1.5rem]">
                <img
                  src={item.image}
                  className=" w-[4rem] object-contain"
                  alt="customer-care"
                  loading="lazy"
                />
              </div>
              <div className=" flex items-center justify-center flex-col">
                <p className=" text-[1.8rem] font-[500] text-center py-[.5rem]">
                  {item.title}
                </p>
                <p className=" text-[1.2rem] font-[400] text-[gray] text-center md:w-[70%]">
                  {item.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Benefits;
