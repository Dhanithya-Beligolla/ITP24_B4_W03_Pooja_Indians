import React from 'react';
import './categoryrooms.css'

function CategoryRooms() {

    return (
        <div className="category-rooms-container category-rooms-center category-rooms-dark-grey" style={{ padding: '128px 16px' }} id="pricing">
            <h3>PACKAGES</h3>
            <p className="category-rooms-large">Choose a pricing package fits your needs.</p>
            <div className="category-rooms-row-padding" style={{ marginTop: '64px', display: 'flex', justifyContent: 'center' }}>
                <div className="category-rooms-third category-rooms-section">
                    <ul className="category-rooms-ul category-rooms-white category-rooms-hover-shadow">
                        <li className="category-rooms-black category-rooms-xlarge category-rooms-padding-32">Single Room</li>
                        <li className="category-rooms-padding-16"><b>Spacious Accommodation</b></li>
                        <li className="category-rooms-padding-16"><b>Kids' Club Access</b></li>
                        <li className="category-rooms-padding-16"><b>Daily Meals</b></li>
                        <li className="category-rooms-padding-16"><b>Local Excursions</b></li>
                        {/* Removed price elements */}
                        {/* <li className="category-rooms-padding-16">
                            <h2 className="category-rooms-wide">$ 250</h2>
                            <span className="category-rooms-opacity">per month</span>
                        </li> */}
                        <li className="category-rooms-light-grey category-rooms-padding-24">
                            <button className="category-rooms-button category-rooms-black category-rooms-padding-large">Sign Up</button>
                        </li>
                    </ul>
                </div>
                <div className="category-rooms-third category-rooms-section">
                    <ul className="category-rooms-ul category-rooms-white category-rooms-hover-shadow">
                        <li className="category-rooms-red category-rooms-xlarge category-rooms-padding-48">Luxury Room</li>
                        <li className="category-rooms-padding-16"><b>Luxurious Accommodation</b></li>
                        <li className="category-rooms-padding-16"><b>Spa & Wellness</b></li>
                        <li className="category-rooms-padding-16"><b>Exclusive Activities</b></li>
                        <li className="category-rooms-padding-16"><b>Airport Transfers</b></li>
                        {/* Removed price elements */}
                        {/* <li className="category-rooms-padding-16">
                            <h2 className="category-rooms-wide">$ 500</h2>
                            <span className="category-rooms-opacity">per month</span>
                        </li> */}
                        <li className="category-rooms-light-grey category-rooms-padding-24">
                            <button className="category-rooms-button category-rooms-black category-rooms-padding-large">Sign Up</button>
                        </li>
                    </ul>
                </div>
                <div className="category-rooms-third category-rooms-section">
                    <ul className="category-rooms-ul category-rooms-white category-rooms-hover-shadow">
                        <li className="category-rooms-black category-rooms-xlarge category-rooms-padding-32">Double Room</li>
                        <li className="category-rooms-padding-16"><b>Comfortable Accommodation</b></li>
                        <li className="category-rooms-padding-16"><b>Adventure Tours</b></li>
                        <li className="category-rooms-padding-16"><b>Culinary Delights</b></li>
                        <li className="category-rooms-padding-16"><b>Evening Entertainment</b></li>
                        {/* Removed price elements */}
                        {/* <li className="category-rooms-padding-16">
                            <h2 className="category-rooms-wide">$ 300</h2>
                            <span className="category-rooms-opacity">per month</span>
                        </li> */}
                        <li className="category-rooms-light-grey category-rooms-padding-24">
                            <button className="category-rooms-button category-rooms-black category-rooms-padding-large">Sign Up</button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default CategoryRooms;