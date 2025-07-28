import SingleContactSocial from "./SingleContactSocial";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";

const ContactSocial = () => {
  return (
    <div className="flex gap-4">
      <SingleContactSocial link="https://www.linkedin.com/in/laziz-kenjayev" Icon={FaLinkedinIn} />
      <SingleContactSocial link="https://github.com/KenjayevLaziz" Icon={FiGithub} />
      <SingleContactSocial link="https://www.instagram.com/laziz_11_25" Icon={FaInstagram} />
      <SingleContactSocial link="https://t.me/kenjayevL" Icon={FaTelegram} />
    </div>
  );
};

export default ContactSocial;
