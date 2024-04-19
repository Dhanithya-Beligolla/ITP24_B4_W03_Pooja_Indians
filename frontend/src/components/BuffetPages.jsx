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
        </div>
    );
};

export default BuffetPages;