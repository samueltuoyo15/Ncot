$(document).ready(function(){

  $('.scroll-top').hide();
  
  /*---------- Mobile-Navbar Toggler ----------*/
  let sideBar = document.querySelector('.mobile-menu');

  document.querySelector('.header #menu-btn').onclick = () =>{
      sideBar.classList.add('active');
  }
 
  document.querySelector('#close-side-bar').onclick = () =>{   
      sideBar.classList.remove('active');
      $(".nav-link .main-nav-link").removeClass("active");
      $(".nav-link .sub-nav-link").removeClass("active").slideUp()
      $(".nav-link .main-nav-link i").removeClass("fa-minus").addClass("fa-plus");
  }
  
  // On Load/Scroll
  $(window).on('load scroll',function(){
    sideBar.classList.remove('active');
    $(".nav-link .main-nav-link").removeClass("active");
    $(".nav-link .sub-nav-link").removeClass("active").slideUp()
    $(".nav-link .main-nav-link i").removeClass("fa-minus").addClass("fa-plus");	

    /*--------------- Sticky Header ---------------*/
    if($(window).scrollTop() > 68){
      $('header .header-2').addClass('active');
    }else{
      $('header .header-2').removeClass('active');
    }

    /*--------------- Scroll-Top ---------------*/
    if ($(this).scrollTop() > 100) {
      $('.scroll-top').fadeIn();
    } else {
      $('.scroll-top').fadeOut();
    }
  
  });

  /*--------------- Loader ---------------*/
 function loader(){
    document.querySelector(".loader-container").classList.add('fade-out');
  }

  function fadeOut(){
    setInterval(loader, 1000)
  }

  window.onload = fadeOut;

});


