import React, { useState } from 'react'
import { useEffect } from 'react'
import Navbar from '../assets/Navbar/Navbar'

import Products from './Products'

const HomeApi = () => {
    const [product, setProduct] = useState([])

    const API = 'https://dummyjson.com/products?limit=100'

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
        
        <div className='mt-20'>
        <img src="https://m.media-amazon.com/images/G/31/img22/laptop/june/1_D45798145_IN_PC-Electronics-Mega-Electronics-days_1242x450.jpg" alt="offers" className='w-300 m-10 rounded-4xl h-85 ml-40 
        transition duration-300 
        hover:scale-110 mt-10 shadow-2xl' />
      </div>
      <section>
        
        <div className='m-10 mt-0    '>
            <div className=' p-8 flex grid grid-cols-4 gap-15 m-10 rounded-4xl'>
              {
                product.map((curData) => {
                  return(
                    <Products key={curData.id} data={curData}/>
                  )
                })
              }
              
            </div>
          </div>  
        </section>
    </div>
  )
}

export default HomeApi

