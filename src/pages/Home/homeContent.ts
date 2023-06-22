type SectionItem = {
  textShort: {
    pt: string;
    en: string;
    es: string;
  };
  textBigger: {
    pt: string;
    en: string;
    es: string;
  };
  buttonZap: {
    pt: string;
    en: string;
    es: string;
  };
  buttonCurriculum: {
    pt: string;
    en: string;
    es: string;
  };
};

export const homeContent: SectionItem[] = [
  {
    textShort: {
      pt: "Olá, sou Gustavo Goulart e este é meu currículo.",
      en: "Hello, I'm Gustavo Goulart and this is my resume.",
      es: "Hola, soy Gustavo Goulart y este es mi currículum.",
    },
    textBigger: {
      pt: "Sou programador full-stack formado pelo Instituto Federal Fluminense com especialidade em Node.JS, React.JS, React Native e PostgreSQL.",
      en: "I'm a full-stack developer graduated from the Federal Institute of Fluminense with expertise in Node.JS, React.JS, React Native, and PostgreSQL.",
      es: "Soy un desarrollador full-stack graduado del Instituto Federal Fluminense con experiencia en Node.JS, React.JS, React Native y PostgreSQL.",
    },
    buttonZap: {
      pt: "Vamos Conversar",
      en: "Let's Chat",
      es: "Vamos a conversar",
    },
    buttonCurriculum: {
      pt: "Download do Currículo",
      en: "Download Resume",
      es: "Descargar currículum",
    },
  },
];
