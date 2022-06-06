(function() {
    // Image Gallery Initialization
    var sliderList = [100, 202, 300];
    var sliders = {}
    sliderList.forEach((sliderId) => {
        sliders[sliderId] = new IdealImageSlider.Slider({
            'selector': '#slider-' + sliderId,
            'effect': 'slide',
            'transitionDuration': 600,

            'interval': 2000
        });
        // sliders[sliderId].start();
    });


    // Tab Initialization
    $(document).on('click', '.tab', function() {
        if ($(this).hasClass('selected')) {
            return;
        }

        var opt = $(this).data('opt');
        var selected = $(this).siblings('.selected');
        selected.removeClass('selected');
        sliders[selected.data('opt')].stop();

        $(this).addClass('selected');
        sliders[opt].start();

        var selectedSlide = $('.unit-slides .slide.selected');
        setTimeout(function() {
            selectedSlide.removeClass('selected');
        }, 400);
        $('.unit-slides .slide-' + opt).addClass('selected');
    });

    // Thumbnail Gallery Initialization
    sliderList.forEach((sliderId) => {
        initPhotoSwipeFromDOM('.gallery-' + sliderId);
    });

    initPhotoSwipeFromDOM('.gallery-property');
})();
