$(document).ready(function () {
  var viewport = window.matchMedia('(max-width:999px)');
  if (viewport.matches) {
    var nav = $('.navigation');
    var btn = $('.btn-menubar');
    var menu = $('.menu');
    var menuLists = $('.menu-list');
    var menuItems = $('.menu-item');
    var subMenus = $('.sub-menu');

    // 999px 이하에서 적용할 코드
    menuItems.attr('aria-haspopup', 'true');
    menuItems.attr('aria-expanded', 'false');
    menuItems.attr('role', 'button');
    menuItems.attr('tabindex', '0');
    menuItems.addClass('icon-plus');

    btn.on('click', function(e) {
      // e.preventDefault();
      nav.toggleClass('is-act');
      if (nav.hasClass('is-act')) {
        btn.attr('aria-label', '메인 메뉴 닫기');
      } else {
        btn.attr('aria-label', '메인 메뉴 열기');
      }
    });

    menuItems.on('click keydown', function(e) {
      menu.on("focusout", function(){
        nav.removeClass("is-act");
      });
      menu.on("focusin", function(){
        nav.addClass('is-act');
      });
      if (e.type === 'click' || (e.type === 'keydown' && e.keyCode === 13)) {
        menuLists.removeClass('menu-act');
        menuItems.addClass('icon-plus');
        subMenus.css('display', 'none');
        menuItems.css('color','#fff');
        $(this).parent().addClass('menu-act');
        if ($(this).parent().hasClass('menu-act')) {
          $(this).attr('aria-expanded', 'true');
          $(this).addClass('icon-minus');
          $(this).removeClass('icon-plus');
          $(this).siblings().css('display', 'block');
          $(this).css('color','yellow');
        } else {
          $(this).attr('aria-expanded', 'false');
        }
      }
    });
  } else {
    // 1000px 이상에서 사용할 코드
  }
  menu.on('focusin',function(){

  })
});