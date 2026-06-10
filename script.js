document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.querySelector('.search-box input');
    const buttons = document.querySelectorAll('.buttons .btn');

    buttons.forEach(button => {
        button.addEventListener('click', (event) => {
            event.preventDefault();

            const queryValue = searchInput.value.trim();
            const query = queryValue || button.textContent.trim();
            if (!query) {
                searchInput.focus();
                return;
            }

            const buttonText = button.textContent.trim().toLowerCase();
            let url = 'https://www.google.com/search?q=' + encodeURIComponent(query);

            if (buttonText === 'images') {
                url = 'https://www.google.com/search?tbm=isch&q=' + encodeURIComponent(query);
            } else if (buttonText === 'videos') {
                url = 'https://www.youtube.com/results?search_query=' + encodeURIComponent(query);
            } else if (buttonText === 'dictionary') {
                url = 'https://www.dictionary.com/browse/' + encodeURIComponent(query);
            } else if (buttonText === 'scholar') {
                url = 'https://scholar.google.com/scholar?q=' + encodeURIComponent(query);
            }

            window.open(url, '_blank');
        });
    });
});
