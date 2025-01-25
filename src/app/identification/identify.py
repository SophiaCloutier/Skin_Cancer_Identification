import torch
from torch import nn
from torchvision import transforms, models
from PIL import Image
import numpy as np
import io
import base64
import json
import sys

# Define transformations for the new image
image_transform = transforms.Compose([
    transforms.Resize((224, 224)),
    transforms.ToTensor(),
    transforms.Normalize([0.485, 0.456, 0.406], [0.229, 0.224, 0.225])  # Normalize like the training set
])

# Path to the model
model_path = "src\\app\\identification\\mole_classifier.pth"  # Path to your saved model

# Load the trained model
device = torch.device("cuda" if torch.cuda.is_available() else "cpu")
model = models.resnet50(pretrained=False)  # Create the same model structure
model.fc = nn.Linear(model.fc.in_features, 7)  # 7 output classes
model.load_state_dict(torch.load(model_path))  # Load the trained weights
model = model.to(device)
model.eval()  # Set model to evaluation mode

diagnoses = [
    "Actinic Keratosis", "Basal Cell Carcinoma", "Benign Keratosis",
    "Dermatofibroma", "Melanocytic Nevi", "Melanoma", "Vascular Lesions"
]

def predict_image(image_data):
    # Convert base64 string to PIL Image
    image_bytes = base64.b64decode(image_data.split(',')[1])
    image = Image.open(io.BytesIO(image_bytes)).convert("RGB")
    
    # Use existing transform
    image = image_transform(image)
    image = image.unsqueeze(0).to(device)

    # Predict with the model
    with torch.no_grad():
        output = model(image)
        probabilities = torch.softmax(output, dim=1).cpu().numpy()[0]

    # Get the top 3 predictions
    top3_indices = np.argsort(probabilities)[::-1][:3]
    top3_scores = probabilities[top3_indices]
    
    # Format results
    results = []
    for idx, score in zip(top3_indices, top3_scores):
        results.append({
            "diagnosis": diagnoses[idx],
            "confidence": float(score * 100)
        })
    
    return results

if __name__ == "__main__":
    # Get the input file path from command line arguments
    input_file = sys.argv[1]
    
    # Read the image data from the temporary file
    with open(input_file, 'r') as f:
        data = json.load(f)
        image_data = data['image']
    
    # Make prediction
    results = predict_image(image_data)
    
    # Print results as JSON
    print(json.dumps(results))
