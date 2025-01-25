'use client';
import { useState } from 'react';
import Image from "next/image";

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
      </main>
    </div>
  );
}
