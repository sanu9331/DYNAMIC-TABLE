import React, { useEffect, useRef } from 'react';

function PopupComponent({
    popupPosition,
    editedValue,
    setEditedValue,
    entries,
    handleRemoveEntry,
    handleModalCancel,
    handleModalSave,
    handleInputKeyDown,
    handleResetValue, errorMessage
}) {
    const popupRef = useRef(null);

    // Close the popup if clicked outside
    useEffect(() => {
        function handleClickOutside(event) {
            // Check if the click is outside the popup
            if (popupRef.current && !popupRef.current.contains(event.target)) {
                handleModalCancel(); // Call the close function
            }
        }

        // Attach the event listener when the component is mounted
        document.addEventListener('mousedown', handleClickOutside);

        // Cleanup the event listener when the component is unmounted
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [popupRef, handleModalCancel]); // Added handleModalCancel to dependency array

    // Safeguard for undefined entries
    const entryCount = Array.isArray(entries) ? entries.length : 0;

    return (
        <div
            ref={popupRef} // Set ref to the popup container
            className="fixed z-20 w-64 bg-gray-800 p-4 rounded-lg shadow-lg"
            style={{ top: `${popupPosition.y}px`, left: `${popupPosition.x}px` }}
        >
            <input
                type="text"
                placeholder="Add values and press Enter to add"
                value={editedValue}
                onChange={(e) => setEditedValue(e.target.value)}
                onKeyDown={handleInputKeyDown}
                className="mb-4 py-2 bg-gray-700 text-white placeholder-gray-400 border-gray-600 w-full"
            />
            {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>} {/* Display error message */}
            <div className="mb-4">
                <p className="text-gray-400 mb-2">ADDED ENTRIES
                    <span className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">{entryCount}</span>
                </p>
                <div className="space-y-2">
                    {entries && entries.map((entry, index) => (
                        <div key={index} className="flex items-center bg-gray-700 rounded px-2 py-1">
                            <span className="text-white flex-grow">{entry}</span>
                            <button
                                onClick={() => handleRemoveEntry(index)}
                                className="h-4 w-4 text-gray-400 hover:text-white hover:bg-transparent"
                            >
                                <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18 17.94 6M18 18 6.06 6" />
                                </svg>
                            </button>
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex justify-between">
                <button
                    // onClick={handleModalCancel}
                    onClick={handleResetValue}
                    className="bg-gray-700 text-blue-400 border border-blue-800 rounded-lg hover:bg-blue-400 hover:text-blue-950 px-5 py-2"
                >
                    Reset All
                </button>
                <button onClick={handleModalSave} className='bg-blue-500 text-white rounded-lg hover:bg-blue-600 px-9 py-2'>Save</button>
            </div>
        </div>
    );
}

export default PopupComponent;
