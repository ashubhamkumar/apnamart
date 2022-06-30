import React from 'react'
const ProductCard = ({ product }) => {
    return (
         <div className="group relative bg-indigo-400 shadow-md rounded-md p-2">
            <div className="w-full min-h-80  aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                <img
                    src={`https://api.theshubham.dev/${product.imageUrl}`}
                    alt={product.imageUrl}
                    className="w-full h-full  bg-transparent object-center object-cover lg:w-full lg:h-full"
                />
            </div>
            <div className="mt-4 flex justify-between">
                <div>
                    <h3 className="text-sm text-gray-700">
                        <a href={product.href}>
                            <span aria-hidden="true" className="absolute inset-0" />
                            {product.title}
                        </a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">{product.price}</p>
            </div>
        </div>
    )
}

export default ProductCard;