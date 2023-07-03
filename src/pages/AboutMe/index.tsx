import { useEffect, useState } from "react";
import { useLanguage } from "../../hooks/useLanguage";
import { PersonalDetail } from "./PersonalDetail";
import {
  Button,
  ButtonsContainer,
  Container,
  Header,
  MainContainer,
  PersonalDetailsContainer,
} from "./styles";
import { IdentificationBadge } from "@phosphor-icons/react";
import { useTheme } from "styled-components";
import { api } from "../../libs/axios";
import { pageContent } from "../../../pageContent";
import { Loading } from "../../Components/Loading";

interface LanguageProps {
  en: string;
  es: string;
  pt: string;
}

interface PhoneProps {
  country: string;
  countryCode: string;
  stateCode: string;
  phoneNumber: string;
}

interface StateProps {
  name: string;
  acronym: string;
}

interface AddressProps {
  street: LanguageProps;
  houseNumber: string;
  city: string;
  state: StateProps;
  country: LanguageProps;
}

interface ChildrenProps {
  name: string;
  dateOfBirth: string;
}

interface InterestsProps {
  en: string[];
  es: string[];
  pt: string[];
}

interface AboutMeContent {
  nameOfSection: LanguageProps;
  intro: LanguageProps;
  name: string;
  birthDate: string;
  phone: PhoneProps;
  nationality: LanguageProps;
  address: AddressProps;
  birthPlace: string;
  maritalStatus: LanguageProps;
  children: ChildrenProps[];
  interests: InterestsProps;
}

export function AboutMe() {
  const [aboutMeContent, setAboutMeContent] = useState<AboutMeContent | null>(
    null
  );

  const [isLoading, setIsLoading] = useState(false);

  const { lang } = useLanguage();

  async function fetchMainContent(): Promise<AboutMeContent | undefined> {
    if (process.env.NODE_ENV === "development") {
      try {
        setIsLoading(true);
        const response = await api.get<AboutMeContent>("/aboutme");
        setAboutMeContent(response.data);

        setIsLoading(false);
        return response.data;
      } catch (err) {
        console.error(err);
        setIsLoading(false);
      }
    } else {
      const { aboutme } = pageContent;
      setAboutMeContent(aboutme);

      return aboutme;
    }
  }

  useEffect(() => {
    fetchMainContent();
  }, []);

  const theme = useTheme();

  return (
    <Container>
      <Header>
        <IdentificationBadge size={32} color={theme["green-300"]} />
        {isLoading ? (
          <p>{aboutMeContent?.nameOfSection[lang as keyof LanguageProps]}</p>
        ) : (
          <Loading />
        )}
      </Header>
      <MainContainer>
        <div>
          <p>INTRO</p>
        </div>
        <div>
          {isLoading ? (
            <p>{aboutMeContent?.intro[lang as keyof LanguageProps]}</p>
          ) : (
            <Loading />
          )}
        </div>
      </MainContainer>

      <PersonalDetailsContainer>
        <PersonalDetail
          variant="full"
          label=""
          icon=""
          info=""
        ></PersonalDetail>
      </PersonalDetailsContainer>
      <ButtonsContainer>
        <Button variant="full">linkedin.com/in/gustavogmfarias</Button>
        <Button variant="transparent">github.com/gustavogmfarias</Button>
      </ButtonsContainer>
    </Container>
  );
}
