import CalculateCircleArea from "./components/calculateCircleArea/CalculateCircleArea";
import CalculateSquareArea from "./components/calculateSquareArea/CalculateSquareArea";
import CalculateTriangleArea from "./components/calculateTriangleArea/CalculateTriangleArea";
import CelsiusToFarenheit from "./components/celsiusToFarenheit/CelsiusToFarenheit";
import FarenheitToCelsius from "./components/farenheitToCelsius/FarenheitToCelsius";
import SayHello from "./components/say-hello/SayHello";
import TotalPrice from "./components/totalPrice/TotalPrice";
import WriteMessage from "./components/writeMessage/WriteMessage";

const App = () => {
	return (
	<>
	<SayHello name='Manuel'></SayHello>
	<CalculateSquareArea distance='23'></CalculateSquareArea>
	<CalculateTriangleArea base='20' height='35'></CalculateTriangleArea>
	<CalculateCircleArea radius='5'></CalculateCircleArea>
	<CelsiusToFarenheit degree='32'></CelsiusToFarenheit>
	<FarenheitToCelsius degree='90'></FarenheitToCelsius>
	<TotalPrice price = '10'></TotalPrice>
	<WriteMessage name='Manu' material='carton' size='20x20x5' note='Color negro'></WriteMessage>
	</> 
	)
	
};

export default App;
