import styled from "styled-components";
import DataContext from "../context/dataContext.js";
import { useContext } from "react";

export default function Transactions() {
  const { transactions } = useContext(DataContext);

  return (
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
  );

  function Render({ date, value, type, description }) {
    return (
      <Register>
        <Date>
          <h2> {date} </h2>
        </Date>
        <Info>
          <h3> {description} </h3>
          <h4> {value} </h4>
        </Info>
      </Register>
    );
  }
}

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
`;

const Register = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
  width: 90%;
`;

const Date = styled.div`
    color: #C6C6C6; 
`;

const Info = styled.div`
    display: flex;
    width: 90%;
    justify-content: space-between;
    margin-left: 16px;
    font-size: 16px;
`;
