export const FlightCard = ({ data }) => {
  return (
    <div
      className=" p-[2rem] flex flex-col items-start justify-center gap-[1rem] rounded-2xl "
      style={{ boxShadow: "0px 4.43px 17.71px 0px #9E9E9E40" }}
    >
      <div className=" flex flex-col gap-[1rem]">
        <span className=" text-[gray] text-[1.6rem]">{data.date}</span>
        <div className=" ml-3">
          <h6 className=" font-[500] text-[2rem]">{data.from}</h6>
          <svg
            width="10"
            height="55"
            viewBox="0 0 10 55"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.75992 7.50018L9.34185 0.00103831L0.681592 -0.00103831L4.25992 7.49982L5.75992 7.50018ZM0.99949 50.9991C0.99896 53.2082 2.78939 54.9995 4.99853 55.0001C7.20767 55.0006 8.99896 53.2102 8.99949 51.001C9.00002 48.7919 7.20959 47.0006 5.00045 47.0001C2.79131 46.9995 1.00002 48.79 0.99949 50.9991ZM4.26019 6.37483L4.25917 10.6248L5.75917 10.6252L5.76019 6.37519L4.26019 6.37483ZM4.25815 14.8748L4.25713 19.1248L5.75713 19.1252L5.75815 14.8752L4.25815 14.8748ZM4.25611 23.3748L4.25509 27.6249L5.75509 27.6252L5.75611 23.3752L4.25611 23.3748ZM4.25408 31.8749L4.25306 36.1249L5.75306 36.1252L5.75408 31.8752L4.25408 31.8749ZM4.25204 40.3749L4.25102 44.6249L5.75102 44.6252L5.75204 40.3752L4.25204 40.3749ZM4.25 48.8749L4.24949 50.9999L5.74949 51.0002L5.75 48.8752L4.25 48.8749Z"
              fill="#FB4A2A"
            />
          </svg>

          <h6 className=" font-[500] text-[2rem]">{data.to}</h6>
        </div>
        <span className="text-[gray] text-[1.6rem] font-normal capitalize">
          {data.discount}
        </span>
      </div>

      <a href={data.url}>
        <button className=" bg-[#2659C3] text-white py-[1.2rem] px-[3rem] rounded-[3rem] text-[1.4rem]">
          Book Now
        </button>{" "}
      </a>
    </div>
  );
};
