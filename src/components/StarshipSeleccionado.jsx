import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function StarshipSeleccionado() {
  const { id } = useParams();
  const [starship, setStarship] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(`https://swapi.dev/api/starships/${id}`)
      .then((res) => {
        console.log(res.data);
        setStarship(res.data);
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
      {starship && (
        <div>
          <h2>{starship.name}</h2>
          <p>Cost: {starship.cost_in_credits} credits</p>
          <p>Manufacturer: {starship.manufacturer}</p>
        </div>
      )}
    </div>
  );
}

export default StarshipSeleccionado;
