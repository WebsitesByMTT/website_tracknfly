import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import faqImg from "../../assets/images/faq.png"

const FrquentlyAskedQuestions = ({ title = "FAQs", data, sidebar = true }) => {
  return (
    <div className="py-[4rem] md:py-[7rem] px-[2rem] md:px-[4rem] flex justify-between gap-24 flex-col lg:flex-row ">
      <div className="left  flex-1">
        <h2
          className={`${
            sidebar
              ? " text-center md:text-right text-[3rem] md:text-[4rem] "
              : "text-center text-[3rem] md:text-[4rem]"
          } mb-[1rem]  md:mb-[5rem] mr-[5rem] ${title == "FAQs" && "font-semibold"}`}
        >
          {title}
        </h2>
        <Accordion type="single" collapsible>
          {data.map((item, index) => (
            <AccordionItem value={`item-${index}`}>
              <AccordionTrigger>
                <h6 className=" flex gap-4 text-left">
                  <span className=" rounded-[50%] min-w-[2.5rem] h-[2.5rem] flex items-center justify-center bg-[#0EB77A] text-white">
                    {index + 1}
                  </span>
                  {item.question}
                </h6>
              </AccordionTrigger>
              <AccordionContent>{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
      {sidebar && (
        <div
          className="right flex-[.5] md:h-[70vh] p-10 rounded-3xl"
          style={{
            backgroundImage: `url('${faqImg}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <h3 className=" text-white text-[3rem] font-bold mb-6">
            Summer Bonanza!
          </h3>
          <p className=" text-white text-[2rem]">
            Enjoy confortable transfers in shared coaches
          </p>
          <p className=" text-white text-[2rem]">
            Choose from 5 flights per week
          </p>
          <p className=" text-white text-[2rem]">
            Get a free Rapid Antigen Test at selected hotels
          </p>
        </div>
      )}
    </div>
  );
};

export default FrquentlyAskedQuestions;
