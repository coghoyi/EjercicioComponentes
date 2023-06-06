const Velocidad = ({ kmHora }) => {
    const metrosSegundo = kmHora / 3.6;
  
    return (
      <p>
        {kmHora} Km/h son {metrosSegundo} m/s.
      </p>
    );
  };
  
  export default Velocidad;