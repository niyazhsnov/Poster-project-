import { Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./components/shared/Layout";
import AddPoster from "./pages/AddPoster";
import AllPosters from "./pages/AllPosters";
import UpdatePoster from "./pages/UpdatePoster";



function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<AllPosters />}></Route>
        <Route path="/add" element={<AddPoster />}></Route>
        <Route path="/update/:id" element={<UpdatePoster />}></Route>
      </Routes>
     
    </Layout>
   
    
  );
}

export default App;
