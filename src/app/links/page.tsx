// import Link from 'next/link'

export default function Links() {
  return (
    <main className="min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-6">Helpful Links</h1>
      <div className="p-6 border rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-3">Basal Cell Carcinoma</h2>
            <p className="text-gray-600">
            <strong>Description:</strong> Basal Cell Carcinoma is the most common type of skin cancer. It typically appears as a pearly, waxy bump or flat, 
            flesh-colored lesion with rolled edges. It often develops in areas with frequent sun exposure. BCC grows slowly and 
            rarely metastasizes but can cause local tissue damage. <br/>
            <strong>Benign or Malignant:</strong> Malignant. <br/>
              More information can be found at this link: <a 
                href="https://www.mayoclinic.org/diseases-conditions/basal-cell-carcinoma/symptoms-causes/syc-20354187" 
                className="text-blue-600 hover:text-blue-800 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Basal Cell Carcinoma
              </a>
            </p>
          </div>

          <div className="p-6 border rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-3">Benign Keratosis</h2>
            <p className="text-gray-600">
            <strong>Description:</strong> Benign Keratosis, also known as Seborrheic Keratosis, is a non-cancerous skin growth that appears as a wart-like, waxy, 
            or stuck-on lesion. They can be tan, brown, or black and often occur in older adults. <br/>
            <strong>Benign or Malignant:</strong> Benign. <br/>
              More information can be found at this link: <a 
                href="https://www.mayoclinic.org/diseases-conditions/seborrheic-keratosis/symptoms-causes/syc-20353878" 
                className="text-blue-600 hover:text-blue-800 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Benign Keratosis
              </a>
            </p>
          </div>

          <div className="p-6 border rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-3">Melanoma</h2>
            <p className="text-gray-600">
            <strong>Description:</strong> Melanoma is an aggressive and potentially life-threatening form of skin cancer that originates in melanocytes. 
            It often appears as an irregularly shaped, multicolored lesion or an evolving mole. Early detection is crucial for successful treatment. <br/>
            <strong>Benign or Malignant:</strong> Malignant. <br/>
              More information can be found at this link: <a 
                href="https://www.mayoclinic.org/diseases-conditions/melanoma/symptoms-causes/syc-20374884" 
                className="text-blue-600 hover:text-blue-800 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Melanoma
              </a>
            </p>
          </div>

          <div className="p-6 border rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-3">Melanocytic Nevi</h2>
            <p className="text-gray-600">
            <strong>Description:</strong> Melanocytic Nevi, commonly referred to as moles, are benign proliferations of melanocytes (pigment-producing cells). 
            They can vary in color, shape, and size and are typically uniform in appearance. While most moles are harmless, atypical 
            moles may have a higher risk of developing into melanoma. <br/>
            <strong>Benign or Malignant:</strong> Benign (with rare potential for malignancy in atypical cases). <br/>
              More information can be found at this link: <a 
                href="https://www.mayoclinic.org/diseases-conditions/moles/symptoms-causes/syc-20375200" 
                className="text-blue-600 hover:text-blue-800 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Melanocytic Nevi (Moles)
              </a>
            </p>
          </div>

          <div className="p-6 border rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-3">Dermatofibroma</h2>
            <p className="text-gray-600">
            <strong>Description:</strong> Dermatofibroma is a benign skin lesion, usually firm, raised, and sometimes pigmented. It is often found on the 
            lower legs and may develop after minor skin trauma. These lesions are harmless and do not require treatment unless symptomatic. <br/>
            <strong>Benign or Malignant:</strong> Benign. <br/>
            More information can be found at this link: <a 
                href="https://www.mayoclinic.org/diseases-conditions/dermatofibroma/diagnosis-treatment/drc-20353776" 
                className="text-blue-600 hover:text-blue-800 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Dermatofibroma
              </a>
            </p>
          </div>

          <div className="p-6 border rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-3">Vascular Lesions</h2>
            <p className="text-gray-600">
            <strong>Description:</strong> Vascular Lesions are abnormalities in blood vessels that appear as red, purple, or blue marks on the skin.
             Examples include hemangiomas, cherry angiomas, and spider veins. Most are harmless but can sometimes be associated with underlying conditions. <br/>
            <strong>Benign or Malignant:</strong> Typically benign. <br/>
            More information can be found at this link: <a 
                href="https://www.mayoclinic.org/diseases-conditions/port-wine-stain/symptoms-causes/syc-20352334" 
                className="text-blue-600 hover:text-blue-800 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Vascular Lesions
              </a>
            </p>
          </div>

          <div className="p-6 border rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-3">Actinic Keratoses</h2>
            <p className="text-gray-600">
            <strong>Description:</strong> Actinic Keratosis is a precancerous skin lesion caused by prolonged sun exposure. It often appears as rough, 
            scaly patches on sun-exposed areas such as the face, scalp, and hands. These lesions can vary in color, ranging from pink to brown. <br/>
            <strong>Benign or Malignant:</strong> Precancerous (can progress to squamous cell carcinoma if left untreated). <br/>
            More information can be found at this link: <a 
                href="https://www.mayoclinic.org/diseases-conditions/actinic-keratosis/symptoms-causes/syc-20354969" 
                className="text-blue-600 hover:text-blue-800 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Actinic Keratoses
              </a>
            </p>
          </div>
        
    </main>
  )
}
