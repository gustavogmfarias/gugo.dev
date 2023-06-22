import { useState } from "react";
import { Logo } from "../Logo";
import { HeaderContainer, LangDiv, LogoDiv, Menu } from "./styles";
import { NavLink } from "react-router-dom";
import { menu } from "../../TextContent/menu";
import { LinkedinLogo } from "@phosphor-icons/react";
import { useTheme } from "styled-components";
import { NextSeo } from "next-seo";

export function Header() {
  const queryParams = new URLSearchParams(window.location.search);
  const langGotByQueryParams = queryParams.get("lang") || "pt";
  const [lang, setLang] = useState(langGotByQueryParams);
  const theme = useTheme();

  <NextSeo title="gugo.dev | Gustavo Goulart" />;

  function handleSetALanguage(langguage: string) {
    setLang(langguage);
  }

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
        {menu.map((item) => (
          <NavLink
            key={`${item[lang]}`}
            to={`/${item.link}`}
            title={item[lang]}
          >
            {item[lang]}
          </NavLink>
        ))}
      </Menu>

      <LangDiv>
        <NavLink
          to={`/?lang=pt`}
          title="Português"
          onClick={() => handleSetALanguage("pt")}
        >
          <img src="src\assets\flags\flag-brazil-portugal.png"></img>
        </NavLink>
        <NavLink
          to={`/?lang=en`}
          title="English"
          onClick={() => handleSetALanguage("en")}
        >
          <img src="src\assets\flags\flag-en-us.png"></img>
        </NavLink>
        <NavLink
          to={`/?lang=es`}
          title="Español"
          onClick={() => handleSetALanguage("es")}
        >
          <img src="src\assets\flags\flag-spain.png"></img>
        </NavLink>
      </LangDiv>
    </HeaderContainer>
  );
}
