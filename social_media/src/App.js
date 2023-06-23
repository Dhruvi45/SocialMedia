import { useEffect } from "react";
import { axiosGet } from "./utils/Helper";
import { BrowserRouter } from "react-router-dom";
import MyRoutes from "./routes/MyRoutes";
import { ToastContainer } from "react-toastify";
// import "./App.css";

function App() {
  const getProduct = async () => {
    await axiosGet(`/api/posts`)
      .then((res) => {
        console.log("res", res);
      })
      .catch((error) => {
        console.log("error", error);
        // toast.error(error)
      });
    // setLoading(false)
  };
  useEffect(() => {
    getProduct();
  }, []);
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
