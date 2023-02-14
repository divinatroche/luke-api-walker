
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import People from "./components/People";
import Films from "./components/Films";
import Planets from "./components/Planets";
import SWparent from "./components/SWparent";
import PersonaSeleccionada from "./components/PersonaSeleccionada";
import PlanetaSeleccionado from "./components/PlanetaSeleccionado";
import Starships from "./components/Starships";
import StarshipSeleccionado from "./components/StarshipSeleccionado";
import Vehicles from "./components/Vehicles";
import VehicleSeleccionado from "./components/VehicleSeleccionado";

function App() {
  return (
    <>
      {/* WRAPER RUTAS */}
      <BrowserRouter>
      <Routes>
          <Route path="/" element={<SWparent to="/people" />}>
            {}
            <Route path="/people/" element={<People />}>
              <Route path=":id" element={<PersonaSeleccionada />} />
            </Route>
            <Route path="/films/" element={<Films />}>
              <Route path=":id" element={<PersonaSeleccionada />} />
            </Route>
            <Route path="/planets/" element={<Planets />}>
              <Route path=":id" element={<PlanetaSeleccionado />} />
            </Route>
            <Route path="/starships/" element={<Starships />}>
              <Route path=":id" element={<StarshipSeleccionado />} />
            </Route>
            <Route path="/vehicles/" element={<Vehicles />}>
              <Route path=":id" element={<VehicleSeleccionado />} />
            </Route>
          </Route>
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
