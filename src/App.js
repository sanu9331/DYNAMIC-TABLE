
import './App.css';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Table from './components/Table';

function App() {

  // const [products, setProducts] = useState([
  //   { name: "Apple MacBook Pro 17\"", color: "Silver", category: "Laptop", price: "$2999" },
  //   { name: "Microsoft Surface Pro", color: "Black", category: "Tablet", price: "$1999" },
  //   { name: "iPhone 12", color: "White", category: "Smartphone", price: "$999" },
  // ]);
  const [products, setProducts] = useState([
    { name: "Neutrogena Hydro Boost Water Gel", color: "Blue", category: "Moisturizer", price: "$16.99" },
    { name: "CeraVe Hydrating Cleanser", color: "White", category: "Cleanser", price: "$12.99" },
    { name: "The Ordinary Retinol 0.5% in Squalane", color: "Amber", category: "Serum", price: "$9.80" },
  ]);



  return (
    <div className=" bg-black min-h-screen">

      < Navbar setProducts={setProducts} />
      <Table products={products} setProducts={setProducts} />

    </div >
  );
}

export default App;
