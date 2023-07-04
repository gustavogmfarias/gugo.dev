import styled from "styled-components";

export const LogoContainer = styled.main`
  color: ${(props) => props.theme["white"]};
  display: flex;
  font-family: "Roboto";
  font-weight: 500;
  font-size: 1.8rem;
  span {
    color: ${(props) => props.theme["green-300"]};
  }
`;
