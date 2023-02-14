import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function PersonaSeleccionada() {
  const { id } = useParams();
  const [person, setPerson] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(`https://swapi.dev/api/people/${id}`)
      .then((res) => {
        console.log(res.data);
        setPerson(res.data);
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
      {person && (
        <div>
          <h2>{person.name}</h2>
          <p>Height: {person.height}</p>
          <p>Hair Color : {person.hair_color}</p>
          <p>Birth Year: {person.birth_year}</p>
        </div>
      )}
    </div>
  );
}

export default PersonaSeleccionada;
