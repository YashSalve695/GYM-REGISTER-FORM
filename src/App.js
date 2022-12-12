import './App.css';
import axios from 'axios';
import Signup from './components/signup/signup';


const register = () =>{
  axios.post('http://localhost3001/register')
}
 
function App(){
  return(
    <div>
     <Signup/>
    </div>
  );
}
 
 
export default App;