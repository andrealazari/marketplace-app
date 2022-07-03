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

import {Routes, Route, Link, useNavigate} from 'react-router-dom'

function App() {
  const [products, setProducts] = useState([])
  const [currentProduct, setCurrentProduct] = useState({
    item: '', 
    price: '', 
    image: '', 
    description: '',
    user_id: ''
  })
  const [selectedProduct, setSelectedProduct] = useState('')
  const [cart, setCart] = useState('')
  const [purchases, setPurchases] = useState('')
  const [user, setUser] = useState('')
  const [login, setLogin] = useState('')
  const [isLogged, setIsLogged] = useState(false)

  const navigate = useNavigate()

  function addProduct(event) {
    event.preventDefault();
    setCurrentProduct({...currentProduct, user_id: login.userId })
    console.log(currentProduct)
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
      .then(res => {
        setProducts([...products, ...res])
      })
    }


  useEffect(getProducts, [])

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
    console.log(products)
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

  async function deleteFromCart(event) {
    event.preventDefault();
    const productArray = event.target.id.split('-')
    const productObj = {
      item_id: productArray[3],
    }
    const response = await fetch(`/api/cart/${productObj.item_id}`, {
      method: 'DELETE'
    })
    response.then(() => {
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


  function deleteFromSales(event) {
    event.preventDefault();
    const productArray = event.target.id.split('-')
    const productObj = {
      item_id: productArray[3],
    }
    console.log(productObj)
    fetch(`/api/sales/${productObj.item_id}`, {
      method: 'DELETE'
    }).then(() => {
      const newList= products.filter((product) => product.id !== productObj.item_id)
      setProducts(newList)
    });
    navigate('/sales')
  }

  function submitSignUp(event) {
    event.preventDefault();
    if(user !== null) {
      fetch('/api/users', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(user)
      })
        .then(res => res.json())
        .then(user => {
          setUser(user)
        })
    }
    navigate('/login')
  }

  function submitLogin(event) {
    event.preventDefault();
    console.log(login)
    if(login !== null) {
      fetch('/api/sessions', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(login)
      })
        .then(res => res.json())
        .then(user => {
          setLogin(user)
        })
    }
    const isLoggedIn = true
    setIsLogged(isLoggedIn)
    navigate('/')
  }

  function logOut() {
    fetch("/api/sessions", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(),
    }).then((req, res) => {
      const logout = '';
      setLogin(logout)
      const isLoggedIn = false
    setIsLogged(isLoggedIn)
    });
  }
  

  return (
    <div className="App">
      <Navbar 
        logOut={logOut}
      />
      <h1>Hi {login.userName}</h1>
       <Routes>
        <Route path='/' element={<Home 
          products={products}
          selectedProductChange={selectedProductChange}
          login={login}
          sortPrice={sortPrice}
          sortName={sortName}
        />} />
        <Route path='/product' element={<CreateProduct 
          setCurrentProduct={setCurrentProduct}
          currentProduct={currentProduct}
          addProduct={addProduct}
          products={products}
          login={login}
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
          deleteFromSales={deleteFromSales}
        />} />
        <Route path='/product-edit' element={<Edit 
          selectedProduct={selectedProduct}
          editProduct={editProduct}
          setSelectedProduct={setSelectedProduct}
        />} />

      <Route path='/signup' element=    {<SignUp 
        user={user}
        setUser={setUser}
        submitSignUp={submitSignUp}
        />} />  
        <Route path='/login' element=    {<Login 
          login={login}
          setLogin={setLogin}
          submitLogin={submitLogin}
        />} />
      </Routes>

    </div>
  );
}

export default App;
