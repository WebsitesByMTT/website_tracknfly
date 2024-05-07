import WhyTracknFly from "../../components/whyTracknFly/WhyTracknFly";
import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

const RefundPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Helmet>
        <title>CANCELLATION AND REFUND POLICY - Trackn Fly</title>
        <meta
          name="description"
          content="Trackn Fly - Travel agency with exclusive discounts on cheap hotels, flights, and cars on rentals. It has the best cancellation and refund policy."
        />
        <meta
          property="og:url"
          content="https://www.tracknfly.com/CANCELLATION-&-REFUND-POLICY"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="CANCELLATION & REFUND POLICY - Trackn Fly"
        />
        <meta property="og:site_name" content="CANCELLATION & REFUND POLICY" />
        <meta
          property="og:description"
          content="Trackn Fly - Travel agency with exclusive discounts on cheap hotels, flights, and cars on rentals. It has the best cancellation and refund policy."
        />
        <meta property="og:image" content="https://www.tracknfly.com/assets/tracknfly-logo-6b9305ee.png" />
      </Helmet>

      <div className={"px-[2rem] py-[3rem] md:p-[4rem] scroll-smooth"}>
        <div className={" flex flex-col gap-[4rem]"}>
          <div className={""}>
            <h1 className="text-black text-left tracking-wide font-semibold  text-[4rem] capitalize">
              Cancellation and refund policy
            </h1>
          </div>

          <div className={` flex flex-col gap-[1rem]`}>
            <p className=" text-[1.6rem]">
              We know that travel plans change often but in some emergency, if
              you want to cancel your booking. You can cancel it before 24 hours
              before your scheduled departure. After that, you can get a refund
              based on your ticket policy. But if you fail to cancel it before
              24 hours or you have missed your boarding then you will not be
              eligible for a refund. You can make a refund request within the
              ticket's validity period. Remember, discounted prices may be
              nonrefundable. Refunds will be based on the airline policy and
              unused taxes may be refunded if no ticket value remains.{" "}
            </p>
            <p className=" text-[1.6rem] font-semibold">
              Note- If you have purchased a ticket from third parties such as
              insurance, airport transfers are not automatically canceled. In
              that case, you can contact the third-party provider directly.{" "}
            </p>
          </div>
        </div>
      </div>
      <WhyTracknFly />
    </>
  );
};

export default RefundPolicy;
