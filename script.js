// Ambil semua elemen tombol "Beli"
const buyButtons = document.querySelectorAll('.buy-button');

// Tambahkan event listener untuk setiap tombol "Beli"
buyButtons.forEach(button => {
    button.addEventListener('click', () => {
        const product = button.parentNode;
        const productName = product.querySelector('h2').textContent;
        const productPrice = product.querySelector('p').textContent;

        // Contoh: Tampilkan pesan alert ketika tombol "Beli" ditekan
        alert(`Anda telah membeli ${productName} seharga ${productPrice}`);
    });
});


