const CheckoutChild = ({ product }) => {
  return (
    <div key={product.id} className="flex justify-between">
      <div className="flex items-center overflow-ellipsis overflow-hidden whitespace-nowrap">
        <img
          className="w-16 h-16 object-cover rounded"
          src={product.image[0].imgUrl}
          alt={product.title}
        />
        <div className="ml-4 ">
          <h4 className="text-lg font-semibold ">
            {product.title}
          </h4>
          <p className="text-gray-600">
            ${product.price} x {product.quantity}
          </p>
        </div>
      </div>
      <div className="text-gray-800">${product.price * product.quantity}</div>
    </div>
  );
};

export default CheckoutChild;
