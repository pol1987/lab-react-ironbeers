import React, {useEffect, useState} from 'react';
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";


function BeerList() {

  //configurar el acceso de navegacion (importante para redirigir al usuario desde el componente, en este caso para errores)
  const navigate = useNavigate()

  // 1. CREAR EL ESTADO QUE VA A ALOJAR LA INFO (API)
  const [ listBeers, setListBeers ] = useState(null)

    // 1.1 Creamos un estadoo secundario que se encarga de renderizar el "loading"
    const [ buscando, setBuscando ] = useState(true)


  // 2. ACCEDER AL COMPONENTDIDMOUNT QUE BUSCA LA INFO EN LA API
      // no olvidar array de dependencias vacias
  useEffect(() => {
    getListBeers()

  }, [])


  // 3. CREAR LA FUNCION QUE SERA INVOCADA EN COMPONENTDID MOUNT => CONECTA CON LA API
  const getListBeers = async () => {
    //aqui buscamos la data que pasaremos al paso 2 useEffect
    try{

      const response = await axios.get("https://ih-beers-api2.herokuapp.com/beers")
      console.log(response)
      setListBeers(response.data)
      setBuscando(false)

    } catch (error) {
      // redirigimos a la pagina de error
      navigate("/error")

    }
  }

  // 4. CREAR EFECTO DE LOADING
  if (buscando === true ) {
    return <ClimbingBoxLoader/>
  }


  // 5. RENDERIZAR EN EL RETURN
  return (
    <div>
      {
        listBeers.map((eachBeer) => {
          return (            
            
            <div key={eachBeer._id}>
              <p>  <Link to={`/beers/${eachBeer._id}`}>{eachBeer.name}</Link> </p>  
              <img src={eachBeer.image_url} alt="Beer Image" width={100}/>   
              <p>{eachBeer.tagline}</p>  
              <p>{eachBeer.contributed_by}</p> 
              
              
                          
            
            </div>


            
            
          )
        })
      }
    </div>
  )
}

export default BeerList