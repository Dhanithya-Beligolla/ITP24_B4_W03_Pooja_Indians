import React from 'react'
import { useQuery } from "react-query"
import BuffetPage from './BuffetPage';
import { getAllBuffets } from '../fetchBuffet/fetchBuffet';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Footer = () => {
    return (
      <footer style={{ backgroundColor: '#f8f9fa', textAlign: 'center', padding: '20px', position: 'fixed', width: '100%', bottom: '0' }}>
        <p>© 2022 Your Company Name. All rights reserved.</p>
      </footer>
    );
  };

const BuffetPages = () => {

    const images = [
        './src/assets/image1.jpg',
        './src/assets/image2.jpg',
        './src/assets/image3.jpg',
        './src/assets/image4.jpg',
        './src/assets/image5.jpg',
        './src/assets/image6.jpg',
      ];
      
      const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
      };
    

    const {data, isLoading, isError} = useQuery("buffet", getAllBuffets);

    if (isError) {
        console.error(isError);
    }
    
    return (
        <div>
            <nav className="bg-gray-800">
                <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                    <div className="relative flex items-center justify-between h-16">
                    <div className="flex items-center px-2 lg:px-0">
                        <div className="flex-shrink-0">
                        <img className="h-8 w-8" src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg" alt="Logo" />
                        </div>
                        <div className="hidden lg:block lg:ml-6">
                        <div className="flex space-x-4">
                            <a href="#" className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700">Home</a>
                            <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Features</a>
                            <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Pricing</a>
                            <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Contact</a>
                        </div>
                        </div>
                    </div>
                    <div className="hidden lg:block">
                <div className="flex items-center">
                <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                    <i className="fas fa-shopping-cart"></i>
                    </a>
                    <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                    <i className="fas fa-sign-in-alt"></i>
                    </a>
                    <a href="#" className="ml-4 text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                    <i className="fas fa-user-plus"></i>
                    </a>
                </div>
                </div>
                    </div>
                </div>
            </nav>
            
            <h1 className="p-6 text-center flex-1 text-2xl font-bold text-gray-700">Buffet Page</h1>
            <div className="w-[90%] h-[100%] mx-auto my-[3rem] border-2 border-blue-100 shadow-md shadow-gray-400
            rounded-lg relative">
                <Slider {...settings}>
                    {images.map((image, index) => (
                    <div key={index}>
                        <img 
                        src={image} 
                        alt={`Slide ${index + 1}`} 
                        style={{ 
                            width: '100%', 
                            height: '600px', 
                            objectFit: 'cover' 
                        }} 
                        />
                    </div>
                    ))}
                </Slider>
            </div>


            {/* map through our data */}
            <div className="p-4 lg:p-7 flex items-center flex-wrap gap-5 w-[95%] mx-auto">
                    {isLoading && "Loading..."}
                    {isError && "Something went wrong..."}
                    {data && data.map((buffetAdmin, i) => (
                        <BuffetPage buffetAdmin={buffetAdmin} key={i} />
                    ))}

            </div>
            <Footer />
        </div>
    );
};

export default BuffetPages;