/* eslint-disable react/prop-types */
import { Modal } from 'flowbite-react';

const TheModal = () => {
  return (
    <>
      <Modal.Header />
      <Modal.Body>
        <div className="text-center">
          <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
            Are you sure you want to delete this product?
          </h3>
          <div className="flex justify-center gap-4"></div>
        </div>
      </Modal.Body>
    </>
  );
};

export default TheModal;
