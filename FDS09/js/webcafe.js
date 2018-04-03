// var container = document.querySelector(".container");
// var grid = document.querySelector(".btn-grid");

// grid.addEventListener('click',function(){
//   console.log("ok")
//   container.classList.toggle('is-act');
// });

// $(document).ready(function(){
//   var video = $('.news-video');

//   video.on('mouseover focusin', function(){
//     $(this).attr('autoplay','true');
//   });
//   video.on('mouseout focusout', function(){
//     $(this).attr('autoplay','false');
// });


// 제이쿼리에서 지원하는 메소드나 프로퍼티를 사용해야한다. 
// 문서 준비 제이쿼리 레디 이벤트 메소드 
// 헤드 바디 상관없음 
$(document).ready(function(){
  var grid = $('.btn-grid');
  var container = $(".container");
  var video = $('.news-video');
  video.get(0).volume = 0.0;
// multi bind on 이 내부에서 반복문을 돌림 제이쿼리를 이용하면 쉽게 할 수 있음 
//네이티브를 제이쿼리가 간단하게 해줌 
  video.on('mouseover focusin', function(){
    // this.play();
    this.volume = 1.0;
  });
  video.on('mouseout focusout', function(){
    this.pause();
  });
grid.click(function(){
  container.toggleClass('is-act');
}); 
});





// var grid = $('.btn-grid');
// var container = $(".container");
// grid.click(function(){
//   container.toggleClass('is-act');
// }); 