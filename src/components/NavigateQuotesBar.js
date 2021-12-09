import styled, { css } from "styled-components";

//Styled components styles
const buttonStyles = css`
  color: white;
  margin-top: 5px;
  font: inherit;
  font-size: 24px;
  border: 1px solid #8b005d;
  color: white;
  background-color: #8b005d;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
  cursor: pointer;
  padding: 0.3rem 1rem;
  border-radius: 6px;
`;

const ButtonsBar = styled.div`
  width: 480px;
  margin: auto;
  display: flex;
  justify-content: space-around;
`;

//Assign same styles to buttons with styled-components
const RandomQuoteButton = styled.button(buttonStyles);
const PreviousQuoteButton = styled.button(buttonStyles);

const NavigateQuotesBar = (props) => {
  //Destructuring props
  const { getQuote, getPreviousQuote } = props;
  return (
    <ButtonsBar>
      <RandomQuoteButton onClick={getQuote}>Get your quote</RandomQuoteButton>

      <PreviousQuoteButton onClick={getPreviousQuote}>
        Get previous quote
      </PreviousQuoteButton>
    </ButtonsBar>
  );
};

export default NavigateQuotesBar;
