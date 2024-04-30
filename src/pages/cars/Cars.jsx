import React from "react";
import FrquentlyAskedQuestions from "../../components/faqs/FrquentlyAskedQuestions";

const data = [
  {
    id: 1,
    question: "What types of cars can I rent?    ",
    answer: "You can rent any type of cars or vehicle.    ",
  },
  {
    id: 2,
    question: "Can I place an online request if I am not a U.S. resident?    ",
    answer:
      "Yes, you can place an online request if you are not from the US.      ",
  },
  {
    id: 3,
    question: "What do I need to bring when I pick up my rental car?      ",
    answer: "You must have your valid ID proof and driving license.      ",
  },
  {
    id: 4,
    question: "Can I rent a car without a reservation?      ",
    answer: "No, to rent any vehicle you need a place request before.      ",
  },
  {
    id: 5,
    question: "Can I cancel my reservation?    ",
    answer:
      "Yes, you can cancel your reservation. You will get your refund after 7 to 15 days on your original payment mode.      ",
  },
  {
    id: 6,
    question: "What happens if I arrive late when picking up the car?    ",
    answer: "It will be better if you inform us about the delay.      ",
  },
  {
    id: 7,
    question: "What should I do if I damage the car?    ",
    answer:
      "If anything happens like that then you need to pay the extra expense for the damages.      ",
  },
  {
    id: 8,
    question: "Can I pay by credit card?      ",
    answer: "Yes, we accept any mode of payment including credit cards.      ",
  },
  {
    id: 9,
    question: "Do the fees vary by region and season?    ",
    answer: "Yes, it varies by region and season.    ",
  },
  {
    id: 10,
    question: "Can I get a non-smoking car?    ",
    answer: "No, you can not have a non-smoking car with Trackn Fly.    ",
  },
];

const Cars = () => {
  return (
    <>
      <FrquentlyAskedQuestions data={data} sidebar={false} />
    </>
  );
};

export default Cars;
