import React from 'react';
import FormRow from './FormRow';
import { initialValues } from '../assets';
import { autoFetch } from '../utils';
const request = async (data)=>{
  try {
    const resp = await autoFetch.post("",data)
    console.log(resp.data)
  } catch (error) {
    console.log(error)
  }
};
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
    request(values)
  };
  return (
    <form
    method='post'
      onSubmit={onSubmit}
      className="flex flex-col w-full md:h-[450px] md:w-4/5 lg:w-2/5 bg-transparent justify-start md:justify-evenly items-start lg:border-0 lg:shadow-none p-5 border-2 border-secondary rounded-lg shadow-2xl"
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
