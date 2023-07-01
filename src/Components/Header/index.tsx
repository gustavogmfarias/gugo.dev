import { useEffect, useState } from "react";
import { Logo } from "../Logo";
import { HeaderContainer, LangDiv, LogoDiv, Menu } from "./styles";
import { NavLink } from "react-router-dom";
import { LinkedinLogo } from "@phosphor-icons/react";
import { useLanguage } from "../../hooks/useLanguage";
import { api } from "../../libs/axios";
import { useTheme } from "styled-components";

import flagBrazilPortugal from "../../assets/flags/flag-brazil-portugal.png";
import flagEnUs from "../../assets/flags/flag-en-us.png";
import flagSpain from "../../assets/flags/flag-spain.png";
import { pageContent } from "../../../pageContent";
import { Loading } from "../Loading";
interface MenuItemName {
  en: string;
  es: string;
  pt: string;
}
interface MenuItem {
  name: MenuItemName;
  link: string;
}

interface MenuContent {
  menu: MenuItem[];
}

export function Header() {
  const theme = useTheme();
  const [menuContent, setMenuContent] = useState<MenuContent | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const { lang, handleSetLanguage } = useLanguage();

  async function fetchHomeContent(): Promise<MenuContent | undefined> {
    if (process.env.NODE_ENV === "development") {
      try {
        setIsLoading(true);
        const response = await api.get<MenuContent>("/home");
        setMenuContent(response.data);
        setIsLoading(false);
        return response.data;
      } catch (err) {
        setIsLoading(false);
        console.error(err);
      }
    } else {
      const { home } = pageContent;
      setMenuContent(home);

      return home;
    }
  }

  useEffect(() => {
    fetchHomeContent();
  }, []);

  return (
    <HeaderContainer>
      <LogoDiv>
        <NavLink
          to="https://www.linkedin.com/in/gustavogmfarias"
          title="Logo do Linkedin"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedinLogo
            size={30}
            color={theme["green-300"]}
            style={{ display: "flex" }}
            alt="Logo do Linkedin"
          />
        </NavLink>
        <NavLink to="/" title="Logo do gugo.dev">
          <Logo />
        </NavLink>
      </LogoDiv>
      <Menu>
        {isLoading ? (
          <Loading />
        ) : (
          menuContent?.menu.map((item) => (
            <NavLink
              key={`${item.name[lang as keyof typeof item.name]}`}
              to={`/${item.link}`}
              title={item.name[lang as keyof typeof item.name]}
            >
              {item.name[lang as keyof typeof item.name]}
            </NavLink>
          ))
        )}
      </Menu>

      <LangDiv>
        <NavLink
          to={`/?lang=pt`}
          title="Português"
          onClick={() => handleSetLanguage("pt")}
        >
          <img src={flagBrazilPortugal} alt="Português" />
        </NavLink>
        <NavLink
          to={`/?lang=en`}
          title="English"
          onClick={() => handleSetLanguage("en")}
        >
          <img src={flagEnUs} alt="English" />
        </NavLink>
        <NavLink
          to={`/?lang=es`}
          title="Español"
          onClick={() => handleSetLanguage("es")}
        >
          <img src={flagSpain} alt="Español" />
        </NavLink>
      </LangDiv>
    </HeaderContainer>
  );
}
