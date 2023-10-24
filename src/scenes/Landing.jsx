import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Profil from "../assets/photo_profil.png";
import { useTranslation } from "react-i18next";
import "../index.css";
import SocialMediaIcons from "../components/SocialMediaIcons"
import {BsMailbox} from "react-icons/bs";



const Landing = ({setSelectedPage}) => {
    const { t } = useTranslation();
    const isDesktop = useMediaQuery("(min-width: 1060px)");

    return (
      <section
        id="home"
        className="md:flex md:justify-between md:items-center md:h-full gap-16 py-10" 
      >
        {/* IMAGE SECTION */}
        <div className="md:order-2 flex justify-center basis-3/5 z-10 mt-16 md:mt-32">
          {isDesktop ? (
            <div className="relative z-0 ml-20 before:absolute before:-top-20 before:-left-20 before:rounded-full before:w-[450px] before:max-w-[450px] before:h-[450px] before:border-2 before:border-blue before:z-[-1]">
              <img
                className="rounded-circle hover:filter hover:saturate-150 transition duration-500 z-10 w-full max-w-[450px] md:max-w-[650px]"
                src={Profil}
                alt="Profil"
              />
            </div>
          ) : (
            <img
              className="rounded-circle-mobile hover:filter hover:saturate-150 transition duration-500 z-10 w-full max-w-[450px] md:max-w-[650px]"
              src={Profil}
              alt="Profil"
            />
          )}
        </div>
        {/* MAIN SECTION */}
        <div className="z-30 basis-2/5 mt-12 md:mt-32">
          {/* HEADINGS */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <p className="text-6xl font-playfair z-10 text-center md:text-start">
              Guillaume {""}
              <span className="xs: relative xs:text-deep-blue xs:font-semibold z-20 xs:before:content-brush before:absolute before:-left-[33px] before:-top-[75px] before:z-[-1]">
                IDMOND
              </span>
            </p>
         
                <p className="mt-10 mb-7 text-sm text-center md:text-start" >
                  {t("home.description")}
                </p>
            
          </motion.div>
          {/*CALL TO ACTIONS*/}
          <motion.div
            className="flex mt-5 justify-center md:justify-start"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <AnchorLink
              className="bg-gradient-rainblue text-deep-blue rounded-sm py-3 px-7 font-semibold hover:bg-blue hover:text-white transition duration-500"
              onClick={() => setSelectedPage("contact")}
              href="#contact"
            >
              {t("home.contactMe")}
            </AnchorLink>
            <AnchorLink
              className="rounded-r-sm bg-gradient-rainblue py-0.5 pr-0.5"
              onClick={() => setSelectedPage("contact")}
              href="#contact"
            >
              <div className="bg-deep-blue hover:text-red transition duration-500 w-full h-full flex items-center justify-center font-playfair px-10">
                < BsMailbox className="w-8 h-8"/>
              </div>
            </AnchorLink>
          </motion.div>
          <motion.div
            className="flex mt-5 justify-center md:justify-start"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <SocialMediaIcons />
          </motion.div>
        </div>
      </section>
    );
};

export default Landing;