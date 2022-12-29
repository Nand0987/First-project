
import './App.css';
import Cards from './component/Cards';
import Navbar from './component/Navbar';

function App() {
  return (
   <> <Navbar/>
   <div className="main">
   
     <Cards image="nandan"/>
   <Cards image="chandan"/>
   <Cards image="nandan"/>
   <Cards image="Roushan"/>
   <Cards image="nandan"/>
   </div></>
  ) ;
    
  
};

export default App;
