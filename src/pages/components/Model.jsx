import React from 'react';

const Modal = ({ open, onClose, children }) => {
    if (!open) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white dark:bg-gray-800 max-h-[526px] overflow-y-auto border border-gray-300 dark:border-gray-500 rounded-xl p-6 relative">
                <button
                    className="absolute top-2 right-2 text-gray-700 dark:text-gray-200"
                    onClick={onClose}
                >
                    &times;
                </button>
                {children}
            </div>
        </div>
    );
};

export default Modal;
