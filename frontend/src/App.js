import DraggableButton from './components/DraggableButton';
import useScreenSize from './hooks/useScreenSize';

function App() {
	const screenSize = useScreenSize();
	document.body.style.overflow = "hidden"

	return (
		<div className="App" style={{width: screenSize.width, height: screenSize.height}}>
	  		<DraggableButton screenSize={screenSize}></DraggableButton>
	  	</div>
	);
}

export default App;
