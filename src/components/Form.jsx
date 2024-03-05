import React from 'react';
import FormRow from './FormRow';
import { initialValues } from '../assets';

const Form = () => {
  const [values, setValues] = React.useState(initialValues);
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setValues({ ...values, [name]: value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(values);
  };
  return (
    <form
      onSubmit={onSubmit}
      className="flex flex-col w-full md:h-[432px] lg:w-2/5 bg-transparent justify-start lg:justify-evenly items-start p-5 border-2 border-secondary rounded-lg shadow-2xl"
    >
      <FormRow
        name="name"
        label="name"
        type="text"
        value={values.name}
        high={false}
        placeHolder="Your Name "
        handleChange={handleChange}
      />
      <FormRow
        name="email"
        label="email"
        type="text"
        high={false}
        value={values.email}
        placeHolder="Your Email "
        handleChange={handleChange}
      />
      <FormRow
        name="message"
        label="message"
        type="text"
        high={true}
        value={values.message}
        placeHolder="Your Message "
        handleChange={handleChange}
      />
      <button className="btn btn-block btn-secondary">Send Message</button>
    </form>
  );
};

export default Form;
