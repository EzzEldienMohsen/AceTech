import Icons from './Icons';

const ContactDetails = () => {
  return (
    <div className="flex mb-4 flex-col w-full lg:w-1/2 bg-transparent justify-start items-start p-5 border-2 border-secondary rounded-lg shadow-2xl">
      <h1 className="text-2xl md:text-3xl lg:text-5xl underline capitalize mb-4">
        you can find us at
      </h1>
      <div className="w-full mb-2 flex-col md:flex-row flex justify-between items-center mt-6 md:mt-4 lg:mt-8">
        <h1 className=" capitalize flex justify-center items-center tracking-wider mb-4 font-semibold text-xl md:text-2xl lg:text-3xl ">
          email:
        </h1>
        <p className="w-3/5 capitalize flex justify-center items-center tracking-wider  font-normal text-xl lg:text-2xl">
          info@acetechmarketing.com
        </p>
      </div>
      <div className="w-full mb-2 flex-col md:flex-row flex justify-between items-center mt-6 md:mt-4 lg:mt-8">
        <h1 className=" capitalize flex justify-center items-center tracking-wider mb-4 font-semibold text-xl md:text-2xl lg:text-3xl ">
          Phone number
        </h1>
        <p className="w-3/5 capitalize flex justify-center items-center tracking-wider  font-normal text-xl lg:text-2xl">
          01022335834
        </p>
      </div>
      <div className="w-full mb-2 flex-col md:flex-row flex justify-between items-center mt-6 md:mt-4 lg:mt-8">
        <h1 className=" capitalize flex justify-center items-center tracking-wider mb-4 font-semibold text-xl md:text-2xl lg:text-3xl ">
          Location
        </h1>
        <p className="w-3/5 capitalize flex justify-center items-center tracking-wider  font-normal text-xl lg:text-2xl">
          Zahraa Al Maadi 50 St, Saint Anthony Church Square, Cairo, Egypt
        </p>
      </div>
      <Icons />
    </div>
  );
};

export default ContactDetails;
