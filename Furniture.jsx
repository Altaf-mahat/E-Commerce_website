import React, { useState } from 'react'
import { useEffect } from 'react'
import Navbar from '../assets/Navbar/Navbar'
import FurnitureProducts from './FurnitureProducts'

const Furniture = () => {
    const [product, setProduct] = useState([])

    const API = 'https://dummyjson.com/products/category/furniture?limit=50'

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
       
        
        <div className='flex'>
            <div className='mt-5'>
                <img src="https://s3.ap-south-1.amazonaws.com/images.woodenstreet.de/image/data/Blog%20images/7thapril/2.jpg" alt="offers" className='w-150 m-10 rounded-4xl h-85 ml-30 
                transition duration-300 
                hover:scale-110  shadow-2xl' />
            </div>
            <div className='mt-5'>
                <img src="https://www.nismaayadecor.in/cdn/shop/articles/gray_Yellow_Minimalist_furnitur_1384f0d7-bb01-4a97-af17-d34e48be6d96.png?v=1700892466" alt="offers" className='w-150 m-10 rounded-4xl h-85 mr-20 
                transition duration-300 
                hover:scale-110  shadow-2xl' />
            </div>        
      </div>
      <div>
                <img src="https://homecityonline.com/wp-content/uploads/2026/02/luxury-furniture-for-apartments-in-gurgaon-modern-interior.jpg" alt="offers" className='w-300 m-10 rounded-4xl h-85 ml-40 
                transition duration-300 
                hover:scale-110 shadow-2xl' />
            </div>
      <section>
        
        <h1 className='text-4xl text-red-800 text-center mt-10 font-bold'>Furniture</h1>
        <div className='m-10 mt-0'>
            <div className=' p-8 flex grid grid-cols-4 gap-15 m-10 rounded-4xl'>
              {
                    
                    product.map((curData) => {
                        return (
                        <FurnitureProducts key={curData.id} data={curData}/>
                        )
                    })
                    }
              
            </div>
          </div>  
        </section>
    </div>
  )
}

export default Furniture

