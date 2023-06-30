import styled from "styled-components";

export const HomeContainer = styled.main`
  max-width: 100vw;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 1rem;
  margin: 0 auto;

  @media (min-width: 428px) {
    max-width: 90vw;
    padding: 0 2rem;
  }

  @media (min-width: 576px) {
    max-width: 80vw;
    padding: 0 3rem;
  }

  @media (min-width: 768px) {
    max-width: 70vw;
    padding: 0 4rem;
  }
`;
