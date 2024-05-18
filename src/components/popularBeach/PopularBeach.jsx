import { FlightCard } from "../ui/FlightCard";

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
      from: "Atlanta (ATL) ",
      to: "Orlando (MCO)",
      discount: "upto 10%",
      url: "",
    },
    {
      date: "Sun, 26 May",
      from: "Las Vegas (LAS)",
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
        <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[4rem]">
          {data.map((item) => (
            <FlightCard data={item} key={item.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularBeach;
