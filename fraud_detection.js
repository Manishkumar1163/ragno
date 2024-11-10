// Simulating fraud detection without TensorFlow.js
function extractFeatures(transaction) {
    // Simplified feature extraction for illustration
    return {
        amount: transaction.amount / 10000, // Normalizing by max expected amount
        location: transaction.location === "US" ? 1 : 0, // Simple encoding for location
        device: transaction.device === "DeviceXYZ" ? 1 : 0 // Encoding for device
    };
}

function detectFraud(transaction) {
    // Simulate model prediction
    const features = extractFeatures(transaction);
    const fraudProbability = Math.random();  // Random prediction between 0 and 1

    // Simulated output
    if (fraudProbability > 0.5) {
        scrib.show("Fraud Detected with Probability: " + fraudProbability);
    } else {
        scrib.show("Transaction is Likely Safe with Probability: " + fraudProbability);
    }
}

// Sample transaction data for testing
const transaction = {
    amount: 10500,
    timestamp: Date.now(),
    location: "US",
    device: "DeviceXYZ"
};

// Run fraud detection simulation
detectFraud(transaction);
