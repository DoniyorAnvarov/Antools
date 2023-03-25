$('.ask').on('click', function () {
    
    $('.ask').not(this).removeClass('active').next().slideUp(500)
    $(this).toggleClass('active').next().slideToggle(500)
    
})

$('.close').on('click', function () {
  
  $('.modal').fadeOut()
  
})

$('.modal').on('click', function (e) {
  
  if (e.target === e.currentTarget) {
    $('.modal').fadeOut()
  }
  
})

$(window).on('scroll', function () {
  
    if ($(window).scrollTop() >= 300) {
      $('.js-btn-top').addClass('show')
    } else {
      $('.js-btn-top').removeClass('show')
    }
    
  })
  
  $('.js-btn-top').on('click', function () {
    
    $('html').animate({
      
      scrollTop: 0
      
    }, 1500)
    
  })




$('.js-modal-show').on('click', function () {
  
  $('.modal').fadeIn()
  
})

$('.close').on('click', function () {
  
  $('.modal').fadeOut()
  
})

$('.modal').on('click', function (e) {
  
  if (e.target === e.currentTarget) {
    $('.modal').fadeOut()
  }
  
})