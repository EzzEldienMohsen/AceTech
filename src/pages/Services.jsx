import { socialManagement } from '../assets';
import { Hero, ServiceSection } from '../components';

const Services = () => {
  return (
    <div className="w-full flex-col flex justify-center items-center mb-12 px-5">
      <Hero backG="ServicesHero" title="Our Services" />
      <ServiceSection
        array={socialManagement}
        title="Digital Marketing"
        secondTitle="Social Media Management"
        height={false}
      />
    </div>
  );
};

export default Services;
