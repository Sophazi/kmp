import React from 'react';
import './ImageGallery.css';

const ImageGallery = ({ setBackgroundImage }) => {
    const images = [
        require('./images/1.jpeg'),
        require('./images/2.jpeg'),
        require('./images/3.jpg'),
    ];

    const handleImageSelect = (image) => {
        setBackgroundImage(image);
    };

    return (
        <div className="image-gallery">
            {images.map((image, index) => (
                <img
                    key={index}
                    src={image}
                    alt={`Gallery ${index}`}
                    onClick={() => handleImageSelect(image)}
                    className="thumbnail"
                />
            ))}
        </div>
    );
};

export default ImageGallery;