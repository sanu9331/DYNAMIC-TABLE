// ProductModal.js
import React from "react";

function ProductModal({ showModal, setShowModal, newProduct, handleInputChange, handleSubmit }) {
    if (!showModal) return null;

    return (
        // <div className="modal">
        //     <div className="modal-content">
        //         <input
        //             type="text"
        //             name="name"
        //             value={newProduct.name}
        //             onChange={handleInputChange}
        //             placeholder="Product Name"
        //         />
        //         <input
        //             type="text"
        //             name="color"
        //             value={newProduct.color}
        //             onChange={handleInputChange}
        //             placeholder="Color"
        //         />
        //         <input
        //             type="text"
        //             name="category"
        //             value={newProduct.category}
        //             onChange={handleInputChange}
        //             placeholder="Category"
        //         />
        //         <input
        //             type="text"
        //             name="price"
        //             value={newProduct.price}
        //             onChange={handleInputChange}
        //             placeholder="Price"
        //         />
        //         <button onClick={handleSubmit}>Submit</button>
        //         <button onClick={() => setShowModal(false)}>Close</button>
        //     </div>
        // </div>

        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-gray-800 p-1 rounded-lg">
                <div className="flex items-center justify-between p-4 md:p-2 border-2 rounded-t dark:border-gray-800 bg-gray-900 text-white">
                    <h3 className="text-lg font-normal text-gray-950 dark:text-white">
                        CREATEnewproduct
                    </h3>
                    <button onClick={() => setShowModal(false)} type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="crud-modal">
                        <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                        </svg>
                        <span className="sr-only">Close modal</span>
                    </button>
                </div>
                {/* modal body */}
                <div className='border border-gray-900 m-1 p-4 bg-gray-900'>
                    <div className='m-1'>
                        <p className='text-white text-base font-semibold py-1 opacity-90'>Name:</p>
                        <p className='text-white text-sm font-normal opacity-50'>Enter A Unique Name For New Field</p>
                    </div>
                    <input
                        type="text"
                        name="name"
                        value={newProduct.name}
                        onChange={handleInputChange}
                        placeholder="Product Name"
                        className="bg-gray-700 border border-gray-800 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-96 p-2.5 dark:bg-gray-900 dark:border-gray-500 dark:placeholder-gray-500 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    />


                    <p className='text-white text-base font-semibold pt-3 opacity-90'>color:</p>
                    <input
                        type="text"
                        name="color"
                        value={newProduct.color}
                        onChange={handleInputChange}
                        placeholder="Color"
                        className="bg-gray-700 border border-gray-800 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-96 p-2.5 dark:bg-gray-900 dark:border-gray-500 dark:placeholder-gray-500 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    />
                    <p className='text-white text-base font-semibold pt-3 opacity-90'>Category:</p>
                    <input
                        type="text"
                        name="category"
                        value={newProduct.category}
                        onChange={handleInputChange}
                        placeholder="Category"
                        className="bg-gray-700 border border-gray-800 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-96 p-2.5 dark:bg-gray-900 dark:border-gray-500 dark:placeholder-gray-500 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    />

                    <p className='text-white text-base font-semibold pt-3 opacity-90'>Price:</p>
                    <input
                        type="text"
                        name="price"
                        value={newProduct.price}
                        onChange={handleInputChange}
                        placeholder="Price"
                        className="bg-gray-700 border border-gray-800 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-96 p-2.5 dark:bg-gray-900 dark:border-gray-500 dark:placeholder-gray-500 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    />
                </div>
                {/* modal footer */}
                <div className='m-1 flex justify-end bg-gray-900'>

                    <button
                        onClick={() => setShowModal(false)}
                        className="bg-gray-500 text-white px-4 py-1 rounded hover:bg-gray-600 m-1 my-2"
                    >
                        <p className='text-base'>Cancel</p>
                    </button>
                    <button
                        onClick={handleSubmit}
                        className="bg-blue-600 text-white px-4 py-1  rounded mr-2 hover:bg-blue-700 m-1 my-2"
                    >
                        <p className='text-base'>Create</p>
                    </button>
                </div>
                {/* </div> */}

            </div>
        </div>
    );
}

export default ProductModal;
