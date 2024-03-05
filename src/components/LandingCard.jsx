import { landingCards } from '../assets';

const LandingCard = () => {
  return (
    <div className="flex flex-col justify-center items-start mb-8 gap-4 lg:flex-row lg:flex-wrap">
      {landingCards.map((card) => {
        return (
          <div
            key={card.id}
            className="px-2 lg:w-2/5 shadow-2xl rounded-md  flex flex-col outline-2 items-stretch justify-between w-96 "
          >
            <img
              src={card.image}
              alt="image"
              className="rounded-t-md bg-inherit  w-full h-[380px]"
            />
            <h1 className="font-semibold text-3xl lg:text-5xl leading-2 my-4">
              {card.title}
            </h1>
            <p className="text-xl lg:text-3xl">{card.text}</p>
          </div>
        );
      })}
    </div>
  );
};

export default LandingCard;
