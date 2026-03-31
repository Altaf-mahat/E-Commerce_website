import React, { useState, useEffect } from 'react'
import ClothsProducts from './ClothsProducts'


const Cloths = () => {

  const [product, setProduct] = useState([])

  const API1 = "https://dummyjson.com/products/category/mens-shirts"
  const API2 = "https://dummyjson.com/products/category/womens-dresses"

  const Allproducts = async () => {
    try {

      const [res1, res2] = await Promise.all([
        fetch(API1),
        fetch(API2)
      ])

      const data1 = await res1.json()
      const data2 = await res2.json()

      const allData = [...data1.products, ...data2.products]

      setProduct(allData)

    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    Allproducts()
  }, [])

  return (
    <div>

      {/* Top Banner */}
      <div className='flex justify-center'>
        <img
          src="https://www.kottayam.lulumall.in/wp-content/uploads/2024/10/kottayam-banners-01-scaled.jpg"
          alt="offers"
          className='w-full max-w-6xl m-4 rounded-3xl h-60 md:h-80 shadow-2xl hover:scale-105 transition'
        />
      </div>

      {/* Offer Images */}
      <div className='flex flex-col md:flex-row justify-center items-center gap-6 mt-10 px-4'>

        <img
          src="https://static.vecteezy.com/system/resources/thumbnails/060/192/521/small_2x/discount-bright-red-clothing-sale-tag-displaying-50-off-discount-in-a-retail-store-setting-free-photo.jpg"
          alt="offers"
          className='w-full md:w-[500px] rounded-3xl h-60 object-cover shadow-xl hover:scale-105 transition'
        />

        <img
          src="https://t3.ftcdn.net/jpg/02/91/46/10/360_F_291461022_XwFBA1h8jpnlemG0Z3PzbnD6Iaa2RfWo.jpg"
          alt="offers"
          className='w-full md:w-[500px] rounded-3xl h-60 object-cover shadow-xl hover:scale-105 transition'
        />

      </div>

      {/* Products */}
      <section>

        <h1 className='text-3xl md:text-4xl text-red-800 text-center mt-14 font-bold'>
          Fashion
        </h1>

        <div className='p-6 md:p-10'>

          {/* Responsive Grid */}
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>

            {
              product.map((curData) => (
                <ClothsProducts key={curData.id} data={curData} />
              ))
            }

          </div>

        </div>

      </section>

    </div>
  )
}

export default Cloths