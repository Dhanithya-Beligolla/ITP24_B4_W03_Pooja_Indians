import React from 'react';
import { Link } from 'react-router-dom';
import './homescreen.css';
import homeBackground from '../../src/image/homeBackground.jpg';

function HomeScreen() {
    
    return (
        <div className="home-background-image" style={{ backgroundImage: `url(${homeBackground})` }}>
            <div>
                <h1>Discover A World Of Comfort</h1>
                <h3>Let It Begin, Memories Never End.</h3>
                <p>

                    <Link to="/category-rooms" className="w3-button w3-white w3-padding-large w3-large w3-margin-top w3-opacity w3-hover-opacity-off">
                        Begin Your Journey Here !
                    </Link>

                    
                </p>
            </div>
        </div>
    );
}

export default HomeScreen;