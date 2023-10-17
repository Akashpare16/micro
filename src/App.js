import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import "./App.css";
import Product from "./Components/Product";
import Dashbord from "./Components/Dashbord";
import Card from "./Components/Card";
import RootLayout from "./Components/RootLayout";
import Navbar from "./Components/Navbar";
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Dashbord />}></Route>
        <Route path="/Card" element={<Card />}></Route>
      </Route>
    )
  );
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
