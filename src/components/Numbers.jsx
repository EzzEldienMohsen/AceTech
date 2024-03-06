import { numbers } from '../assets';

const Numbers = () => {
  return (
    <div className="mt-4 flex flex-col justify-center items-center">
      <h1 className="underline capitalize text-xl md:text-2xl lg:text-3xl font-bold tracking-wider mt-8 mb-16">
        ace tech in numbers
      </h1>
      <div className=" w-full flex flex-col justify-center  md:justify-evenly px-5 text-primary text-lg md:text-xl lg:text-2xl items-center md:flex-row md:flex-wrap lg:grid lg:grid-cols-4 ">
        {numbers.map((number) => {
          return (
            <div
              key={number.id}
              className="flex flex-col capitalize justify-center items-center  mb-6 mr-6"
            >
              <h1 className="mb-2">{number.number}</h1>
              <h1>{number.title}</h1>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Numbers;
