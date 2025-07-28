import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import SingleInfo from "./SingleInfo";

const ContactInfo = () => {
  return (
    <div className="flex flex-col gap-4">
      <SingleInfo text="lazizkenjayev1825@gmail.com" Image={HiOutlineMail} />
      <SingleInfo text="+99890 669 18 25" Image={FiPhone} />
      <SingleInfo text="Uzbekistan, Qashqadaryo" Image={IoLocationOutline} />
    </div>
  );
};

export default ContactInfo;
