import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 90vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 2rem;
  gap: 2rem;
  margin: 2rem 0 auto;
`;

export const LogoDiv = styled.div`
  width: 10rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* margin-right: 4rem; */

  a {
    text-decoration: none;
  }
`;

export const Menu = styled.nav`
  display: flex;
  width: 90vw;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;

  a {
    display: flex;
    align-items: center;
    text-decoration: none;

    color: ${(props) => props.theme["white"]};

    border-top: 3px solid transparent;
    border-bottom: 3px solid transparent;

    font-family: "Roboto";
    font-weight: 500;
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

    @media (max-width: 768px) {
      display: none;
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
    width: 1.3rem;
    border: 1px solid ${(props) => props.theme["green-300"]};
    line-height: 0;
  }
`;
