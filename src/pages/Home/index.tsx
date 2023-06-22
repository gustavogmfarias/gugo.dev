import { Header } from "../../Components/Header";
import { Main } from "./Components/Main";
import { HomeContainer } from "./styles";

export function Home() {
  return (
    <HomeContainer>
      <Header />
      <Main />
    </HomeContainer>
  );
}
