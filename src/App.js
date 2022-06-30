import './App.css';
import {useState, useEffect} from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home';
import CreateProduct from './components/CreateProduct';
import ProductInfo from './components/ProductInfo';
import Cart from './components/Cart';
import Purchases from './components/Purchases'

import {Routes, Route, Link, useNavigate} from 'react-router-dom'

function App() {
  const [products, setProducts] = useState([])
  const [currentProduct, setCurrentProduct] = useState({
    item: '', 
    price: '', 
    image: '', 
    description: ''
  })
  const [selectedProduct, setSelectedProduct] = useState('')
  const [cart, setCart] = useState('')
  const [purchases, setPurchases] = useState('')

  const navigate = useNavigate()

  function addProduct(event) {
    event.preventDefault();
    if(currentProduct !== null) {
      fetch('/api/products', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(currentProduct)
      })
        .then(res => res.json())
        .then(product => {
          setProducts([...products, product])
        })
    }
    navigate('/')
  }

  function getProducts() {
    fetch('/api/products')
      .then(res => res.json())
      .then(res => setProducts([...products, ...res]))
  }

  useEffect(getProducts, [])

  function selectedProductChange(event) {
    event.preventDefault();
    const productArray = event.target.id.split('-')
    console.log(event.target)
    const productObj = {
      item: productArray[0],
      price: productArray[1],
      description: productArray[2],
      item_id: productArray[3],
      image: productArray[4]  
    }
    console.log(productObj)
    setSelectedProduct(productObj)
    navigate('/product-info')
  }

  function addToCart(event) {
    event.preventDefault();
    if(cart !== null) {
      fetch('/api/cart', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(selectedProduct)
      })
        .then(res => res.json())
        .then(product => {
          setCart([...cart, product])
        })
    }
    navigate('/cart')
  }

  function getCartInfo() {
    fetch('/api/cart')
      .then(res => res.json())
      .then(res => setCart([...cart, ...res]))
  }
  
  useEffect(getCartInfo, [])

  function buyProducts(event) {
    event.preventDefault();
    if(purchases !== null) {
      fetch('/api/purchases', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(cart)
      })
        .then(res => res.json())
        .then(product => {
          setPurchases([...purchases, product])
        })
    }
    navigate('/purchases')
  }

  function getPurchasesInfo() {
    fetch('/api/purchases')
      .then(res => res.json())
      .then(res => setPurchases([...purchases, ...res]))
  }

  useEffect(getPurchasesInfo, [])

  return (
    <div className="App">
      <Navbar />
       <Routes>
        <Route path='/' element={<Home 
          products={products}
          selectedProductChange={selectedProductChange}
        />} />
        <Route path='/product' element={<CreateProduct 
          setCurrentProduct={setCurrentProduct}
          currentProduct={currentProduct}
          addProduct={addProduct}
          products={products}
        />} />
        <Route path='/product-info' element={<ProductInfo 
          selectedProduct={selectedProduct}
          addToCart={addToCart}
        />} />
        <Route path='/cart' element={<Cart 
          cart={cart}
          buyProducts={buyProducts}
        />} />
        <Route path='/purchases' element={<Purchases 
          purchases={purchases}
        />} />
      </Routes>

    </div>
  );
}

export default App;
