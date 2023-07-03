import styled from "styled-components";

interface DetailContainerProps {
  variant: "full" | "transparent";
}

export const PersonalDetailContainer = styled.div<DetailContainerProps>`
  min-width: 20rem;
  max-width: 30vw;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 4rem;
  border-radius: 20px;
  background-color: ${(props) => props.theme["gray-600"]};
  overflow: hidden;

  font-family: Roboto, sans-serif;
  font-size: 1.2rem;

  gap: 0.8rem;

  div:nth-child(2) p {
    font-weight: 900;
    font-size: 2.3rem;
    color: ${({ theme, variant }) =>
      variant === "full" ? theme["green-300"] : theme["gray-600"]};
  }

  div:last-child p {
    font-weight: 400;
  }

  ${({ theme, variant }) =>
    variant === "full"
      ? `
      background-color: ${theme["gray-600"]};
      color: white;

      `
      : `
        background-color: transparent;
        border: 1px solid ${theme["gray-600"]}; 
        color: ${theme["gray-600"]}
      `}
`;
