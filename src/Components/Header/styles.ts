import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-decoration: none;
  padding-top: 0 4rem;
  margin-top: 2rem;
`;

export const LogoDiv = styled.div`
  width: 10rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-right: 5rem;

  a {
    text-decoration: none;
  }
`;

export const Menu = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  margin-right: 2rem;

  a {
    display: flex;
    align-items: center;
    text-decoration: none;

    color: ${(props) => props.theme["white"]};

    border-top: 3px solid transparent;
    border-bottom: 3px solid transparent;

    font-family: "Roboto Medium";
    font-size: 1rem;

    &:hover {
      border-bottom: 3px solid ${(props) => props.theme["green-300"]};
    }

    &.active {
      color: ${(props) => props.theme["green-300"]};
    }

    &:last-child {
      color: ${(props) => props.theme["white"]};
      padding: 0.5rem 2rem;
      background-color: ${(props) => props.theme["green-300"]};
      border-radius: 5px;
    }
  }
`;
export const LangDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  line-height: 0;

  a {
    text-decoration: none;
    line-height: 0;
  }

  img {
    width: 1rem;
    border: 1px solid ${(props) => props.theme["green-300"]};
    line-height: 0;
  }
`;
