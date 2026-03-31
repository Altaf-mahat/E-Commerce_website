import React from 'react';
import HomeOffers from './HomeOffers';
import { NavLink } from "react-router-dom";
import'./Products'

const HomeProducts = () => {
  return (
    <>
      <div className='flex gap-8 m-20 items-center overflow-x-auto px-4'>


        <section>
          <NavLink
            to="/Electro"
            className='w-50 rounded-2xl p-4 transition duration-300 cursor-pointer'
          >
            <img 
              src="https://img.freepik.com/premium-photo/home-appliance-with-ribbons-discounts_252025-696.jpg?semt=ais_rp_progressive&w=740&q=80" 
              alt="Electronics" 
              className="w-50 rounded-2xl p-4"
            />
          </NavLink>
          <h1 className='mt-15 text-sm font-medium text-center'>Electronics</h1>
        </section>

        <section>
          <NavLink
            to="/Electronics"
            className='w-50 rounded-2xl p-4 transition duration-300 cursor-pointer'
          >
            <img 
              src="https://img.freepik.com/premium-vector/high-quality-detailed-device-mockup-mock-up-iphone-14-15-pro-max-gold-color-different-colors-background-vector-illustration_797816-208.jpg?semt=ais_rp_progressive&w=740&q=80" 
              alt="Mobiles" 
              className="w-50 rounded-2xl p-4"
            />
          </NavLink>
          <h1 className='mt-4 text-sm font-medium text-center'>Mobiles</h1>
        </section>

        <section>
          <NavLink
            to="/Food"
            className='w-60 rounded-2xl p-4 transition duration-300 cursor-pointer'
          >
            <img 
              src="https://www.pngall.com/wp-content/uploads/2016/03/Food-PNG-Clipart.png" 
              alt="Food & Health" 
              className="w-60 rounded-2xl p-4"
            />
          </NavLink>
          <h1 className='mt-15 text-sm font-medium text-center'>Food & Health</h1>
        </section>

        <section>
          <NavLink
            to="/Beauty"
            className='w-60 rounded-2xl p-4 transition duration-300 cursor-pointer'
          >
            <img 
              src="https://img.freepik.com/free-vector/bag-with-cosmetics-realistic-composition-with-isolated-image-open-vanity-case-with-brushes-lipstick-illustration_1284-57081.jpg?semt=ais_rp_progressive&w=740&q=80" 
              alt="Beauty" 
              className="w-60 rounded-2xl p-4"
            />
          </NavLink>
          <h1 className='mb-3 text-sm font-medium text-center'>Beauty</h1>
        </section>

        <section>
          <NavLink
            to="/Furniture"
            className='w-60 rounded-2xl p-4 cursor-pointer'
          >
            <img 
              src="https://thumbs.dreamstime.com/b/wedding-stage-sofa-set-chairs-bride-groom-sofa-set-chairs-bride-groom-white-background-110880843.jpg" 
              alt="Furniture" 
              className="w-60 rounded-2xl p-4"
            />
          </NavLink>
          <h1 className='mt-11 text-sm font-medium text-center'>Furniture</h1>
        </section>
        <section>
          <NavLink
            to="/Cloths"
            className='w-50 rounded-2xl p-4 transition duration-300 cursor-pointer'
          >
            <img 
              src="https://as2.ftcdn.net/jpg/16/41/79/21/1000_F_1641792119_s7pX0AKdX2nlqGNttb79R9IqydVlOhYR.jpg" 
              alt="Fashion" 
              className="w-40 rounded-full cursor-pointer"
            />
          </NavLink>
          <h1 className='mt-14 text-sm font-medium text-center'>Fashion</h1>
        </section>

        <section>
          <NavLink
            to="/Sports"
            className='w-60 rounded-2xl p-4 cursor-pointer'
          >
            <img 
              src="https://img.freepik.com/free-vector/soccer-volleyball-baseball-rugby-equipment_1441-4026.jpg?semt=ais_rp_progressive&w=740&q=80" 
              alt="Sports" 
              className="w-60 rounded-2xl p-4"
            />
          </NavLink>
          <h1 className='mt-10 text-sm font-medium text-center'>Sports</h1>
        </section>

      </div>

      <HomeOffers/>
    </>
  );
}

export default HomeProducts;