import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Navbar from './Components/Navbar';
import Create from './Pages/Create/Create';
import Landing from './Pages/Landing/Landing';
import IDraza from './Pages/IDraza/Idraza';
import MyDogs from './Pages/MyDogs/MyDogs';
// import Pagination from './Components/Pagination'



function App() {
  return (
    <>
        
    <Router>
      <Route className = 'Landing' path= "/" exact render={() => <Landing />} />
      <Route path= "/dogs/:id" component= {IDraza}  /> 
      <Route path= "/home" exact render={() => <Home />} />
      <Route path= "/create" exact render={() => <Create />} />
      <Route path= "/newdogs" exact render={() => <MyDogs />} />


    </Router>
   
    </>
  );
}

export default App;
