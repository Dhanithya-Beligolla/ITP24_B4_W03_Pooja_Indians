import React from 'react'
import { FaReact } from 'react-icons/fa'
const Foot = () => {
  return (
    <div>
         <footer class="bg-gray-900 text-white py-12">
    <div class="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        
        <div>
            <h2 class="text-lg font-semibold mb-4">About Us</h2>
            <p class="mb-4">Experience the finest dining experience with our exquisite dishes crafted by our world-renowned chefs.</p>
            <p>Visit us at:</p>
            <address class="mt-2">123 Main Street City, State ZIP</address>
        </div>
       
        <div>
            <h2 class="text-lg font-semibold mb-4">Quick Links</h2>
            <ul>
                <li><a href="#" class="hover:text-blue-500">Menu</a></li>
                <li><a href="#" class="hover:text-blue-500">Reservation</a></li>
                <li><a href="#" class="hover:text-blue-500">Gallery</a></li>
                <li><a href="#" class="hover:text-blue-500">Events</a></li>
            </ul>
        </div>
       
        <div>
            <h2 class="text-lg font-semibold mb-4">Contact Us</h2>
            <p class="mb-4">For reservations or inquiries, feel free to contact us:</p>
            <p class="mb-2">Phone: +1 (123) 456-7890</p>
            <p>Email: info@restaurant.com</p>
        </div>
        
        <div>
            <h2 class="text-lg font-semibold mb-4">Follow Us</h2>
            <ul class="flex space-x-4">
                <li><a href="#" class="text-xl text-white hover:text-blue-500"><i class="fab fa-facebook-square"></i></a></li>
                <li><a href="#" class="text-xl text-white hover:text-blue-500"><i class="fab fa-twitter-square"></i></a></li>
                <li><a href="#" class="text-xl text-white hover:text-blue-500"><i class="fab fa-instagram-square"></i></a></li>
            </ul>
            <div>
            <button class="bg-blue-500 text-white px-4 py-2 rounded-full mt-4">Raise a ticket</button>
             </div>
        </div>

        
    </div>
    <div class="border-t border-gray-800  text-center">
        <p>&copy; 2024 Restaurant. All rights reserved.</p>
    </div>
</footer>
    </div>
  )
}

export default Foot