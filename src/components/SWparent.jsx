import Form from "./Form";
import { Outlet } from "react-router-dom";

function SWparent() {
  return (
    <>
      <Form />
      <Outlet />
    </>
  );
}

export default SWparent;
