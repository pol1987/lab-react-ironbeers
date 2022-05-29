
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import BeerList from "./pages/BeerList";
import BeerDetails from "./pages/BeerDetails";
import BeerRandom from "./pages/BeerRandom";
import BeerForm from "./pages/BeerForm";
import Error from "./pages/Error";
import NotFound from "./pages/NotFound";
import Home from './pages/Home';





function App() {
  return (
    <div className="App">
      <h1>
      <Navbar />

      <Routes>


        {/* RUTAS DE MI APP */}
        <Route path="/" element={ <Home/> }/>
        <Route path="/beers" element={ <BeerList/> }/>
        <Route path="/beers/:id" element={ <BeerDetails/> } />
        <Route path="/random-beer" element={ <BeerRandom/> }/>
        <Route path="/new-beer" element={ <BeerForm/> }/>

        {/* RUTA DE LA BUSQUEDA */}
        {/* <Route path="/_______" element={ <________/> }/> */}


        {/* RUTAS DE ERRORES */}
        <Route path="/error" element={ <Error/> }/>
        <Route path="*" element={ <NotFound/> }/>        
        
      </Routes>


      </h1>
    </div>
  );
}

export default App;
