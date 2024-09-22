import React, { useState } from 'react';
import AddColumnModal from './AddColumnModal';
import DeleteModal from './DeleteModal';

function Table({ products, setProducts }) {
    const [columns, setColumns] = useState([
        { header: "Product_Link", field: "name" },
        { header: "NAME", field: "color" },
        { header: "iNGREDIENTS", field: "category" },
        { header: "PRICE", field: "price" },
    ]);

    const [showModal, setShowModal] = useState(false);
    const [newColumn, setNewColumn] = useState({ fieldName: '', fieldType: '' });
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [productToDelete, setProductToDelete] = useState(null);

    // State for tracking the clicked cell and edited value
    const [editableProduct, setEditableProduct] = useState(null);
    const [editedValue, setEditedValue] = useState('');
    const [popupPosition, setPopupPosition] = useState({ x: 0, y: 0 });

    // Filter state
    const [filterPopupVisible, setFilterPopupVisible] = useState(null); // Track if popup is visible for a column
    const [filterCriteria, setFilterCriteria] = useState({ contains: '', doesntContain: '' }); // Filter criteria

    const handleAddColumn = () => {
        setShowModal(true);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewColumn((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = () => {
        if (newColumn.fieldName && newColumn.fieldType) {
            setColumns((prev) => [...prev, { header: newColumn.fieldName, field: newColumn.fieldName.toLowerCase() }]);
            setShowModal(false);
            setNewColumn({ fieldName: '', fieldType: '' });
        }
    };

    const openDeleteModal = (index) => {
        console.log('Opening delete modal for index:', index); // Add this line
        setProductToDelete(index);
        setShowDeleteModal(true);
    };


    const closeDeleteModal = () => {
        setShowDeleteModal(false);
    };

    const handleDelete = () => {
        setProducts((prev) => prev.filter((_, i) => i !== productToDelete));
        setShowDeleteModal(false);
    };

    // Open small popup near the clicked cell
    const handleCellClick = (event, product, field) => {
        setEditableProduct({ product, field });
        setEditedValue(product[field]);

        // Calculate the position for the popup
        const rect = event.target.getBoundingClientRect();
        setPopupPosition({
            x: rect.x + window.scrollX + rect.width / 2,
            y: rect.y + window.scrollY + rect.height,
        });
    };

    const handleModalSave = () => {
        if (editableProduct) {
            const updatedProducts = products.map((p) =>
                p === editableProduct.product ? { ...p, [editableProduct.field]: editedValue } : p
            );
            setProducts(updatedProducts);
            setEditableProduct(null);
            setEditedValue('');
        }
    };

    const handleModalCancel = () => {
        setEditableProduct(null);
    };

    // Toggle the filter popup for a column
    const toggleFilterPopup = (columnIndex) => {
        setFilterPopupVisible(columnIndex === filterPopupVisible ? null : columnIndex);
    };

    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setFilterCriteria((prev) => ({ ...prev, [name]: value }));
    };

    // const handleFilterApply = (columnField) => {
    //     const filteredProducts = products.filter(product => {
    //         const value = product[columnField]?.toLowerCase();
    //         const containsMatch = !filterCriteria.contains || value.includes(filterCriteria.contains.toLowerCase());
    //         const doesntContainMatch = !filterCriteria.doesntContain || !value.includes(filterCriteria.doesntContain.toLowerCase());
    //         return containsMatch && doesntContainMatch;
    //     });
    //     setProducts(filteredProducts);
    //     setFilterPopupVisible(null);
    // };
    const handleFilterApply = (columnField) => {
        const filteredProducts = products.filter(product => {
            const value = product[columnField]?.toLowerCase();

            // Split "contains" and "doesn't contain" lists into arrays and trim spaces
            const containsList = filterCriteria.contains ? filterCriteria.contains.split(',').map(item => item.trim().toLowerCase()) : [];
            const doesntContainList = filterCriteria.doesntContain ? filterCriteria.doesntContain.split(',').map(item => item.trim().toLowerCase()) : [];

            // Check if any of the "contains" list items are in the value
            const containsMatch = containsList.length === 0 || containsList.some(item => value.includes(item));

            // Check if none of the "doesn't contain" list items are in the value
            const doesntContainMatch = doesntContainList.length === 0 || doesntContainList.every(item => !value.includes(item));

            return containsMatch && doesntContainMatch;
        });

        setProducts(filteredProducts);
        setFilterPopupVisible(null);
    };


    return (
        <div className="relative overflow-x-auto shadow-md mt-16 bg-black">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-800 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="p-4 border-r border-gray-200 dark:border-gray-700">#</th>
                        {columns.map((col, index) => (
                            <th key={index} scope="col" className="px-6 py-3 border-r border-gray-200 dark:border-gray-700 relative">
                                <div className="flex items-center">
                                    <p className="text-base text-white">{col.header}</p>
                                    <span className="flex items-center space-x-2 ml-2 cursor-pointer" >
                                        {/* Filter Icon */}
                                        <svg onClick={() => toggleFilterPopup(index)} className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                            <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M18.796 4H5.204a1 1 0 0 0-.753 1.659l5.302 6.058a1 1 0 0 1 .247.659v4.874a.5.5 0 0 0 .2.4l3 2.25a.5.5 0 0 0 .8-.4v-7.124a1 1 0 0 1 .247-.659l5.302-6.059c.566-.646.106-1.658-.753-1.658Z" />
                                        </svg>
                                        <svg onClick={() => toggleFilterPopup(index)} class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M12 6h.01M12 12h.01M12 18h.01" />
                                        </svg>

                                    </span>

                                    {/* Filter Popup */}
                                    {filterPopupVisible === index && (
                                        <div className="absolute z-10 top-full mt-2 left-0 bg-gray-950 shadow-md p-4 rounded w-64">
                                            <h3 className="text-white font-semibold mb-2 opacity-90">Filter {col.header}</h3>
                                            <input
                                                type="text"
                                                name="contains"
                                                value={filterCriteria.contains}
                                                onChange={handleFilterChange}
                                                placeholder="Contains List"
                                                className="w-full p-2 border border-gray-300 rounded mb-2"
                                            />
                                            <input
                                                type="text"
                                                name="doesntContain"
                                                value={filterCriteria.doesntContain}
                                                onChange={handleFilterChange}
                                                placeholder="Doesn't Contain List"
                                                className="w-full p-2 border border-gray-300 rounded mb-2"
                                            />
                                            <button
                                                onClick={() => handleFilterApply(col.field)}
                                                className="bg-blue-500 text-white px-4 py-2 rounded w-full"
                                            >
                                                Apply Filter
                                            </button>
                                        </div>
                                    )}
                                </div>
                            </th>
                        ))}
                        <th scope="col" className="px-6 py-3 ">
                            <div className='flex items-center' onClick={handleAddColumn}>
                                <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14m-7 7V5" />
                                </svg>
                                <p className="text-base ml-2">ADD NEW COLUMN</p>
                            </div>
                        </th>
                    </tr>
                </thead>

                <tbody>
                    {products.map((product, index) => (
                        <tr key={index} className="bg-white border-b dark:bg-gray-900 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <td className="px-4 py-4 border-r border-gray-200 dark:border-gray-700">{index + 1}</td>
                            {columns.map((col, colIndex) => (
                                <td key={colIndex} className="px-6 py-4 border-r border-gray-200 dark:border-gray-700"
                                    onClick={(event) => handleCellClick(event, product, col.field)}>
                                    {product[col.field]}
                                </td>
                            ))}
                            <td className="px-6 py-4 border-r border-gray-200 dark:border-gray-700">
                                <button onClick={() => openDeleteModal(index)} className="text-red-600">
                                    <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z" />
                                    </svg>
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Small Editable Popup */}
            {editableProduct && (
                <div
                    className="fixed z-20 bg-gray-950 p-3 rounded shadow-lg"
                    style={{ top: `${popupPosition.y}px`, left: `${popupPosition.x}px` }}
                >
                    <input
                        type="text"
                        value={editedValue}
                        onChange={(e) => setEditedValue(e.target.value)}
                        className="border border-gray-300 p-2 w-40"
                    />
                    <div className="mt-2 flex justify-between space-x-2">
                        <button
                            onClick={handleModalSave}
                            className="bg-blue-500 px-4 py-1 rounded text-white hover:bg-blue-600"
                        >
                            Save
                        </button>
                        <button
                            onClick={handleModalCancel}
                            className="bg-gray-500 px-4 py-1 rounded text-white hover:bg-gray-600"
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            )}

            <AddColumnModal
                showModal={showModal}
                setShowModal={setShowModal}
                newColumn={newColumn}
                handleInputChange={handleInputChange}
                handleSubmit={handleSubmit}
            />

            <DeleteModal
                showModal={showDeleteModal}
                handleClose={closeDeleteModal}
                handleDelete={handleDelete}
            />
        </div>
    );
}

export default Table;
