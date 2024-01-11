import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./layout/Main";
import './index.scss'
import AdminPage from "./pages/Admin";
import Home from "./pages/Home";
import AddPage from "./pages/AddPage";
import DetailPage from "./pages/DetailPage";
import WishlistPage from "./pages/WishlistPage";
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout/>}>
          <Route path="/" element={<Home/>}   />
          <Route path="/admin" element={<AdminPage/>}  />
          <Route path="/add" element={<AddPage/>}  />
          <Route path="/:id" element={<DetailPage/>}  />
          <Route path="/Wishlist" element={<WishlistPage/>}  />

        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
