import React from "react";
import { useEffect, useState } from "react";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function BeerDetails() {
  // 1. creamos el estado (useSTATE PARA CREAR EL ESTADO)
  const [cervezaDetails, setCervezaDetails] = useState();
  const [buscando, setBuscando] = useState(true);

  const { id } = useParams();
  const navigate = useNavigate();
  

  //! Paso 2 y 3 estan unidos, puesto que uno alberga y el otro llama.
  // 2. component didmount (useEFFECT PARA EL COMPONENTE)

  useEffect(() => {
    getBeerDetails();
  },[]);

  // 3. llamar a la api
  const getBeerDetails = async () => {
    try {
      const response = await axios.get(`https://ih-beers-api2.herokuapp.com/beers/${id}`
      );
      setCervezaDetails(response.data);
      setBuscando(false);
    } catch (error) {
      navigate("/error");
    }
  };

  // 4. Loading
  if (buscando === true) {
    return <ClimbingBoxLoader />;
  }

  // 5. Renderizar en el return
  return (
    <div>
      <img src={cervezaDetails.image_url} alt="Beer pic" width={200}/>
      <h1>{cervezaDetails.name}</h1>
      <p>{cervezaDetails.tagline}</p>
      <p>{cervezaDetails.first_brewed}</p>
      <p>{cervezaDetails.attenuation_level}</p>
      <p>{cervezaDetails.description}</p>
      <p>{cervezaDetails.contributed_by}</p>
      
    </div>
  )
}

export default BeerDetails;
