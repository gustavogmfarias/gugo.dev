import styled from "styled-components";

export const MainContainer = styled.main`
  width: 90vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-decoration: none;
  color: ${(props) => props.theme["white"]};

  margin: 4rem 0 auto;

  @media (max-width: 768px) {
    justify-content: flex-start;
    flex-direction: column;
    margin: 1rem 0 auto;
  }
`;

export const ImageContainer = styled.aside`
  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    width: 20rem;
    overflow: none;
  }

  @media (max-width: 768px) {
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

  @media (max-width: 768px) {
    margin: 1rem 0;
    flex-direction: column;
    justify-content: flex-start;
    text-align: center;
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

  @media (max-width: 768px) {
    margin-top: 1rem;
  }
`;

export const MainContentContainer = styled.aside`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: justify;

  @media (max-width: 768px) {
    align-items: flex-start;
  }
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
  margin-top: 5rem;

  @media (max-width: 768px) {
    margin-top: 2rem;
    margin-bottom: 5rem;

    flex-direction: column;
  }
`;

interface ButtonProps {
  variant: "full" | "stroke";
}

export const Button = styled.button<ButtonProps>`
  width: 15rem;
  padding: 0.5rem 2rem;
  border-radius: 5px;
  border: none;
  border-color: none;

  ${({ theme, variant }) =>
    variant === "full"
      ? `
      background-color: ${theme["green-300"]};
      color: white;
      background-color: ${theme["green-300"]};

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
