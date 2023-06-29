import { useEffect, useState } from "react";
import { Logo } from "../Logo";
import { HeaderContainer, LangDiv, LogoDiv, Menu } from "./styles";
import { NavLink } from "react-router-dom";
import { LinkedinLogo } from "@phosphor-icons/react";
import { useTheme } from "styled-components";
import { useLanguage } from "../../hooks/useLanguage";
import { api } from "../../libs/axios";

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

  const { lang, handleSetLanguage } = useLanguage();

  async function fetchHomeContent(): Promise<MenuContent> {
    const response = await api.get<MenuContent>("/home");
    setMenuContent(response.data);
    return response.data;
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
        {menuContent?.menu.map((item) => (
          <NavLink
            key={`${item.name[lang as keyof typeof item.name]}`}
            to={`/${item.link}`}
            title={item.name[lang as keyof typeof item.name]}
          >
            {item.name[lang as keyof typeof item.name]}
          </NavLink>
        ))}
      </Menu>

      <LangDiv>
        <NavLink
          to={`/?lang=pt`}
          title="Português"
          onClick={() => handleSetLanguage("pt")}
        >
          <img
            src="src\assets\flags\flag-brazil-portugal.png"
            alt="Português"
          />
        </NavLink>
        <NavLink
          to={`/?lang=en`}
          title="English"
          onClick={() => handleSetLanguage("en")}
        >
          <img src="src\assets\flags\flag-en-us.png" alt="English" />
        </NavLink>
        <NavLink
          to={`/?lang=es`}
          title="Español"
          onClick={() => handleSetLanguage("es")}
        >
          <img src="src\assets\flags\flag-spain.png" alt="Español" />
        </NavLink>
      </LangDiv>
    </HeaderContainer>
  );
}
