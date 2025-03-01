"use client";
import React, { useState, useEffect } from "react";
const images = [
    "https://via.placeholder.com/800x400?text=Imagen+1",
    "data:image/png;base64,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",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqzHsojV511bfg8ExYNU-6v_UdVLO1dFdQpg&s",
];

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 3000); // Cambia la imagen cada 3 segundosss

        return () => clearInterval(interval);
    }, [currentIndex]);

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    return (
        <div className="relative w-full max-w-4xl mx-auto mt-5">
            {/* Imagen */}
            <div className="overflow-hidden rounded-lg shadow-lg">
                <img
                    src={images[currentIndex]}
                    alt={`Imagen ${currentIndex + 1}`}
                    className="w-full h-72 object-cover transition-all duration-500 ease-in-out"
                />
            </div>

            {/* Botón Anterior */}
            <button
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-40 text-white p-2 rounded-lg hover:bg-gray-700 transition duration-150"
                onClick={prevSlide}
            >
                ◀
            </button>

            {/* Botón Siguiente */}
            <button
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-40 text-white p-2 rounded-lg hover:bg-gray-700 transition duration-150"
                onClick={nextSlide}
            >
                ▶
            </button>

            {/* Indicadores */}
            <div className="flex justify-center mt-2">
                {images.map((_, index) => (
                    <button
                        key={index}
                        className={`w-3 h-3 mx-1 rounded-full ${currentIndex === index ? "bg-gray-800 scale-110" : "bg-gray-300 transition-all duration-200 ease-in-out "
                            }`}
                        onClick={() => setCurrentIndex(index)}
                    ></button>
                ))}
            </div>
        </div>
    );
};

export default Carousel;