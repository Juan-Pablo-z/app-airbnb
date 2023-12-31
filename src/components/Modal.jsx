import React from "react";
import { MdClose } from "react-icons/md";




export const Modal = ({ isOpen, onClose, children }) => {

	const modalClasses = isOpen
    ? "ease-in opacity-100"
    : "ease-out opacity-0 pointer-events-none";

  return (
    <div className={`fixed inset-0 flex items-center justify-center transition-opacity duration-300 ${modalClasses}`}>
      <div className="modal fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center">
        <div className="modal-content bg-white p-4 w-4/6 h-4/5  overflow-y-auto overflow-x-hidden relative">
          <button onClick={onClose} className="text-[20px] p-2 absolute top-4 right-4 bg-white rounded-full shadow-md">
            <MdClose />
          </button>
          <div className="ml-8 mt-4 w-full">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};