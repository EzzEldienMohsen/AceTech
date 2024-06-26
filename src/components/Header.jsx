/* eslint-disable react/prop-types */
import { FaRegSun } from 'react-icons/fa';
import { FaRegMoon } from 'react-icons/fa';
import { VscThreeBars } from 'react-icons/vsc';
import logo from '../assets/golden-logo-for-site--91x91.png';
import { pages } from '../assets';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import React from 'react';
import { motion } from 'framer-motion';

const Header = ({ isDark, toggleTheme }) => {
   const [isScrolled, setIsScrolled] = React.useState(false);

   React.useEffect(() => {
     AOS.init();
     AOS.refresh();
     const handleScroll = () => {
       const scrollPosition = window.scrollY;
       const threshold = 300;
       setIsScrolled(scrollPosition > threshold);
     };
     window.addEventListener('scroll', handleScroll);

     return () => {
       window.removeEventListener('scroll', handleScroll);
     };
   }, []);
  return (
    <motion.div
      data-aos="fade-down"
      data-aos-duration="2000"
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      initial="bg-transparent"
      animate={isScrolled ? 'bg-primary' : 'bg-transparent'}
      className="w-full grid grid-cols-8 gap-4 lg:flex justify-between px-5 py-3 items-center lg:px-10 lg:py-5"
    >
      <Link to="/">
        <img
          src={logo}
          className="motion col-span-5 w-[30px] h-[30px] lg:w-[91px] lg:h-[91px] md:w-[50px] md:h-[50px]"
        />
      </Link>
      <div className="dropdown dropdown-end col-start-5  lg:hidden col-span-2">
        <div tabIndex={0} role="button" className="  border-0  text-4xl ">
          <VscThreeBars />
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
        >
          {pages.map((link) => {
            return (
              <li
                key={link.id}
                className="mr-6 tracking-wide capitalize text-xl font-bold"
              >
                <Link to={link.to}>{link.title}</Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="hidden justify-between items-center lg:flex px-3 mr-10">
        {pages.map((link) => {
          return (
            <Link
              key={link.id}
              to={link.to}
              className="mr-8 tracking-wide hover:bg-primary focus:border-base-content focus:border-2 focus:px-2 focus:py-1  capitalize text-xl font-bold"
            >
              {link.title}
            </Link>
          );
        })}
      </div>
      <button
        className=" border-0  text-4xl md:mr-8  ease-linear col-start-7 col-span-1"
        onClick={toggleTheme}
      >
        {isDark ? <FaRegMoon /> : <FaRegSun />}
      </button>
    </motion.div>
  );
};

export default Header;
