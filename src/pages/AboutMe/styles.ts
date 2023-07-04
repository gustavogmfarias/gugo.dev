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
  width: 90vw;
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
      width: 100%;

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

export const PersonalDetailsContainer = styled.div`
  width: 90vw;
  display: flex;
  flex-wrap: wrap;

  flex-direction: row;
  gap: 2rem;

  margin: 1rem 0 auto;

  align-items: center;
  justify-content: space-around;

  text-decoration: none;

  @media (max-width: 768px) {
    margin-top: 2rem;
    margin-bottom: 3rem;

    flex-direction: column;
  }
`;
export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;

  margin: 3rem auto;

  gap: 1rem;

  align-items: center;
  justify-items: center;
  justify-content: space-between;

  text-decoration: none;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

interface ButtonVariants {
  variant: "full" | "transparent";
}
export const Button = styled.button<ButtonVariants>`
  min-height: 2rem;
  min-width: 20rem;
  max-width: 100vw;
  width: 100%;
  padding: 1rem 0;
  border-radius: 40px;
  cursor: pointer;

  gap: 0.5rem;

  background-color: ${({ theme, variant }) =>
    variant === "full" ? theme["gray-600"] : "transparent"};

  color: ${({ theme, variant }) =>
    variant === "full" ? theme["white"] : theme["gray-600"]};

  border: ${({ variant }) => (variant === "full" ? 0 : 1)} solid;
  border-color: ${({ theme, variant }) =>
    variant === "full" ? theme["gray-600"] : theme["gray-600"]};

  justify-items: center;
  justify-content: center;

  font-weight: 800;
`;
