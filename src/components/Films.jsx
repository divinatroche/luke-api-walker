import { Outlet } from "react-router-dom";

function Films() {
  return (
    <div>
      <div>
        <h1>Films</h1>
        <Outlet />
      </div>
    </div>
  );
}

export default Films;
