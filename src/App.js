import './App.css';
import {useState, useEffect} from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home';
import CreateProduct from './components/CreateProduct';
import ProductInfo from './components/ProductInfo';
import Cart from './components/Cart';
import Purchases from './components/Purchases'
import Sales from './components/Sales'
import Edit from './components/Edit';
import SignUp from './components/SignUp';
import Login from './components/Login'

import {Routes, Route, useNavigate} from 'react-router-dom'

function App() {
  const [products, setProducts] = useState([])
  const [currentProduct, setCurrentProduct] = useState({
    item: '', 
    price: '', 
    image: '', 
    description: '',
    userid: ''
  })
  const [selectedProduct, setSelectedProduct] = useState('')
  const [cart, setCart] = useState([])
  const [purchases, setPurchases] = useState([])
  const [user, setUser] = useState('')
  const [login, setLogin] = useState('')
  const [loggedIn, setLoggedIn] = useState({})
  const [isLogged, setIsLogged] = useState(false)

  const navigate = useNavigate()

  function getProducts() {
    fetch('/api/products')
      .then(res => res.json())
      .then(res => {
        setProducts([ ...res])
      })
    }
  useEffect(getProducts, [])

  function getCartInfo() {
    fetch('/api/cart')
      .then(res => res.json())
      .then(res => setCart([...cart, ...res]))
  }
  useEffect(getCartInfo, [])

  function getPurchasesInfo() {
    fetch('/api/purchases')
      .then(res => res.json())
      .then(res => setPurchases([...res]))
  }
  useEffect(getPurchasesInfo, [])

  function logOut() {
    fetch("/api/sessions", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(),
    }).then((req, res) => {
      const logout = '';
      setLoggedIn({})
      setIsLogged(false)
    });
  }

  function sortPrice(a, b) {
    const priceA = a.price;
    const priceB = b.price;
  
    let comparison = 0;
    if (priceA > priceB) {
      comparison = 1;
    } else if (priceA < priceB) {
      comparison = -1;
    }
    return comparison;
  }

  function sortName(a, b) {
    const itemA = a.item;
    const itemB = b.item;
  
    let comparison = 0;
    if (itemA > itemB) {
      comparison = 1;
    } else if (itemA < itemB) {
      comparison = -1;
    }
    return comparison;
  }


  return (
    <div className="App">
      <Navbar 
        logOut={logOut}
        loggedIn={loggedIn}
      />
      <h1>Hi {loggedIn.userName}</h1>
       <Routes>
        <Route path='/' element={<Home 
          products={products}
          login={login}
          sortPrice={sortPrice}
          sortName={sortName}
          setSelectedProduct={setSelectedProduct}
          loggedIn={loggedIn}
        />} />
        <Route path='/product' element={<CreateProduct 
          setCurrentProduct={setCurrentProduct}
          currentProduct={currentProduct}
          products={products}
          login={login}
          user={user}
          setProducts={setProducts}
          loggedIn={loggedIn}
        />} />
        <Route path='/product-info' element={<ProductInfo 
          selectedProduct={selectedProduct}
          cart={cart}
          setCart={setCart}
          loggedIn={loggedIn}
        />} />
        <Route path='/cart' element={<Cart 
          cart={cart}
          purchases={purchases}
          setPurchases={setPurchases}
          setCart={setCart}
        />} />
        <Route path='/purchases' element={<Purchases 
          purchases={purchases}
          loggedIn={loggedIn}
        />} />
        <Route path='/sales' element={<Sales 
          products={products}
          setSelectedProduct={setSelectedProduct}
          cart={cart}
          setProducts={setProducts}
          setCart={setCart}
          loggedIn={loggedIn}
        />} />
        <Route path='/product-edit' element={<Edit 
          selectedProduct={selectedProduct}
          setSelectedProduct={setSelectedProduct}
          products={products}
          setProducts={setProducts}
        />} />

      <Route path='/signup' element=    {<SignUp 
        user={user}
        setUser={setUser}
        />} />  
        <Route path='/login' element=    {<Login 
          login={login}
          setLogin={setLogin}
          setLoggedIn={setLoggedIn}
          loggedIn={loggedIn}
          setIsLogged={setIsLogged}
          isLogged={isLogged}
        />} />
      </Routes>

    </div>
  );
}

export default App;
