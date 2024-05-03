import React from "react";
import Heart from "../../assets/images/heart.png";
import popularBeachImage1 from "../../assets/images/popularBeachImage1.png";
import popularBeachImage2 from "../../assets/images/popularBeachImage2.png";
import popularBeachImage3 from "../../assets/images/popularBeachImage3.png";
import popularBeachImage4 from "../../assets/images/popularBeachImage4.png";

const PopularBeach = () => {
  const data = [
    {
      title: "Swiss Apls",
      img: popularBeachImage1,
    },
    {
      title: "Hallstatt",
      img: popularBeachImage2,
    },
    {
      title: "Faroe Island",
      img: popularBeachImage3,
    },
    {
      title: "Innsbruck",
      img: popularBeachImage4,
    },
  ];

  return (
    <div className="bg-[#F5F5F5]">
      <div className="w-[95%] py-24 mx-auto">
        <div className="text-black text-center tracking-wide font-semibold  text-[4rem]">
          Popular Beach Destinations
        </div>
        <div className="grid grid-cols-12 w-[95%] md:w-[87%] space-y-4 md:space-y-0 md:gap-10 py-16 mx-auto">
          {data?.map((item, ind) => (
            <div
              key={ind}
              className="md:col-span-6 shadow-md col-span-12 lg:col-span-3 hover:scale-95 transition-all cursor-pointer bg-white p-7 rounded-[2rem]"
            >
              <div className="relative">
                <img
                  src={item.img}
                  alt="img"
                  className="w-full rounded-[2rem]"
                />
                <img
                  src={Heart}
                  alt="heart"
                  className="absolute right-[3rem] top-[3rem]"
                />
              </div>
              <div className="pt-5 pb-3 text-black  flex items-center justify-between">
                <div className="text-[1.8rem]">{item.title}</div>
                <div className="flex items-center space-x-3">
                  <svg
                    width="23"
                    height="23"
                    viewBox="0 0 28 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M24.0285 10.064L17.4408 9.10658L14.4959 3.13641C14.4155 2.97295 14.2831 2.84062 14.1197 2.76019C13.7097 2.55781 13.2116 2.72646 13.0066 3.13641L10.0617 9.10658L3.47403 10.064C3.29241 10.0899 3.12636 10.1756 2.99922 10.3053C2.84552 10.4633 2.76083 10.6758 2.76374 10.8962C2.76666 11.1166 2.85696 11.3268 3.01479 11.4806L7.78107 16.1276L6.65501 22.6893C6.62861 22.842 6.6455 22.9989 6.70377 23.1425C6.76204 23.286 6.85937 23.4103 6.9847 23.5014C7.11004 23.5924 7.25838 23.6465 7.41289 23.6575C7.56741 23.6685 7.72192 23.636 7.85891 23.5637L13.7512 20.4657L19.6436 23.5637C19.8044 23.6493 19.9913 23.6779 20.1703 23.6467C20.6217 23.5689 20.9253 23.1408 20.8475 22.6893L19.7214 16.1276L24.4877 11.4806C24.6174 11.3535 24.703 11.1875 24.729 11.0058C24.799 10.5518 24.4825 10.1314 24.0285 10.064Z"
                      fill="black"
                    />
                  </svg>
                  <span className="text-[1.8rem]">4.7</span>
                </div>
              </div>
              <div className="pb-8">
                <div className="text-[1.2rem] text-gray-400">
                  3 Days 4 Nights
                </div>
              </div>
              <div className="flex items-center justify-between ">
                <div className="flex flex-col space-y-1 items-center">
                  <svg
                    width="23"
                    height="22"
                    viewBox="0 0 28 27"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g opacity="0.5">
                      <path
                        d="M22.1866 18.3046L23.6238 18.7537V17.2479V15.322V14.7085L23.1035 14.3833L15.9202 9.8937V5.21103C15.9202 3.80038 14.7794 2.65957 13.3688 2.65957C11.9581 2.65957 10.8173 3.80038 10.8173 5.21103V9.8937L3.63398 14.3833L3.11367 14.7085V15.322V17.2479V18.7537L4.5509 18.3046L10.8173 16.3463V19.5833L9.3342 20.6956L8.89139 21.0277V21.5812V23.0257V24.4933L10.3025 24.0901L13.3688 23.214L16.435 24.0901L17.8461 24.4933V23.0257V21.5812V21.0277L17.4033 20.6956L15.9202 19.5833V16.3463L22.1866 18.3046Z"
                        fill="white"
                        stroke="black"
                        stroke-width="2.21406"
                      />
                    </g>
                  </svg>

                  <span className="text-[1.1rem] text-gray-400">2 Flights</span>
                </div>
                <div className="flex flex-col space-y-1 items-center">
                  <svg
                    width="23"
                    height="23"
                    viewBox="0 0 27 27"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g opacity="0.5">
                      <path
                        d="M24.4023 23.3594H2.26172V21.1453H3.36875V4.53989C3.36875 4.24629 3.48538 3.96471 3.69299 3.7571C3.9006 3.54949 4.18217 3.43286 4.47578 3.43286H19.9742C20.2678 3.43286 20.5494 3.54949 20.757 3.7571C20.9646 3.96471 21.0812 4.24629 21.0812 4.53989V10.075H23.2953V21.1453H24.4023V23.3594ZM18.8672 21.1453H21.0812V12.2891H14.439V21.1453H16.6531V14.5032H18.8672V21.1453ZM18.8672 10.075V5.64692H5.58281V21.1453H12.225V10.075H18.8672ZM7.79686 12.2891H10.0109V14.5032H7.79686V12.2891ZM7.79686 16.7172H10.0109V18.9313H7.79686V16.7172ZM7.79686 7.86098H10.0109V10.075H7.79686V7.86098Z"
                        fill="black"
                      />
                    </g>
                  </svg>
                  <span className="text-[1.1rem] text-gray-400">1 Hotel</span>
                </div>
                <div className="flex flex-col space-y-1 items-center">
                  <svg
                    width="23"
                    height="22"
                    viewBox="0 0 28 27"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g opacity="0.5">
                      <path
                        d="M25.1357 11.6912L20.4513 10.9695L17.5965 6.30597C17.4467 6.06187 17.2364 5.86058 16.9859 5.72157C16.7355 5.58257 16.4534 5.51055 16.167 5.51249L4.20291 5.60782C3.8577 5.61073 3.52198 5.7211 3.24238 5.92359C2.96279 6.12608 2.75321 6.41064 2.64277 6.73771L1.2832 10.7693V20.0385H4.13757C4.35947 20.7598 4.80676 21.3909 5.41379 21.8393C6.02081 22.2876 6.75559 22.5296 7.51024 22.5296C8.2649 22.5296 8.99967 22.2876 9.6067 21.8393C10.2137 21.3909 10.661 20.7598 10.8829 20.0385H16.1765C16.3984 20.7598 16.8457 21.3909 17.4527 21.8393C18.0598 22.2876 18.7945 22.5296 19.5492 22.5296C20.3038 22.5296 21.0386 22.2876 21.6456 21.8393C22.2527 21.3909 22.7 20.7598 22.9219 20.0385H26.1914V12.9221C26.1927 12.6243 26.0868 12.336 25.8929 12.1099C25.699 11.8839 25.4302 11.7352 25.1357 11.6912ZM12.0767 7.20557L16.1803 7.17288L18.4687 10.9115L12.0767 10.9093V7.20557ZM4.21619 7.26826L10.4162 7.21885V10.9087L2.98946 10.9061L4.21619 7.26826ZM7.51024 20.8687C7.14076 20.8687 6.77958 20.7592 6.47238 20.5539C6.16517 20.3486 5.92572 20.0569 5.78433 19.7155C5.64294 19.3742 5.60594 18.9985 5.67803 18.6362C5.75011 18.2738 5.92803 17.9409 6.18929 17.6797C6.45055 17.4184 6.78341 17.2405 7.14579 17.1684C7.50817 17.0963 7.88378 17.1333 8.22514 17.2747C8.56649 17.4161 8.85825 17.6555 9.06352 17.9628C9.26879 18.27 9.37835 18.6311 9.37835 19.0006C9.3778 19.4959 9.18081 19.9707 8.83059 20.321C8.48037 20.6712 8.00553 20.8682 7.51024 20.8687ZM19.5492 20.8687C19.1797 20.8687 18.8185 20.7592 18.5113 20.5539C18.2041 20.3486 17.9647 20.0569 17.8233 19.7155C17.6819 19.3742 17.6449 18.9985 17.717 18.6362C17.7891 18.2738 17.967 17.9409 18.2282 17.6797C18.4895 17.4184 18.8224 17.2405 19.1847 17.1684C19.5471 17.0963 19.9227 17.1333 20.2641 17.2747C20.6054 17.4161 20.8972 17.6555 21.1025 17.9628C21.3077 18.27 21.4173 18.6311 21.4173 19.0006C21.4167 19.4959 21.2198 19.9707 20.8695 20.321C20.5193 20.6712 20.0445 20.8682 19.5492 20.8687ZM24.5308 18.3779H23.0217C22.8758 17.5631 22.448 16.8255 21.8132 16.2942C21.1784 15.763 20.377 15.4719 19.5492 15.4719C18.7214 15.4719 17.92 15.763 17.2852 16.2942C16.6503 16.8255 16.2226 17.5631 16.0767 18.3779H10.9828C10.8369 17.5631 10.4091 16.8255 9.77427 16.2942C9.13945 15.763 8.33803 15.4719 7.51024 15.4719C6.68246 15.4719 5.88103 15.763 5.24621 16.2942C4.61139 16.8255 4.18362 17.5631 4.03773 18.3779H2.94375V12.5674L20.0954 12.5948L24.5308 13.2782V18.3779Z"
                        fill="black"
                        stroke="black"
                        stroke-width="0.553515"
                      />
                    </g>
                  </svg>
                  <span className="text-[1.1rem] text-gray-400">
                    2 Transfers
                  </span>
                </div>
                <div className="flex flex-col space-y-1 items-center">
                  <svg
                    width="23"
                    height="23"
                    viewBox="0 0 27 27"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g opacity="0.5">
                      <path
                        d="M20.3234 11.1821L17.0023 12.8427L12.5742 9.52157L11.4672 15.6102L15.3418 18.9313L15.8953 23.913M20.3234 9.52157V23.913M11.4672 18.9313L9.25312 23.913M9.80664 9.52157C8.14609 10.6286 7.03906 13.3962 7.03906 13.3962L9.25312 14.5032M13.6812 7.30751C14.2684 7.30751 14.8316 7.07425 15.2468 6.65903C15.662 6.24381 15.8953 5.68066 15.8953 5.09345C15.8953 4.50625 15.662 3.94309 15.2468 3.52788C14.8316 3.11266 14.2684 2.87939 13.6812 2.87939C13.094 2.87939 12.5309 3.11266 12.1157 3.52788C11.7004 3.94309 11.4672 4.50625 11.4672 5.09345C11.4672 5.68066 11.7004 6.24381 12.1157 6.65903C12.5309 7.07425 13.094 7.30751 13.6812 7.30751Z"
                        stroke="black"
                        stroke-width="2.21406"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </g>
                  </svg>
                  <span className="text-[1.1rem] text-gray-400">
                    4 Activities
                  </span>
                </div>
              </div>
              <div className="py-5 pl-7">
                <ul className="space-y-3 text-[1.5rem] text-black text-opacity-40">
                  <li className="list-disc">
                    Tour combo with return airport transfer
                  </li>
                  <li className="list-disc">City Tour</li>
                  <li className="list-disc">Curious Corner</li>
                </ul>
              </div>
              <div className="pt-2 flex items-center space-x-10">
                <del className="text-[1.3rem] text-gray-400">₹980,000</del>
                <div className="flex space-x-2 items-end">
                  <span className="text-[2rem] font-semibold">₹88,952</span>
                  <span className="text-gray-400">Per Person</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularBeach;
