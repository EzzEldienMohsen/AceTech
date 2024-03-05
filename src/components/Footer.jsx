import { Link } from 'react-router-dom';
import { pages } from '../assets';
import Icons from './Icons';

const Footer = () => {
  return (
    <div className="px-5 py-8 flex flex-col justify-center items-center border-t-2 border-t-base-content md:flex-row md:justify-between md:gap-5">
      <div className="flex items-center justify-center mt-4 mb-2 gap-3 lg:gap-6">
        {pages.map((link) => {
          return (
            <Link
              key={link.id}
              className="text-md text-semibold capitalize lg:text-xl"
              to={link.to}
            >
              {link.title}
            </Link>
          );
        })}
      </div>
      <Icons />
      <Link
        to="/privacy"
        className="text-md text-semibold capitalize lg:text-xl"
      >
        privacy policy
      </Link>
    </div>
  );
};

export default Footer;
