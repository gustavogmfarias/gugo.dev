import { PersonalDetail } from "./PersonalDetail";
import {
  Container,
  Header,
  MainContainer,
  PersonalDetailsContainer,
} from "./styles";
import { IdentificationBadge } from "@phosphor-icons/react";
import { useTheme } from "styled-components";

export function AboutMe() {
  const theme = useTheme();
  return (
    <Container>
      <Header>
        <IdentificationBadge size={32} color={theme["green-300"]} />
        <p>Sobre mim</p>
      </Header>
      <MainContainer>
        <div>
          <p>INTRO</p>
        </div>
        <div>
          <p>
            Comecei minha carreira aos 14 anos como designer gráfico, utilizando
            o Photoshop como minha principal ferramenta. Posteriormente,
            trabalhei 09 anos com marketing digital. No entanto, aos 27 anos,
            decidi seguir meu sonho de me tornar programador e embarquei nessa
            nova jornada. Recentemente, aos 31 anos, obtive minha formação
            acadêmica em Sistemas de Informação em uma das melhores faculdades
            do Brasil. Durante meu curso, descobri minha paixão pelo JavaScript
            e tenho me dedicado a aprender cada vez mais sobre essa incrível
            linguagem e seus principais frameworks. Atualmente, estou buscando
            oportunidades para aplicar meus conhecimentos como programador,
            combinando minha experiência anterior em design gráfico com minha
            formação em Sistemas de Informação. Estou entusiasmado para
            contribuir em projetos desafiadores e continuar expandindo minha
            expertise em JavaScript e desenvolvimento de aplicativos web. Tenho
            noções Avançadas de Rent-API, Containizaçao, TDD, DDD, Solid e Clean
            Code!
          </p>
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
      {/* <ButtonsContainer>
        <Button variant="full">linkedin.com/in/gustavogmfarias</Button>
        <Button variant="transparent">github.com/gustavogmfarias</Button>
      </ButtonsContainer> */}
    </Container>
  );
}
