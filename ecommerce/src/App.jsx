import { Outlet } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <nav>Nav bar</nav>
      <Outlet />
    </>
  );
}

export default App;
