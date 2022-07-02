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

  function deleteFromCart(event) {
    event.preventDefault();
    const productArray = event.target.id.split('-')
    const productObj = {
      item_id: productArray[3],
    }
    console.log(productObj)
    fetch(`/api/cart/${productObj.item_id}`, {
      method: 'DELETE'
    }).then(() => {
      console.log(cart)
      const newCart = cart.filter((product) => product.id !== productObj.item_id)
      setCart(newCart)
    });
  }

  function selectedProductEdit(event) {
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
    console.log(selectedProduct)
    setSelectedProduct(productObj)
    navigate('/product-edit')
  }

  // function editChange() {
  //   selectedProduct(selectedProduct)
  // }

  function editProduct(event) {
    event.preventDefault();
    console.log(selectedProduct)
    console.log('clicked')
    if(selectedProduct !== null) {
      fetch('/api/edit', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(selectedProduct),
      })
        .then(res => res.json())
        .then(product => {
          console.log('yes')
          // setSelectedProduct(product)
        })
    }
    // navigate('/sales')
  }

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
          deleteFromCart={deleteFromCart}
        />} />
        <Route path='/purchases' element={<Purchases 
          purchases={purchases}
        />} />
        <Route path='/sales' element={<Sales 
          selectedProductEdit={selectedProductEdit}
          products={products}
        />} />
        <Route path='/product-edit' element={<Edit 
          selectedProduct={selectedProduct}
          editProduct={editProduct}
          setSelectedProduct={setSelectedProduct}
        />} />
      </Routes>

    </div>
  );
}

export default App;
