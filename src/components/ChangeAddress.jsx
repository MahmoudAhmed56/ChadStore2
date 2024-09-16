import { useState } from "react";

const ChangeAddress = ({ setIsModalOpen, address, setAddress }) => {
  const [newAddress, setNewAddress] = useState("");
  return (
    <div>
      <h2 className="font-semibold text-2xl mb-5">Change Shipping Address</h2>
      <input
        type="text"
        placeholder="Enter New Address"
        className="border p-2 w-full mb-4"
        onChange={(e) => {
          setNewAddress(e.target.value);
        }}
      />
      <div className="flex justify-end">
        <button
          className="bg-gray-500 text-white py-2 px-4 rounded mr-2"
          onClick={() => setIsModalOpen(false)}
        >
          Cancel
        </button>
        <button
          onClick={() => {
            if (newAddress) {
              setAddress(newAddress);
              setIsModalOpen(false);
            }
          }}
          className="bg-blue-500 text-white py-2 px-4 rounded"
        >
          Save Address
        </button>
      </div>
    </div>
  );
};

export default ChangeAddress;
