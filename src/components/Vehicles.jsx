import { Outlet } from "react-router-dom";

function Vehicles() {
  return (
    <div>
      <div>
        <h1>Vehicles</h1>
        <Outlet />
        {}
      </div>
    </div>
  );
}

export default Vehicles;
