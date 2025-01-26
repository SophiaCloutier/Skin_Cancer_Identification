'use client';
import { useState, useEffect } from 'react';
import Image from "next/image";

const slideData = [
  {
    imageUrl: "/showcase/ISIC_0036044.jpg",
    prediction: "Predicted: Basal Cell Carcinoma, Actinic Keratosis, or Melanocytic Nevi (mole)",
    actual: "Actual: Melanocytic Nevi (mole)",
  },
  {
    imageUrl: "/showcase/ISIC_0035946.jpg",
    prediction: "Predicted: Vascular Lesion, Actinic Keratosis, or Basal Cell Carcinoma",
    actual: "Actual: Vascular Lesion",
  },
  {
    imageUrl: "/showcase/ISIC_0036007.jpg",
    prediction: "Predicted: Melanoma, Melanocytic Nevi (mole), or Dermatofibroma",
    actual: "Actual: Dermatofibroma",
  },
  {
    imageUrl: "/showcase/ISIC_0036022.jpg",
    prediction: "Predicted: Melanocytic Nevi, Dermatofibroma, or Basal Cell Carcinoma",
    actual: "Actual: Basal Cell Carcinoma",
  },
  {
    imageUrl: "/showcase/ISIC_0035915.jpg",
    prediction: "Predicted: Dermatofibroma, Melanocytic Nevi, or Actinic Keratosis",
    actual: "Actual: Actinic Keratosis",
  }
];

function Slideshow() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slideData.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slideData.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slideData.length) % slideData.length);
  };

  return (
    <div className="relative w-full max-w-3xl mx-auto my-8">
      <div className="relative bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
        <Image
          src={slideData[currentSlide].imageUrl}
          alt={`Slide ${currentSlide + 1}`}
          width={800}
          height={400}
          className="w-full h-64 object-contain rounded-lg mb-4"
          priority
        />
        <div className="text-center">
          <p className="text-lg font-semibold text-blue-600 dark:text-blue-400">
            {slideData[currentSlide].prediction}
          </p>
          <p className="text-lg font-semibold text-green-600 dark:text-green-400 mt-2">
            {slideData[currentSlide].actual}
          </p>
        </div>
        <button
          onClick={prevSlide}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
        >
          ←
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
        >
          →
        </button>
        <div className="flex justify-center mt-4 space-x-2">
          {slideData.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full ${
                currentSlide === index ? 'bg-blue-600 dark:bg-blue-400' : 'bg-gray-300 dark:bg-gray-600'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="flex flex-col items-center min-h-screen p-8">
      <main className="flex flex-col items-center gap-6 max-w-3xl w-full">
        <h1 className="text-4xl font-bold mb-4">Welcome to Mole Identifier</h1>
        
        <p className="text-lg text-gray-600 text-center mb-6">
          Our AI-powered tool helps identify different types of skin lesions and moles. 
          Early detection is crucial for skin health management.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          <div className="p-6 border rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-3">How It Works</h2>
            <p className="text-gray-600">
              Upload a clear photo of your mole or skin lesion, and our AI model will analyze it to provide potential identifications.
            </p>
          </div>

          <div className="p-6 border rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-3">Important Note</h2>
            <p className="text-gray-600">
              This tool is for educational purposes only. Always consult a healthcare professional for medical advice.
            </p>
          </div>
        </div>

        <section className="w-full">
          <h2 className="text-3xl font-bold text-center mb-8">
            Model Predictions Showcase
          </h2>
          <Slideshow />
        </section>
      </main>
    </div>
  );
}
