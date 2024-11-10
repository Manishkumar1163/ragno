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

// Get user input for the transaction
const amount = parseInt(prompt("Enter the transaction amount (e.g., 10500):"));
const location = prompt("Enter the location (e.g., 'US' or 'Non-US'):");
const device = prompt("Enter the device used (e.g., 'DeviceXYZ' or other):");

// Construct the transaction object
const transaction = {
    amount: amount,
    timestamp: Date.now(),
    location: location,
    device: device
};

// Run fraud detection simulation
detectFraud(transaction);
