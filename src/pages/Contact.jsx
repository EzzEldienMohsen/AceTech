import { ContactDetails, Form, Hero } from '../components';

const Contact = () => {
  return (
    <div className="w-full flex-col flex justify-center  items-center mb-12 px-5">
      <Hero backG="ContactHero" title="Contact Us" />
      <div className=" px-5 w-full flex flex-col mt-4 md:mt-8 lg:mt-12 justify-center  lg:flex-row lg:justify-between lg:shadow-2xl items-center lg:border-2 lg:p-4 lg:border-secondary ">
        <ContactDetails />
        <Form />
      </div>
    </div>
  );
};

export default Contact;
