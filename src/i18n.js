import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: 'fr',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      fr: {
        translation: {
            menu: {
                test: 'Bonjour Monde',
                home: 'Accueil',
                skills: 'Compétences',
                portfolio: 'Portfolio',
                contact: 'Contact',
                
            },
            home: {
              description: "Bienvenue sur mon portfolio. Je m’appelle Guillaume IDMOND et je suis développeur web fullstack. Passionné depuis toujours par les nouvelles technologies et curieux de nature, j'aime en apprendre toujours davantage et laisser libre cours à mon esprit créatif.",
              contactMe: 'Contactez-moi'
            },
            skills: {
              my: "MES",
              introduction: "Ci-dessous, mon parcours scolaire et professionnel ainsi que mes compétences techniques. ",
              experiences: "Expériences",
              experiencestext: "Mes expériences",
              study: "Etudes",
              mystudy: "Mes études",
              skills: "Compétences",
              myskills: "Hard skills",
              2003: "Employé agricole",
              2004: "Menuisier",
              2005: "Intérimaire et stagiaire en maintenance informatique",
              2006: "Technicien de maintenance informatique",
              2007: "Opérateur CN",
              2012: "Apprenti Boulanger",
              2016: "Autoentrepreneur en médecine douce et bien être",
              2021: "Transporteur d'enfants handicapés et Animateur du numérique",
              2022: "Formation de Développeur Web et Web Mobile Fullstack",
              study2003: "BAC STT Action Commerciale section européenne",
              study2008: "BAC Professionnel Technicien d'usinage",
              study2013: "CAP Boulanger",
              study2023: "Certification Développeur Web & Web Mobile Fullstack",
            },
            portfolio: {
              my: "MON",
              introduction: "Vous trouverez ici quelques uns de mes projets réalisés durant ma formation DWWM ou à titre personnel.",
            },
            contact: {
              contact: "POUR ME ",
              me: "CONTACTER:",
              name: "NOM",
              send: "ENVOYEZ-MOI UN MESSAGE"

            },
      }
    },
      en: {
        translation: {
            menu: {
                test: 'Hello World',
                home: 'Home',
                skills: 'Skills',
                portfolio: 'Portfolio',
                contact: 'Contact',
                
        },
            home: {
              description: "Welcome to my portfolio. My name is Guillaume IDMOND, and I work as a full-stack web developer. I've always been fascinated by new technology and curious by nature. I enjoy learning more about them and letting my creative side run free.",
              contactMe: 'Contact me'

            },
            skills: {
              my: "MY",
              introduction: "Below are my academic and professional paths and my technical skills. ",
              experiences: "Experience",
              experiencestext: "My experiences",
              study: "Study",
              mystudy: "My study",
              skills: "Skills",
              myskills: "My skills",
              2003: "Farm worker",
              2004: "Carpenter",
              2005: "Temp. worker and IT maintenance intern",
              2006: "IT maintenance technician",
              2007: "CNC Operator ",
              2012: "Apprentice Baker",
              2016: "Self-employed practitioner in holistic medicine",
              2021: "Bus driver for disabled children and Digital Facilitator",
              2022: "Fullstack Web developer course",
              study2003: "BAC STT in Business Action with European Section",
              study2008: "Professional BAC in CNC Technician",
              study2013: "Certificate of Professional Competence in Baking",
              study2023: "Fullstack Web Developer Certification",
            },
            portfolio: {
              my: "MY",
              introduction: "You can find here some projects that I completed during my DWWM formation or for my personal use.",

            },
            contact: {
              contact: "TO CONTACT ",
              me: "ME:",
              name: "NAME",
              send: "SEND ME A MESSAGE"
            },
      }
    }
}
  });

export default i18n;