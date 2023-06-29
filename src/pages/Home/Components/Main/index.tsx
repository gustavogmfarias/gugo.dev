import { useTheme } from "styled-components";
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
    const response = await api.get<MainContent>("/home");
    setMainContent(response.data);
    return response.data;
  }

  useEffect(() => {
    fetchMainContent();
  }, []);

  return (
    <MainContainer>
      <ImageContainer>
        <img src="src\assets\foto-inicial.png" alt="Imagem inicial" />
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
            <img src="src\assets\icons\nodejs.png" alt="Node.js" />
            <img src="src\assets\icons\react.png" alt="React" />
            <img src="src\assets\icons\postgres.png" alt="PostgreSQL" />
            <img src="src\assets\icons\js.png" alt="JavaScript" />
            <img src="src\assets\icons\docker.png" alt="Docker" />
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
