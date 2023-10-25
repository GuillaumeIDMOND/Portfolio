import Linkedin from "../assets/linkedin.png";
import { AiFillGithub } from "react-icons/ai";
import { BsFiletypePdf } from "react-icons/bs";
import PdfFile from "../assets/CvIDMONDGuillaume.pdf"

const SocialMediaIcons = () => {

  const downloadCV = () => {

    const link = document.createElement('a');
    link.href = PdfFile;
    link.download = '../assets/CvIDMONDGuillaume.pdf';
    link.click();
  }
  return (
    <div className="flex justify-center md:justify-start my-10 gap-7">
      <p>Mes reseaux:</p>
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
        href="https://github.com/GuillaumeIDMOND"
        target="_blank"
        rel="noreferrer"
      >
        <AiFillGithub className="w-[31px] h-[31px]" />
      </a>
       <p>Mon Cv:</p>
        <BsFiletypePdf 
        className="w-[31px] h-[31px] hover:opacity-50 transtion duration-500" 
        onClick={downloadCV}
        style={{ cursor: 'pointer' }}
        target="_blank" 
        rel="noreferrer"  />
     
    </div>
  );
};

export default SocialMediaIcons;
