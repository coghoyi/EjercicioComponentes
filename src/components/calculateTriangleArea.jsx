
const CalculateTriangleArea = ({ base, height }) => {
  const area = (base * height) / 2;

  return <p>El área del triángulo es {area}</p>;
};

export default CalculateTriangleArea;