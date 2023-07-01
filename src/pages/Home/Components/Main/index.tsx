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
import { Loading } from "../../../../Components/Loading";

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

  const [isLoading, setIsLoading] = useState(false);

  const { lang } = useLanguage();

  async function fetchMainContent(): Promise<MainContent | undefined> {
    if (process.env.NODE_ENV === "development") {
      try {
        setIsLoading(true);
        const response = await api.get<MainContent>("/home");
        setMainContent(response.data);
        setIsLoading(false);
        return response.data;
      } catch (err) {
        console.error(err);
        setIsLoading(false);
      }
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
            {mainContent ? (
              <p>
                {
                  mainContent.homeTextDescription.text1[
                    lang as keyof TextContent
                  ]
                }
              </p>
            ) : (
              <Loading />
            )}
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
          {mainContent ? (
            <p>
              {mainContent.homeTextDescription.text2[lang as keyof TextContent]}
            </p>
          ) : (
            <Loading />
          )}
          <ButtonsContainer>
            {mainContent ? (
              <>
                <Button variant="full">
                  <a
                    href={
                      mainContent.buttons.chatButton[lang as keyof TextContent]
                        .link
                    }
                  >
                    {
                      mainContent.buttons.chatButton[
                        lang as keyof ButtonTextContent
                      ].text
                    }
                  </a>
                </Button>
                <Button variant="stroke">
                  <a
                    href={
                      mainContent.buttons.downloadCurriculumButton[
                        lang as keyof TextContent
                      ].link
                    }
                  >
                    {
                      mainContent.buttons.downloadCurriculumButton[
                        lang as keyof ButtonTextContent
                      ].text
                    }
                  </a>
                </Button>
              </>
            ) : (
              <Loading />
            )}
          </ButtonsContainer>
        </BodyContentContainer>
      </MainContentContainer>
    </MainContainer>
  );
}
