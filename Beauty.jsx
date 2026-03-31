import React, { useState } from 'react'
import { useEffect } from 'react'
import Navbar from '../assets/Navbar/Navbar'
import BeautyProducts from './BeautyProducts'

const Beauty = () => {
    const [product, setProduct] = useState([])

    const API = 'https://dummyjson.com/products?categoryId=1&offset=2&limit=10'

    const Allproduts= async () =>{
        try {
            const res = await fetch(API)
            const data = await res.json()

            setProduct(data.products) 
           
            console.log(data);
            
                
                
            
            
            

        } catch (error) {
           console.log(error);
            
        }
    }

    useEffect(() => {
     Allproduts()
    
    }, [])
    
  return (
    <div >
        
        <div>
            <img src="https://i.pinimg.com/564x/e2/40/8c/e2408c49ac2bfe0be1d1302a91fafb58.jpg" alt="offers" className='w-300 m-10 rounded-4xl h-85 ml-40 
            transition duration-300 
            hover:scale-110 shadow-2xl' />
        </div>
        <div className='flex'>
            <div className='mt-20'>
                <img src="https://www.shutterstock.com/shutterstock/photos/178791242/display_1500/stock-photo-various-beauty-products-isolated-on-white-background-178791242.jpg" alt="offers" className='w-150 m-10 rounded-4xl object-cover h-85 ml-30 
                transition duration-300 
                hover:scale-110 mt-10 shadow-2xl' />
            </div>
            <div className='mt-20'>
                <img src="https://5.imimg.com/data5/SELLER/Default/2024/1/376061084/DM/DK/AH/208824790/beauty-cosmetic-products.jpeg" alt="offers" className='w-150 m-10 rounded-4xl h-85 mr-20 
                transition duration-300 
                hover:scale-110 mt-10 shadow-2xl' />
            </div>
            
      </div>
      <section>
        <h1 className='text-4xl text-red-800 text-center mt-10 font-bold'>Beauty Products</h1>
        <div className='m-10 mt-0    '>
            <div className=' p-8 flex grid grid-cols-4 gap-15 m-10 rounded-4xl'>
              {
                    
                    product.map((curData) => {
                        return (
                        <BeautyProducts key={curData.id} data={curData}/>
                        )
                    })
                    }
              
            </div>
          </div>  
        </section>
    </div>
  )
}

export default Beauty

