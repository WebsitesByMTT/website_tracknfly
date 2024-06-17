import React from "react";
import { Link } from "react-router-dom";
import weaccept from "../../assets/images/cards.png";
import facebook from "../../assets/images/facebook.svg";
import instagram from "../../assets/images/instagram.svg";

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
        name: "Online flights booking",
        url: "/flights",
      },
      {
        name: "Online Hotels booking",
        url: "/hotels",
      },
      {
        name: "Cars On Rental",
        url: "/cars-on-rent",
      },
      {
        name: "Domestic airlines",
        url: "#",
      },
      {
        name: "Top airline routes",
        url: "#",
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
        name: "Delta Airlines",
        url: "#",
      },
      {
        name: "Alaska Airlines",
        url: "#",
      },
      {
        name: "American Airlines",
        url: "#",
      },
      {
        name: "United Airlines",
        url: "#",
      },
      {
        name: "Southwest Airlines",
        url: "#",
      },
      {
        name: "WestJet",
        url: "#",
      },
      {
        name: "Spirit Airlines",
        url: "#",
      },
      {
        name: "Frontier Airlines",
        url: "#",
      },
      {
        name: "JetBlue Airways",
        url: "#",
      },
      {
        name: "Air Canada",
        url: "#",
      },
    ],
  },
  {
    id: 4,
    title: "Domestic flights",
    links: [
      {
        name: "Kahului(OGG to  Honolulu (HNL) Flights",
        url: "#",
      },
      {
        name: "Atlanta (ATL) to Orlando (MCO) Flights",
        url: "#",
      },
      {
        name: "Denver (DEN) to Las Vegas (LAS) Flights",
        url: "#",
      },
      {
        name: "Los Angeles (LAX) to Chicago O'Hare (ORD) Flights",
        url: "#",
      },
      {
        name: "Los Angeles(LAX) to  Chicago O'Hare (ORD) Flights",
        url: "#",
      },
      {
        name: "Atlanta (ATL) to Fort Lauderdale (FLL) Flights",
        url: "#",
      },
      {
        name: "Orlando (MCO) to Atlanta (ATL) Flights",
        url: "#",
      },
      {
        name: "Honolulu (HNL) to Kahului (OGG) Flights ",
        url: "#",
      },
      {
        name: "Denver (DEN) to Phoenix (AZA) Flights        ",
        url: "#",
      },
    ],
  },
  {
    id: 5,
    title: "International flight routes ",
    links: [
      {
        name: "New York (JFK) to Santiago (DR) Flights        ",
        url: "#",
      },
      {
        name: "Los Angeles (LAX) to London Heathrow (LHR) Flights        ",
        url: "#",
      },
      {
        name: "New York LaGuardia (LGA) to Toronto Pearson (YYZ) Flights        ",
        url: "#",
      },
      {
        name: "New York (JFK) -to London Heathrow (LHR) Flights        ",
        url: "#",
      },
      {
        name: "Chicago (ORD) to New Delhi (DEL) Flights        ",
        url: "#",
      },
      {
        name: "Bangkok (BKK) to Hong Kong (HK) Flights        ",
        url: "#",
      },
      {
        name: "Fort Lauderdale (FLL) to Port Au Prince (PAP) Flights        ",
        url: "#",
      },
      {
        name: "San Francisco (SFO) to Cancun (CUN) Flights        ",
        url: "#",
      },
      {
        name: "Newark (EWR) to London (LCY) Flights        ",
        url: "#",
      },
      {
        name: "Washington (IAD) to Beijing (PEK) Flights        ",
        url: "#",
      },
      {
        name: "New York (JFK) to Melbourne (MEL) Flights        ",
        url: "#",
      },
      {
        name: "New York (JFK) to Paris (CDG) Flights        ",
        url: "#",
      },
      {
        name: "San Jose  (SJO to Guadalajara (GDL) Flights        ",
        url: "#",
      },
    ],
  },
  {
    id: 6,
    title: "POPULAR DESTINATION FOR CAR RENTAL",
    links: [
      {
        name: "Cheap Car Rental New York",
        url: "#",
      },
      {
        name: "Cheap Car Rental Miami",
        url: "#",
      },
      {
        name: "Cheap Car Rental Miami Airport",
        url: "#",
      },
      {
        name: "Cheap Car Rental Los Angeles",
        url: "#",
      },
      {
        name: "Cheap Car Rental Seattle",
        url: "#",
      },
      {
        name: "Cheap Car Rental San Francisco",
        url: "#",
      },
      {
        name: "Cheap Car Rental Phoenix Airport",
        url: "#",
      },
      {
        name: "Cheap Car Rental Atlanta",
        url: "#",
      },
      {
        name: "Cheap Car Rental Toronto Airport",
        url: "#",
      },
    ],
  },
  {
    id: 6,
    title: "POPULAR HOTEL DESTINATION",
    links: [
      {
        name: "Hotels in Los Angeles",
        url: "#",
      },
      {
        name: "Hotels in Las Vegas",
        url: "#",
      },
      {
        name: "Hotels in New York City",
        url: "#",
      },
      {
        name: "Hotels in San Francisco",
        url: "#",
      },
      {
        name: "Hotels in Miami Beach",
        url: "#",
      },
      {
        name: "Hotels in London",
        url: "#",
      },
      {
        name: "Hotels in Washington, D.C.",
        url: "#",
      },
      {
        name: "Hotels in Orlando",
        url: "#",
      },
      {
        name: "Hotels in  Queens",
        url: "#",
      },
    ],
  },
];

const social = [
  {
    id: 1,
    logo: facebook,
    name: "facebook",
    url: "#",
  },
  {
    id: 2,
    logo: instagram,
    name: "instagram",
    url: "#",
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
                  {item?.links.map((link, ind) => (
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
            <div className="text-white py-10">
              <ul className=" flex flex-row justify-center items-center gap-[2rem]">
                <div className="flex justify-center space-x-5">
                  {social.map((item) => (
                    <li key={item?.id} className=" cursor-pointer">
                      <Link to={item?.url}>
                        <img
                          src={item?.logo}
                          className=" w-[3.5rem] h-[3.5rem]"
                        />
                      </Link>
                    </li>
                  ))}
                </div>
              </ul>
            </div>
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
              <Link to={"/privacy-policy"}>PRIVACY POLICY</Link>
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
              <Link to={"#"}>WEB CHEK IN</Link>
            </li>
            <li className="cursor-pointer hover:opacity-70 uppercase md:border-r-2 pr-4 border-gray-400">
              <Link to={"#"}>REFER & EARN</Link>
            </li>
            <li className="cursor-pointer hover:opacity-70 uppercase md:border-r-2 pr-4 border-gray-400">
              <Link to={"#"}>REWARDS</Link>
            </li>
            <li className="cursor-pointer hover:opacity-70 uppercase md:border-r-2 pr-4 border-gray-400">
              <Link to={"/contact-us"}>SUPPORT</Link>
            </li>
            <li className="cursor-pointer hover:opacity-70 uppercase">
              <Link to={"#"}>MANAGE TRIP</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Footer;
