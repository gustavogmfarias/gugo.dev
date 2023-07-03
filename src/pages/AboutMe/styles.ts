import styled from "styled-components";

export const Container = styled.div`
  max-width: 100vw;
  flex: 1;

  display: flex;
  flex-direction: column;

  margin: 4rem 0 auto;

  align-items: center;
  justify-content: space-between;

  text-decoration: none;

  background-color: ${(props) => props.theme["white"]};

  @media (max-width: 768px) {
    justify-content: flex-start;
    flex-direction: column;
    margin: 1rem 0 auto;
  }
`;

export const Header = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  margin-bottom: 1rem;
  padding-bottom: 2rem;

  align-items: center;
  justify-content: space-between;

  text-decoration: none;

  font-size: 1.5rem;
  font-weight: 600;

  background-color: ${(props) => props.theme["gray-600"]};
`;

export const MainContainer = styled.div`
  width: 80vw;
  display: flex;
  flex-direction: column;

  margin: 0 auto;

  align-items: center;
  justify-content: center;

  text-decoration: none;
  color: ${(props) => props.theme["gray-600"]};

  div {
    display: flex;

    align-items: center;
    justify-content: center;

    margin-bottom: 2rem;

    @media (max-width: 768px) {
      width: 90%;

      justify-content: flex-start;
      flex-direction: column;
      margin: 1rem 0 auto;
    }

    &:first-child {
      color: ${(props) => props.theme["green-300"]};
      margin: 1rem 0 auto;
      font-weight: 800;
      font-size: 1.5rem;
    }

    &:last-child {
      display: flex;

      align-items: center;
      justify-content: center;
      text-align: justify;

      font-family: "Roboto";
      font-weight: 400;
      font-size: 1.5rem;
    }
  }
`;

export const IconsTechContainter = styled.div`
  display: flex;
  flex-direction: row;

  margin: 1rem 0 auto;
  margin-bottom: 1rem;

  align-items: center;
  justify-content: space-between;

  text-decoration: none;
`;
export const PersonalDetailsContainer = styled.div`
  width: 80vw;
  display: flex;
  flex-direction: row;
  gap: 2rem;

  margin: 1rem 0 auto;

  align-items: center;
  justify-content: center;

  text-decoration: none;

  @media (max-width: 768px) {
    margin-top: 2rem;
    margin-bottom: 5rem;

    flex-direction: column;
  }
`;
export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;

  margin: 8rem 0 auto;

  align-items: center;
  justify-content: space-between;

  text-decoration: none;
`;

interface ButtonVariants {
  variant: "full" | "transparent";
}
export const Button = styled.button<ButtonVariants>``;
