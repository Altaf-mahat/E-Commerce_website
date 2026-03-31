import React from 'react'
import HomeApi from '../Components/HomeApi'
import { NavLink } from 'react-router-dom'


const HomeOffers = () => {
  return (
    <div>
      <div>
        <img src="https://www.kottayam.lulumall.in/wp-content/uploads/2024/10/kottayam-banners-01-scaled.jpg" alt="offers" className='w-300 m-10 rounded-4xl h-85 ml-40 
        transition duration-300 
        hover:scale-110 shadow-2xl' />
      </div>
       <section className='bg-red-800  p-10 m-10 rounded-4xl '>
            <h1 className='text-3xl font-bold text-white'>Best Gadgets & Appliances</h1><br />
            <div className='flex mt-0  bg-amber-200 rounded-4xl p-10 '>
                <div>
                    <NavLink to="/Electro">
                        <img src="https://gadgetsstore.co.in/wp-content/uploads/2023/04/WhatsApp-Image-2023-04-04-at-8.25.59-PM-2-600x600.jpeg" alt="Airpods" 
                        className='w-120 rounded-4xl  p-4 
                        hover:scale-110  
                        transition duration-300 cursor-pointer'/>
                    
                    <ul className='mt-0 font-medium text-center'>
                        <h1 className='text-3xl'>Airpods</h1>
                        <h1 className='font-bold mt-2'>Min 50% Off</h1>
                    </ul>
                    </NavLink>
                    
                    
                </div>
                <div>
                    <img src="https://img.freepik.com/premium-photo/silver-gold-watch-isolated-white-background-ai-generated_1022157-4486.jpg?semt=ais_hybrid&w=740&q=80" alt="Watch" 
                    className='w-120 rounded-4xl  p-4 
                    hover:scale-110  
                    transition duration-300 cursor-pointer' />
                    <ul className='mt-0 font-medium text-center'>
                        <h1 className='text-3xl'>Watch</h1>
                        <h1 className='font-bold mt-2'>Min 50% Off</h1>
                    </ul>
                </div>
                
                <div>
                    <NavLink to="/Electronics">
                        <img src="https://assets.kogan.com/files/product/2024/Apple_Images/iPhone_16_Plus_UltraMarine.png?auto=webp&bg-color=fff&canvas=1200%2C800&dpr=1&enable=upscale&fit=bounds&height=800&quality=90&width=1200" alt="Shoes" 
                        className='w-125 rounded-4xl  p-4 
                        hover:scale-110  h-80
                        transition duration-300 cursor-pointer'/>
                        <ul className='mt-0 font-medium text-center'>
                            <h1 className='text-3xl'>Iphone 16</h1>
                            <h1 className='font-bold mt-2'>Min 50% Off</h1>
                        </ul>
                    </NavLink>
                    
                </div>
                <div>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhYh6x-j_Cjd2mJJuumm-VGL0zGgZsZx9mYQ&s" alt="Airpods" 
                    className='w-140 rounded-4xl  p-4 
                    hover:scale-110  h-80
                    transition duration-300 cursor-pointer'/>
                    <ul className='mt-0 font-medium text-center'>
                        <h1 className='text-3xl'>Laptop</h1>
                        <h1 className='font-bold mt-2'>Min 50% Off</h1>
                    </ul>
                </div>
            </div>
            {/* this is section 2nd start */}
       </section>
       <section className='bg-pink-700  p-10 m-10 rounded-4xl '>
        <NavLink to="/Cloths">
            <h1 className='text-3xl font-bold text-white'>Best Fashion</h1><br />
            <div className='flex mt-0  bg-amber-200 rounded-4xl p-10 '>
                <div>
                    <img src="https://thumbs.dreamstime.com/b/png-colorful-indian-lehenga-transparent-background-378509400.jpg" alt="Airpods" 
                    className='w-120 rounded-4xl  p-4 
                    hover:scale-110  
                    transition duration-300 cursor-pointer'/>
                    <ul className='mt-0 font-medium text-center'>
                        <h1 className='text-3xl'>Lehenga</h1>
                        <h1 className='font-bold mt-2'>Min 40% Off</h1>
                    </ul>
                    
                    
                </div>
                <div>
                    <img src="https://img.freepik.com/premium-psd/luxurious-red-gold-indian-bridal-lehenga-choli-with-heavy-embroidery_1164417-58170.jpg?semt=ais_hybrid&w=740&q=80" alt="Watch" 
                    className='w-120 rounded-4xl  p-4 
                    hover:scale-110  
                    transition duration-300 cursor-pointer' />
                    <ul className='mt-0 font-medium text-center'>
                        <h1 className='text-3xl'>Ghagra</h1>
                        <h1 className='font-bold mt-2'>Min 50% Off</h1>
                    </ul>
                </div>
                <div>
                    <img src="https://tiimg.tistatic.com/fp/1/006/509/mr102-hd-printed-men-s-t-shirt-738.jpg" alt="Shoes" 
                    className='w-125 rounded-4xl  p-4 
                    hover:scale-110  h-80
                    transition duration-300 cursor-pointer'/>
                    <ul className='mt-0 font-medium text-center'>
                        <h1 className='text-3xl'>Tshirt</h1>
                        <h1 className='font-bold mt-2'>Min 60% Off</h1>
                    </ul>
                    
                </div>
                <div>
                    <img src="https://www.pngmart.com/files/15/Black-Blazer-Suit-Tie-PNG.png" alt="Airpods" 
                    className='w-120 bg-white rounded-4xl  p-4 
                    hover:scale-110  h-74 mt-3
                    transition duration-300 cursor-pointer'/>
                    <ul className='mt-5 bg font-medium text-center'>
                        <h1 className='text-3xl'>Laptop</h1>
                        <h1 className='font-bold mt-2'>Min 50% Off</h1>
                    </ul>
                </div>
            </div>
            </NavLink>
       </section>
       <HomeApi/>
    </div>
  )
}

export default HomeOffers
