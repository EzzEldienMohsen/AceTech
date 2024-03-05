import {
  FaSquareInstagram,
  FaLinkedin,
  FaXTwitter,
  FaSquareFacebook,
  FaTiktok,
  FaWhatsapp,
} from 'react-icons/fa6';
const Icons = () => {
  return (
    <div className="flex items-center justify-center mt-4 mb-2 gap-5">
      <a
        className="text-md text-semibold bg-transparent md:text-2xl"
        href="https://www.facebook.com/acetechmarketingsolutions/"
        target="_blank"
      >
        <FaSquareFacebook />
      </a>
      <a
        className="text-md text-semibold bg-transparent md:text-2xl"
        href="https://twitter.com/AceTech_agency"
        target="_blank"
      >
        <FaXTwitter />
      </a>
      <a
        className="text-md text-semibold bg-transparent md:text-2xl"
        href="https://www.instagram.com/ace._tech/"
        target="_blank"
      >
        <FaSquareInstagram />
      </a>
      <a
        className="text-md text-semibold bg-transparent md:text-2xl"
        href="https://www.linkedin.com/company/ace-tech-marketing-solutions/"
        target="_blank"
      >
        <FaLinkedin />
      </a>
      <a
        className="text-md text-semibold bg-transparent md:text-2xl"
        href="https://www.tiktok.com/@acetechmarketing1"
        target="_blank"
      >
        <FaTiktok />
      </a>
      <a
        className="text-md text-semibold bg-transparent md:text-2xl"
        href="https://api.whatsapp.com/send?phone=201080387517"
        target="_blank"
      >
        <FaWhatsapp />
      </a>
    </div>
  );
};

export default Icons;
