// Modal.js
import React from "react";

const Modal = ({ isOpen, onClose, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg px-6 py-10 w-100">
        <h3 className="text-lg font-semibold mb-4">
          Are you sure you want to delete this product?
        </h3>
        {/* <p className="text-sm text-gray-600 mb-6">
          Are you sure you want to delete this product?
        </p> */}
        <div className="flex justify-center space-x-4">
          <button
            onClick={onClose} // Triggered when "Cancel" is clicked
            className="px-4 py-2 text-gray-700 bg-gray-200 rounded hover:bg-gray-300"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm} // Triggered when "Yes, Log Out" is clicked
            className="px-4 py-2 text-white bg-red-500 rounded hover:bg-red-600"
          >
            Yes, Log Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
