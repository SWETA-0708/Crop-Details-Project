
document.addEventListener('DOMContentLoaded', () => {
    const imageGallery = document.querySelector('.image-gallery');
    const searchInput = document.querySelector('input[type="search"]');

    // Function to add crop images to the gallery
    const addCropImage = (imageUrl, detailsUrl, cropName) => {
        const imageElement = document.createElement('img');
        imageElement.src = imageUrl;
        imageElement.alt = 'Crop Image';
        imageElement.dataset.detailsUrl = detailsUrl; // Add data attribute for details URL
        imageElement.dataset.cropName = cropName; // Add data attribute for crop name
        imageElement.classList.add('gallery-image');
        imageElement.addEventListener('click', () => {
            // Navigate to the crop details page
            const cropDetailsUrl = imageElement.dataset.detailsUrl;
            if (cropDetailsUrl) {
                window.location.href = cropDetailsUrl;
            } else {
                console.error('Crop details URL not found.');
            }
        });
        imageGallery.appendChild(imageElement);
    };

    // Example: Adding some dummy images to the gallery with details URLs and crop names
    const dummyImages = [
        { imageUrl: 'assets/Crops_images/Kharif/sunflower.jpg', detailsUrl: 'sunflower.html', cropName: 'Sunflower' },
        { imageUrl: 'assets/Crops_images/Kharif/bajra.jpg', detailsUrl: 'rice-details.html', cropName: 'Bajra' },
        { imageUrl: 'assets/Crops_images/Kharif/Cotton.jpg', detailsUrl: 'maize-details.html', cropName: 'Cotton' },
        { imageUrl: 'assets/Crops_images/Kharif/groundnut.jpg', detailsUrl: 'cotton-details.html' , cropName: 'Groundnut'},
        { imageUrl: 'assets/Crops_images/Kharif/oats.jpg', detailsUrl: 'soybean-details.html', cropName: 'Oats' },
        { imageUrl: 'assets/Crops_images/Kharif/paddy.avif', detailsUrl: 'soybean-details.html', cropName: 'Paddy' },
        { imageUrl: 'assets/Crops_images/Kharif/Sorghum (Jowar).jpeg', detailsUrl: 'soybean-details.html', cropName: 'Jowar' },
        { imageUrl: 'assets/Crops_images/Kharif/Soyabean.jpg', detailsUrl: 'soybean-details.html', cropName: 'Soyabean' },
        { imageUrl: 'assets/Crops_images/Kharif/Sugarcane.jpg', detailsUrl: 'soybean-details.html', cropName: 'Sugarcane' },
        { imageUrl: 'assets/Crops_images/Rabi/barley.jpg', detailsUrl: 'soybean-details.html', cropName: 'Barley' },
        // Add more image URLs, details URLs, and crop names as needed
    ];

    dummyImages.forEach(({ imageUrl, detailsUrl, cropName }) => {
        addCropImage(imageUrl, detailsUrl, cropName);
    });

    // Example: Handling addition of new crop images (you can replace this with your own logic)
    const addImageButton = document.createElement('button');
    addImageButton.textContent = 'Add Image';
    addImageButton.addEventListener('click', () => {
        const newImageUrl = prompt('Enter the URL of the new crop image:');
        const newDetailsUrl = prompt('Enter the URL of the crop details page:');
        const newCropName = prompt('Enter the name of the crop:');
        if (newImageUrl && newDetailsUrl && newCropName) {
            addCropImage(newImageUrl, newDetailsUrl, newCropName);
        }
    });
    document.body.appendChild(addImageButton);

    // Search functionality
    searchInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            const searchTerm = searchInput.value.trim().toLowerCase();
            const matchingImage = dummyImages.find(({ cropName }) => cropName.toLowerCase() === searchTerm);
            if (matchingImage) {
                const cropDetailsUrl = matchingImage.detailsUrl;
                if (cropDetailsUrl) {
                    window.location.href = cropDetailsUrl;
                } else {
                    console.error('Crop details URL not found.');
                }
            } else {
                alert('No matching crop found.');
            }
        }
    });
});
