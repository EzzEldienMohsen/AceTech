import React from 'react';
import { Hero, LandingCard, Numbers } from '../components';
import SecondaryCarousel from './../components/SecondaryCarousel';

const Landing = () => {
  const [component, setComponent] = React.useState([]);

  return (
    <div className="w-full">
      <Hero backG="LandingHero" title="ace tech marketing solution" />
      <div className="mt-4 flex flex-col justify-center items-center">
        <h1 className="underline capitalize text-2xl md:text-3xl lg:text-5xl font-bold tracking-wider leading-4 mb-16">
          our services
        </h1>
        <SecondaryCarousel component={component} />
        <LandingCard setComponent={setComponent} />
        <Numbers />
      </div>
    </div>
  );
};

export default Landing;
