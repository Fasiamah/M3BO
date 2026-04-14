function filterSelection(categorie) {
    const products = document.querySelectorAll('.product');

    products.forEach(product => {
        const categories = product.dataset.categorie.split(" ");

        if (categorie === "all" || categories.includes(categorie)) {
            product.style.display = "block";
        } else {
            product.style.display = "none";
        }
    });
}
