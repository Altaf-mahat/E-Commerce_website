import React from 'react'

const Products = ({ data }) => {
    
    
  return (
    <div>
       <div className='bg-gray-300  p-8 rounded-4xl w-80 text-center shadow-xl'>
            
            <img
                className='w-full h-50 '
                src={data.images[0]}   
                alt={data.title}
            />

            <h1 className='text-xl font-bold mt-3'>
                {data.brand}
            </h1>

            <h2 className='text-lg'>
                {data.title}
            </h2>

            <h1 className='text-xl font-semibold text-red-600'>
                Price : ${data.price}
            </h1>

            <button className='bg-blue-400 rounded-2xl p-3 hover:bg-blue-600 mt-2' onClick={() => {HandleData}}>Add to Cart</button>

        </div>

        
    </div>
  )
}

export default Products
