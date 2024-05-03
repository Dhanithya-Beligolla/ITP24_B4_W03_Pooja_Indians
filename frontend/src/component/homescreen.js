import React, { useState } from 'react';
import './homescreen.css';
import homeBackground from '../../src/image/homeBackground.jpg';

function HomeScreen() {
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        setIsClicked(!isClicked);
    };

    return (
        <div className={`home-background-image ${isClicked ? 'white-box' : 'transparent-box'}`} style={{ backgroundImage: `url(${homeBackground})` }}>
            <div>
                <h1>Discover A World Of Comfort</h1>
                <h3>Let It Begin, Memories Never End.</h3>
                <p>
                    <a 
                        href="#about"
                        className="w3-button w3-white w3-padding-large w3-large w3-margin-top w3-opacity w3-hover-opacity-off"
                        onClick={handleClick}
                    >
                        Begin Your Journey Here !
                    </a>
                </p>
            </div>
        </div>
    );
}

export default HomeScreen;