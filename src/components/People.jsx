import { Outlet } from "react-router-dom";

function People() {
  return (
    <div>
        <h1>People</h1>
        <Outlet />
        {}
    </div>
  );
}

export default People;
