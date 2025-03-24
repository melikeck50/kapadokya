document.addEventListener('DOMContentLoaded', function() {
    // Mevcut sayfanın URL'sini al
    const currentPage = window.location.pathname.split('/').pop();
    
    // Tüm menü bağlantılarını seç
    const menuLinks = document.querySelectorAll('.main-menu a');
    
    // Her bağlantıyı kontrol et
    menuLinks.forEach(link => {
        // Bağlantı href'i mevcut sayfaya eşitse, active sınıfını ekle
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
        
        // Anasayfa için özel durum kontrolü
        if (currentPage === '' && link.getAttribute('href') === 'index.html') {
            link.classList.add('active');
        }
    });
    
    // Mobil menü için
    const menuToggle = document.querySelector('.menu-toggle');
    const menuList = document.querySelector('.main-menu ul');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            menuList.classList.toggle('active');
        });
    }
});