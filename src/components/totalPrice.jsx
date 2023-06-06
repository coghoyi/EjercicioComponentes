const TotalPrice = ({ price }) => {
    const iva = price * 0.21;
    const total = price + iva;
  
    return <p>El precio con IVA es de {total}</p>;
  };
  
  export default TotalPrice;