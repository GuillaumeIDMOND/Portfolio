import LineGradient from "../components/LineGradient";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import Skills from "../assets/skills-image.png";
import {AiFillHtml5} from "react-icons/ai";
import {BiLogoCss3} from "react-icons/bi";
import {BiLogoMongodb} from "react-icons/bi";
import {TbBrandJavascript} from "react-icons/tb";
import {TbBrandTypescript} from "react-icons/tb";
import {TbBrandNextjs} from "react-icons/tb";
import {FaPhp} from "react-icons/fa";
import {FaSymfony} from "react-icons/fa";
import {FaNode} from "react-icons/fa";
import {FaReact} from "react-icons/fa";
import {FaWordpressSimple} from "react-icons/fa";
import {SiMysql} from "react-icons/si";

const MySkills = () => {
  const { t } = useTranslation();
  const isDesktop = useMediaQuery("(min-width: 1060px)");

  return (
    <section id="skills" className="pt-10 pb-24">
      {/* HEADER AND IMAGE SECTION*/}
      <div className="md:flex md:justify-between md:gap-16 mt-32">
        <motion.div
          className="md:w-1/3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="font-playfair font-semibold text-4xl mb-5">
            {t("skills.my")} <span className="text-red">SKILLS</span>
          </p>
          <LineGradient width="w-1/4 ml-9" />
          <p className="mt-10 mb-7">
            {t("skills.introduction")}

          </p>
        </motion.div>

        <div className="mt-16 md:mt-0">
          {isDesktop ? (
            <div className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-10 before:w-full  before:h-full before:border-2 before:border-blue before:z-[-1]">
              <img className="z-10" src={Skills} alt="Skills" />
            </div>
          ) : (
            <img className="z-10" src={Skills} alt="Skills" />
          )}
        </div>
      </div>

      {/* SKILLS */}
      <div className="md:flex md:justify-between mt-16 gap-32">
        {/* EXPERIENCE */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl">01</p>
              <p className="font-playfair font-semibold text-3xl mt-3">
                {t("skills.experiences")}
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-blue absolute right-0 top-0 z-[-1] rounded-top" />
          </div>
          <div className="bg-blue text-deep-blue rounded-top-left px-5 pb-5">
            <p className="pt-3 mb-3">
              {" "}
              <span className="font-semibold underline">2003:</span>{" "}
              {t("skills.2003")}
            </p>
            <p className="my-3">
              {" "}
              <span className="font-semibold underline">2004:</span>{" "}
              {t("skills.2004")}
            </p>
            <p className="my-3">
              {" "}
              <span className="font-semibold underline">2005–2006:</span>{" "}
              {t("skills.2005")}
            </p>
            <p className="my-3">
              <span className="font-semibold underline">2006–2007:</span>{" "}
              {t("skills.2006")}
            </p>
            <p className="my-3">
              <span className="font-semibold underline">2007-2012:</span>{" "}
              {t("skills.2007")}
            </p>
            <p className="my-3">
              <span className="font-semibold underline">2012-2014:</span>{" "}
              {t("skills.2012")}
            </p>
            <p className="my-3">
              <span className="font-semibold underline">2014–2016:</span>{" "}
              {t("skills.2007")}
            </p>
            <p className="my-3">
              <span className="font-semibold underline">2016–2021:</span>{" "}
              {t("skills.2016")}
            </p>
            <p className="my-3">
              <span className="font-semibold underline">2021-2022:</span>{" "}
              {t("skills.2021")}
            </p>
            <p className="my-3">
              <span className="font-semibold underline">2022-2023:</span>{" "}
              {t("skills.2022")}
            </p>
          </div>
        </motion.div>

        {/* STUDY */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl">02</p>
              <p className="font-playfair font-semibold text-3xl mt-3">
                {t("skills.study")}
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-red absolute right-0 top-0 z-[-1] rounded-top" />
          </div>
          <div className="bg-red  text-deep-blue rounded-top-left px-5 pb-5">
            <p className="pt-3 mb-3">
              {" "}
              <span className="font-semibold underline">2003:</span>{" "}
              {t("skills.study2003")}
            </p>
            <p className="my-3">
              {" "}
              <span className="font-semibold underline">2008:</span>{" "}
              {t("skills.study2008")}
            </p>
            <p className="my-3">
              {" "}
              <span className="font-semibold underline">2013:</span>{" "}
              {t("skills.study2013")}
            </p>
            <p className="my-3">
              <span className="font-semibold underline">2023:</span>{" "}
              {t("skills.study2023")}
            </p>
          </div>
        </motion.div>
        {/* SKILLS */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl">03</p>
              <p className="font-playfair font-semibold text-3xl mt-3">
                {t("skills.skills")}
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-yellow absolute right-0 top-0 z-[-1] rounded-top" />
          </div>

          <div className="bg-yellow text-deep-blue rounded-top-left pt-5 px-5 pb-5 md:flex md:flex-wrap">
            
            <div className="md:w-1/3 flex flex-col justify-between items-center">
              {/* COL 1 */}
              <div className="mb-4  ">
                <div className="d-flex">
                  <AiFillHtml5 className="icon-size my-5" />
                  <h1 className=" text-center">Html</h1>
                </div>
                <div className="d-flex align-items-center">
                  <TbBrandTypescript className="icon-size my-5" />
                  <h1 className=" text-center">TypeScript</h1>
                </div>
               
                
                <div className="">
                  <TbBrandNextjs className="icon-size my-5" />
                  <h1 className=" text-center">NextJS</h1>
                </div>
                <div className="">
                  <FaWordpressSimple className="icon-size my-5" />
                  <h1 className=" text-center">WordPress</h1>
                </div>
              </div>
            </div>

            <div className="md:w-1/3 flex flex-col justify-between items-center">
              {/* COL 2 */}
              <div className="mb-4">
                <div className="d-flex align-items-center">
                  <BiLogoCss3 className="icon-size my-5" />
                  <h1 className=" text-center">CSS</h1>
                </div>
                <div className="d-flex align-items-center">
                  <FaPhp className="icon-size my-5" />
                  <h1 className=" text-center">PHP</h1>
                </div>
                
                <div className="d-flex align-items-center">
                  <FaReact className="icon-size my-5" />
                  <h1 className=" text-center">React</h1>
                </div>
                <div className="d-flex align-items-center">
                  <SiMysql className="icon-size my-5" />
                  <h1 className=" text-center">MySQL</h1>
                </div>
              </div>
            </div>

            <div className="md:w-1/3 flex flex-col justify-between items-center">
              {/* COL 3 */}
              <div className="mb-4">
                <div className="d-flex align-items-center">
                  <TbBrandJavascript className="icon-size my-5" />
                  <h1 className=" text-center">JavaScript</h1>
                </div>
                <div className="d-flex align-items-center">
                  <FaSymfony className="icon-size my-5" />
                  <h1 className=" text-center">Symfony</h1>
                </div>
                <div className="d-flex align-items-center">
                  <FaNode className="icon-size my-5" />
                  <h1 className=" text-center">NodeJs</h1>
                </div>
                <div className="d-flex align-items-center">
                  <BiLogoMongodb className="icon-size my-5" />
                  <h1 className=" text-center">MongoDB</h1>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MySkills;
