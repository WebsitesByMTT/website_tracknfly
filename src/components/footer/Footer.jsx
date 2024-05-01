import React from "react";
import { Link } from "react-router-dom";
import weaccept from '/cards.png'


const Footer = () => {
  return (
    <>
      <div className="bg-[#111111] py-10">
        <div className="w-[93%] mx-auto ">
          <div className="space-y-8 md:space-y-0 md:gap-x-5 grid border-b-[1px] border-gray-400 pb-12  grid-cols-12">
            <div className="col-span-12 md:col-span-2 lg:col-span-2">
              <div className="text-white font-semibold text-[1.3rem]">OUR PRODUCTS</div>
              <div className="pt-4 text-white text-opacity-60 transition-all space-y-2 text-[1.3rem]">
                <Link><div className="cursor-pointer hover:opacity-70">BEST DEALS</div></Link>
                <div className="cursor-pointer hover:opacity-70">ONLINE FLIGHT BOOKING</div>
                <div className="cursor-pointer hover:opacity-70">DOMESTIC AIRLINES</div>
                <div className="cursor-pointer hover:opacity-70">TOP AIRLINE ROUTES</div>
              </div>
            </div>
            <div className="col-span-12 md:col-span-2 lg:col-span-1">
              <div className="text-white font-semibold text-[1.3rem]">CORPORATE</div>
              <div className="pt-4 text-white text-opacity-60 transition-all space-y-2 text-[1.3rem]">
                <div className="cursor-pointer hover:opacity-70">FAQs</div>
                <div className="cursor-pointer hover:opacity-70">TERMS & CONDITIONS</div>
                <div className="cursor-pointer hover:opacity-70">PRIVACY</div>
                <div className="cursor-pointer hover:opacity-70">ABOUT US</div>
                <div className="cursor-pointer hover:opacity-70">CONTACT US</div>
                <div className="cursor-pointer hover:opacity-70">BLOG</div>
              </div>
            </div>
            <div className="col-span-12 md:col-span-2 lg:col-span-1">
              <div className="text-white font-semibold text-[1.3rem]">AIRLINES</div>
              <div className="pt-4 text-white text-opacity-60 transition-all space-y-2 text-[1.3rem]">
                <div className="cursor-pointer hover:opacity-70">INDIGO</div>
                <div className="cursor-pointer hover:opacity-70">GO FIRST</div>
                <div className="cursor-pointer hover:opacity-70">SPICEJET</div>
                <div className="cursor-pointer hover:opacity-70">AIRASIA</div>
                <div className="cursor-pointer hover:opacity-70">VISTARA</div>
                <div className="cursor-pointer hover:opacity-70">AIR INDIA</div>
              </div>
            </div>
            <div className="col-span-12 md:col-span-6 lg:col-span-2">
              <div className="text-white font-semibold text-[1.3rem]">DOMESTIC FLIGHTS</div>
              <div className="pt-4 text-white text-opacity-60 transition-all space-y-2 text-[1.3rem]">
                <div className="cursor-pointer hover:opacity-70">KAHULUI(OGG - HONOLULU (HNL)</div>
                <div className="cursor-pointer hover:opacity-70">ATLANTA (ATL) TO ORLANDO (MCO)</div>
                <div className="cursor-pointer hover:opacity-70">DENVER (DEN) TO LAS VEGAS (LAS)</div>
                <div className="cursor-pointer hover:opacity-70">LOS ANGELES (LAX) TO CHICAGO O'HARE (ORD)</div>
                <div className="cursor-pointer hover:opacity-70">LOS ANGELES - CHICAGO O'HARE FLIGHTS</div>
                <div className="cursor-pointer hover:opacity-70">ATLANTA - FORT LAUDERDALE FLIGHTS</div>
                <div className="cursor-pointer hover:opacity-70 uppercase">Orlando - Atlanta Flights</div>
                <div className="cursor-pointer hover:opacity-70 uppercase">Honolulu - Kahului flights</div>
                <div className="cursor-pointer hover:opacity-70 uppercase">Denver - Phoenix flights</div>
              </div>
            </div>
            <div className="col-span-12 md:col-span-4 lg:col-span-2">
              <div className="text-white font-semibold text-[1.3rem] uppercase">International flight routes </div>
              <div className="pt-4 text-white text-opacity-60 transition-all space-y-2 text-[1.3rem]">
                <div className="cursor-pointer hover:opacity-70 uppercase">Kuala Lumpur to Singapore Changi Flights</div>
                <div className="cursor-pointer hover:opacity-70 uppercase">Cairo to Jeddah Flights</div>
                <div className="cursor-pointer hover:opacity-70 uppercase">Orlando to San Juan Flights</div>
                <div className="cursor-pointer hover:opacity-70 uppercase">New York JFK to London Heathrow Flights</div>
                <div className="cursor-pointer hover:opacity-70 uppercase">Hong Kong to Taipei Flights</div>
                <div className="cursor-pointer hover:opacity-70 uppercase">Bangkok to Hong Kong Flights</div>
                <div className="cursor-pointer hover:opacity-70 uppercase">Seoul Incheon to Tokyo Narita Flights</div>
                <div className="cursor-pointer hover:opacity-70 uppercase">Canada to India Flights</div>
                <div className="cursor-pointer hover:opacity-70 uppercase">Delhi to Patna Flights</div>
                <div className="cursor-pointer hover:opacity-70 uppercase">Mumbai to Delhi Flights</div>
                <div className="cursor-pointer hover:opacity-70 uppercase">Delhi to Bangalore Flights</div>
                <div className="cursor-pointer hover:opacity-70 uppercase">Delhi to Pune Flights</div>
                <div className="cursor-pointer hover:opacity-70 uppercase">Delhi to Mumbai Flights</div>
              </div>
            </div>
            <div className="col-span-12 md:col-span-4 lg:col-span-2">
              <div className="text-white font-semibold text-[1.3rem] uppercase">POPULAR DESTINATION FOR CAR RENTAL</div>
              <div className="pt-4 text-white text-opacity-60 transition-all space-y-2 text-[1.3rem]">
                <div className="cursor-pointer hover:opacity-70 uppercase">Cheap Car Rental New York</div>
                <div className="cursor-pointer hover:opacity-70 uppercase">Cheap Car Rental Miami</div>
                <div className="cursor-pointer hover:opacity-70 uppercase">Car Rental Miami Airport</div>
                <div className="cursor-pointer hover:opacity-70 uppercase">Cheap Car Rental Los Angeles</div>
                <div className="cursor-pointer hover:opacity-70 uppercase">Cheap Car Rental Seattle</div>
                <div className="cursor-pointer hover:opacity-70 uppercase">Cheap Car Rental San Francisco</div>
                <div className="cursor-pointer hover:opacity-70 uppercase">Car Rental Phoenix Airport</div>
                <div className="cursor-pointer hover:opacity-70 uppercase">Cheap Car Rental Atlanta</div>
                <div className="cursor-pointer hover:opacity-70 uppercase">Car Rental Toronto Airport</div>
              </div>
            </div>
            <div className="col-span-12 md:col-span-4 lg:col-span-2">
              <div className="text-white font-semibold text-[1.3rem] uppercase">POPULAR HOTEL DESTINATION</div>
              <div className="pt-4 text-white text-opacity-60 transition-all space-y-2 text-[1.3rem]">
                <div className="cursor-pointer hover:opacity-70 uppercase">Hotels in Delhi</div>
                <div className="cursor-pointer hover:opacity-70 uppercase">Hotels in Mumbai</div>
                <div className="cursor-pointer hover:opacity-70 uppercase">Hotels in New York City</div>
                <div className="cursor-pointer hover:opacity-70 uppercase">Hotels in Chennai</div>
                <div className="cursor-pointer hover:opacity-70 uppercase">Hotels in Dubai</div>
                <div className="cursor-pointer hover:opacity-70 uppercase">Hotels in London</div>
                <div className="cursor-pointer hover:opacity-70 uppercase">Hotels in Goa</div>
                <div className="cursor-pointer hover:opacity-70 uppercase">Hotels in Pune</div>
                <div className="cursor-pointer hover:opacity-70 uppercase">Hotels in  Los Angeles</div>
              </div>
            </div>
          </div>
          <div>
             <div className="text-center py-5 text-white text-[1.2rem]">We Accept</div>
             <img src={weaccept} alt="img" className="mx-auto md:w-[80%] w-[85%] lg:w-[30%]"/>
          </div>
          <div>
            <div className="text-white text-[1.1rem] pt-5 text-center">Copyright &copy; 2024 TRACKNFLY.COM</div>
          </div>
          <div className="md:flex items-center text-center md:text-start space-y-3 md:space-y-0 md:space-x-3 justify-center text-white text-opacity-70 text-[1.1rem] pt-5">
             <div className="cursor-pointer hover:opacity-70 uppercase md:border-r-2 pr-4 border-gray-400">privacy policy</div>
             <div className="cursor-pointer hover:opacity-70 uppercase md:border-r-2 pr-4 border-gray-400">CANCELLATION AND REFUND POLICY</div>
             <div className="cursor-pointer hover:opacity-70 uppercase md:border-r-2 pr-4 border-gray-400">TERMS AND SERVICES</div>
             <div className="cursor-pointer hover:opacity-70 uppercase md:border-r-2 pr-4 border-gray-400">Faqs</div>
             <div className="cursor-pointer hover:opacity-70 uppercase md:border-r-2 pr-4 border-gray-400">refer & earn</div>
             <div className="cursor-pointer hover:opacity-70 uppercase md:border-r-2 pr-4 border-gray-400">rewards</div>
             <div className="cursor-pointer hover:opacity-70 uppercase md:border-r-2 pr-4 border-gray-400">Support</div>
             <div className="cursor-pointer hover:opacity-70 uppercase">manage trip</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
