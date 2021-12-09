import React, { useState } from "react";
import styled from "styled-components";
import NavigateQuotesBar from "./NavigateQuotesBar";
import QuoteSection from "./QuoteSection";

//Styled components styles
const Container = styled.div`
  text-align: center;
  width: 40%;
  margin: 20px auto;
`;

//Link to API
const API =
  "https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd5961f026264bb6bb3a6c41671b044f1f4/quotes.json";

const MainContainer = () => {
  //Fetch data from API and push one random qoute object to quotes state
  const handleDataFetch = () =>
    fetch(API)
      .then((response) => {
        if (response.ok) {
          return response;
        }
        throw Error(response.status);
      })
      .then((response) => response.json())
      .then((data) => {
        const randomIndex = Math.floor(Math.random() * 102);
        setQuotes([...quotes, data[randomIndex]]);
      })
      .catch((error) => console.log(error));

  //Initialization of react hook
  const [quotes, setQuotes] = useState([]);

  //Check amount of quotes and update quotes hook
  const handlePreviousQuote = () => {
    const lastIndex = quotes.length - 1;
    if (lastIndex < 0) {
      alert("No quotes before");
      return;
    }
    setQuotes(quotes.filter((item, key) => key !== lastIndex));
  };

  return (
    <Container>
      <NavigateQuotesBar
        getQuote={handleDataFetch}
        getPreviousQuote={handlePreviousQuote}
      />
      <QuoteSection quotes={quotes} />
    </Container>
  );
};

export default MainContainer;
