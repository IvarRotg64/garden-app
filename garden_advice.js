function getSeasonAdvice(season) {
    if (season === "summer") {
        return "Water your plants regularly and provide some shade.\n";
    } else if (season === "winter") {
        return "Protect your plants from frost with covers.\n";
    } else {
        return "No advice for this season.\n";
    }
}

function getPlantAdvice(plantType) {
    if (plantType === "flower") {
        return "Use fertiliser to encourage blooms.";
    } else if (plantType === "vegetable") {
        return "Keep an eye out for pests!";
    } else {
        return "No advice for this type of plant.";
    }
}

// Get user input for season and plant type
let season = prompt("Enter the season (summer or winter):").toLowerCase();
let plantType = prompt("Enter the type of plant (flower or vegetable):").toLowerCase();

// Combine advice
let advice = getSeasonAdvice(season) + getPlantAdvice(plantType);
console.log(advice);
