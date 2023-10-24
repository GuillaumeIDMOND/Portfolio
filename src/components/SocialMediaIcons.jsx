import Linkedin from "../assets/linkedin.png";
import { AiFillGithub } from "react-icons/ai";

const SocialMediaIcons = () => {
  return (
    <div className="flex justify-center md:justify-start my-10 gap-7">
      <a
        className="hover:opacity-50 transtion duration-500"
        href="https://www.linkedin.com/in/guillaume-idmond-854b1a262/"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="linkedin-link" src={Linkedin} />
      </a>
      <a
        className="hover:opacity-50 transtion duration-500"
        href="https://github.com/"
        target="_blank"
        rel="noreferrer"
      >
        <AiFillGithub className="w-[31px] h-[31px]" />
      </a>
     
    </div>
  );
};

export default SocialMediaIcons;
