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
import {
  Baby,
  Flag,
  Gift,
  GithubLogo,
  GlobeStand,
  HouseLine,
  IdentificationBadge,
  LinkedinLogo,
  MapPin,
  MonitorPlay,
  Phone,
} from "@phosphor-icons/react";
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

            <PersonalDetail
              variant="transparent"
              label={
                aboutMeContent?.nationality?.label[
                  lang as keyof LanguageProps
                ] ?? ""
              }
              icon={<GlobeStand size={40} color={theme["gray-600"]} />}
              info={
                aboutMeContent?.nationality.data[
                  lang as keyof typeof aboutMeContent.nationality.data
                ] || ""
              }
            ></PersonalDetail>
            <PersonalDetail
              variant="full"
              label={
                aboutMeContent?.address?.label[lang as keyof LanguageProps] ??
                ""
              }
              icon={<MapPin size={40} color={theme["yellow-300"]} />}
              info={`${
                aboutMeContent?.address?.data.street.data[
                  lang as keyof typeof aboutMeContent.address.data.street.data
                ]
              }, ${aboutMeContent?.address?.data.houseNumber.data}, ${
                aboutMeContent?.address?.data.city.data
              }-${aboutMeContent?.address?.data.state.data.acronym.data}, ${
                aboutMeContent?.address?.data.country.data[
                  lang as keyof typeof aboutMeContent.address.data.country.data
                ]
              }`}
            ></PersonalDetail>
            <PersonalDetail
              variant="transparent"
              label={
                aboutMeContent?.birthPlace?.label[
                  lang as keyof LanguageProps
                ] ?? ""
              }
              icon={<Flag size={40} color={theme["gray-600"]} />}
              info={`${aboutMeContent?.birthPlace?.data}`}
            ></PersonalDetail>

            <PersonalDetail
              variant="full"
              label={
                aboutMeContent?.maritalStatus?.label[
                  lang as keyof LanguageProps
                ] ?? ""
              }
              icon={<HouseLine size={40} color={theme["yellow-300"]} />}
              info={`${
                aboutMeContent?.maritalStatus.data[
                  lang as keyof typeof aboutMeContent.maritalStatus.data
                ]
              }`}
            ></PersonalDetail>
            <PersonalDetail
              variant="transparent"
              label={
                aboutMeContent?.children?.label[lang as keyof LanguageProps] ??
                ""
              }
              icon={<Baby size={40} color={theme["gray-600"]} />}
              info={`01 ${
                lang === "pt" ? "filho" : lang === "es" ? "hijo" : "child"
              }${lang === "pt" ? " de" : ","}  ${dayjs().diff(
                aboutMeContent?.children?.data?.[0]?.dateOfBirth,
                "years"
              )} ${
                lang === "pt" ? "anos" : lang === "es" ? "años" : "years old"
              } `}
            ></PersonalDetail>
            <PersonalDetail
              variant="full"
              label={
                aboutMeContent?.interests?.label[lang as keyof LanguageProps] ??
                ""
              }
              icon={<MonitorPlay size={40} color={theme["yellow-300"]} />}
              info={`${aboutMeContent?.interests?.data[
                lang as keyof LanguageProps
              ].join(", ")}`}
            ></PersonalDetail>
          </>
        )}
      </PersonalDetailsContainer>
      <ButtonsContainer>
        <Button
          variant="full"
          onClick={() =>
            window.open("https://linkedin.com/in/gustavogmfarias", "_blank")
          }
        >
          <LinkedinLogo
            size={45}
            style={{ verticalAlign: "middle", color: theme["green-300"] }}
          />
          linkedin.com/in/gustavogmfarias
        </Button>
        <Button
          variant="transparent"
          onClick={() =>
            window.open("https://github.com/gustavogmfarias", "_blank")
          }
        >
          <GithubLogo
            size={45}
            style={{ verticalAlign: "middle", color: theme["gray-600"] }}
          />
          github.com/gustavogmfarias
        </Button>
      </ButtonsContainer>
    </Container>
  );
}
