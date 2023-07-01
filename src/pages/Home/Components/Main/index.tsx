import {
  BodyContentContainer,
  Button,
  ButtonsContainer,
  HeadContentContainer,
  IconsTechContainer,
  ImageContainer,
  MainContainer,
  MainContentContainer,
} from "./styles";
import { useLanguage } from "../../../../hooks/useLanguage";
import { useEffect, useState } from "react";
import { api } from "../../../../libs/axios";

import fotoInicial from "../../../../assets/foto-inicial.png";
import nodejsIcon from "../../../../assets/icons/nodejs.png";
import reactIcon from "../../../../assets/icons/react.png";
import postgresIcon from "../../../../assets/icons/postgres.png";
import jsIcon from "../../../../assets/icons/js.png";
import dockerIcon from "../../../../assets/icons/docker.png";
import { pageContent } from "../../../../../pageContent";

interface TextContent {
  en: string;
  es: string;
  pt: string;
}

interface LanguageButton {
  text: string;
  link: string;
}
interface ButtonTextContent {
  en: LanguageButton;
  es: LanguageButton;
  pt: LanguageButton;
}

interface Buttons {
  chatButton: ButtonTextContent;
  downloadCurriculumButton: ButtonTextContent;
}
interface MainTextDescription {
  text1: TextContent;
  text2: TextContent;
}

interface MainContent {
  buttons: Buttons;
  homeTextDescription: MainTextDescription;
}

export function Main() {
  const [mainContent, setMainContent] = useState<MainContent | null>(null);

  const { lang } = useLanguage();

  async function fetchMainContent(): Promise<MainContent> {
    if (process.env.NODE_ENV === "production") {
      const response = await api.get<MainContent>("/home");
      setMainContent(response.data);
      return response.data;
    } else {
      const { home } = pageContent;
      setMainContent(home);

      return home;
    }
  }

  useEffect(() => {
    fetchMainContent();
  }, []);

  return (
    <MainContainer>
      <ImageContainer>
        <img src={fotoInicial} alt="Imagem inicial" />
      </ImageContainer>
      <MainContentContainer>
        <HeadContentContainer>
          <div>
            <p>
              {
                mainContent?.homeTextDescription.text1[
                  lang as keyof TextContent
                ]
              }
            </p>
          </div>
          <IconsTechContainer>
            <img src={nodejsIcon} alt="Node.js" />
            <img src={reactIcon} alt="React" />
            <img src={postgresIcon} alt="PostgreSQL" />
            <img src={jsIcon} alt="JavaScript" />
            <img src={dockerIcon} alt="Docker" />
          </IconsTechContainer>
        </HeadContentContainer>
        <BodyContentContainer>
          <p>
            {mainContent?.homeTextDescription.text2[lang as keyof TextContent]}
          </p>
          <ButtonsContainer>
            <Button variant="full">
              <a
                href={
                  mainContent?.buttons.chatButton[lang as keyof TextContent]
                    .link
                }
              >
                {
                  mainContent?.buttons.chatButton[
                    lang as keyof ButtonTextContent
                  ].text
                }
              </a>{" "}
            </Button>

            <Button variant="stroke">
              <a
                href={
                  mainContent?.buttons.downloadCurriculumButton[
                    lang as keyof TextContent
                  ].link
                }
              >
                {
                  mainContent?.buttons.downloadCurriculumButton[
                    lang as keyof ButtonTextContent
                  ].text
                }
              </a>
            </Button>
          </ButtonsContainer>
        </BodyContentContainer>
      </MainContentContainer>
    </MainContainer>
  );
}
