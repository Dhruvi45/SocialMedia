import { BrowserRouter } from "react-router-dom";
import MyRoutes from "./routes/MyRoutes";
import { ToastContainer } from "react-toastify";
import "./App.css";

function App() {
  
  return (
    <>
      <ToastContainer />
      <BrowserRouter>
        <MyRoutes />
      </BrowserRouter>
    </>
  );
}

export default App;
