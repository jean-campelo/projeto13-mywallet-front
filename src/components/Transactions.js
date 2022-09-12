import styled from "styled-components";
import DataContext from "../context/dataContext.js";
import { useContext } from "react";

export default function Transactions() {
  const { transactions, total } = useContext(DataContext);

  return (
    <Main>
    <Container>
      {transactions.map((item) => (
        <Render
          date={item.date}
          value={item.value}
          type={item.type}
          description={item.description}
        />
      ))}
    </Container>
    <Total valueTotal={total}>
        <h1>SALDO</h1>
        <h2>{(total / 100).toFixed(2)}</h2>
      </Total>
    </Main>
  );

  function Render({ date, value, type, description }) {
    return (
      <Register>
        <Date>
          <h2> {date} </h2>
        </Date>
        <Info>
          <h3> {description} </h3>
          <Value type={type}>
            <h4> {(value / 100).toFixed(2)} </h4>
          </Value>
        </Info>
      </Register>
    );
  }
}

const Main = styled.div`

position: relative;
`;

const Container = styled.div`
  background-color: var(--color-white);
  width: 90vw;
  height: 70vh;
  margin: 16px 0;
  border: 1px solid var(--color-white);
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: scroll;
`;

const Register = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
  width: 90%;
  align-items: flex-end;
  
  :last-child{ 
    margin-bottom: 50px;
  }
`;

const Date = styled.div`
  color: #c6c6c6;
`;

const Info = styled.div`
  display: flex;
  width: 90%;
  justify-content: space-between;
  margin-left: 16px;
  font-size: 16px;
`;

const Value = styled.div`
  color: ${(props) =>
    props.type === "debit" ? "var(--color-red)" : "var(--color-green)"};
`;

const Total = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 30px;
  padding: 0 16px;
  position: absolute;
  bottom: 0px;
  background-color: var(--color-white);
  font-size: 16px;
  box-shadow: 0px -4px 10px rgba(255, 255, 255, 0.4);

  h1 {
    font-size: 17px;
    font-weight: 700;
  }

  h2 {
    color: ${(props) => props.valueTotal > 0 ? "var(--color-green)" : "var(--color-red)"} ;
  }
`;
