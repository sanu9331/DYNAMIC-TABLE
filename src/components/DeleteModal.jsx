import React from 'react';

function DeleteModal({ showModal, handleClose, handleDelete }) {
    if (!showModal) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-gray-800 text-white rounded-lg shadow-lg max-w-sm w-full p-6">
                {/* Modal Header */}
                <div className="flex justify-between items-center border-b border-gray-600 pb-3">
                    <h3 className="text-lg font-semibold">Confirm Delete</h3>
                    <button onClick={handleClose} className="text-gray-400 hover:text-gray-300">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                {/* Modal Body */}
                <div className="my-4">
                    <p className="text-gray-300">
                        Are you sure you want to delete this row?
                    </p>
                    <p className="text-sm text-gray-500 mt-2">
                        This action cannot be undone.
                    </p>
                </div>

                {/* Modal Footer */}
                <div className="flex justify-end space-x-4">
                    <button
                        onClick={handleClose}
                        className="px-4 py-2 bg-gray-700 text-white rounded-md hover:bg-gray-600 transition duration-150"
                    >
                        No
                    </button>
                    <button
                        onClick={handleDelete}
                        className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-150"
                    >
                        Yes, Confirm
                    </button>
                </div>
            </div>
        </div>
    );
}

export default DeleteModal;
