import { Outlet } from "react-router-dom";

function Planets() {
  return (
    <div>
        <h1>Planets</h1>
        <Outlet />
    </div>
  );
}

export default Planets;
