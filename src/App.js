import logo from './logo.svg';
import './App.css';
import { Result } from './component/result';
import { Item } from './component/summary-items';
import { Summary } from './component/sumarry';

function App() {
  return (
	<div className='container' >
		<Result/>
		<Summary/>
	</div>
  );
}

export default App;
