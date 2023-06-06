import FahrenheitToCelsius from "./components/FarenheitToCelsius";
import Numbers from "./components/Numbers";
import CalculateCircleArea from "./components/calculateCircleArea";
import CalculateTriangleArea from "./components/calculateTriangleArea";
import CelsiusToFahrenheit from "./components/celsiusToFarenheit";
import CalculateSquareArea from "./components/claculateSquareArea";
import SayHello from "./components/sayHellow";
import TotalPrice from "./components/totalPrice";
import Velocidad from "./components/velocidad";
import WriteMessage from "./components/writeMessage";

	const persona = "David";
  	const material = "cartón";
 	const size = "grande";
  	const note = "Enviar a esta dirección";

const App = () => {
  return (
    <div>
      <SayHello name="John" />
	  <CalculateSquareArea lado={5} />
	  <CalculateTriangleArea base={8} height={5} />
	  <CalculateCircleArea radius={3} />
	  <CelsiusToFahrenheit celsius={25} />
	  <FahrenheitToCelsius fahrenheit={77} />
	  <TotalPrice price={100} />
	  <WriteMessage persona={persona} material={material} size={size} note={note} />
	  <Numbers numberA={10} numberB={15} numberC={20} />
	  <Velocidad kmHora={80} />
    </div>
  );
};

export default App;