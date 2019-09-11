$(document).ready(function () {
    $(".menu-icon").on("click", function(){
        $(this).toggleClass("open");
        $('.mobile_menu').toggleClass('visible');
        $('#hidden-block').toggleClass('hidden-active');
        scrollLock.toggle();
    });
    //
    var hidden = $('#hidden-block');
    hidden.on("click", function(){
        $(".menu-icon").toggleClass("open");
        $('.mobile_menu').toggleClass('visible');
        $(this).toggleClass('hidden-active');
        scrollLock.toggle();
    });
    //
    // $(".mobile_menu nav a").on("click", function(){
    //     $('.menu-icon').toggleClass("open");
    //     $('.mobile_menu').toggleClass('visible');
    //     $('#hidden-block').toggleClass('hidden-active');
    //     scrollLock.toggle();
    // });



    $(".standart_prices .info .in_cost p").on("click", function(){
        $('.standart_prices .info .in_cost div').fadeIn(400);
    });
    $(".standart_prices .info .more p").on("click", function(){
        $('.standart_prices .info .more div').fadeIn(400);
    });

    $(document).mouseup(function (e) {
        var container1 = $(".standart_prices .info .in_cost div");
        var container2 = $(".standart_prices .info .more div");
        if (container1.has(e.target).length === 0){
            container1.fadeOut(400);
        }
        if (container2.has(e.target).length === 0){
            container2.fadeOut(400);
        }
    });

    $('.slider_testimonial').owlCarousel({
        loop:true,
        nav:true,
        items:1,
        dots:true,
        navText: ["<img src='img/arrow_prev.png'>","<img src='img/arrow_next.png'>"],
    });

    $('.slider_photo').owlCarousel({
        loop:true,
        nav:false,
        items:3,
        dots:true,
        responsive:{
            0:{
                items:1
            },
            640:{
                items:2
            },
            960:{
                items:3
            }
        }
    });

    $(".modal-content form").on("click","span.dop", function(){
        $(this).closest('.modal-content').find('form textarea').slideToggle(400);
    });

    $(window).on('scroll', function() {
        var target = $(this).scrollTop();
        if ( target > 500 ) {
            $('.measure').css('opacity','1');
        }else{
            $('.measure').css('opacity','0');
        }
    });
    //
    var mask = $(".telephones input");
    mask.inputmask("+7(999) 999-99-99");



    //var model = $(this).data('model');
    //var variant = $(this).data('variant');
    //var color = $(this).data('model');
    //var path = 'img/category/handle/silver/roto_' + model + '_' + variant + '.png';



    // $('*[data-model="samba"]').on("click", function(){
    //     $("#handle img").attr("src", path);
    // });

    var model = $('.model').data('model');
    var variant = $('.variant').data('variant');
    var color = $(' #cc span.color').data('color');
    var path = 'img/category/handle/' + color + '/roto_' + model + '_' + variant + '.png';

    $('#tab_category_decor_3').each(function () {
        $(this).on('click','.model',function(){
            $('.model').removeClass('active');
            $(this).addClass('active');
            model = $(this).data('model');
            path = 'img/category/handle/' + color + '/roto_' + model + '_' + variant + '.png';
            $("#handle img").attr("src", path);
        });
        $(this).on('click','.variant',function(){
            $('.variant').removeClass('active');
            $(this).addClass('active');
            variant = $(this).data('variant');
            path = 'img/category/handle/' + color + '/roto_' + model + '_' + variant + '.png';
            $("#handle img").attr("src", path);
        });
        $(this).on('click','#cc span.color',function(){
            $('#cc span.color').removeClass('active');
            $(this).addClass('active');
            color = $(this).data('color');
            path = 'img/category/handle/' + color + '/roto_' + model + '_' + variant + '.png';
            $("#handle img").attr("src", path);
        });
    });



});

$(document).on('click', 'a[href^="#b_ras22"]', function(event){
    event.preventDefault();
    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 700);
});

