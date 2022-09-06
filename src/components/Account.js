import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Account() {
  return (
    <Container>
      <Header>
        <h1>Olá, userName</h1>
        <Link to={"/"}>
          <ion-icon name="log-out-outline"></ion-icon>
        </Link>
      </Header>
    </Container>
  );
}

const Container = styled.main`
  display: flex;
  height: 100vh;
  width: 100vw;
  background-color: var(--color-background);
  padding: 16px;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  width: 100vw;

  h1 {
    font-weight: 700;
    color: var(--color-white);
    font-size: 26px;
    letter-spacing: 0.5px;
  }
  ion-icon {
    color: var(--color-white);
    font-size: 28px;
  }
`;
