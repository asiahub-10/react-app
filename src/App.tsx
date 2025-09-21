import { Outlet } from "react-router-dom";
import Event from "./components/Event";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import Loop from "./components/Loop";
import PropsPage from "./components/PropsPage";
import UseState from "./components/UseState";
import Users from "./data.json";

function App(){
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
      {/* <UseState/> */}
    </>
  )
}

export default App