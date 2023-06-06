const CalculateCircleArea = ({ radius }) => {
    const area = Math.PI * radius * radius;
  
    return <p>El área del círculo ess {area}</p>;
  };
  
  export default CalculateCircleArea;