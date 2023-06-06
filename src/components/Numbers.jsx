const Numbers = ({ numberA, numberB, numberC }) => {
    const average = (numberA + numberB + numberC) / 3;
  
    return (
      <p>
        La media entre {numberA}, {numberB} y {numberC} es {average}.
      </p>
    );
  };
  
  export default Numbers;