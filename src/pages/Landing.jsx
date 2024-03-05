import { Hero, LandingCard } from '../components';

const Landing = () => {
  return (
    <div className="w-full">
      <Hero backG="LandingHero" title="ace tech marketing solution" />
      <div className="mt-4 flex flex-col justify-center items-center">
        <h1 className="underline capitalize text-2xl lg:text-5xl font-bold tracking-wider leading-4 mb-8">
          our services
        </h1>
        <LandingCard />
      </div>
    </div>
  );
};

export default Landing;
