import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function PlanetaSeleccionado() {
  const { id } = useParams();
  const [planet, setPlanet] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(`https://swapi.dev/api/planets/${id}`)
      .then((res) => {
        console.log(res.data);
        setPlanet(res.data);
      })
      .catch((err) => {
        console.log(err);
        setError(err);
      });
  }, [id]);

  if (error) {
    return (
      <div>
        <p>Estos no son los droides que está buscando</p>
        <img src="https://images4.alphacoders.com/980/980564.jpg" alt="obiwan" height="200" />
      </div>
    );
  }

  return (
    <div>
      {planet && (
        <div >
          <h2>{planet.name}</h2>
          <p>Height: {planet.climate}</p>
          <p>Population: {planet.population}</p>
          <p>Terrain: {planet.terrain}</p>
        </div>
      )}
    </div>
  );
}

export default PlanetaSeleccionado;
