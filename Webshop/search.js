const zoekbalk = document.getElementById('zoek');

zoekbalk.addEventListener('input', function() {
    const zoekterm = zoekbalk.ariaValueMax.toLowerCase();
    const producten = document.querySelectorAll('.product');

    producten.forEach(function(products) {
        const naam = producten.querySelector('.product-title').textContent.toLowerCase();
    if (naam.includes(zoekterm)) {producten.style.display = 'block';
        
    } else {
        producten.style.display = 'none'
    }
    });
});