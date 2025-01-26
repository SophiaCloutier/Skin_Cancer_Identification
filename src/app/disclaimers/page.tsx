export default function Disclaimers() {
  return (
    <div className="flex flex-col items-center min-h-screen p-8">
      <main className="flex flex-col items-center gap-6 max-w-3xl w-full">
        <h1 className="text-4xl font-bold mb-4">Disclaimers</h1>
        
        <div className="space-y-6 w-full">
          <div className="p-6 border rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-3">Medical Disclaimer</h2>
            <p className="text-gray-600">
              This tool is not a substitute for professional medical advice, diagnosis, or treatment. 
              Always seek the advice of your physician or other qualified health provider with any 
              questions you may have regarding a medical condition.
            </p>
          </div>

          <div className="p-6 border rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-3">AI Limitations</h2>
            <p className="text-gray-600">
              The AI model provides predictions based on training data and may not be accurate in all cases. 
              Results should be used for educational purposes only and not as a definitive diagnosis.
            </p>
          </div>

          <div className="p-6 border rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-3">Privacy Notice</h2>
            <p className="text-gray-600">
              Images uploaded to our service are processed securely and not stored permanently.
              Images are deleted immediately after processing. 
              However, we recommend not sharing sensitive personally identifiable information through this platform.
            </p>
          </div>

          <div className="p-6 border rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-3">Public Dataset</h2>
            <p className="text-gray-600">
              This model was trained on publicly available datasets.
              Skin Cancer MNIST: HAM10000 is a large collection of multi-source dermatoscopic images of pigmented lesions
              found at this link: <a 
                href="https://challenge.isic-archive.com/data/" 
                className="text-blue-600 hover:text-blue-800 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                ISIC Challenge Dataset
              </a>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
} 