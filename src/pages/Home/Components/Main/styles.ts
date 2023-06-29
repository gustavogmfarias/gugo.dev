import styled from "styled-components";

export const MainContainer = styled.main`
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-decoration: none;
  margin-top: 10rem;
  color: ${(props) => props.theme["white"]};

  padding-left: 20rem; /* Espaçamento à esquerda */
  padding-right: 20rem; /* Espaçamento à direita */
`;

export const ImageContainer = styled.aside`
  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    width: 20rem;
    overflow: none;
  }
`;

export const HeadContentContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.8rem;

  div p {
    display: flex;
    color: ${(props) => props.theme["white"]};
    font-family: "Roboto", sans-serif;
    font-weight: 100;
    font-size: 1rem;
  }
`;
export const IconsTechContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;

  img {
    width: 2rem;
  }
`;

export const MainContentContainer = styled.aside`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: justify;
`;

export const BodyContentContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;

  p {
    font-family: "Roboto";
    font-weight: 400;
    font-size: 1.5rem;
  }
`;
export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
`;

interface ButtonProps {
  variant: "full" | "stroke";
}

export const Button = styled.button<ButtonProps>`
  margin-top: 5rem;

  padding: 20px;
  padding: 0.5rem 2rem;
  border-radius: 5px;
  border: none;
  border-color: none;

  ${({ theme, variant }) =>
    variant === "full"
      ? `
      background-color: ${theme["green-300"]};
      color: white;
      `
      : `
        background-color: transparent;
        border: 1px solid ${theme["green-300"]}; 
      `}
  a {
    text-decoration: none;
    font-family: "Roboto", sans-serif;
    font-weight: 300;
    font-size: 1rem;

    color: ${({ theme, variant }) =>
      variant === "full" ? theme["white"] : theme["green-300"]};
  }
`;
