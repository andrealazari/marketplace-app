import './App.css';
import {useState, useEffect} from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home';
import CreateProduct from './components/CreateProduct';
import Dashboard from './components/Dashboard'

import {Routes, Route, Link} from 'react-router-dom'

function App() {
  const [products, setProducts] = useState(null)

  // function postProduct(event) {
  //   event.preventDefault();
  //   const form = event.target;
  //   const data = Object.fromEntries(new FormData(form));
  //   if(products !== null) {
  //     fetch('/api/products', {
  //       method: 'POST',
  //       headers: {'Content-Type': 'application/json'},
  //       body: JSON.stringify(data)
  //     })
  //       .then(res => res.json())
  //       .then(product => {
  //         setProducts([...products, product])
  //       })
  //   }
  // }

  // useEffect(postProduct, [products])

  return (
    <div className="App">
      <Navbar />
      <Home />
      <CreateProduct 
        // postProduct={postProduct}
      />

      
    </div>
  );
}

export default App;
