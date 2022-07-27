import { Link } from "react-router-dom";

const Product = ({ name, imageUrl, discount, slug }) => {
  return (
    <Link
      to={`/product/${slug}`}
      className="flex  cursor-pointer relative flex-col items-center gap-1.5 p-6"
    >
      <div className="h-36 w-36 transform transition-transform duration-150 ease-out hover:scale-110">
        <img
          draggable="false"
          className="h-full w-full object-contain "
          src={`https://api.theshubham.dev/${imageUrl}`}
          alt={name}
        />
      </div>

      <h2 className="mt-2 text-sm font-medium">
        {name.split(" ").slice(0, 3).join(" ")}
      </h2>
      <span className="text-primary-green text-sm">{discount}% Off</span>
      <span className="text-sm text-gray-500">Buy Now!</span>
    </Link>
  );
};

export default Product;
