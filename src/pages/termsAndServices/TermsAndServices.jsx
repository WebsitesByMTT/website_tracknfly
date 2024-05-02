import React, { useEffect } from "react";

const TermsAndServices = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className={"px-[2rem] py-[3rem] md:p-[4rem] scroll-smooth"}>
      <div className={" flex flex-col gap-[4rem]"}>
        <div className={""}>
          <h1 className="text-black text-left tracking-wide font-semibold  text-[4rem] capitalize">
            Here are our terms and conditions{" "}
          </h1>
        </div>

        <div className={` flex flex-col gap-[1rem]`}>
          <p className=" text-[1.6rem]">
            To use our website, you must be at least 18 years of age and to
            continue you need to agree to our terms and conditions. All the
            information you are giving while booking should be correct and
            accurate. Trackn Fly is protected by copyright, trademark, and other
            laws. It is not allowed to use our logo or copy our trademarks
            without our permission. As it is against the law and can lead to
            legal action.
          </p>
          <p className=" text-[1.6rem]">
            Your baggage allowance will be shown on the order confirmation and
            on your e-ticket receipt. To know the exact size, weight, and number
            of bags allowed, you need to check the airline guidelines. As there
            are airlines that offer cheaper prices but do not include luggage.
            Airlines can change their baggage policies anytime and we have no
            control over these things. Some include additional charges for
            luggage. To know more you can check the guidelines of these
            airlines.
          </p>
          <p className=" text-[1.6rem]">
            While accepting our terms and conditions, it will cover all the
            services that we provide related to your booking. So, it is
            recommended to read the terms and conditions carefully. Once you
            have completed all the bookings through Trackn Fly, you will receive
            an order confirmation via email from us. This email serves as proof
            of your ticket confirmation which includes your details and a
            summary of charges.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsAndServices;
