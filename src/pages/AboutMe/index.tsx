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
import { Gift, IdentificationBadge, Phone } from "@phosphor-icons/react";
import { useTheme } from "styled-components";
import { api } from "../../libs/axios";
import { pageContent } from "../../../pageContent";
import { Loading } from "../../Components/Loading";

import dayjs from "dayjs";
interface LanguageProps {
  en: string;
  es: string;
  pt: string;
}

interface NestedLanguageProps {
  label: LanguageProps;
  data: LanguageProps | string;
}

interface PhoneProps {
  label: LanguageProps;
  data: {
    country: string;
    countryCode: string;
    stateCode: string;
    phoneNumber: string;
  };
}

interface StateProps {
  label: LanguageProps;
  data: {
    name: NestedLanguageProps;
    acronym: NestedLanguageProps;
  };
}

interface AddressProps {
  label: LanguageProps;
  data: {
    street: NestedLanguageProps;
    houseNumber: NestedLanguageProps;
    city: NestedLanguageProps;
    state: StateProps;
    country: NestedLanguageProps;
  };
}

interface ChildrenProps {
  label: LanguageProps;
  data: {
    name: string;
    dateOfBirth: string;
  }[];
}

interface AboutMeContent {
  nameOfSection: LanguageProps;
  intro: LanguageProps;
  name: NestedLanguageProps;
  birthDate: NestedLanguageProps;
  phone: PhoneProps;
  nationality: NestedLanguageProps;
  address: AddressProps;
  birthPlace: NestedLanguageProps;
  maritalStatus: NestedLanguageProps;
  children: ChildrenProps;
  interests: {
    label: LanguageProps;
    data: {
      en: string[];
      es: string[];
      pt: string[];
    };
  };
}

export function AboutMe() {
  const [aboutMeContent, setAboutMeContent] = useState<AboutMeContent | null>(
    null
  );

  const [isLoading, setIsLoading] = useState(false);

  const { lang } = useLanguage();

  async function fetchAboutMeContent(): Promise<AboutMeContent> {
    if (process.env.NODE_ENV === "development") {
      try {
        setIsLoading(true);
        const response = await api.get<AboutMeContent>("/aboutme");
        setAboutMeContent(response.data);

        setIsLoading(false);
        return response.data;
      } catch (err) {
        console.error(err);
        const { aboutme } = pageContent;
        setAboutMeContent(aboutme);
        setIsLoading(false);
        return aboutme;
      }
    } else {
      const { aboutme } = pageContent;
      setAboutMeContent(aboutme);

      return aboutme;
    }
  }

  useEffect(() => {
    fetchAboutMeContent();
  }, []);

  const theme = useTheme();

  return (
    <Container>
      <Header>
        <IdentificationBadge size={32} color={theme["green-300"]} />
        {isLoading ? (
          <Loading />
        ) : (
          <p>{aboutMeContent?.nameOfSection[lang as keyof LanguageProps]}</p>
        )}
      </Header>
      <MainContainer>
        <div>
          <p>INTRO</p>
        </div>
        <div>
          {isLoading ? (
            <Loading />
          ) : (
            <p>{aboutMeContent?.intro[lang as keyof LanguageProps]}</p>
          )}
        </div>
      </MainContainer>

      <PersonalDetailsContainer>
        {isLoading ? (
          <Loading />
        ) : (
          <>
            <PersonalDetail
              variant="full"
              label={
                aboutMeContent?.name?.label[lang as keyof LanguageProps] ?? ""
              }
              icon={
                <IdentificationBadge size={40} color={theme["yellow-300"]} />
              }
              info={aboutMeContent?.name.data as string}
            ></PersonalDetail>
            <PersonalDetail
              variant="transparent"
              label={
                aboutMeContent?.birthDate?.label[lang as keyof LanguageProps] ??
                ""
              }
              icon={<Gift size={40} color={theme["gray-600"]} />}
              info={`${dayjs(aboutMeContent?.birthDate.data as string)
                .add(1, "day")
                .format("DD/MM/YYYY")} (${Math.floor(
                dayjs().diff(
                  dayjs(aboutMeContent?.birthDate.data as string),
                  "year"
                )
              )} anos)`}
            ></PersonalDetail>
            <PersonalDetail
              variant="full"
              label={
                aboutMeContent?.phone?.label[lang as keyof LanguageProps] ?? ""
              }
              icon={<Phone size={40} color={theme["yellow-300"]} />}
              info={`0${aboutMeContent?.phone?.data.countryCode} ${aboutMeContent?.phone?.data.stateCode} ${aboutMeContent?.phone?.data.phoneNumber}`}
            ></PersonalDetail>
          </>
        )}
      </PersonalDetailsContainer>
      <ButtonsContainer>
        <Button variant="full">linkedin.com/in/gustavogmfarias</Button>
        <Button variant="transparent">github.com/gustavogmfarias</Button>
      </ButtonsContainer>
    </Container>
  );
}
