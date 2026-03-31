import React, { useRef, useEffect } from "react";
import HomeProducts from "./HomeProducts";

const Home = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;

    const interval = setInterval(() => {
      if (slider) {
        slider.scrollBy({
          left: 600, // image width
          behavior: "smooth",
        });

        if (slider.scrollLeft + slider.clientWidth >= slider.scrollWidth) {
          slider.scrollTo({
            left: 0,
            behavior: "smooth",
          });
        }
      }
    }, 2000); // 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white py-6">
      <div
        ref={sliderRef}
        className="flex gap-5 w-full max-w-7xl mx-auto overflow-x-auto rounded-2xl m-5"
      >
        <img src="https://static.vecteezy.com/system/resources/thumbnails/008/601/839/small/online-shopping-background-design-free-vector.jpg"
          className="w-[600px] h-[300px] object-cover rounded-lg flex-shrink-0" />

        <img src="https://t3.ftcdn.net/jpg/04/65/46/52/360_F_465465254_1pN9MGrA831idD6zIBL7q8rnZZpUCQTy.jpg"
          className="w-[600px] h-[300px] object-cover rounded-lg flex-shrink-0" />

        <img src="https://c8.alamy.com/comp/2D7GAY6/super-sale-vector-banner-design-special-offer-sale-text-with-paper-bags-and-push-cart-shopping-elements-in-abstract-background-for-marketing-promo-2D7GAY6.jpg"
          className="w-[600px] h-[300px] object-cover rounded-lg flex-shrink-0" />

        <img src="https://images.samsung.com/is/image/samsung/assets/in/s2602/all_about_galaxy/all_about_galaxy_og_1200_630.png?$ORIGIN_PNG$"
          className="w-[600px] h-[300px] object-cover rounded-lg flex-shrink-0" />

        <img src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/grocery-sale-retail-or-e-commerce-banner-ad-design-template-67720435bb809be27f46dfb1dd44c6fa_screen.jpg"
          className="w-[600px] h-[300px] object-cover rounded-lg flex-shrink-0" />

        <img src="https://www.shutterstock.com/image-photo/woman-near-showcase-pick-out-600nw-2689285779.jpg"
          className="w-[600px] h-[300px] object-cover rounded-lg flex-shrink-0" />

        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2LFHAmR28Et0KHXCNx7MWwcRsnKhrc4tFug&s"
          className="w-[600px] h-[300px] object-cover rounded-lg flex-shrink-0" />
      </div>

      <HomeProducts />
    </div>
  );
};

export default Home;