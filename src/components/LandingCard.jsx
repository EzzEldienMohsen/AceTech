import { landingCards } from '../assets';

const LandingCard = () => {
  return (
    <div className="flex flex-col justify-between px-5   items-start mb-8 gap-4 lg:flex-row lg:flex-wrap ">
      {landingCards.map((card) => {
        return (
          <div
            key={card.id}
            className="px-2 py-4 lg:ml-0 shadow-2xl bg-base-100 lg:h-[900px] rounded-md mb-4 border-base-content flex flex-col border border-spacing-4 items-start justify-start w-96 md:w-5/6 md:ml-16 lg:w-[30vw] "
          >
            <img
              src={card.image}
              alt="image"
              className="rounded-t-md bg-inherit  w-full h-[380px]"
            />
            <h1 className="font-semibold text-3xl md:3xl lg:text-3xl leading-2 my-4">
              {card.title}
            </h1>
            <p className="text-xl md:3xl lg:text-2xl">{card.text}</p>
          </div>
        );
      })}
    </div>
  );
};

export default LandingCard;
