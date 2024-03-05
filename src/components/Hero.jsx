/* eslint-disable react/prop-types */

const Hero = ({ backG, title }) => {
  return (
    <div
      className={`w-full h-[15vh] md:h-[20vh] flex-col flex justify-center-items-center ${backG}`}
    >
      <h1 className="text-xl text-primary md:text-4xl font-bold h-[15vh] md:h-[20vh] tracking-wider uppercase shadow-xl flex justify-center items-center h-inherit bg-transparent">
        {title}
      </h1>
    </div>
  );
};

export default Hero;
