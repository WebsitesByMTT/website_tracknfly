import React from "react";
import image from "../../assets/images/Popupfinal.svg";
import callIcon from "../../assets/images/call.png";
const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0  flex items-center justify-center z-[9999]">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black opacity-30"></div>

      {/* Modal Content */}
      <div className="relative z-50 w-[90%] lg:w-[60%] 2xl:w-[40%]  rounded-lg">
        <img src={image} alt="img" className="w-full" />
        <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
          <div className="uppercase text-white  mx-auto font-bold text-[1.2rem] md:text-[1.6rem] lg:text-[2.1rem]  text-center">
            You can freely contact us for exclusive deals and offers
          </div>
          {/* <div className='pt-1.5 md:pt-3'>
            <a href="tel:+1 888-812-2145" className='flex justify-center'>
              <div className='bg-[#FB4A2A] px-5 md:px-10 py-2 rounded-full hover:scale-110 transition-all space-x-3 inline-flex  items-center'> 
                 <img src={callIcon} alt='img' className='w-[1rem] md:w-[2rem]'/>
                 <div className='text-white text-[1.1rem] md:text-[1.6rem]'>+1 888-812-2145</div>
              </div>
            </a>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Modal;
