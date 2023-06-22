import {
  BodyContentContainer,
  ButtonsContainer,
  HeadContentContainer,
  IconsTechContainer,
  ImageContainer,
  MainContainer,
  MainContentContainer,
} from "./styles";

export function Main() {
  return (
    <MainContainer>
      <ImageContainer>
        <img src="src\assets\foto-inicial.png"></img>
      </ImageContainer>
      <MainContentContainer>
        <HeadContentContainer>
          <div>
            <p>Olá, sou Gustavo Goulart e este é meu curriculum</p>
          </div>
          <IconsTechContainer>
            <img src="src\assets\icons\nodejs.png"></img>
            <img src="src\assets\icons\react.png"></img>
            <img src="src\assets\icons\postgres.png"></img>
            <img src="src\assets\icons\js.png"></img>
            <img src="src\assets\icons\docker.png"></img>
          </IconsTechContainer>
        </HeadContentContainer>
        <BodyContentContainer>
          <p>
            Sou programador full-stack formado pelo Instituto Federal Fluminense
            com especialidade em Node.JS, React.JS, React Native e PostgreSQL.
          </p>
          <ButtonsContainer>
            <button>Vamos conversar</button>
            <button>Download Curriculum</button>
          </ButtonsContainer>
        </BodyContentContainer>
      </MainContentContainer>
    </MainContainer>
  );
}
