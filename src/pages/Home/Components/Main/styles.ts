import styled from "styled-components";

export const MainContainer = styled.main`
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-decoration: none;
  margin-top: 10rem;
  color: ${(props) => props.theme["white"]};
  padding: 10;
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

  div p {
    display: flex;
    color: ${(props) => props.theme["white"]};
    font-family: "Roboto Regular", sans-serif;
    font-size: 0.8rem;
  }
`;
export const IconsTechContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  margin-right: 2rem;

  img {
    width: 1rem;
  }
`;

export const MainContentContainer = styled.aside`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const BodyContentContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;

  p {
    font-family: "Roboto";
    font-weight: 400;
    font-size: 2rem;
  }
`;
export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    margin-top: 5rem;
    font-family: "Roboto Regular", sans-serif;
    font-size: 1rem;
  }
`;
