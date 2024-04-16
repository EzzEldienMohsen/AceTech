/* eslint-disable react/prop-types */
import { landingCards } from '../assets';
import { Button, Modal } from 'flowbite-react';
import { useState } from 'react';

const LandingCard = ({ setComponent }) => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="flex flex-col justify-between md:grid md:grid-cols-2 px-5 lg:flex  items-start mb-8 gap-4 lg:flex-row lg:flex-wrap ">
      {landingCards.map((card) => {
        return (
          <div
            key={card.id}
            className="px-4 py-4 lg:ml-0 shadow-2xl md:h-[800px] bg-base-100 lg:h-[850px] rounded-md mb-4 border-base-content flex flex-col  border border-spacing-4 place-items-start justify-start gap-4 w-80 md:w-80 md:ml-8 lg:w-[30vw] "
          >
            <img
              src={card.image}
              alt="image"
              className="rounded-t-md bg-inherit  "
            />
            <h1 className="font-semibold text-lg md:2xl lg:text-xl my-4">
              {card.title}
            </h1>
            <p className="text-md md:xl lg:text-xl">{card.text}</p>
            <a href="#sample" className="my-2 btn-block  btn-primary">
              <button
                className="btn btn-block  btn-primary"
                onClick={() => {
                  setComponent(() => card.samples);
                }}
              >
                Show Samples
              </button>
            </a>
            <Button
              className="btn btn-block  btn-primary"
              onClick={() => {
                setOpenModal(true);
              }}
            >
              Toggle modal
            </Button>
            <Modal
              show={openModal}
              size="md"
              onClose={() => setOpenModal(false)}
              dismissible
              className="bg-transparent/10"
            >
              <Modal.Header />
              <Modal.Body>
                <div className="flex  my-3 px-4 md:grid md:grid-cols-2 md:gap-2 flex-wrap  justify-between items-stretch">
                  {card.samples.map((img) => {
                    return (
                      <img
                        src={img.img}
                        key={img.id}
                        className="w-36 h-36 my-2"
                      />
                    );
                  })}
                </div>
              </Modal.Body>
            </Modal>
          </div>
        );
      })}
    </div>
  );
};

export default LandingCard;
