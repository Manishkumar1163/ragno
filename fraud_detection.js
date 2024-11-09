// Import TensorFlow.js
const tf = require('@tensorflow/tfjs-node');

// Load the pre-trained model
async function loadModel() {
    // Provide the path to the saved model
    const model = await tf.loadLayersModel('file://model_path/model.json');
    return model;
}

// Extract relevant features from transaction data
function extractFeatures(transaction) {
    // Simplified feature extraction for illustration
    // Replace these values with actual computed features
    return {
        amount: transaction.amount / 10000, // Normalizing by max expected amount
        location: transaction.location === "US" ? 1 : 0, // Simple encoding for location
        device: transaction.device === "DeviceXYZ" ? 1 : 0 // Encoding for device
    };
}

// Detect fraud based on the model's prediction
async function detectFraud(transaction) {
    // Load the model
    const model = await loadModel();

    // Extract features from transaction
    const features = extractFeatures(transaction);

    // Convert features to tensor
    const inputTensor = tf.tensor([Object.values(features)]);

    // Run model prediction
    const prediction = model.predict(inputTensor);
    const fraudProbability = prediction.dataSync()[0]; // Extract prediction result

    // Determine if the transaction is suspicious
    if (fraudProbability > 0.5) {
        console.log("Fraud Detected with Probability:", fraudProbability);
    } else {
        console.log("Transaction is Likely Safe with Probability:", fraudProbability);
    }
}

// Sample transaction data for testing
const transaction = {
    amount: 10500,
    timestamp: Date.now(),
    location: "US",
    device: "DeviceXYZ"
};

// Run fraud detection
detectFraud(transaction);