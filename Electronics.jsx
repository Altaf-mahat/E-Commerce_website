import React, { useState } from 'react'
import { useEffect } from 'react'
import Navbar from '../assets/Navbar/Navbar'
import ElectronicsProduct from './ElectronicsProduct'

const Electronics = () => {
    const [brand, setBrand] = useState([])

    const API = 'https://dummyjson.com/products/category/smartphones?limit=50'

    const Electronics= async () =>{
        try {
            const res = await fetch(API)
            const data = await res.json()

            setBrand(data.products) 
           
            console.log(data);
            
                
                
            
            
            

        } catch (error) {
           console.log(error);
            
        }
    }

    useEffect(() => {
     Electronics()
    
    }, [])
    
  return (
    <div >
      
        <div>
        <img src="https://m.media-amazon.com/images/G/31/img22/laptop/june/1_D45798145_IN_PC-Electronics-Mega-Electronics-days_1242x450.jpg" alt="offers" className='w-300 m-10 rounded-4xl h-85 ml-40 
        transition duration-300 
        hover:scale-110 shadow-2xl' />
      </div>
      <section>
        <h1 className='text-4xl text-red-800 text-center mt-10 font-bold'>Mobile Accessories</h1>
        <div className='m-10 mt-0    '>
            <div className=' p-8 flex grid grid-cols-4 gap-15 m-10 rounded-4xl'>
              {
                brand.map((curData) => {
                  return(
                    <ElectronicsProduct key={curData.id} data={curData}/>
                  )
                })
              }
              
            </div>
          </div>  
        </section>
    </div>
  )
}

export default Electronics

