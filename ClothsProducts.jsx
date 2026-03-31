import React from 'react'


const ClothsProducts = ({ data }) => {

  const imageUrl =
    data.images && data.images.length > 0
      ? data.images[0]
      : "https://via.placeholder.com/200";

  return (
    <div className=' product-card bg-gray-300 p-6 rounded-3xl w-full max-w-[300px] mx-auto text-center shadow-xl'>

      <img
        className='product-img w-full h-48 object-cover rounded-xl'
        src={imageUrl}
        alt={data.title}
      />

      <h1 className='text-lg font-bold mt-3'>
        {data.category}
      </h1>

      <h2 className='text-md'>
        {data.title}
      </h2>

      <h1 className='text-lg font-semibold text-red-600'>
        Price : ${data.price}
      </h1>

      <button className= ' product-btn bg-blue-500 text-white rounded-xl px-4 py-2 hover:bg-blue-700 mt-3 transition'>
        Add to Cart
      </button>

    </div>
  )
}

export default ClothsProducts