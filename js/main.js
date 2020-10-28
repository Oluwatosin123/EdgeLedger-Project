// Latitude 6.500899  longitude 3.360100
// Initialize and add a map
function initMap() {
    const loc = { lat: 6.500899, long: 3.360100 };

    // Centered map on location
    const map = new google.maps.Map(document.querySelector('.map'), {
        zoom: 14,
        center: loc
    });
    // The marker, positioned at location
    const marker = new google.maps.Marker({
        position: loc,
        map: map
    })
};

//opacity for Sticky Menu background
window.addEventListener('scroll', function () {
    if (window.scrollY > 150) {
        document.querySelector('#navbar').style.opacity = 0.9;
    } else {
        document.querySelector('#navbar').style.opacity = 1;
    }
});

// Smooth Scrolling
$('#navbar a, .btn').on('click', function (event) {
    if (this.hash !== '') {
        event.preventDefault();

        const hash = this.hash;

        $('html, body').animate({
            scrollTop: $(hash).offset().top - 100
        },
            800
        );
    }
});
