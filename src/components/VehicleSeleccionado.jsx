import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function VehicleSeleccionado() {
  const { id } = useParams();
  const [vehicle, setVehicle] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(`https://swapi.dev/api/vehicles/${id}`)
      .then((res) => {
        console.log(res.data);
        setVehicle(res.data);
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
      {vehicle && (
        <div>
          <h2>{vehicle.name}</h2>
        </div>
      )}
    </div>
  );
}

export default VehicleSeleccionado;
