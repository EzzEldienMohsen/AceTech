import { numbers } from '../assets';
import { Hero, LandingCard } from '../components';

const Landing = () => {
  return (
    <div className="w-full">
      <Hero backG="LandingHero" title="ace tech marketing solution" />
      <div className="mt-4 flex flex-col justify-center items-center">
        <h1 className="underline capitalize text-2xl md:text-3xl lg:text-5xl font-bold tracking-wider leading-4 mb-16">
          our services
        </h1>
        <LandingCard />
        <div className="mt-4 flex flex-col justify-center items-center">
          <h1 className="underline capitalize text-2xl md:text-3xl lg:text-5xl font-bold tracking-wider leading-4 mt-8">
            ace tech in numbers
          </h1>
          <div className=" w-full flex flex-col justify-center  md:justify-between px-5 text-neutral-content text-2xl lg:text-3xl items-center md:flex-row md:flex-wrap ">
            {numbers.map((number) => {
              return (
                <div
                  key={number.id}
                  className="flex flex-col capitalize justify-center items-center  m-4"
                >
                  <h1 className="m-2">{number.number}</h1>
                  <h1>{number.title}</h1>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
