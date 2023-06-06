const WriteMessage = ({ persona, material, size, note }) => {
    return (
      <p>
        {persona} ha pedido una caja de {material}, de tamaño {size}. {note}.
      </p>
    );
  };
  
  export default WriteMessage;