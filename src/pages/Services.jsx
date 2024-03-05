import { WebEng, WebWord, socialBuying, socialManagement } from '../assets';
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
      <ServiceSection
        array={socialBuying}
        title=""
        secondTitle="Media Buying"
        height={true}
      />
      <ServiceSection
        array={WebWord}
        title="Web Design & Development"
        secondTitle="Web Design With Dashboard (WordPress)"
        height={false}
      />
      <ServiceSection
        array={WebEng}
        title=""
        secondTitle="SEARCH ENGINE OPTIMIZATION"
        height={true}
      />
    </div>
  );
};

export default Services;
