import React, { useState } from 'react';
import './Home.css';
import HeroSection from './HeroSection';
import ImageGallery from './ImageGallery';

const Home = () => {
    const [backgroundImage, setBackgroundImage] = useState('./images/default.jpg'); // Default image

    return (
        <div className="home-container">
            <HeroSection backgroundImage={backgroundImage} />
            <ImageGallery setBackgroundImage={setBackgroundImage} />
        </div>
    );
};

export default Home;