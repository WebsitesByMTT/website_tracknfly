import React from "react";
import { Link } from "react-router-dom";
import weaccept from "/cards.png";

const data = [
  {
    id: 1,
    title: "Our products",
    links: [
      {
        name: "BEST DEALS",
        url: "/best-deals",
      },
      {
        name: "Online flight booking",
        url: "/Online-flight-booking",
      },
      {
        name: "Domestic airlines",
        url: "/domestic-airlines",
      },
      {
        name: "Top airline routes",
        url: "/top-airline-routes",
      },
    ],
  },
  {
    id: 2,
    title: "corporate",
    links: [
      {
        name: "faqs",
        url: "/frequently-asked-questions",
      },
      {
        name: "Terms & conditions",
        url: "/terms-&services",
      },
      {
        name: "privacy",
        url: "/privacy-policy",
      },
      {
        name: "About us",
        url: "/about-us",
      },
      {
        name: "Contact us",
        url: "/contact-us",
      },
      {
        name: "blog",
        url: "/blogs",
      },
    ],
  },
  {
    id: 3,
    title: "Airlines",
    links: [
      {
        name: "Indigo",
        url: "/flights",
      },
      {
        name: "go first",
        url: "/flights",
      },
      {
        name: "spicejet",
        url: "/flights",
      },
      {
        name: "airasia",
        url: "/flights",
      },
      {
        name: "Vistara",
        url: "/flights",
      },
      {
        name: "Air india",
        url: "/flights",
      },
    ],
  },
  {
    id: 4,
    title: "Domestic flights",
    links: [
      {
        name: "Kahului(OGG - Honolulu (HNL)",
        url: "/flights",
      },
      {
        name: "Atlanta (ATL) to Orlando (MCO)",
        url: "/flights",
      },
      {
        name: "Denver (DEN) to Las Vegas (LAS)",
        url: "/flights",
      },
      {
        name: "Los Angeles (LAX) to Chicago O'Hare (ORD)",
        url: "/flights",
      },
      {
        name: "Los Angeles - Chicago O'Hare Flights",
        url: "/flights",
      },
      {
        name: "Atlanta - Fort Lauderdale Flights",
        url: "/flights",
      },
      {
        name: "Orlando - Atlanta Flights",
        url: "/flights",
      },
      {
        name: "Honolulu - Kahului flights",
        url: "/flights",
      },
      {
        name: "Denver - Phoenix flights ",
        url: "/flights",
      },
    ],
  },
  {
    id: 5,
    title: "International flight routes ",
    links: [
      {
        name: "Kuala Lumpur to Singapore Changi Flights",
        url: "/flights",
      },
      {
        name: "Cairo to Jeddah Flights",
        url: "/flights",
      },
      {
        name: "Orlando to San Juan Flights",
        url: "/flights",
      },
      {
        name: "New York JFK to London Heathrow Flights",
        url: "/flights",
      },
      {
        name: "Hong Kong to Taipei Flights",
        url: "/flights",
      },
      {
        name: "Bangkok to Hong Kong Flights",
        url: "/flights",
      },
      {
        name: "Canada to India Flights",
        url: "/flights",
      },
      {
        name: "Delhi to Patna Flights",
        url: "/flights",
      },
      {
        name: "Mumbai to Delhi Flights ",
        url: "/flights",
      },
      {
        name: "Delhi to Bangalore Flights ",
        url: "/flights",
      },
      {
        name: "Delhi to Pune Flights ",
        url: "/flights",
      },
      {
        name: "Delhi to Mumbai Flights ",
        url: "/flights",
      },
    ],
  },
  {
    id: 6,
    title: "POPULAR DESTINATION FOR CAR RENTAL",
    links: [
      {
        name: "Cheap Car Rental New York",
        url: "/car-on-rent",
      },
      {
        name: "Cheap Car Rental Miami",
        url: "/car-on-rent",
      },
      {
        name: "Car Rental Miami Airport",
        url: "/car-on-rent",
      },
      {
        name: "Cheap Car Rental Los Angeles",
        url: "/car-on-rent",
      },
      {
        name: "Cheap Car Rental Seattle",
        url: "/car-on-rent",
      },
      {
        name: "Cheap Car Rental San Francisco",
        url: "/car-on-rent",
      },
      {
        name: "Car Rental Phoenix Airport",
        url: "/car-on-rent",
      },
      {
        name: "Cheap Car Rental Atlanta",
        url: "/car-on-rent",
      },
      {
        name: "Car Rental Toronto Airport",
        url: "/car-on-rent",
      },
    ],
  },
  {
    id: 6,
    title: "POPULAR HOTEL DESTINATION",
    links: [
      {
        name: "Hotels in Delhi",
        url: "/hotels",
      },
      {
        name: "Hotels in Mumbai",
        url: "/hotels",
      },
      {
        name: "Hotels in New York City",
        url: "/hotels",
      },
      {
        name: "Hotels in Chennai",
        url: "/hotels",
      },
      {
        name: "Hotels in Dubai",
        url: "/hotels",
      },
      {
        name: "Hotels in London",
        url: "/hotels",
      },
      {
        name: "Hotels in Goa",
        url: "/hotels",
      },
      {
        name: "Hotels in Pune",
        url: "/hotels",
      },
      {
        name: "Hotels in  Los Angeles",
        url: "/hotels",
      },
    ],
  },
];

const Footer = () => {
  return (
    <>
      <div className="bg-[#111111] py-10">
        <div className="w-[93%] mx-auto ">
          <div className="space-y-8 md:space-y-0 md:gap-x-5 grid border-b-[1px] border-gray-400 pb-12  grid-cols-12">
            {data.map((item, index) => (
              <div
                className={`col-span-12 md:col-span-2 ${
                  [2, 3].includes(index + 1)
                    ? " lg:col-span-1"
                    : " lg:col-span-2"
                }`}
                key={item.id}
              >
                <h6 className="text-white font-semibold text-[1.4rem] uppercase">
                  {item.title}
                </h6>
                <ul className="pt-4 text-white text-opacity-60 transition-all space-y-2 text-[1.4rem]">
                  {item?.links.map((link,ind) => (
                    <li key={ind} className=" uppercase cursor-pointer">
                      <Link
                        to={link.url}
                        className="cursor-pointer hover:opacity-70"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div>
            <div className="text-center py-5 text-white text-[1.4rem]">
              We Accept
            </div>
            <img
              src={weaccept}
              alt="img"
              className="mx-auto md:w-[80%] w-[85%] lg:w-[30%]"
            />
          </div>
          <div>
            <div className="text-white text-[1.4rem] pt-5 text-center">
              Copyright &copy; 2024 TRACKNFLY.COM
            </div>
          </div>
          <ul className="md:flex items-center text-center md:text-start space-y-3 md:space-y-0 md:space-x-3 justify-center text-white text-opacity-70 text-[1.4rem] pt-5">
            <li className="cursor-pointer hover:opacity-70 uppercase md:border-r-2 pr-4 border-gray-400">
              <Link to={"/privacy-policy"}> privacy policy</Link>
            </li>
            <li className="cursor-pointer hover:opacity-70 uppercase md:border-r-2 pr-4 border-gray-400">
              <Link to={"/cancellation-&-refund-policy"}>
                CANCELLATION AND REFUND POLICY
              </Link>
            </li>
            <li className="cursor-pointer hover:opacity-70 uppercase md:border-r-2 pr-4 border-gray-400">
              <Link to={"/terms-&services"}>TERMS AND SERVICES</Link>
            </li>
            <li className="cursor-pointer hover:opacity-70 uppercase md:border-r-2 pr-4 border-gray-400">
              <Link to={"/frequently-asked-questions"}>FAQS</Link>
            </li>
            <li className="cursor-pointer hover:opacity-70 uppercase md:border-r-2 pr-4 border-gray-400">
              <Link to={"/"}>Web chek in</Link>
            </li>
            <li className="cursor-pointer hover:opacity-70 uppercase md:border-r-2 pr-4 border-gray-400">
              <Link to={"/refer-&-earn"}>refer & earn</Link>
            </li>
            <li className="cursor-pointer hover:opacity-70 uppercase md:border-r-2 pr-4 border-gray-400">
              <Link to={"/rewards"}>rewards</Link>
            </li>
            <li className="cursor-pointer hover:opacity-70 uppercase md:border-r-2 pr-4 border-gray-400">
              <Link to={"/contact-us"}>support</Link>
            </li>
            <li className="cursor-pointer hover:opacity-70 uppercase">
              <Link to={"/manage-trip"}>manage trip</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Footer;
