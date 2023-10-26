import { useTranslation } from "react-i18next";
import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";
import { AiFillGithub } from "react-icons/ai";
import { TbWorldWww } from "react-icons/tb";
import portfolio from "../assets/portfolio.jpg";
import appMeteo from "../assets/meteo.jpg";
import projet4 from "../assets/ecommerce.jpg";
import projet6 from "../assets/mobione.jpeg";

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Portfolio = () => {
  const { t } = useTranslation();

  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
  bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;
  return (
    <section id="portfolio" className="pt-48 pb-48">
      {/* HEADINGS */}
      <motion.div
        className="md:w-2/5 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-4xl">
            <span className="text-blue">{t("portfolio.my")} PORT</span>
        FOLIO
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-1/3" />
          </div>
        </div>
        <p className="mt-10 mb-10">
          {t("portfolio.introduction")}
        </p>
      </motion.div>

      {/* PROJECTS */}
      <div className="flex justify-center">
        <motion.div
          className="sm:grid sm:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* ROW 1 */}
          {/* Pink Square */}
          <div
            className="flex justify-center text-center items-center p-10 bg-red
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
          >
          </div>
          {/* Projet 1 */}
          <motion.div variants={projectVariant} className="relative">
            <div className={overlayStyles}>
            
            <p className="text-2xl font-playfair">Portfolio</p>
              <p className="mt-7">Le portfolio sur lequel vous naviguez. Réalisé en React </p>

              <div className="absolute right-4 bottom-4 flex gap-2">
                <a
                  className="hover:opacity-50 transtion duration-500 tooltip"
                  href="https://github.com/GuillaumeIDMOND/Portfolio"
                  target="_blank"
                  rel="noreferrer"
                  data-tooltip="GitHub du projet"
                >
                  <AiFillGithub className="w-[31px] h-[31px]" />
                </a>
                <a
                  className="hover:opacity-50 transtion duration-500 tooltip2"
                  href="https://portfolio-guillaume-idmond.web.app/"
                  target="_blank"
                  rel="noreferrer"
                  data-tooltip="Lien vers le projet"
                >
                  <TbWorldWww className="w-[31px] h-[31px]" />
                </a>
              </div>
            </div>
            <img src={portfolio} className="max-w-[400px] max-h-[400px]" alt="projet1" />
          </motion.div>
          {/* Yellow Square */}
          <div
            className="flex justify-center text-center items-center p-10 bg-yellow
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
          >    
          </div>

          {/* ROW 2 */}
          {/* Projet 2 */}
          <motion.div variants={projectVariant} className="relative">
            <div className={overlayStyles}>
            <p className="text-2xl font-playfair">AppMétéOo</p>
              <p className="mt-7">Projet réalisé lors de la formation DWWM. Le sujet était la découverte et l'utilistation d'Api. Cette app est construite en JavaScript natif et fonctionne grâce à l'Api d'OpenWeather.</p>
              <div className="absolute right-4 bottom-4 flex gap-2">
                <a
                  className="hover:opacity-50 transtion duration-500 tooltip"
                  href="https://github.com/GuillaumeIDMOND/app-meteo"
                  target="_blank"
                  rel="noreferrer"
                  data-tooltip="GitHub du projet"
                >
                  <AiFillGithub className="w-[31px] h-[31px]" />
                </a>
                <a
                  className="hover:opacity-50 transtion duration-500 tooltip2"
                  href="https://appmeteoo.web.app/"
                  target="_blank"
                  rel="noreferrer"
                  data-tooltip="Lien vers le projet"
                >
                  <TbWorldWww className="w-[31px] h-[31px]" />
                </a>
              </div>
            </div>
            <img src={appMeteo} alt="projet3" />
          </motion.div>
          {/* Gradient Square */}
          <div
            className="flex justify-center text-center items-center p-10 gradient-box
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
          >
          </div>

          {/* Projet 3 */}
          <motion.div variants={projectVariant} className="relative">
            <div className={overlayStyles}>
              <p className="text-2xl font-playfair">E-Commerce</p>
              <p className="mt-7">Site de e-commerce, en cours de réalisation...</p>
              {/* <div className="absolute right-4 bottom-4 flex gap-2">
                <a
                  className="hover:opacity-50 transtion duration-500"
                  href="https://github.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <AiFillGithub className="w-[31px] h-[31px]" />
                </a>
                <a
                  className="hover:opacity-50 transtion duration-500"
                  href="https://github.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <TbWorldWww className="w-[31px] h-[31px]" />
                </a>
              </div> */}
            </div>
            <img src={projet4} alt="projet4" />
          </motion.div>

          {/* ROW 3 */}

          {/* Purple Square */}
          <div
            className="flex justify-center text-center items-center p-10 bg-purple
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
          >  </div>
          {/* Projet 4 */}
          <motion.div variants={projectVariant} className="relative">
            <div className={overlayStyles}>
              <p className="text-2xl font-playfair">MobiOneApp</p>
              <p className="mt-7">Une application back-office de gestion des stocks et conception et gestion de rapports d'intervention réalisée durant la période de stage de DWWM. En cours de réalisation...</p>
              {/* <div className="absolute right-4 bottom-4 flex gap-2">
                <a
                  className="hover:opacity-50 transtion duration-500"
                  href="https://github.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <AiFillGithub className="w-[31px] h-[31px]" />
                </a>
                <a
                  className="hover:opacity-50 transtion duration-500"
                  href="https://github.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <TbWorldWww className="w-[31px] h-[31px]" />
                </a>
              </div> */}
            </div>
            <img src={projet6} alt="projet6" />
          </motion.div>
        {/* Blue Square */}
          <div
            className="flex justify-center text-center items-center p-10 bg-blue
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
          >    
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
