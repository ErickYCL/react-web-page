"use client";
import React, { useState, useEffect } from "react";
const images = [

    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqzHsojV511bfg8ExYNU-6v_UdVLO1dFdQpg&s",
    "https://cdn-icons-png.flaticon.com/512/919/919826.png",
    "https://cdn-icons-png.flaticon.com/512/919/919826.png"
];

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 5000); // Cambia la imagen cada 3 segundos

        return () => clearInterval(interval);
    }, [currentIndex]);

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    return (
        <div className="relative w-full max-w-4xl mx-auto mt-5 overflow-hidden">
            {/* Contenedor de imágenes con efecto de deslizamiento */}
            <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{
                    transform: `translateX(-${currentIndex * 100}%)`,
                }}
            >
                {images.map((img, index) => (
                    <img
                        key={index}
                        src={img}
                        alt={`Imagen ${index + 1}`}
                        className="w-full h-72 object-contain flex-shrink-0"
                    />
                ))}
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
            <div className="flex justify-center mt-3 mb-2">
                {images.map((_, index) => (
                    <button
                        key={index}
                        className={`w-3 h-3 mx-1 rounded-full ${currentIndex === index
                            ? "bg-gray-800 scale-110"
                            : "bg-gray-300 transition-all duration-200 ease-in-out"
                            }`}
                        onClick={() => setCurrentIndex(index)}
                    ></button>
                ))}
            </div>
        </div>
    );
};

export default Carousel;
