import styled from "styled-components";
import DataContext from "../context/dataContext.js";
import { useContext } from "react";

export default function Transactions() {
  const { transactions } = useContext(DataContext);

  return (
    <>
      {transactions.map((item) => (
        <Render
          date={item.date}
          value={item.value}
          type={item.type}
          description={item.description}
        />
      ))}
    </>
  );

  function Render({ date, value, type, description }) {
    return (
      <Register>
        <Info>
          <h1> {date} </h1>
          <h2> {description} </h2>
        </Info>
        <Value>
          <h2> {value} </h2>
        </Value>
      </Register>
    );
  }
}
const Register = styled.div``;

const Info = styled.div``;

const Value = styled.div``;
