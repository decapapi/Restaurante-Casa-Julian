function isMobileOrTablet() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

$(document).ready(function(){
    function fetchReviews() {
        return new Promise((resolve, reject) => {
            $.getJSON('./assets/data/reviews.json', function(data) {
                resolve(data.reviews);
            })
            .fail(function(jqxhr, textStatus, error) {
                reject(error);
            });
        });
    }

    function generateStarRating(rating) {
        var stars = '';
        for (var i = 1; i <= 5; i++) {
            if (i <= rating) 
                stars += '<span class="star-rating">&#9733;</span>';
            else 
            stars += '<span class="star-rating">&#9734;</span>';

        }
        return stars;
    }

    function populateCarousel(reviews) {
        var carouselContainer = $('.slick-carousel');
        reviews.forEach(function(review) {
            var reviewCard = '<div class="review-card">';
            reviewCard += '<img src="' + review.userProfilePicture + '" alt="User Profile">';
            reviewCard += '<h3>' + review.userName + '</h3>';
            reviewCard += '<p class="review-text">' + review.reviewText + '</p>';
            reviewCard += '<p style="font-size: 30px;">' + generateStarRating(review.reviewRating) + '</p>';
            reviewCard += '<span class="show-more-btn"><a target="_blank" href="https://maps.app.goo.gl/mATKaVZzHFfSuQgB6">Leer más</span></a>';
            reviewCard += '</div>';
            carouselContainer.append(reviewCard);
        });

        carouselContainer.slick({
            slidesToShow: isMobileOrTablet() ? 1 : 3,
            slidesToScroll: 1,
            autoplay: false,
            autoplaySpeed: 8000,
            infinite: false
        });
    }

    fetchReviews()
        .then(reviews => populateCarousel(reviews))
        .catch(error => console.error('Error fetching reviews:', error));
});
