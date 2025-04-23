document.addEventListener("DOMContentLoaded", function () {
    const filterLinks = document.querySelectorAll(".filtrCatalog a");
    const cards = document.querySelectorAll(".tovarCard");

    filterLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const category = link.textContent.trim();

            // Удаление класса активности у всех фильтров
            filterLinks.forEach(link => link.classList.remove("active"));
            // Добавление класса активности выбранному
            link.classList.add("active");

            cards.forEach(card => {
                const cardCategory = card.dataset.category;
                if (category === cardCategory) {
                    card.style.display = "block";
                } else {
                    card.style.display = "none";
                }
            });
        });
    });
});