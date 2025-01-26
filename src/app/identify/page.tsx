'use client';
import { useState } from 'react';
import Image from 'next/image';

export default function Identify() {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [predictions, setPredictions] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedImage(file);
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  const handleIdentify = async () => {
    if (!selectedImage) return;

    setIsLoading(true);
    try {
      // Convert image to base64
      const reader = new FileReader();
      reader.onloadend = async () => {
        const base64Image = reader.result as string;
        
        // Send to API
        const response = await fetch('/api/predict', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ image: base64Image }),
        });

        const data = await response.json();
        if (data.predictions) {
          setPredictions(data.predictions);
        }
      };
      reader.readAsDataURL(selectedImage);
    } catch (error) {
      console.error('Failed to identify:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center min-h-screen p-8">
      <main className="flex flex-col items-center gap-6 max-w-3xl w-full">
        <h1 className="text-4xl font-bold mb-4">Identify Your Mole</h1>
        
        <p className="text-lg text-gray-600 text-center mb-6">
          Upload a clear, well-lit photo of your mole or skin lesion. 
          The image should be focused and show the area clearly. Please note that 
          predictions take a moment to process, once you have clicked identify allow a
          moment for the results to appear.
        </p>

        <div className="w-full p-8 border-2 border-dashed rounded-lg text-center">
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="hidden"
            id="imageInput"
          />
          <label 
            htmlFor="imageInput" 
            className="cursor-pointer"
          >
            {previewUrl ? (
              <div className="flex flex-col items-center">
                <Image 
                  src={previewUrl} 
                  alt="Preview" 
                  className="max-h-64 max-w-full mb-4 rounded-lg"
                  width={500}
                  height={300}
                />
                <p className="text-sm text-gray-500">Click to replace image</p>
              </div>
            ) : (
              <div>
                <p className="text-lg mb-2">Click to upload an image</p>
                <p className="text-sm text-gray-500">JPG, PNG files accepted</p>
              </div>
            )}
          </label>
        </div>

        <button 
          className={`px-6 py-3 bg-blue-600 text-white rounded-lg transition-colors text-lg
            ${isLoading || !selectedImage 
              ? 'opacity-50 cursor-not-allowed' 
              : 'hover:bg-blue-700'}`}
          onClick={handleIdentify}
          disabled={!selectedImage || isLoading}
        >
          {isLoading ? 'Analyzing...' : 'Identify Mole'}
        </button>

        {predictions.length > 0 && (
          <div className="w-full mt-4 p-6 border rounded-lg bg-white shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Three Most Likely Diagnoses:</h2>
            {predictions.map((pred, index) => (
              <div key={index} className="mb-3 p-3 border rounded-lg bg-gray-50">
                <p className="text-lg">
                  <span className="font-medium">{pred.diagnosis}</span>
                </p>
              </div>
            ))}
            <p className="mt-4 text-sm text-gray-600 italic">
              Note: These results are for educational purposes only. 
              Please consult a healthcare professional for medical advice.
            </p>
          </div>
        )}
      </main>
    </div>
  );
}