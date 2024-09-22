import { useState } from "react";
import ProductModal from "./ProductModal";

//navbar
function Navbar({ setProducts }) {
    const [showModal, setShowModal] = useState(false);
    const [newProduct, setNewProduct] = useState({ name: '', color: '', category: '', price: '' });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewProduct({ ...newProduct, [name]: value });
    };

    const handleSubmit = () => {
        // Add the new product to the product list
        setProducts((prevProducts) => [...prevProducts, newProduct]);
        setShowModal(false);
        setNewProduct({ name: '', color: '', category: '', price: '' });
    };
    return (
        <nav className="bg-white border-gray-200 dark:bg-black border-b dark:border-gray-700 w-full">
            <div className="flex justify-between items-center w-full p-3">
                <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Skin care catalog</span>
                </a>
                <div className="hidden md:flex md:space-x-4">
                    <button type="button" className="flex items-center text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5">
                        <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 15v2a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-2M12 4v12m0-12 4 4m-4-4L8 8" />
                        </svg>
                        <span className="ml-2">Bulk Row Upload</span>
                    </button>
                    <button type="button" className="flex items-center text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5">
                        <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 15v2a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-2m-8 1V4m0 12-4-4m4 4 4-4" />
                        </svg>
                        <span className="ml-2">Download All</span>
                    </button>
                    <button onClick={() => setShowModal(true)} type="button" className="flex items-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5">
                        <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14m-7 7V5" />
                        </svg>
                        <span className="ml-2">Add Row</span>
                    </button>
                </div>
                <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button>
            </div>

            {/* Modal */}
            {/* {
                showModal && (
                    <div className="modal">
                        <div className="modal-content">
                            <input
                                type="text"
                                name="name"
                                value={newProduct.name}
                                onChange={handleInputChange}
                                placeholder="Product Name"
                            />
                            <input
                                type="text"
                                name="color"
                                value={newProduct.color}
                                onChange={handleInputChange}
                                placeholder="Color"
                            />
                            <input
                                type="text"
                                name="category"
                                value={newProduct.category}
                                onChange={handleInputChange}
                                placeholder="Category"
                            />
                            <input
                                type="text"
                                name="price"
                                value={newProduct.price}
                                onChange={handleInputChange}
                                placeholder="Price"
                            />
                            <button onClick={handleSubmit}>Submit</button>
                            <button onClick={() => setShowModal(false)}>Close</button>
                        </div>
                    </div>
                )
            } */}
            <ProductModal
                showModal={showModal}
                setShowModal={setShowModal}
                newProduct={newProduct}
                handleInputChange={handleInputChange}
                handleSubmit={handleSubmit}
            />
        </nav >
    );
}

export default Navbar;
