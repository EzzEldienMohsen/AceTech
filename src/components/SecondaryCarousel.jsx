/* eslint-disable react/prop-types */

const SecondaryCarousel = ({ component }) => {
  const hide = component.length == 0;

  return (
    <div
      id="sample"
      className={`h-48  lg:h-80 ${
        hide ? 'hidden' : 'carousel'
      } my-5 md:ml-16 w-4/5 lg:w-4/5 ml-0 lg:ml-0 p-4   lg:carousel-center md:w-[86vw] space-x-8   border-2 border-accent  rounded-box `}
    >
      {component.map((product) => {
        return (
          <img
            className="carousel-item"
            key={product.id}
            src={product.img}
            alt="image"
          />
        );
      })}
    </div>
  );
};

export default SecondaryCarousel;
