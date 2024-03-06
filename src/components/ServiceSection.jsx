/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';

const ServiceSection = ({ title, secondTitle, array, height }) => {
  return (
    <div className="mt-6 md:mt-8 lg:mt-12 flex flex-col w-full bg-transparent border-b-2 border-primary pb-6 justify-start items-start">
      <h1
        className={`text-xl ${
          height ? 'hidden' : ''
        } md:text-2xl lg:text-3xl underline font-bold w-full flex bg-transparent justify-center capitalize`}
      >
        {title}
      </h1>
      <h2 className="mt-6 md:mt-8 lg:mt-12 w-full bg-transparent flex font-semibold justify-center mb-4 md:justify-start text-lg md:text-xl lg:text-xl">
        {secondTitle}
      </h2>
      <div className="flex flex-col md:gap-4 w-full justify-center items-center md:flex-row ">
        {array.map((card) => {
          return (
            <ul
              key={card.id}
              className="px-8 py-4 w-5/6 md:h-[600px] lg:h-[400px] shadow-2xl bg-base  rounded-md mb-4 lg:mb-0 border-base-content flex flex-col  justify-evenly  border border-spacing-4 list-disc   "
            >
              {card.list.map((txt) => {
                return (
                  <li key={txt} className="text-lg md:text-xl">
                    {txt}
                  </li>
                );
              })}
              <Link to="/contact" className="btn mt-4 btn-block btn-primary">
                Contact Us
              </Link>
            </ul>
          );
        })}
      </div>
    </div>
  );
};

export default ServiceSection;
