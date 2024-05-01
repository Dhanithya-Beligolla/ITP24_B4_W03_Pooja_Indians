import React from 'react'
import { useQuery } from "react-query"
import BuffetPage from './BuffetPage';
import { getAllBuffets } from '../fetchBuffet/fetchBuffet';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


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
                        <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Buffets</a>
                        <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Rooms</a>
                        <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Feedback</a>
                        <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Careers</a>
                        <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Contact us</a>
                    </div>
                    </div>
                </div>
                <div className="hidden lg:block">
            <div className="flex items-center">
            <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                <p>Cart</p>
                <i className="fas fa-shopping-cart"></i>
                </a>
                <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                    <p>Sign in</p>
                <i className="fas fa-sign-in-alt"></i>
                </a>
                <a href="#" className="ml-4 text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                    <p>Sign up</p>
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
            <div className="container my-5 w-[100%]">
                <footer className="text-white text-center text-lg-start w-[1500px]" style={{backgroundColor: "#23242a"}}>
                    <div className="container p-4">
                    <div className="row mt-4">
                        <div className="col-lg-3 col-md-6 mb-4 mb-md-0 ">
                        <h5 className="text-uppercase mb-4 ml-[280px]">Pooja Indians.LK</h5>
                        <p className='ml-[280px]'>
                        "Experience authentic Indian flavors, warm hospitality, and comfortable accommodations at our buffet-style restaurant and lodging. Your culinary journey awaits!"
                        </p>   
                       
                        </div>
                        <div className="justify-center col-lg-3 col-md-6 mb-4 mb-md-0">
                        <div className='justify-center col-lg-3 col-md-6 mb-4 mb-md-0 ml-[250px]'>
                            <a type="button" className="btn btn-floating btn-warning btn-lg mr-2"><i className="fab fa-facebook-f"></i></a>
                            <a type="button" className="btn btn-floating btn-warning btn-lg mr-2"><i className="fab fa-dribbble"></i></a>
                            <a type="button" className="btn btn-floating btn-warning btn-lg mr-2"><i className="fab fa-twitter"></i></a>
                            <a type="button" className="btn btn-floating btn-warning btn-lg mr-2"><i className="fab fa-google-plus-g"></i></a>
                        </div>     
                        <div className='ml-[250px] mt-4'>
                            <a href="#">
                        <button type="button"  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg">
                            Any Complains
                        </button></a></div>
                        </div>
                        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                        </div>
                        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                        {/* Column 4 content goes here */}
                        </div>
                    </div>
                    </div>
                    <div className="text-center p-3" style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}>
                    ©️ 2024 allrights reserved by PoojaIndians.LK 
                    </div>
                </footer>
            </div>
        </div>
    );
};

export default BuffetPages;