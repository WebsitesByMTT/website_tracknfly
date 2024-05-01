import React, { useEffect } from "react";

const data = [
  {
    id: 1,
    title: "How we collect and use the Information    ",
    desc: "Whenever you visit our services, we automatically collect information directly for example when you search for a flight or hotel and you book them. The information you used at that time, we collect them including your name, email ID, phone number, etc.     ",
  },
  {
    id: 2,
    title: "How we use your information    ",
    desc: "We use your details to provide our best services. We show you the best prices for airline tickets and hotel booking. We have the best marketing team that will provide you with relevant advertising of your interest.  We also assure you that we do not leak your personal information. Hence, we protect your personal details.     ",
  },
  {
    id: 3,
    title: "We Protect your Information    ",
    desc: "We have our best technical, administrative, and physical security that will protect your information. We may store your information but as long as your account is active. When you deactivate your account, we will lose all the information that you have given to Trackn Fly.     ",
  },
  {
    id: 4,
    title: "Your Rights at Trackn Fly    ",
    desc: "The best thing about Trackn Fly is that you have your rights and choices. You have choices about your personal details like you can opt out of receiving marketing communications and you can change your preferences also. In case you have changed your number or anything, you can update that too. ",
  },
  {
    id: 5,
    title: "How to Contact Us    ",
    desc: "In case you have any queries or questions about our privacy policy or the way we use your personal information. You can contact us and give us our feedback. We will surely connect with you and solve your query.    ",
  },
];

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className={" p-[4rem]"}>
      <div className={" flex flex-col gap-[4rem]"}>
        <div className={""}>
          <h1 className="text-black text-left tracking-wide font-semibold  text-[4rem]">
            Privacy Policy
          </h1>
        </div>

        {data.map((item, index) => (
          <div className={` flex flex-col gap-[1rem]`} key={index}>
            <h2 className=" text-[2.6rem]">{item.title}</h2>
            <p className=" text-[1.6rem]">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PrivacyPolicy;
