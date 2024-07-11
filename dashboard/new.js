// Initialize the soil quality gauge chart
var ctxSoil = document.getElementById('soilQualityGauge').getContext('2d');

var soilQualityGauge = new Chart(ctxSoil, {
    type: 'doughnut',
    data: {
        datasets: [{
            data: [75, 25], // Initial data for poor and fair quality
            backgroundColor: ['#ff6347', '#ffd700'], // Colors for poor and fair quality
            borderWidth: 0
        }]
    },
    options: {
        cutoutPercentage: 80, // Adjust this value to change the size of the hole in the center
        rotation: 1 * Math.PI,
        circumference: 1 * Math.PI,
        legend: {
            display: false
        },
        tooltips: {
            enabled: false
        }
    }
});

 // Function to fetch weather data from OpenWeatherMap API
function fetchWeatherData() {
    // Replace 'YOUR_API_KEY' with your actual API key from OpenWeatherMap
    const apiKey = 'YOUR_API_KEY';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=London&appid=${apiKey}&units=metric`;

    // Fetch weather data from the API
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            // Extract relevant weather information
            const temperature = data.main.temp;
            const humidity = data.main.humidity;
            const weatherDescription = data.weather[0].description;

            // Update the weather information on the dashboard
            updateWeatherInfo(temperature, humidity, weatherDescription);
        })
        .catch(error => console.log('Error fetching weather data:', error));
}

// Function to update weather information on the dashboard
function updateWeatherInfo(temperature, humidity, weatherDescription) {
    // Update the weather information on the dashboard
    document.getElementById('temperature').textContent = temperature + '°C';
    document.getElementById('humidity').textContent = humidity + '%';
    document.getElementById('weather-description').textContent = weatherDescription;
}

// Call the function to fetch weather data when the page loads
fetchWeatherData();

// Refresh weather data every 10 minutes (600000 milliseconds)
setInterval(fetchWeatherData, 600000); // Adjust the interval as needed



// JavaScript for rendering the Crop Yield Over Time line chart
document.addEventListener("DOMContentLoaded", function () {
    var ctx = document.getElementById("cropYieldChartSmall").getContext("2d");

    var chart = new Chart(ctx, {
        type: "line",
        data: {
            labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
            datasets: [{
                label: "Crop Yield Over Time",
                data: [200, 250, 300, 280, 320, 310],
                backgroundColor: "rgba(88, 128, 250, 0.2)",
                borderColor: "rgba(88, 128, 250, 1)",
                borderWidth: 2,
                pointBackgroundColor: "rgba(88, 128, 250, 1)",
                pointBorderColor: "#fff",
                pointBorderWidth: 1,
                pointRadius: 4,
                pointHoverRadius: 6,
            }],
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true,
                    },
                }],
            },
        },
    });
});


// Sample data for harvested vs expected yield chart
var harvestedData = [300, 350, 400, 380];
var expectedData = [320, 340, 380, 370];

// Render the harvested vs expected yield chart
var ctxHarvestedVsExpected = document.getElementById('harvestedVsExpectedChart').getContext('2d');

var harvestedVsExpectedChart = new Chart(ctxHarvestedVsExpected, {
    type: 'bar',
    data: {
        labels: ['Crop A', 'Crop B', 'Crop C', 'Crop D'],
        datasets: [{
            label: 'Harvested Yield',
            data: harvestedData,
            backgroundColor: "rgb(0,160,135)", // Dark Green
            borderColor: "rgb(60, 179, 113)",         // Darker Green
            borderWidth: 1
        },
        {
            label: 'Expected Yield',
            data: expectedData,
            backgroundColor: "rgba(178,255,172)", // Green
            borderColor: "rgba(0, 128, 0, 1)",       // Dark Green
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});
// Crop Distribution Chart
var ctx2 = document.getElementById("cropDistributionChart").getContext("2d");

var cropDistributionChart = new Chart(ctx2, {
    type: 'pie',
    data: {
        labels: ['Rice', 'Wheat', 'Barley', 'Lentil'], // Replace with actual crop names
        datasets: [{
            label: 'Crop Distribution',
            data: [25, 35, 20, 20], // Replace with actual crop percentage distribution
            backgroundColor: [
                'rgba(0, 100, 0, 0.6)',    // Dark Green
                'rgba(50, 205, 50, 0.6)',  // Lime Green
                'rgba(173, 255, 47, 0.6)', // Green Yellow
                'rgba(152, 251, 152, 0.6)' // Pale Green
            ],
            borderColor: [
                'rgba(0, 100, 0, 1)',    // Dark Green
                'rgba(50, 205, 50, 1)',  // Lime Green
                'rgba(173, 255, 47, 1)', // Green Yellow
                'rgba(152, 251, 152, 1)' // Pale Green
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'top',
            },
            tooltip: {
                callbacks: {
                    label: function (tooltipItem) {
                        return tooltipItem.label + ': ' + tooltipItem.raw + '%';
                    }
                }
            }
        }
    }
});
document.addEventListener('DOMContentLoaded', () => {
    const tips = [
        {
            title: "Optimize Crop Rotation",
            description: "Practice crop rotation to improve soil health and reduce pest and disease buildup. Rotating crops helps maintain soil nutrients and can significantly boost your yields over time."
        },
        {
            title: "Efficient Storage Solutions",
            description: "Invest in proper storage facilities to extend the shelf life of your produce. Using temperature-controlled environments and humidity management can help preserve the quality of your crops until they reach the market."
        },
        {
            title: "Utilize Organic Fertilizers",
            description: "Incorporate organic fertilizers such as compost or manure to enhance soil fertility naturally. Organic fertilizers improve soil structure and microbial activity, leading to healthier and more productive crops."
        }
    ];

    let currentTipIndex = 0;

    function updateTip() {
        const currentTip = tips[currentTipIndex];
        const tipElement = document.querySelector('.carousel');
        tipElement.innerHTML = `
            <div class="tip">
                <h3>${currentTip.title}</h3>
                <p>${currentTip.description}</p>
            </div>
        `;
    }

    function rotateTips() {
        currentTipIndex = (currentTipIndex + 1) % tips.length;
        updateTip();
    }

    updateTip(); // Update tip initially
    setInterval(rotateTips, 7 * 24 * 60 * 60 * 1000); // Rotate tips every week
});