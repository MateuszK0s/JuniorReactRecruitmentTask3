const QuoteSection = (props) => {
  //Desctructuring props
  const { quotes } = props;
  //Text displayed before getting a quote
  let displayQuote = <h3>Click on button to get a quote</h3>;

  //Update displayQuote after getting a qoute
  if (quotes.length > 0) {
    const lastIndex = quotes.length - 1;
    displayQuote = (
      <div>
        <h2>{quotes[lastIndex].quote}</h2>
        <h4>{quotes[lastIndex].author}</h4>
      </div>
    );
  }
  return <div>{displayQuote}</div>;
};

export default QuoteSection;
