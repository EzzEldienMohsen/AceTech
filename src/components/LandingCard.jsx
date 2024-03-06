/* eslint-disable react/prop-types */
import { landingCards } from '../assets';

const LandingCard = ({ setComponent }) => {
  return (
    <div className="flex flex-col justify-between md:grid md:grid-cols-2 px-5 lg:flex  items-start mb-8 gap-4 lg:flex-row lg:flex-wrap ">
      {landingCards.map((card) => {
        return (
          <div
            key={card.id}
            className="px-4 py-4 lg:ml-0 shadow-2xl md:h-[650px] bg-base-100 lg:h-[750px] rounded-md mb-4 border-base-content flex flex-col  border border-spacing-4 place-items-start justify-evenly w-80 md:w-80 md:ml-16 lg:w-[30vw] "
          >
            <img
              src={card.image}
              alt="image"
              className="rounded-t-md bg-inherit  "
            />
            <h1 className="font-semibold text-lg md:2xl lg:text-xl my-4">
              {card.title}
            </h1>
            <p className="text-md md:xl lg:text-xl">{card.text}</p>
            <a href="#sample" className=" btn-block  btn-primary">
              <button
                className="btn btn-block  btn-primary"
                onClick={() => setComponent(() => card.samples)}
              >
                Show Samples
              </button>
            </a>
          </div>
        );
      })}
    </div>
  );
};

export default LandingCard;
