import React, { useState } from 'react'
import { useEffect } from 'react'
import Navbar from '../assets/Navbar/Navbar'



import FoodProducts from './FoodProducts'

const Food = () => {
    const [product, setProduct] = useState([])

    const API = 'https://dummyjson.com/products/category/groceries?limit=50'

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
                <img src="https://img.pikbest.com/wp/202413/organic-healthy-food-web-banner_6131600.jpg!sw800" alt="offers" className='w-150 m-10 rounded-4xl h-85 ml-30 
                transition duration-300 
                hover:scale-110 mt-10 shadow-2xl' />
            </div>
            <div className='mt-5'>
                <img src="https://t4.ftcdn.net/jpg/07/08/62/63/360_F_708626395_P7O5qLX5ZyUBirtGRJzZDiuzM1AHEbJK.jpg" alt="offers" className='w-150 m-10 rounded-4xl h-85 mr-20 
                transition duration-300 
                hover:scale-110 mt-10 shadow-2xl' />
            </div>
            
      </div>
      <section>
        <h1 className='text-4xl text-red-800 text-center mt-10 font-bold'>Food & Health</h1>
        <div className='m-10 mt-0'>
            <div className=' p-8 flex grid grid-cols-4 gap-15 m-10 rounded-4xl'>
              {
                    
                    product.map((curData) => {
                        return (
                        <FoodProducts key={curData.id} data={curData}/>
                        )
                    })
                    }
              
            </div>
          </div>  
        </section>
    </div>
  )
}

export default Food

