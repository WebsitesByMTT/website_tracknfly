import React from "react";
import { Link } from "react-router-dom";
import weaccept from "../../assets/images/cards.png";
import facebook from "../../assets/images/facebook.svg";
import instagram from "../../assets/images/instagram.svg";
import twitter from "../../assets/images/twitter.svg";
import linkedin from "../../assets/images/linkedin.svg";


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
        url: "",
      },
      {
        name: "Domestic airlines",
        url: "",
      },
      {
        name: "Top airline routes",
        url: "",
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
        url: "",
      },
      {
        name: "Alaska Airlines",
        url: "",
      },
      {
        name: "American Airlines",
        url: "",
      },
      {
        name: "United Airlines",
        url: "",
      },
      {
        name: "Southwest Airlines",
        url: "",
      },
      {
        name: "WestJet",
        url: "",
      },
      {
        name: "Spirit Airlines",
        url: "",
      },
      {
        name: "Frontier Airlines",
        url: "",
      },
      {
        name: "JetBlue Airways",
        url: "",
      },
      {
        name: "Air Canada",
        url: "",
      }
    ],
  },
  {
    id: 4,
    title: "Domestic flights",
    links: [
      {
        name: "Kahului(OGG - Honolulu (HNL)",
        url: "",
      },
      {
        name: "Atlanta (ATL) to Orlando (MCO)",
        url: "",
      },
      {
        name: "Denver (DEN) to Las Vegas (LAS)",
        url: "",
      },
      {
        name: "Los Angeles (LAX) to Chicago O'Hare (ORD)",
        url: "",
      },
      {
        name: "Los Angeles - Chicago O'Hare Flights",
        url: "",
      },
      {
        name: "Atlanta - Fort Lauderdale Flights",
        url: "",
      },
      {
        name: "Orlando - Atlanta Flights",
        url: "",
      },
      {
        name: "Honolulu - Kahului flights",
        url: "",
      },
      {
        name: "Denver - Phoenix flights ",
        url: "",
      },
    ],
  },






















  {
    id: 5,
    title: "International flight routes ",
    links: [
      {
        name: "New York (JFK) to New Delhi",
        url: "",
      },
      {
        name: "Washington (IAD) to New Delhi (DEL)",
        url: "",
      },
      {
        name: "Newark (EWR) to New Delhi (DEL)",
        url: "",
      },
      {
        name: "New York JFK to London Heathrow Flights",
        url: "",
      },
      {
        name: "Chicago (ORD) to New Delhi (DEL)",
        url: "",
      },
      {
        name: "Bangkok to Hong Kong Flights",
        url: "",
      },
      {
        name: "Chicago (ORD) to Hyderabad (HYD)",
        url: ""
      },
      {
        name: "San Francisco (SFO) to New Delhi (DEL)",
        url: "",
      },
      {
        name: "Los Angeles-London Heathrow",
        url: "",
      },
      {
        name: "New York JFK-Santiago (DR)",
        url: "",
      },
      {
        name: "New York JFK-Paris CDG",
        url: "",
      },
      {
        name: "New York LaGuardia-Toronto Pearson",
        url: "",
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
        name: "Hotels in Los Angeles",
        url: "/hotels",
      },
      {
        name: "Hotels in Las Vegas",
        url: "/hotels",
      },
      {
        name: "Hotels in New York City",
        url: "/hotels",
      },
      {
        name: "Hotels in San Francisco",
        url: "/hotels",
      },
      {
        name: "Hotels in Miami Beach",
        url: "/hotels",
      },
      {
        name: "Hotels in London",
        url: "/hotels",
      },
      {
        name: "Hotels in Washington, D.C.",
        url: "/hotels",
      },
      {
        name: "Hotels in Orlando",
        url: "/hotels",
      },
      {
        name: "Hotels in  Queens",
        url: "/hotels",
      },
    ],
  },
];

const social = [
  {
    id: 1,
    logo: facebook,
    name: "facebook",
    url: "",
  },
  {
    id: 2,
    logo: instagram,
    name: "instagram",
    url: "",
  },
  {
    id: 3,
    logo: twitter,
    name: "twitter",
    url: "",
  },
  {
    id: 4,
    logo: linkedin,
    name: "linkedin",
    url: "",
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
                className={`col-span-12 md:col-span-2 ${[2, 3].includes(index + 1)
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
                <span className="inline-block w-[2px] h-[3.5rem] bg-white"></span>
                <div className="flex items-center space-x-5">
                  <a href="mailto:name@gmail.com"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide cursor-pointer hover:scale-105 transition-all hover:text-red-600 lucide-mail"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg> </a>
                  <a href="tel:+1(212) 000-0000">  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide cursor-pointer hover:scale-105 transition-all hover:text-green-600 lucide-phone-outgoing"><polyline points="22 8 22 2 16 2" /><line x1="16" x2="22" y1="8" y2="2" /><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg> </a>

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
