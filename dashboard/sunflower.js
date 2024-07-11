document.addEventListener('DOMContentLoaded', () => {
    const qualitiesList = document.getElementById('qualities-list');
    const userQualityInput = document.getElementById('user-quality-input');
    const addQualityButton = document.getElementById('add-quality-button');

    addQualityButton.addEventListener('click', () => {
        const userQuality = userQualityInput.value.trim();
        if (userQuality) {
            const listItem = document.createElement('li');
            listItem.textContent = userQuality;
            qualitiesList.appendChild(listItem);
            userQualityInput.value = '';
        } else {
            alert('Please enter details about a specific quality of rice.');
        }
    });
});
