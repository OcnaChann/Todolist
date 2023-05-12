import './App.css';
import {useState} from 'react';
 //This is used to make the value increase decrease and set to zero on click
function App() {
const [count, setCount ] = useState(0);
return(
  <div className='App'>
   <button onClick={() => {setCount(count + 1);}}>Increase</button>
   <button onClick={() => {setCount(count - 1);}}>Decrease</button>
   <button onClick ={() => {setCount(0);}} >Set to zero</button>
   {count}
  </div>
);
}



export default App;
