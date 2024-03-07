import TheIcons from './TheIcons';

const ContactDetails = () => {
  return (
    <div className="flex  md:h-[450px] mb-4 md:w-4/5  flex-col w-full lg:w-1/2 bg-transparent justify-evenly lg:border-0 lg:shadow-none items-start p-5 border-2 border-secondary rounded-lg shadow-2xl">
      <h1 className="text-lg md:text-2xl lg:text-xl underline capitalize mb-4">
        you can find us at
      </h1>
      <div className="w-full mb-2 flex-col md:flex-row flex justify-between items-center mt-6 md:mt-4 lg:mt-8">
        <h1 className=" capitalize flex justify-center items-center tracking-wider mb-4 font-normal text-lg md:text-2xl lg:text-xl ">
          email:
        </h1>
        <p className="w-3/5 capitalize flex justify-center items-center tracking-wider text-lg lg:text-xl">
          info@acetechmarketing.com
        </p>
      </div>
      <div className="w-full mb-2 flex-col md:flex-row flex justify-between items-center mt-6 md:mt-4 lg:mt-8">
        <h1 className=" capitalize flex justify-center items-center tracking-wider mb-4 font-semibold text-lg md:text-2xl lg:text-xl ">
          Phone number
        </h1>
        <p className="w-3/5 capitalize flex justify-center items-center tracking-wider  font-normal text-lg lg:text-xl">
          01022335834
        </p>
      </div>
      <div className="w-full mb-2 flex-col md:flex-row flex justify-between items-center mt-6 md:mt-4 lg:mt-8">
        <h1 className=" capitalize flex justify-center items-center tracking-wider mb-4 font-semibold text-lg md:text-2xl lg:text-xl ">
          Location
        </h1>
        <p className="w-3/5 capitalize flex justify-center items-center tracking-wider  font-normal text-lg lg:text-xl">
          Zahraa Al Maadi 50 St, Saint Anthony Church Square, Cairo, Egypt
        </p>
      </div>
      <TheIcons />
    </div>
  );
};

export default ContactDetails;
