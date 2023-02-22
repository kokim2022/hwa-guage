import './App.css';
import ReactGuage from './components/react_gauge';
function App() {
  return <ReactGuage firstColor="red" secondColor="green" thirdColor="blue"  style={{height: '500px', width: '100%'}} value={50} />;
}


export default App;