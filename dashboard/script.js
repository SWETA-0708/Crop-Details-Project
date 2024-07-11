document.addEventListener('DOMContentLoaded', function() {
    const gallery = document.getElementById('gallery');

    crops.forEach(crop => {
        const cropElement = document.createElement('div');
        cropElement.classList.add('crop');

        const imgElement = document.createElement('img');
        imgElement.src = crop.image;
        imgElement.alt = crop.name;

        const captionElement = document.createElement('div');
        captionElement.classList.add('caption');
        captionElement.textContent = crop.name;

        // Add click event listener to each crop image
        cropElement.addEventListener('click', function() {
            window.location.href = crop.link; // Redirect to crop details page
        });

        cropElement.appendChild(imgElement);
        cropElement.appendChild(captionElement);

        gallery.appendChild(cropElement);
    });
});
