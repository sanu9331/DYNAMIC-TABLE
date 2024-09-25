
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
    { name: "https//www.neutrogena.com/product/", color: "Neutrogena Hydro Boost Water Gel", category: "Moisturizer", price: "16.99" },
    { name: "https//www.Cerave.com/product/", color: "CeraVe Hydrating Cleanser", category: "Cleanser", price: "12.99" },
    { name: "https//www.Ordinary.com/product/", color: "The Ordinary Retinol 0.5% in Squalane", category: "Serum", price: "9.80" },
  ]);



  return (
    <div className=" bg-black min-h-screen">

      < Navbar setProducts={setProducts} />
      <Table products={products} setProducts={setProducts} />

    </div >
  );
}

export default App;
