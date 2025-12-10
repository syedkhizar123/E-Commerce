import {BrowserRouter , Routes , Route} from 'react-router-dom'
import { Navbar } from './Components/Navbar'
import { Footer } from './Components/Footer'
import { Home } from './Pages/Home'
import { Collection } from './Pages/Collection'
import { About } from './Pages/About'
import { Contact } from './Pages/Contact'
import { Product } from './Pages/Product'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Login } from './Pages/Login'
import { Signup } from './Pages/Signup'
import { Cart } from './Pages/Cart'
import { Orders } from './Pages/Orders'
import { PlaceOrder } from './Pages/PlaceOrder'
import { ScrollToTop } from './Components/ScrollToTop'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css'




function App(){
    return(
       <BrowserRouter>
        <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/collection" element={<Collection />} />
                <Route path="/product/:id" element={<Product />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/login" element={<Login />}/>
                <Route path="/signup" element={<Signup />}/>
                <Route path="/cart" element={<Cart />} />
                <Route path="/orders" element={<Orders />} />
                <Route path="/placeorder" element={<PlaceOrder />}/>
            </Routes>
            <ToastContainer autoClose={3000} position='top-right' /> 
            <ScrollToTop />
        <Footer />
       </BrowserRouter>
    )
}

export default App
