function searchCrop() {
    var input = document.getElementById("crop-search").value.toLowerCase();
    var searchResults = document.getElementById("search-results");
    searchResults.innerHTML = "";

    // Define crop data
    var crops = {
        "rice": { season: "Kharif", details: "Rice is a staple food for a large part of the world's human population. It is grown primarily in the Kharif season." },
        "cotton": { season: "Kharif", details: "Cotton is a major cash crop grown in the Kharif season. It is used in the textile industry for making clothes." },
        "soybean": { season: "Kharif", details: "Soybean is rich in protein and oil. It is grown in the Kharif season and used for various purposes including animal feed, cooking oil, and food products." },
        "sugarcane": { season: "Kharif", details: "Sugarcane is a tall perennial grass grown in the Kharif season. It is a source of sugar and molasses, and also used in the production of ethanol." },
        "maize": { season: "Kharif", details: "Maize, also known as corn, is a versatile crop grown in the Kharif season. It is used for human consumption, animal feed, and industrial purposes." },
        "wheat": { season: "Rabi", details: "Wheat is a staple food in many parts of the world. It is grown primarily in the Rabi season and used to make bread, pasta, noodles, and other food products." },
        "barley": { season: "Rabi", details: "Barley is used as a cereal grain for food and animal fodder. It is primarily grown in the Rabi season and also used in brewing beer and whisky." },
        "mustard": { season: "Rabi", details: "Mustard is used for its seeds and leaves, which are edible. It is grown in the Rabi season and widely used in Indian cuisine for its pungent flavor." },
        "peas": { season: "Rabi", details: "Peas are a rich source of protein, fiber, and various vitamins and minerals. They are grown in the Rabi season and consumed as a vegetable." },
        "chickpea": { season: "Rabi", details: "Chickpea, also known as garbanzo beans, is a versatile legume grown in the Rabi season. It is used in various dishes around the world." },
        "cucumber": { season: "Zaid", details: "Cucumber is a widely cultivated plant in the gourd family. It is grown primarily in the Zaid season, which falls between Kharif and Rabi seasons." },
        "watermelon": { season: "Zaid", details: "Watermelon is a delicious and refreshing fruit grown in the Zaid season. It requires warm, dry weather for optimal growth." },
        "muskmelon": { season: "Zaid", details: "Muskmelon, also known as cantaloupe, is grown in the Zaid season. It is a sweet and juicy fruit enjoyed by many people." },
        "pumpkin": { season: "Zaid", details: "Pumpkin is a nutritious and versatile vegetable grown in the Zaid season. It is used in various culinary dishes and also for decorative purposes." },
        "moong dal": { season: "Zaid", details: "Moong dal, or mung bean, is a fast-growing legume grown in the Zaid season. It is used in various Indian dishes and is rich in protein and fiber." }
    };

    // Search for the crop
    if (crops.hasOwnProperty(input)) {
        var cropData = crops[input];
        searchResults.innerHTML = "<h3>" + input.toUpperCase() + "</h3>";
        searchResults.innerHTML += "<p><strong>Season:</strong> " + cropData.season + "</p>";
        searchResults.innerHTML += "<p><strong>Details:</strong> " + cropData.details + "</p>";
    } else {
        searchResults.innerHTML = "<p>Crop not found.</p>";
    }
}

// Add event listener for Enter key press on input field
document.getElementById("crop-search").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        searchCrop();
    }
});document.addEventListener("click", function(event) {
    var searchResults = document.getElementById("search-results");
    if (event.target !== searchResults && !searchResults.contains(event.target)) {
        // Click occurred outside search results, clear search results
        searchResults.innerHTML = "";
    }
});
