const HotelCard = ({ data, color = "#2659C3", button = "Book Now" }) => {
  return (
    <div
      className=" p-[2rem] flex flex-col items-start justify-center gap-[1rem] rounded-2xl "
      style={{ boxShadow: "0px 4.43px 17.71px 0px #9E9E9E40" }}
    >
      <div className=" flex flex-col ">
        <h6 className=" font-[500] text-[2rem]">{data.name}</h6>
        <p className=" text-[1.6rem] text-[gray] capitalize">{data.discount}</p>
      </div>
      <img
        src={data.img}
        alt={data.name}
        className=" w-full object-cover border  h-[19.7rem]"
      />

      <a href={data.url} className=" mt-[1rem]">
        <button
          className={` bg-[${color}] text-white py-[1.2rem] px-[3rem] rounded-[3rem] text-[1.4rem]`}
        >
          {button}
        </button>{" "}
      </a>
    </div>
  );
};

export default HotelCard;
