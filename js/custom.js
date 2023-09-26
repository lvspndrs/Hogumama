$(document).ready(function () {
  
    // var $moreBtn = $('.more-btn');

    $('.more-btn').click(function(){
        $(this).toggleClass('active');
        $('.main-navigation').toggleClass('active');
    })
});

$(document).ready(function () {
  
    // var $moreBtn = $('.more-btn');

    $('.more-btn2').click(function(){
        $(this).toggleClass('active');
        $('.main-navigation').toggleClass('active');
    })
});

//modal
// 모달 열기 함수
function openModal(imageSrc, title) {
    const modal = document.getElementById('myModal');
    const modalImage = document.getElementById('modalImage');
  
    modalImage.src = imageSrc;
  
    modal.style.display = 'block';
  }
  
  // 모달 닫기 함수
  function closeModal() {
    const modal = document.getElementById('myModal');
    modal.style.display = 'none';
  }
  
  // 모달 창 외부 클릭 시 닫기
  window.onclick = function(event) {
    const modal = document.getElementById('myModal');
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  }
  
  // 닫기 버튼 클릭 시 모달 닫기
  const closeBtn = document.querySelector('.close');
  closeBtn.onclick = closeModal;

  

  // 스크롤상단이동
  function scrollToTop() {
    $('html, body').animate({scrollTop : 0}, 800);
  }
