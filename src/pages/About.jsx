import { who } from '../assets';
import { Hero } from '../components';

const About = () => {
  return (
    <div className="w-full flex-col flex justify-center items-center mb-12 px-5">
      <Hero backG="LandingAbout" title="who are we?" />
      <div className="w-inherit flex  justify-center items-center mt-4 md:mt-8 lg:mt-12">
        <h1 className="w-3/5 capitalize flex justify-center items-center tracking-widermb-4  font-extrabold text-2xl md:text-3xl lg:text-5xl">
          We’re a highly collaborative and supportive team, coming together on
          every project to ensure our clients get the very best result.
        </h1>
      </div>
      <img
        src={who}
        alt="img"
        className="hidden  md:block md:w-3/5 lg:w-4/5 mt-4 md:mt-8 lg:mt-12"
      />
      <div className="w-inherit mb-2 flex-col md:flex-row flex justify-between items-center mt-6 md:mt-4 lg:mt-8">
        <h1 className=" capitalize flex justify-center items-center tracking-wider mb-4 font-semibold text-xl md:text-2xl lg:text-3xl underline">
          who are we?
        </h1>
        <p className="w-3/5 capitalize flex justify-center items-center tracking-wider  font-normal text-xl lg:text-2xl">
          We are a full stack marketing agency, holding a number of local and
          international companies in the Middle East by Providing them with
          integrated marketing activities, starting from data collection and
          analysis, marketing penetration strategies to creative advertising
          campaigns and digital presence planning, managing and driving
          meaningful results making our clients more than satisfied.
        </p>
      </div>
      <div className="w-inherit flex-col md:flex-row flex justify-between items-center mt-4 md:mt-8 2">
        <h1 className=" capitalize flex justify-center items-center tracking-wider mb-4 font-semibold text-xl md:text-2xl lg:text-3xl underline">
          Our Mission
        </h1>
        <p className="w-3/5 capitalize flex justify-center items-center tracking-wider font-normal text-xl lg:text-2xl">
          We aim to deliver high quality marketing solutions to different sizes
          of businesses allowing them to reduce fixed marketing department
          costs, allowing them to achieve their marketing objectives with the
          best ROI possible with whatever resources available.
        </p>
      </div>

      <div className="w-inherit flex-col md:flex-row flex justify-between items-center mt-4 md:mt-8 2">
        <h1 className=" capitalize flex justify-center items-center tracking-wider mb-4 font-semibold text-xl md:text-2xl lg:text-3xl underline">
          Our values
        </h1>
        <p className="w-3/5 capitalize flex justify-center items-center tracking-wider font-normal text-xl lg:text-2xl">
          Commitment as we adhere to what is needed to be done in the lights of
          our ethics. Making It Happen as we are all a group of very creative
          People that can come with several solutions for the same concern
          Working Smart – Caring
        </p>
      </div>
    </div>
  );
};

export default About;
