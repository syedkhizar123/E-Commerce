import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { Navbar } from './Components/Navbar'
import { Sidebar } from './Components/Sidebar'
import { Add } from './Pages/add';
import { List } from './Pages/list';
import { Orders } from './Pages/orders';
import { Login } from './Pages/login';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

function Layout() {
  const location = useLocation();
  if (location.pathname === "/login") {
    return (
      <>

        <Routes>
          <Route path="/login" element={<Login />} />
        </Routes>
        <ToastContainer autoClose={3000} position='top-right' />
      </>
    )
  } else {
    return (
      <>


        <div className="grid grid-rows-[auto_1fr] min-h-screen">
          <Navbar />
          <div className="grid grid-cols-[80px_1fr] sm:grid-cols-[200px_1fr] md:grid-cols-[250px_1fr]">
            <Sidebar />
            <div className="p-4">
              <Routes>
                <Route path="/" element={<Add />} />
                <Route path="/list" element={<List />} />
                <Route path="/orders" element={<Orders />} />
              </Routes>
              <ToastContainer autoClose={3000} position='top-right' />
            </div>
          </div>
        </div>


      </>
    )
  }
}
function App() {

  return (
    <>
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    </>
  )
}

export default App
