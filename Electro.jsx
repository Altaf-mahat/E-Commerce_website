import React, { useState, useEffect } from 'react'
import Navbar from '../assets/Navbar/Navbar'
import ElectroProd from './ElectroProd'

const Electro = () => {
const [product, setProduct] = useState([])

const API1 = "https://dummyjson.com/products/category/mobile-accessories?limit=30"
const API2 = "https://dummyjson.com/products/category/laptops?limit=30"
const API3 = "https://dummyjson.com/products/category/smartphones?limit=30"



const Allproducts = async () => {
try {


 const [res1, res2, res3] = await Promise.all([
  fetch(API1),
  fetch(API2),
  fetch(API3)
 ])


  const data1 = await res1.json()
  const data2 = await res2.json()
  const data3 = await res3.json()

  // combine all products
  const allData = [...data1.products, ...data2.products, ...data3.products]

  setProduct(allData)

  console.log(allData)

} catch (error) {
  console.log(error)
}


}

useEffect(() => {
Allproducts()
}, [])

return ( <div> 


  <div className='flex'>
    <div className='mt-5'>
      <img src="https://i.pinimg.com/736x/65/66/77/65667746c8d6bab69017f26cb6202df7.jpg"
        alt="offers"
        className='w-150 m-10 rounded-4xl h-85 ml-30 transition duration-300 hover:scale-110 shadow-2xl' />
    </div>

    <div className='mt-5'>
      <img src="https://img.freepik.com/free-photo/green-rice-cooker-bowls_23-2152012012.jpg?semt=ais_hybrid&w=740&q=80"
        alt="offers"
        className='w-150 m-10  rounded-4xl h-85 mr-20 transition duration-300 hover:scale-110 shadow-2xl' />
    </div>
  </div>

  <div>
    <img src="https://www.bajajelectricals.com/cdn/shop/files/Slider1.jpg?v=1743012156&width=1400"
      alt="offers"
      className='w-300 m-10 rounded-4xl h-85 ml-40 transition duration-300 hover:scale-110 shadow-2xl' />
  </div>

  <section>
    <h1 className='text-4xl text-red-800 text-center mt-10 font-bold'>
      Electronics
    </h1>

    <div className='m-10 mt-0'>
      <div className='p-8 grid grid-cols-4 gap-15 m-10 rounded-4xl'>
        {
          product.map((curData) => (
            <ElectroProd key={curData.id} data={curData} />
          ))
        }
      </div>
    </div>

  </section>
</div>


)
}

export default Electro
