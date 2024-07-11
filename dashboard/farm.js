document.addEventListener("DOMContentLoaded", function() {
    const searchInput = document.querySelector(".search-bar input[type='text']");
    const farmDetailItems = document.querySelectorAll(".farm-details-item");

    searchInput.addEventListener("input", function() {
        const searchTerm = this.value.toLowerCase();

        farmDetailItems.forEach(item => {
            const itemText = item.textContent.toLowerCase();
            if (itemText.includes(searchTerm)) {
                item.classList.add("highlighted");
            } else {
                item.classList.remove("highlighted");
            }
        });
    });
});
